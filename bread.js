var Sandwich = (function(sandwich){ 

	
	var breadsObject = {
		"White": "2.00",
		"Wheat": "2.25",
		"Italian": "2.50"
	};

	sandwich.getBread = function(breadChoice) {	
		return breadsObject[breadChoice];
	}

	
		
	


	return sandwich;

})(Sandwich);

