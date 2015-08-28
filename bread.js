var Sandwich = (function(sandwich){ 

	
	var breadObject = {
		"White": "3.00",
		"Wheat": "3.25",
		"Italian": "3.50"
	};

	sandwich.getBread = function(choice) {	
		return breadsObject[choice];
	}

	
		
	


	return sandwich;

})(Sandwich);

