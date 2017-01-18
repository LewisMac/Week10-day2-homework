var item = require("./item");
var shoppingBasket = require("./shopping_basket");

var percentOffDeal = function(shoppingBasket, percentage, cost){
  totalCost = 0;
  if(shoppingBasket.cost() > cost){
    totalCost = shoppingBasket.cost() - ((shoppingBasket.cost()/100)*percentage)
  } else {
    totalCost = shoppingBasket.cost();
  }
  return totalCost;
}



module.exports = percentOffDeal;
