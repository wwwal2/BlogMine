//input line code 
var inputString = document.createElement("INPUT");
inputString.value = "Search";
inputString.id = "lineString";
inputString.className = "col-md-4 col-md-offset-4";	

document.body.appendChild(inputString);

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

// enter key code
inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		console.log("name accepted");
		inputString.value = "";
	}
};



