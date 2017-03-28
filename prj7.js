"use strict";

function calculator() {
    console.log("Calculator!");
	document.getElementById("iframe").src = "calculator.html";
}
function hover() {
	console.log("Hover Detector!");
    document.getElementById("iframe").src = "hover_detector.html";
}
function carousel() {
	console.log("Style Carousel!");
    document.getElementById("iframe").src = "style_carousel.html";
}
function call() {
	console.log("Call Letters!");
    document.getElementById("iframe").src = "call_letters.html";
}
function latin() {
	console.log("Pig Latin!");
    document.getElementById("iframe").src = "pig_latin.html";
}
function square() {
	console.log("Square :(");
    document.getElementById("iframe").src = "pig_latin.html";
}





window.onload = function() {
	document.getElementById("b1").onclick = calculator;
    document.getElementById("b2").onclick = hover;
    document.getElementById("b3").onclick = carousel;
    document.getElementById("b4").onclick = call;
    document.getElementById("b5").onclick = latin;
    document.getElementById("b6").onclick = square;
    
}

