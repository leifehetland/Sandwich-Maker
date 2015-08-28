$(document).ready(function() {

	var totalPrice = 0;


	$("#makeMeASandwich").click(function() {
		var breadChoice = $('#bread').val();
		var priceOfBread = Sandwich.getBread(breadChoice);
		totalPrice += priceOfBread;
		$("#sandwich").append(breadChoice);
		$("#sandwich").append(priceOfBread);

		var meatChoice = $('#meat').val();
		var priceOfMeat = Sandwich.getMeat(meatChoice);
		totalPrice += priceOfMeat;
		$("#sandwich").append(meatChoice);
		$("#sandwich").append(priceOfMeat);

		var cheeseChoice = $('#cheese').val();
		var priceOfCheese = Sandwich.getCheese(cheeseChoice);
		totalPrice += priceOfCheese;
		$("#sandwich").append(cheeseChoice);
		$("#sandwich").append(priceOfCheese);

		var veggieChoice = $('#veggies').val();
		var priceOfVeggie = Sandwich.getVeggie(veggieChoice);
		totalPrice += priceOfVeggie;
		$("#sandwich").append(veggieChoice);
		$("#sandwich").append(priceOfVeggie);

		var condimentsChoice = $('#condiments').val();
		var priceOfCondiments = Sandwich.getCondiments(condimentsChoice);
		totalPrice += priceOfCondiments;
		$("#sandwich").append(condimentsChoice);
		$("#sandwich").append(priceOfCondiments);

	});

	$("#newOrder").click(function() {
		$("#sandwich").html("");
	});



});