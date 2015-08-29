var Sandwich = (function(sandwich) {

	var condimentsObject = {
		"Ketchup": "0.50",
		"Mustard": "0.85",
		"Mayo": "1.25"
	};


	sandwich.getCondiments = function(choice) {
		return condimentsObject[choice];
	}




	return sandwich;









}(Sandwich));
















