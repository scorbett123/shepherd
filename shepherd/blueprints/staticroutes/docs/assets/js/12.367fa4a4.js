(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(t,e,i){t.exports=i.p+"assets/img/usbstick.a0b0f226.jpg"},197:function(t,e,i){"use strict";i.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"usb-tricks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-tricks","aria-hidden":"true"}},[this._v("#")]),this._v(" USB Tricks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(180),alt:"USB Stick"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("The BrainBox only checks for the presence of USB sticks at boot, only plug and unplug USB sticks when the BrainBox is off (front panel blue light off).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("During the competition we need to have unrestricted access to at least one USB port, if you want to use a USB stick during the competition it must leave enough space around at least one port to insert our low profile arena stick.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"running-your-code-from-a-usb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-your-code-from-a-usb","aria-hidden":"true"}},[this._v("#")]),this._v(" Running your code from a USB :")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("Place a file called "),i("code",[t._v("main.py")]),t._v(" or "),i("code",[t._v("code.zip")]),t._v(" (which must include a file called "),i("code",[t._v("main.py")]),t._v(") in the root directory of the USB stick on another computer.")]),t._v(" "),i("li",[t._v("Turn on the robot using the red power button.")]),t._v(" "),i("li",[t._v("The file will be automatically copied from the USB stick")]),t._v(" "),i("li",[t._v("Press the black start button")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("During the competition "),e("strong",[this._v("RoboCon Oxfordshire")]),this._v(" requires unrestricted access to at least one USB port, if you want to use a USB stick during the competition you must use a USB splitter to allow us access to one port.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getting-logs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Logs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("ul",[e("li",[this._v("Be careful when reusing USB sticks to avoid accidentally running code from the USB Stick!")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Insert a USB stick in the robot before turning it on.")]),this._v(" "),e("li",[this._v("The log file will be automatically written to the USB stick as "),e("code",[this._v("logs.txt")])]),this._v(" "),e("li",[this._v("Remember to fully power down the robot before removing the USB stick")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("ul",[e("li",[this._v("Logs are collected whatever way the code is run, but only the most recent logs are preserved")]),this._v(" "),e("li",[this._v("The log files are also collected during system shutdown leading to worrying messages like:")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Exception in thread Thread-2:\nTraceback (most recent call last):\n  File "/usr/lib/python2.7/threading.py", line 801, in __bootstrap_inner\n     self.run()\n  File "/usr/lib/python2.7/threading.py", line 754, in run\n     self.\\_\\_target(\\*self.\\_\\_args, \\**self.__kwargs)\n  File "/root/.local/share/virtualenvs/shepherd2-rSdGMoSR/local/lib/python2.7/site\n     self.run()\n  File "/usr/lib/python2.7/threading.py", line 754, in run\n     self.\\_\\_target(\\*self.\\_\\_args, \\**self.__kwargs)\n -packages/robot/wrapper.py", line 251, in wait_start_blink\n     self._internal.set_status_led(v)\n  File "/root/.local/share/virtualenvs/shepherd2-rSdGMoSR/local/lib/python2.7/site-packages/robot/greengiant.py", line 87, in set_status_led\n     self._bus.write_byte_data(_GG_I2C_ADDR, _GG_STATUS, int(on))\n  File "/root/.local/share/virtualenvs/shepherd2-rSdGMoSR/local/lib/python2.7/site-packages/smbus2/smbus2.py", line 377, in write_byte_data\n     ioctl(self.fd, I2C_SMBUS, msg)\nIOError: \\[Errno 121] Remote I/O error\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"collecting-images-and-raw-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collecting-images-and-raw-analysis","aria-hidden":"true"}},[this._v("#")]),this._v(" Collecting images and raw analysis")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v('Add a file with the name "collect_images.txt" to the USB stick to collect the images')]),this._v(" "),e("li",[this._v('Add a file with the name "log_markers.txt" to the USB stick to collect analysis of images')]),this._v(" "),e("li",[this._v("Insert the stick before turning the robot on")]),this._v(" "),e("li",[this._v("Remember to fully shut down the robot before removing the USB stick\nWARNING: Collecting all images may slow down the processing time from your robot - Use with care!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"updating-your-team-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-team-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating your team image")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v('Save your Image as 440x330 pixels in jpeg format onto the USB stick as "team_logo.jpg"')]),this._v(" "),e("li",[this._v("Boot the robot once to install the image")]),this._v(" "),e("li",[this._v("Fully shut down the robot")]),this._v(" "),e("li",[this._v("The image will be used from the next time the robot is booted")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("We may ask that your image includes either a Team Name or your institution (e.g. Systemetric or Abingdon School) to assist the Marshalls, but if you have a iconic robot design then we may waive this rule")])])}],o=i(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("When started, using the start button the robot will default to running the last piece of code written in the editor. In some cases at the competition it can be useful to be able to run code from a USB stick.")]),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[t._m(6),t._v(" "),i("li",[t._v("Code copied from USB sticks is not "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lint_%28software%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linted"),i("OutboundLink")],1),t._v(', sufficiently broken code may crash not just the user code, but also the web interface preventing the robot from reaching "Blinky". See '),i("router-link",{attrs:{to:"/troubleshooting.html#troubleshooting"}},[t._v("troubleshooting")]),t._v(" for details about what the LEDs mean. It is highly recommended for users to export working code from the editor to the USB stick rather than editing code directly. See "),i("router-link",{attrs:{to:"/troubleshooting.html#the-brainbox-appears-to-power-up-but-i-can-t-connect-to-the-website-and-the-blue-led-lights-but-never-starts-flashing"}},[t._v("troubleshooting")]),t._v(" for how to recover a robot which does not boot to Blinky.")],1)])]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("When running your robot code you can see the logs from the robot in the editor. Sometimes it's useful to be able to view the logs later to analyse what happened.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),i("p",[t._v("These can safely be ignored unless you also see them on the web interface.")]),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("Every time the robot takes a picture it is updated on the web interface, during development it is occasionally useful to be able to also keep a log of pictures that have been analysed to check camera focus, motion blur etc.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),i("p",[t._v("When the robot boots, it loads a default image which is displayed until the robot takes a picture, in the arena these images are displayed on an overhead projector. You can change the default image.")]),t._v(" "),t._m(15),t._v(" "),t._m(16)])}),s,!1,null,null,null);e.default=a.exports}}]);