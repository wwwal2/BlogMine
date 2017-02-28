"use strict"

//Array of DOM elements
var divElements = [
	{
		element: "div",
		class: "row",
		id:"header",
		textContent: "",
	},
	{
		element: "div",
		class: "col-sm-1",
		id:"beforeSecond",
		textContent: "",
	},
	{
		element: "div",
		class: "col-sm-2",
		id:"second",
		textContent: "",
	},
	{
		element: "div",
		class: "col-sm-6",
		id:"third",
		textContent: "BLOG",
	},
	{
		element: "div",
		class: "col-sm-3",
		id:"fourth",
		textContent: "GeekHub student project",
	},
	{
		element: "BUTTON",
		class: "btn btn-primary btn-lg",
		id:"seventh",
		textContent: "Contacts",
	},
	{
		element: "BUTTON",
		class: "btn btn-danger btn-lg",
		id:"eigth",
		textContent: "Registration",
	},
	{
		element: "BUTTON",
		class: "btn btn-primary btn-lg",
		id:"ninth",
		textContent: "Photos",
	},
	{
		element: "img",
		class: "img-responsive",
		id:"brandImg",
		textContent: "",
	},
	{
		element: "div",
		class: "row",
		id:"underHeaderClean",
		textContent: "",
	},
	{
		element: "div",
		class: "row",
		id:"underHeader",
		textContent: "",
	},
	{
		element: "div",
		class: "row",
		id:"underButtonsClean",
		textContent: "",
	},
];

// DOM base header construction
function domElementCreation(elementName, elemClass, elemId, textContent) {
	var newElem = document.createElement(elementName);
	newElem.className = elemClass;
	newElem.id = elemId;
	newElem.textContent = textContent;
	return newElem;
}

//making variables for DOM elements
function declare(varName) {
	varName = document.getElementById(varName);
	return varName
}

//Execution of DOM creation
for(var i=0; i<divElements.length; i++) {
	var div = divElements[i];
	document.body.appendChild(domElementCreation(div.element, div.class, div.id, div.textContent))
	declare(div.id);
}

 //manual DOM tree construction
header.appendChild(beforeSecond);
header.appendChild(second);
header.appendChild(third);
header.appendChild(fourth);
second.appendChild(brandImg);
underHeader.appendChild(ninth); 
underHeader.appendChild(seventh);
underHeader.appendChild(eigth);


//header image insertion
brandImg.setAttribute("src", "/home/vera/WebstormProjects/git1/Blog/blogContent/brand.jpg");


 	



