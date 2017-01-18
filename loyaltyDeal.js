var item = require("./item");
var shoppingBasket = require("./shopping_basket");

var loyaltyCardDeal = function(shoppingBasket){
  loyaltyCost = 0;
  if(shoppingBasket.loyaltyCard){
    loyaltyCost = shoppingBasket.cost() * 0.95
  } else {
    loyaltyCost = shoppingBasket.cost();
  }
  return loyaltyCost;
}

module.exports = loyaltyCardDeal;