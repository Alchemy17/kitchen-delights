"use strict"; //function to ensure best practices of writing js

// wrtite a function to make the api call
function search() {
  // storing parameters in a variable to make the code more readable
  let ajaxRequest = new XMLHttpRequest();
  let url = 'https://api.yummly.com/v1/api/recipes';
  // apiId and key required for authorization to use the apiId
  let appID = "?_app_id=8111787e";
  let appKey = "&_app_key=58a4cb8c8d357ca5e16dbaaa5ac83e33";

  // the following variables will help filter  the search results so we can get the desired effect
  let allowedCourse = "&allowedCourse[]=course^course-" + document.getElementById("courseDD").value;
  let getKeywords = document.getElementById("search").value;
  let keywords = "&q=" + getKeywords;
  let getIncluded = document.getElementById("includedIngredients").value;
  let included = "&allowedIngredient[]=" + getIncluded;
  let getExcluded = document.getElementById("excludedIngredients").value;
  let excluded = "&excludedIngredient[]=" + getExcluded;
}