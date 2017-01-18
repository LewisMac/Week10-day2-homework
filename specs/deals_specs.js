var shoppingBasket = require("../shopping_basket");
var item = require("../item");
var percentOffDeal = require("../deals")
var loyaltyDeal = require("../loyaltyDeal")
var assert = require("assert");

var steak = new item("Steak", 25);
var chips = new item("Chips", 15);
var salad = new item("Salad", 30);



describe("deals", function(){

  it("should discount 10% when total is over 20", function(){
    shoppingBasket.contentsAdd(steak);
    shoppingBasket.contentsAdd(chips);
    assert.equal(36, percentOffDeal(shoppingBasket, 10, 20))
  })

  it("should discount 5% when basket has loyalty card", function(){
    assert.equal(40, shoppingBasket.cost())
    assert.equal(40, loyaltyDeal(shoppingBasket));
    shoppingBasket.loyaltyCard = true;
    assert.equal(38, loyaltyDeal(shoppingBasket));
  })
});
