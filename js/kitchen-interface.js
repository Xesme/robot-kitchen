var Food = require('./../js/kitchen.js').foodModule;

$(document).ready(function(){
  var newFood = new Food();
// input form for recipes

$("#recipe-form").submit(function(event){
  event.preventDefault();
  var ingredient = $("#ingredient").val();
  var diet1 = $("#diet1").val();
  var diet2 = $("#diet2").val();

  newFood.searchRecipe(ingredient, diet1, diet2);
});

// input form for ingredients
  $('#input-form').submit(function(event){
    event.preventDefault();
    var foodInput = $('#food').val();
    console.log(foodInput);
    newFood.searchIngredient(foodInput);
  });
});
