# _Robot Kitchen Project_

#### _This web page allows a user to look up nutrition information and possibly recipes, 15 March 2017_

#### By _**Erica Wright & Xia Amendolara**_

## Description

_This web page allows a user to browse nutritional information of many recipes from around the world. It provides the user with a helpful tool to better themselves and the food they eat!_

## Setup/Installation Requirements

* Set up your unique time API key by visiting https://www.nutritionix.com/business/api and signing up for a free account. Create a `.env` file in the top level project directory and enter in your API key as: `exports.apiKey = 'yourKeyHere';`.
* Run `npm install` and `bower install` to install all dependencies as listed in the package.json and bower.json files for project.
* Run command `gulp build` and `gulp serve` to start local server.
* Open `index.html` in web browser (Chrome recommended).

## Specifications

|    *Behavior*   |    *Input*    |     *Output*    |
|-----------------|---------------|-----------------|
| User can enter a food or dish to search its calorie content| "cheddar cheese 1oz" | calories = 112.84 fat = 9.28|
|User can compare foods that have been searched| "cheddar cheese 1oz" "cheddar cheese 1 cup" | cheddar cheese 1oz: calories = 112.84 fat = 9.28 or cheddar cheese 1 cup: calorie = 531.96 fat = 43.74|
* optional EmberFire calorie diary


## Known Bugs

_None so far._

## Support and contact details

_Please contact ericaw21@gmail.com or XiaEsmeAmen@me.com with concerns or comments._

## Technologies Used

* _Javascript_
* _jQuery_
* _Node_
* _CSS_
* _SASS_
* _HTML_


### License

*MIT license*

Copyright (c) 2017 **Erica Wright & Xia Amendolara** All Rights Reserved.
