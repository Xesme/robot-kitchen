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
  $.get('https://api.edamam.com/search?q=' + ingredient + '&app_id=' + recipeId + '&app_key=' + recipeApiKey).then(function(response) {
    for ( var x = 0; x < 10; x++) {
      var healthLabels = response.hits[x].recipe.healthLabels;
      for (var i = 0; i < healthLabels.length; i++) {
        if (healthLabels[i].toLowerCase() === diet1 || healthLabels[i].toLowerCase() === diet2) {
          console.log(response.hits[x].recipe.label);
        } else {
          console.log('no health label match');
        }
        var dietLabels = response.hits[x].recipe.dietLabels;
        for (var j = 0; j < dietLabels.length; j++) {
          if (dietLabels[j].toLowerCase() === diet1 || dietLabels[j].toLowerCase() === diet2) {
            console.log(response.hits[x].recipe.label);
          } else {
            console.log('no diet label match');
          }
        }
      }
    }
    console.log(response);
    // $('.recipe-results').append('<ul>')
  });
};

exports.foodModule = Food;
