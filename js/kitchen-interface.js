var Food = require('./../js/kitchen.js').foodModule;

$(document).ready(function(){

  $('#input-form').submit(function(event){
    event.preventDefault();
    var foodInput = $('#food').val();
    var newFood = Food();
    newFood.search(foodInput);
  });


});
