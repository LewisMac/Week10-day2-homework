var shoppingBasket = require("../shopping_basket");
var item = require("../item");
var assert = require("assert");

var steak = new item("Steak", 25);
var chips = new item("Chips", 10);
var salad = new item("Salad", 30);

describe("shoppingBasket", function(){

  beforeEach(function(){
    shoppingBasket.empty();
  })

  it("should start empty", function(){
    assert.equal(0, shoppingBasket.contentsCount())
  })
  it("should be able to take items", function(){
    shoppingBasket.contentsAdd(steak);
    shoppingBasket.contentsAdd(chips);
    shoppingBasket.contentsAdd(salad);

    assert.equal(3, shoppingBasket.contentsCount())
  })
  it("should be able to remove items", function(){
    shoppingBasket.contentsAdd(steak);
    shoppingBasket.contentsAdd(chips);
    shoppingBasket.contentsAdd(salad);
    shoppingBasket.contentsRemove(salad);
    assert.equal(2, shoppingBasket.contentsCount())
  })
  it("should have a total cost", function(){
    shoppingBasket.contentsAdd(steak);
    shoppingBasket.contentsAdd(chips);
    assert.equal(35, shoppingBasket.cost())
  })

});