(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{382:function(t,e,a){"use strict";a.r(e);var r=a(46),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plots-in-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plots-in-javascript"}},[t._v("#")]),t._v(" Plots in JavaScript")]),t._v(" "),a("h2",{attrs:{id:"what-are-graphics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-graphics"}},[t._v("#")]),t._v(" What are graphics")]),t._v(" "),a("p",[t._v("Graphics concept\nA function is the dependence of "),a("code",[t._v("y")]),t._v(" on "),a("code",[t._v("x")]),t._v(", where "),a("code",[t._v("x")]),t._v(" is the dependent variable or function of the function and "),a("code",[t._v("y")]),t._v(" is the dependent variable or function of the function.")]),t._v(" "),a("p",[t._v("To define a function means to define a rule in accordance with the independent values ​​of the independent evaluation. Here are the ways in which you can set it:")]),t._v(" "),a("ul",[a("li",[t._v("Tabular method - helps to quickly determine specific values - ​​without additional measurements or calculations.")]),t._v(" "),a("li",[t._v("The graphical way is clear.")]),t._v(" "),a("li",[t._v("The analytical way is through formulas. It is compact, and you can calculate the function for an arbitrary value of the argument from the domain.")]),t._v(" "),a("li",[t._v("Verbal way.")])]),t._v(" "),a("h2",{attrs:{id:"how-do-we-actually-build-graphics-in-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-we-actually-build-graphics-in-javascript"}},[t._v("#")]),t._v(" How do we actually build graphics in JavaScript")]),t._v(" "),a("p",[t._v("The Canvas API is an interface for rendering graphics in the browser. Using the HTML "),a("code",[t._v("<canvas>")]),t._v(" element, you can create a canvas (this is how canvas is translated from English) and draw graphics inside it using JavaScript code.")]),t._v(" "),a("h2",{attrs:{id:"about-some-primitives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-some-primitives"}},[t._v("#")]),t._v(" About some primitives")]),t._v(" "),a("h3",{attrs:{id:"lineto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lineto"}},[t._v("#")]),t._v(" LineTo")]),t._v(" "),a("p",[a("code",[t._v("lineTo()")]),t._v(" - CanvasRenderingContext2D method, part of "),a("strong",[t._v("Canvas 2D API")]),t._v(", line point to the current sub path with an endpoint with coordinates (x, y).")]),t._v(" "),a("p",[t._v("The method itself does not draw anything, it only covers the subpath to the current path, leaving it to methods such as "),a("code",[t._v("fill()")]),t._v(" and "),a("code",[t._v("stroke()")]),t._v(" to draw the path itself.")]),t._v(" "),a("h3",{attrs:{id:"arc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arc"}},[t._v("#")]),t._v(" Arc")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CanvasRenderingContext2D.arc()")]),t._v(" method of the "),a("strong",[t._v("Canvas 2D API")]),t._v(" adds a circular arc to the current sub-path.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("arc()")]),t._v(" method creates a circular arc centered at "),a("code",[t._v("(x, y)")]),t._v(" with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc",target:"_blank",rel:"noopener noreferrer"}},[t._v("More information"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"rectangle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rectangle"}},[t._v("#")]),t._v(" Rectangle")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CanvasRenderingContext2D.fillRect()")]),t._v(" method of the "),a("strong",[t._v("Canvas 2D API")]),t._v(" draws a rectangle that is filled according to the current fillStyle.")]),t._v(" "),a("p",[t._v("This method draws directly to the canvas without modifying the current path, so any subsequent "),a("code",[t._v("fill()")]),t._v(" or "),a("code",[t._v("stroke()")]),t._v(" calls will have no effect on it.")]),t._v(" "),a("blockquote",[a("p",[t._v("void ctx.fillRect(x, y, width, height);")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("fillRect()")]),t._v(" method draws a filled rectangle whose starting point is at "),a("code",[t._v("(x, y)")]),t._v(" and whose size is specified by width and height. The fill style is determined by the current fillStyle attribute.")]),t._v(" "),a("h3",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CanvasRenderingContext2D")]),t._v(" method "),a("code",[t._v("fillText()")]),t._v(", part of the "),a("strong",[t._v("Canvas 2D API")]),t._v(", draws a text string at the specified coordinates, filling the string's characters with the current fillStyle. An optional parameter allows specifying a maximum width for the rendered text, which the user agent will achieve by condensing the text or by using a lower font size.")]),t._v(" "),a("p",[t._v("This method draws directly to the canvas without modifying the current path, so any subsequent "),a("code",[t._v("fill()")]),t._v(" or "),a("code",[t._v("stroke()")]),t._v(" calls will have no effect on it.")]),t._v(" "),a("p",[t._v("The text is rendered using the font and text layout configuration as defined by the font, "),a("strong",[t._v("textAlign")]),t._v(", "),a("strong",[t._v("textBaseline")]),t._v(", and direction properties.")]),t._v(" "),a("blockquote",[a("p",[t._v("CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);")])]),t._v(" "),a("plots-primitives"),t._v(" "),a("h2",{attrs:{id:"graphic-by-dots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphic-by-dots"}},[t._v("#")]),t._v(" Graphic by dots")]),t._v(" "),a("p",[t._v("When you build a plot with two axes, you actually make points with coordinatex "),a("code",[t._v("x")]),t._v(" and "),a("code",[t._v("y")]),t._v(".\nAnd then, connecting them with line, you create a plot!\nUnfortunately, there is no built-in functional to create chart scale, but you can write your own!\nHere we`ll show you an examle of simple line plot on raw js\n"),a("plots-dots")],1),t._v(" "),a("h2",{attrs:{id:"function-plot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-plot"}},[t._v("#")]),t._v(" Function plot")]),t._v(" "),a("p",[t._v("You can also build some functions with it! Here is the example")]),t._v(" "),a("plots-sinusoid"),t._v(" "),a("h2",{attrs:{id:"bar-plot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bar-plot"}},[t._v("#")]),t._v(" Bar plot")]),t._v(" "),a("p",[t._v("And how to use rectangle primitive for building bar plots")]),t._v(" "),a("plots-legend-example"),t._v(" "),a("h2",{attrs:{id:"materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#materials"}},[t._v("#")]),t._v(" Materials")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://htmlacademy.ru/blog/boost/tutorial/canvas-chart",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML academy"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN documentation"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.tutorialspark.com/html5/HTML5_Canvas_Graphs_Charts.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("More examples od charts building"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=n.exports}}]);