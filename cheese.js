var Sandwich = (function(sandwich) {

	var cheeseObject = {
		"Cheddar": "2.00",
		"American": "2.50",
		"Swiss": "2.95"
	};


	sandwich.getCheese = function(choice) {
		return cheeseObject[choice];
	}




	return sandwich;









}(Sandwich));














