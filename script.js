var listOfItems = ["Apples", "Oranges", "Pears", "Onions", "Bell Peppers", "Radishes"]
var listOfPrices = [0.89, 0.99, 0.89, 1.00, 0.60, 0.55]
var shoppingList = [];

function addApples(){
  shoppingList.push(listOfItems[0], listOfPrices[0]);
  showShoppingList();
}

function addOranges(){
  shoppingList.push(listOfItems[1], listOfPrices[1]);
  showShoppingList();
}

function addPears(){
  shoppingList.push(listOfItems[2], listOfPrices[2]);
}
function addOnions(){
  shoppingList.push(listOfItems[3], listOfPrices[3]);
}
function addBellPeppers(){
  shoppingList.push(listOfItems[4], listOfPrices[4]);
}
function addRadishes(){
  shoppingList.push(listOfItems[5], listOfPrices[5]);
}

function showShoppingList(){
  alert(shoppingList);
   
}