var nutritionApiKey = require('./../.env').nutritionApiKey;
var nutritionId = require('./../.env').nutritionId;
var recipeApiKey = require('./../.env').recipeApiKey;
var recipeId = require('./../.env').recipeId;

function Food() {
}

Food.prototype.searchIngredient = function(foodName, ingredientDisplay) {
  $.get('https://api.nutritionix.com/v1_1/search/' + foodName + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + nutritionId + '&appKey=' + nutritionApiKey).then(function(response) {
    ingredientDisplay(response.hits[0].fields.item_name, response.hits[0].fields.nf_calories, response.hits[0].fields.nf_total_fat);
  });
};

Food.prototype.searchRecipe = function(ingredient, diet1, diet2, recipeDisplay) {
  $.get('https://api.edamam.com/search?q=' + ingredient + '&app_id=' + recipeId + '&app_key=' + recipeApiKey + '&from=0&to=30').then(function(response) {
    var results = [];
    for ( var x = 0; x < 30; x++) {
      var labels = [];
      var healthLabel = response.hits[x].recipe.healthLabels;
      var dietLabel = response.hits[x].recipe.dietLabels;
      var resultRecipe = response.hits[x].recipe;
      for (var i = 0; i < healthLabel.length; i++) {
        labels.push(healthLabel[i].toLowerCase());
      }
      for (var j = 0; j < dietLabel.length; j++) {
        labels.push(dietLabel[j].toLowerCase());
      }

      if ((diet1) && (diet2)) {
        if (labels.indexOf(diet1) >= 0 && labels.indexOf(diet2) >= 0) {
          results.push(resultRecipe);
        }
      } else if ((diet1)|| (diet2)) {
        if (labels.indexOf(diet1) >= 0 || labels.indexOf(diet2) >= 0) {
          results.push(resultRecipe);
        }
      } else {
        results.push(resultRecipe);
      }
    }

    for (var y = 0; y < results.length; y++) {
      var ingredients = '';
      for (var t = 0; t < results[y].ingredientLines.length; t++) {
        ingredients += "<li>" + results[y].ingredientLines[t] + "</li>";
      }
      var link = results[y].shareAs;
      var recipeName = results[y].label;
      var image = results[y].image;
      recipeDisplay(link, recipeName, image, ingredients);
    }
  });
};

exports.foodModule = Food;
