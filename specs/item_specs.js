var item = require("../item");
var assert = require("assert");

describe("item", function(){

  it("should take the name assigned to it", function(){
    var steak = new item("Steak", 20);
    assert.equal("Steak", steak.name)
  })

  it("should take the cost assigned to it", function(){
    var steak = new item("Steak", 30);
    assert.equal(30, steak.cost)
  })

});