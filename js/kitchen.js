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

Food.prototype.searchRecipe = function(ingredient, diet1, diet2) {
  var type1 = 'healthLabels=';
  var type2 = 'healthLabels=';
  if(diet1 === 'low-fat' || diet1 === 'low-sodium') {
    var type1 = 'diet=';
  if(diet2 === 'low-fat' || diet2 === 'low-sodium') {
    var type2 = 'diet';
  $.get('https://api.edamam.com/search?q=' + ingredient + '&app_id=' + recipeId + '&app_key=' + recipeApiKey + '&' + type + diet1 '&' + type2 + diet2).then(function(response) {
    console.log(response);
    // $('.recipe-results').append('<ul>')
  });
}


exports.foodModule = Food;
