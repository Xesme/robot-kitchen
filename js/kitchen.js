var apiKey = require('./../.env').apiKey;
var id = require('./../.env').id;

function Food() {
}

Food.prototype.search = function(foodName) {
  if (foodName.indexOf(" ") >= 0) {
    foodName = foodName.replace("\b \b ", "%20");
    console.log(foodName);
  }
  $.get('https://api.nutritionix.com/v1_1/search/' + foodName + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + id + '&appKey=' + apiKey)
  .then(function(response){
  $('#results').append('<li>' + foodName + ": " + "has this many calories: " response.main.nf_calories + '<br>' + " and this many grams of fat: " response.main.nf_total_fat + "</li>");
  });
};


exports.foodModule = Food;
