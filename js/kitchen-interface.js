var Food = require('./../js/kitchen.js').foodModule;

$(document).ready(function(){
  var newFood = new Food();

  $('#input-form').submit(function(event){
    event.preventDefault();
    var foodInput = $('#food').val();
    console.log(foodInput);
    newFood.searchIngredient(foodInput);
  });


});
