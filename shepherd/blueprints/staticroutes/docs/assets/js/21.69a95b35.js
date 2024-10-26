(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{196:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Your robot can use its camera to see markers to identify tokens and walls. This tutorial will help you make a program that makes the robot output the number of cubes it can see.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v('Create a new script called "VisionTest".')]),t._v(" "),a("p",[t._v("Unlike in the previous tutorial, "),a("router-link",{attrs:{to:"/hello-world.html"}},[t._v("Hello World")]),t._v(", we are going to use functions written specifically for the robot.  To do this we will need to initialise the robot:")],1),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.makeuseof.com/tag/object-oriented-programming-explained/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),a("OutboundLink")],1),t._v(" is a basic introduction into what Object Oriented Programing is.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("Every item in the list contains information about the type of the marker, the distance/angle to the marker, and more! For now all we want to do is to find the number of markers the robot can see, so we just need to print the length of the list:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("The complete code is as follows:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("Place a few markers infront of the camera on the robot about 10-20cm away and run the code. In the logs the number of markers visible will be outputted, and in addition to the logs, the raw images taken by the camera can be seen, which can be useful for working out if something is blocking the camera.")]),t._v(" "),t._m(11),t._v(" "),a("p",[a("router-link",{attrs:{to:"/connecting.html"}},[t._v("Connecting to the robot")]),t._v(" "),a("br"),t._v(" "),a("router-link",{attrs:{to:"/init-robot.html"}},[t._v("Initalising the robot")]),a("br"),t._v(" "),a("router-link",{attrs:{to:"/editor.html"}},[t._v("Using the editor")]),t._v(" "),a("br"),t._v(" "),a("router-link",{attrs:{to:"/vision.html"}},[t._v("Vision Code")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"making-the-robot-see"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-the-robot-see","aria-hidden":"true"}},[this._v("#")]),this._v(" Making the Robot See")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"initialising-the-robot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initialising-the-robot","aria-hidden":"true"}},[this._v("#")]),this._v(" Initialising the Robot")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" robot\nR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Robot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('This creates a "Robot" object, and places it inside the variable "R". This allows us to use robot functions through the R variable, such as '),e("code",[this._v("R.See()")]),this._v(". If you are using Blockly, the robot is initialised automatically.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"counting-markers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#counting-markers","aria-hidden":"true"}},[this._v("#")]),this._v(" Counting Markers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('To make the robot "see" what is in front of it we have to call the function '),e("code",[this._v("R.see()")]),this._v(" and assign the result to a variable. This will set that variable to a list of every marker the robot can see:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("markers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("markers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# len gets the length of something,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in this case a list of all the markers we can see")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If we run this code as it is, it will output the number of markers it can see once and then stop. To make it continue looking we need to put it in a "),e("code",[this._v("while True")]),this._v(" loop, so it will repeat our program forever (or until we turn it off).")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" robot\nR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Robot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    markers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("see"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("markers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"running-the-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"troubleshooting-and-further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-and-further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting and Further Reading")])}],!1,null,null,null);e.default=n.exports}}]);