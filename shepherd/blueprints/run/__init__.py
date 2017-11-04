# encoding: utf-8

from __future__ import absolute_import, division, print_function, unicode_literals

import atexit
from datetime import datetime, timedelta
import errno
from functools import partial
import os
import subprocess
import sys
from tempfile import mktemp
import threading

from enum import Enum
from flask import Blueprint, render_template, flash, redirect, url_for, request, current_app, session
from pytz import utc

from shepherd.competition import ROUND_LENGTH


blueprint = Blueprint("run", __name__, template_folder="templates")

REAP_GRACE_TIME = 5  # Seconds before user code is forcefully killed

# tempfile.mktemp is deprecated, but there's no possibility of a race --
# os.mkfifo raises if its path already exists.
#
# TODO: do we want to do this? Should user code be started via a FIFO
# (i.e. user code call to hrsfc.robocon.Robot.wait_start), or should we
# just wait to start the user code until start? (Probably depends on the
# start mechanism.)
#
# Also TODO: need to actually send something down the fifo.
USER_FIFO_PATH = mktemp(prefix="shepherd-fifo-")
os.mkfifo(USER_FIFO_PATH)
atexit.register(partial(os.remove, USER_FIFO_PATH))


class State(Enum):
    # Once shepherd is up, we are by definition ready to run code, so
    # there's no need for a "booting" state.
    ready = object()
    running = object()
    post_run = object()


class Mode(Enum):  # Values are important -- they let us get a Mode from the submitted (HTML) form.
    development = "development"
    competition = "competition"


@blueprint.before_app_first_request
@blueprint.route("/reset", methods=["POST"])
def reset():
    global state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, user_output
    # Yes, it's (literally) global state. Deal with it.
    state = State.ready  # The state of the user code.
    zone = None  # The robot's home zone, an integer from 0 to 3.
    mode = None  # The robot's mode (development or competition), used for marker recognition.
    disable_reaper = None  # Whether the reaper will kill the user code or not.
    reaper_timer = None  # The threading.Timer object that controls the reaper.
    reap_time = None  # The time at which the user code will be killed.
    user_code = None  # A subprocess.Popen object representing the running user code.
    user_output = []  # A list containing lines of the user code's stdout and stderr.
    return redirect(url_for(".index"))


# <https://stackoverflow.com/a/4896288/5951320>
def buffer_from_file(file, lst):
    """Copy lines from a file-like object to a list."""
    with file:
        for line in iter(file.read, b""):  # The second argument is a sentinel.
            lst.append(line)


def time_left():
    global reap_time
    time_left = None
    if reap_time is not None:
        time_left = reap_time - datetime.now(tz=utc)
        if time_left < timedelta(0):  # If reap_time is in the past:
            time_left = None
    return time_left.seconds if time_left is not None else None


@blueprint.route("/")
def index():
    return render_template(
        "run/index.html", state=state, states=State,
        zone=zone,
        mode=mode.value if mode is not None else None,
        disable_reaper=bool(disable_reaper),
        time_left=time_left(),
        output="\n".join(user_output),
    )


@blueprint.route("/output")
def get_output():
    return render_template("run/output.html", output="\n".join(user_output))


@blueprint.route("/time_left")
def get_time_left():
    return render_template(
        "run/time_left.html",
        time_left=time_left(),
    )


@blueprint.route("/toggle_auto_refresh", methods=["POST"])
def toggle_auto_refresh():
    session["auto_refresh"] = not session.get("auto_refresh", True)
    return redirect(url_for(".index"))


@blueprint.route("/start", methods=["POST"])
def start():
    global state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, user_output
    zone = request.form["zone"]
    mode = Mode[request.form["mode"]]
    disable_reaper = request.form.get("disable-reaper")
    if state == State.ready:
        if mode == Mode.competition and disable_reaper:
            flash("You're not allowed to use debug options in the competition!", "error")
        else:
            state = State.running
            user_code = subprocess.Popen(
                [sys.executable, current_app.config["SHEPHERD_USER_CODE_ENTRYPOINT_PATH"]],
                stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                bufsize=1,  # Line-buffered
                close_fds="posix" in sys.builtin_module_names,  # Only if we're not on Windows
            )
            atexit.register(reap)  # Attempt to kill the user code (doesn't work if we crash or get signalled to die).
            output_queuer = threading.Thread(target=buffer_from_file, args=(user_code.stdout, user_output))
            output_queuer.daemon = True  # Program exits even if thread hasn't exited.
            output_queuer.start()
            if not disable_reaper:
                reaper_timer = threading.Timer(ROUND_LENGTH, reap)
                # If we get told to exit, there's no point waiting around for the round to finish.
                reaper_timer.daemon = True
                reaper_timer.start()
                reap_time = datetime.now(tz=utc) + timedelta(seconds=ROUND_LENGTH)
                flash("Started the robot! It will stop automatically in {} seconds.".format(ROUND_LENGTH))
            else:
                flash("Started the robot! It will not stop automatically.")
    elif state == State.running:
        flash("The robot is already running, can't start it again.")
    elif state == State.post_run:
        flash("Code already ran, starting it again would be unsafe.")
    else:
        raise Exception("This can't happen")
    return redirect(url_for(".index"))


@blueprint.route("/stop", methods=["POST"])
def stop():
    global state, reaper_timer
    if state == State.ready:
        flash("The robot has not run yet, can't stop it before it's started.")
    elif state == State.running:
        try:
            reaper_timer.cancel()
        except AttributeError:  # probably because reaper_timer is None
            pass
        reap()
        flash("Stopped the robot!")
    elif state == State.post_run:
        flash("Code already ran, can't stop it")
    else:
        raise Exception("This can't happen")
    return redirect(url_for(".index"))


def reap():
    global state, user_code
    print("Reaping user code")
    if state != State.running:
        print("Warning: told to stop code, but state is {}, not State.running!".format(state))
    try:
        user_code.terminate()
    except OSError as e:
        if e.errno == errno.ESRCH:  # No such process
            pass
        else:
            raise
    if user_code.poll() is None:
        threading.Timer(REAP_GRACE_TIME, butcher).start()
        user_code.communicate()
    state = State.post_run
    print("Done reaping user code")


def butcher():
    global user_code
    if user_code.poll() is None:
        print("Butchering user code")
        try:
            user_code.kill()
        except OSError as e:
            if e.errno == errno.ESRCH:  # No such process
                pass
            else:
                raise
        print("Done butchering user code")
