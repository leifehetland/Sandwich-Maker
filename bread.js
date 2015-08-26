Sandwich = (function(sandwich) {

		var bread = "";
		
		var breadTotal = "";
		
		var breadsObject = {
			"White": "2.00",
			"Wheat": "2.25",
			"Italian": "2.50"
		};


	sandwich.setBread = function(breadsObject) {
		bread = document.getElementById('bread').value;
		breadTotal = '$' + breadsObject[bread];
		return breadTotal;
	}


  sandwich.getBread = function(bread, breadTotal) {
    return "Your bread choice is: " + bread + "<br>" + "Your bread subtotal: " + breadTotal;
  }

	var breadOutput = document.getElementById('sandwich');
	breadOutput.innerHTML = sandwich;

	return sandwich;

})(Sandwich);

document.getElementById('breadButton').addEventListener('click', function() {
		Sandwich.setBread;
		Sandwich.getBread;
})
