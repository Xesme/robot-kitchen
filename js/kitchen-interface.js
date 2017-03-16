var Food = require('./../js/kitchen.js').foodModule;

var ingredientDisplay = function(foodName, foodCalories, foodFat) {
  $('#results').append('<li>' + foodName + ": " + "has this many calories: " +  Math.round(foodCalories) + '<br>' + " and this many grams of fat: " + Math.round(foodFat) + "</li>");
};

var recipeDisplay = function(link, recipeName, image, ingredients) {
  $('.recipe-results').append("<div class='recipes'><a href='" + link + "'>" + recipeName + "</a><br><br><img src='" + image + "'><hr><ul>" + ingredients + "</ul><br></div>");
};

$(document).ready(function(){
  var newFood = new Food();
// input form for recipes

$("#recipe-form").submit(function(event){
  event.preventDefault();
  var ingredient = $("#ingredient").val();
  var diet1 = $("#diet1").val();
  var diet2 = $("#diet2").val();

  newFood.searchRecipe(ingredient, diet1, diet2, recipeDisplay);
});

// input form for ingredients
  $('#input-form').submit(function(event){
    event.preventDefault();
    var foodInput = $('#food').val();
    newFood.searchIngredient(foodInput, ingredientDisplay);
  });
});
