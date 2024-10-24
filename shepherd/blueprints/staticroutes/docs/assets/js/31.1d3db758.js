(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{196:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Here are a few "),a("em",[t._v("common")]),t._v(" issues you might have and some solutions to them. Student Robotics has a "),a("a",{attrs:{href:"https://studentrobotics.org/docs/troubleshooting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("similar section"),a("OutboundLink")],1),t._v(" on their website which is also relevant.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Unless the battery is really very low the front led will blink very briefly when the switch is first pressed. If this happens you need to charge the battery. The BrainBox will not switch on at all when the voltage of the battery is very low. If the battery is freshly charged, it's possible that the switch has failed or become internally disconnected. For testing purposes, you can swap the power switch for a single piece of wire. NOTE: at the competition, you must have a red power switch to control your robot as per the rules. Finally - in exceptional circumstances the fuse in the cable may have failed, if this has happened then there must have been some terminal problem internal to the brainbox - Contact us on robotics@hillsroad.ac.uk for instructions.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("We apologise for the poor choice of font, zeroes and capital-o's can be confused as can capital-i's and number ones. Try swapping these.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("The BrainBox will automatically cut power to the 12V socket and the motor outputs if it every detects a current surge exceeding 20A. When this happens, the LED viewable next to where the battery lead enters the brain box will appear red rather than primarily green. If the LED is not green, first disconnect the motors and power cycle The BrainBox to see if this resolves the problem. If it does, then your motors are probably too large.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("When you call R.see() the camera preview in the top right should show you what the camera can see. If this looks blury contact us on the forum for a focusing ring. If this doesn't fix the issue try:")]),t._v(" "),t._m(13),a("p",[t._v("If this prints out the markers then the issue is probably with your code, please see the "),a("a",{attrs:{href:"https://hr-robocon.org/docs/vision.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vision docs"),a("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("We can post kits from Hills Road however you will need to cover the costs of shipping")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("The patch is an update which improve your brain box, by adding more docs, more blocks to blocky, faster boot times and more! To patch your robot please follow the instructions "),a("a",{attrs:{href:"https://hr-robocon.org/docs/patching-the-robot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("The Raspberry Pi does not keep time when it is off and so has no way of knowing how much time has passed since it was turned off.")]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("I can't fit in the 12v socket because of the case design")]),t._v(" "),a("p",[t._v("Sorry about that, the studs are positioned and sized to take lego, you can slim down the offending stud using a hot blade or a Dremmel tool.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"i-ve-connected-a-battery-and-the-power-switch-to-the-black-connector-but-never-get-any-lights-on-the-brainbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-ve-connected-a-battery-and-the-power-switch-to-the-black-connector-but-never-get-any-lights-on-the-brainbox","aria-hidden":"true"}},[this._v("#")]),this._v(" I've connected a battery and the power switch to the black connector but never get any lights on The BrainBox.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-brainbox-appears-to-power-up-but-i-can-t-connect-to-the-website-and-the-blue-led-lights-but-never-starts-flashing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brainbox-appears-to-power-up-but-i-can-t-connect-to-the-website-and-the-blue-led-lights-but-never-starts-flashing","aria-hidden":"true"}},[this._v("#")]),this._v(" The BrainBox appears to power up, but I can't connect to the website and the blue LED lights but never starts flashing.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This can happen if erroneous code which does not start with "),e("code",[this._v("R = robot.Robot()")]),this._v(" is uploaded to The BrainBox. If you think this may have happened, download "),e("a",{attrs:{href:"/docs/main.py"}},[this._v("this file")]),this._v(" and place it on a USB stick. Put the USB stick into The BrainBox and turn the robot on normally. Wait 5 minutes, if you do not at this point get the flashing blue light, contact us through the "),e("a",{attrs:{href:"/forum"}},[this._v("forum")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Using this file will overwrite the current robot code. It will not touch any files you have stored in the editor.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-brainbox-appears-to-power-up-the-blue-led-light-flashes-but-i-cannot-connect-to-it-using-the-wifi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brainbox-appears-to-power-up-the-blue-led-light-flashes-but-i-cannot-connect-to-it-using-the-wifi","aria-hidden":"true"}},[this._v("#")]),this._v(" The BrainBox appears to power up, the blue LED light flashes but I cannot connect to it using the WiFi.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-brainbox-appears-to-power-up-i-can-connect-to-it-with-wifi-but-am-unable-to-reach-the-web-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-brainbox-appears-to-power-up-i-can-connect-to-it-with-wifi-but-am-unable-to-reach-the-web-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" The BrainBox appears to power up, I can connect to it with WiFi, but am unable to reach the web interface.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Some modern browsers default to a web search if they do not understand the web address. Try putting "),e("code",[this._v("http://")]),this._v(" in front of the address, e.g. "),e("code",[this._v("http://robot.go")]),this._v("  instead of "),e("code",[this._v("robot.go")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"i-ve-connected-to-the-web-interface-and-can-run-code-but-my-motors-never-turn-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-ve-connected-to-the-web-interface-and-can-run-code-but-my-motors-never-turn-on","aria-hidden":"true"}},[this._v("#")]),this._v(" I've connected to the web interface and can run code, but my motors never turn on.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is possible to enable/disable this power output from software. When the output is disabled, there will be no light at all visible through this hole. If you can see no light through the hole when the robot is running code check that you have not disabled the motor output by uploading a "),e("a",{attrs:{href:"/docs/simple.py"}},[this._v("simple file")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"i-m-trying-to-read-an-analog-value-from-gpios-but-i-m-getting-strange-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-m-trying-to-read-an-analog-value-from-gpios-but-i-m-getting-strange-values","aria-hidden":"true"}},[this._v("#")]),this._v(" I'm trying to read an analog value from GPIOs, but I'm getting strange values.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Check  you're actually reading the pin you're trying to read. "),e("code",[this._v("R.gpio[1]")]),this._v(" is Pin 1, "),e("code",[this._v("R.gpio[4]")]),this._v(" is Pin 4, etc. If everything's connected correctly, try setting the other pins to output and writing "),e("code",[this._v("False")]),this._v(" to them.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"r-see-doesn-t-seem-to-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#r-see-doesn-t-seem-to-work","aria-hidden":"true"}},[this._v("#")]),this._v(" R.see() doesn't seem to work.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"can-you-post-a-kit-to-or-from-hills-road"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-you-post-a-kit-to-or-from-hills-road","aria-hidden":"true"}},[this._v("#")]),this._v(" Can you post a kit to or from Hills Road")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-the-patch-and-how-do-i-install-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-patch-and-how-do-i-install-it","aria-hidden":"true"}},[this._v("#")]),this._v(" What is the patch and how do I install it?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-is-the-time-wrong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-time-wrong","aria-hidden":"true"}},[this._v("#")]),this._v(" Why is the time wrong")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"can-t-fit-the-12v-socket-because-of-the-case-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-t-fit-the-12v-socket-because-of-the-case-design","aria-hidden":"true"}},[this._v("#")]),this._v(" Can't fit the 12v socket because of the case design")])}],!1,null,null,null);e.default=o.exports}}]);