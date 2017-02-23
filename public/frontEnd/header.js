"use strict"
//header base
function domElementCreation(elementName, elemClass, elemId) {
	var newElem = document.createElement(elementName);
	newElem.className = elemClass;
	newElem.id = elemId;
	return newElem;
}

var divElements = [
	"nav", "navbar navbar-default", "header",
	"div", "container-fluid", "second",
	"div", "navbar-header", "third"
]
var y = 1; var z = 2;
for(var i=0; i<divElements.length; i = i+3) {
	document.body.appendChild(domElementCreation(divElements[i], divElements[y], divElements[z]));
	y= y+3; z= z+3;
}

header.appendChild(second);
second.appendChild(third);

//buttons creation code
var headerBtns = document.createElement("div");
headerBtns.className = "btn-group btn-group-lg";
third.appendChild(headerBtns);

function btnCreation(textButton) {
	var btn = document.createElement("BUTTON");
	btn.textContent = textButton;
	btn.className = "btn btn-primary";
	return btn;
}

var btnNames = ["button1", "button2", "button3"];

for (var i=0; i<btnNames.length; i++) {
	headerBtns.appendChild(btnCreation(btnNames[i]));
}





