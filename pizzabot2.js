const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function greetCustomer() {
  const menu = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`;
  document.getElementById("menu").innerText = menu;
}

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
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

function processOrder() {
  greetCustomer();

  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = parseInt(document.getElementById("quantity").value);

  if (checkOrderName(orderName)) {
    const total = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    const response = `Great, I'll get started on your ${orderName} right away, it will cost ${total} kr. The pizzas will take ${time} minutes.`;

    document.getElementById("orderResponse").innerText = response;
  } else {
    document.getElementById("orderResponse").innerText =
      "Sorry, that pizza is not on the menu.";
  }
}
