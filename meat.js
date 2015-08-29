var Sandwich = (function(sandwich) {

	var meatObject = {
		"Turkey": "3.00",
		"Ham": "3.50",
		"Chicken": "4.00"
	};


	sandwich.getMeat = function(choice) {
		return meatObject[choice];
	};




	return sandwich;









}(Sandwich));