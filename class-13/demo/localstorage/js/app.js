"use strict";

// target our order form the html
var orderForm = document.getElementById("orderForm");
var orders = document.getElementById("orders");

// constructor function to create a basic drink object
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.all.push(this);
}

// set the global array to empty
Coffee.all = [];


// store drinks
function storeDrinks() {
  var drinksArray = JSON.stringify(Coffee.all);
  localStorage.setItem('coffeeOrders',drinksArray);
}

//get all drinks
function getDrinks() {
  var drinksArray = localStorage.getItem('coffeeOrders');
  // console.log(drinksArray);
  // console.log(Coffee.all);
  if(drinksArray) {
    Coffee.all = JSON.parse(drinksArray);
    renderOrders();
  }
}

// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);

// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.value;
  var dType = drink.drinkType.value;
  var milk = drink.milk.value;
  // console.log(size);
  new Coffee(name, size, milk, isHot, dType);
  //storeDrinks
  storeDrinks();
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";
  // console.log(Coffee.all);
  // go through the array and output the details of each drink in the array
  for (var i = 0; i < Coffee.all.length; i++) {
    var drinkLI = document.createElement("li");
    var infoP = document.createElement("p");
    var temp;
    if (Coffee.all[i].isHot === "on") {
      temp = "cold";
    } else {
      temp = "hot";
    }
    infoP.textContent = `${Coffee.all[i].name} orderd a ${temp} ${Coffee.all[i].size} ${Coffee.all[i].drinkType} with ${Coffee.all[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}


//call get all drinks
getDrinks();
