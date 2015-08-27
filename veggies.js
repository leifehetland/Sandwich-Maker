Sandwich = (function(sandwich) {

	var veggieObject = {
		"Lettuce": "0.65",
		"Spinach": "0.85",
		"Peppers": "0.95"
	};


	sandwich.getVeggie = function(choice) {
		return veggieObject[choice];
	}




	return sandwich;









}(Sandwich));