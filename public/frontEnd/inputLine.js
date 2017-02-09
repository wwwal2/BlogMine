console.log("working!");

//input line code 
var inputString = document.createElement("INPUT");
inputString.value = "Search";
inputString.id = "lineString";

inputString.onfocus = function() {
	if (this.value == 'Search') {
		this.value = '';
	}
};

inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		list.add(inputString.value);
	}
};

document.body.appendChild(inputString);

// enter key code
inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		console.log("name accepted");
		inputString.value = "";
	}
};

