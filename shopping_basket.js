var item = require("./item");
var deals = require("./deals");

var shoppingBasket = {
  contents: [],
  loyaltyCard: false,
  contentsAdd: function(item){
    this.contents.push(item);
  },
  contentsCount: function(){
    counter = 0;
    for(item of this.contents){
      counter ++;
    };
    return counter
  },
  contentsRemove: function(item){
    this.contents.splice(this.contents.indexOf(item), 1)
  },
  cost: function(){
    totalCost = 0;
    for(item of this.contents){
      totalCost += item.cost;
    };
    return totalCost;
  },
  empty: function(){
    this.contents = [];
  }
};

module.exports = shoppingBasket;