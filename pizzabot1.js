const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function greetCustomer() {
  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`
  );
}

function checkOrderName(orderName) {
  const pizzaOptions = [
    vegetarian.toLowerCase(),
    hawaiian.toLowerCase(),
    pepperoni.toLowerCase(),
  ];
  return pizzaOptions.includes(orderName.toLowerCase());
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}

function orderPizza() {
  greetCustomer();

  let orderName = prompt(
    "Enter the name of the pizza you want to order today. Chose from \nVegetarian Pizza \nHawaiian Pizza \nPepperoni Pizza"
  );

  if (!checkOrderName(orderName)) {
    alert("Sorry, that pizza is not on the menu.");
    return;
  }

  let orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));

  if (isNaN(orderQuantity) || orderQuantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  let total = totalCost(orderQuantity);
  let time = cookingTime(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${total} kr. The pizzas will take ${time} minutes.`
  );
}

orderPizza();
