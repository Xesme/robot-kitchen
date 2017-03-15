var nutritionApiKey = require('./../.env').nutritionApiKey;
var nutritionId = require('./../.env').nutritionId;
var recipeApiKey = require('./../.env').recipeApiKey;
var recipeId = require('./../.env').recipeId;

function Food() {
}

Food.prototype.searchIngredient = function(foodName) {
  $.get('https://api.nutritionix.com/v1_1/search/' + foodName + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + nutritionId + '&appKey=' + nutritionApiKey).then(function(response) {
    console.log(response);
  $('#results').append('<li>' + response.hits[0].fields.item_name + ": " + "has this many calories: " +  Math.round(response.hits[0].fields.nf_calories) + '<br>' + " and this many grams of fat: " + Math.round(response.hits[0].fields.nf_total_fat) + "</li>");
  });
};


exports.foodModule = Food;
