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

  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState == 4) {
      if (ajaxRequest.readyState == 200) {

        let jsonObj = JSON.parse(ajaxRequest.responseText);
        // below is the div the container will be appended to
        let getResults = document.getElementById('results');
        // for each recipe match,increment
        for (let i = 0; i < jsonObj.length; i++) {
          // create parent container for each recipe
          let container = document.getElementById("results");
          container.setAttribute("class", "recipeContainer");
          // create a header element to display the recipe name
          let heading = document.createElement("h1");
          heading.setAttribute("class", "recipeTitle");
          // create an image element to display the image of the recipe
          let pic = document.createElement("img");
          // create image text node
          let picNode = (jsonObj.matches[i].imageUrlBySize["90"]);

          //create a subheading for the Ingridents
          let ingPara = document.createElement("p");
          ingPara.setAttribute("class", "ingPara");
          let ingParaNode = document.createTextNode("What you need:");

          //create an unordered list for Ingridents
          let ingredientUL = document.createElement("ul");
          ingredientUL.setAttribute("class", "ingUL");

          // declaring value for each recipeid to be used  for button

          let recipeID = jsonObj.matches[i].id;
          //declare onclickURL  to construct  URL for each RECIPE with the recipeID
          let onClickUrl = "window.open(" + "\'http://www.yummly.co/recipe/" + recipeID + "\')";


          //append element and recipe name together
          heading.appendChild(headingNode);
          // append element to recipe container
          container.appendChild(heading);

          //append src set as picNode to the image element
          pic.setAttribute("src", picNode);
          //append image text node to recipe container
          container.appendChild(pic);

          // for each ingrident list on d page
          for (let h = 0; i < jsonObj.matches[i].ingrident.length; h++) {
            let ingredientLineItem = document.createElement("li");
            //create a textnode for each ingrident
            let ingredientLineItemNode = document.createTextNode(jsonObj.matches[i].ingredients[h]);
            //append textnode to ingrident list item
            ingredientLineItem.appendChild(ingredientLineItemNode);
            // append element to unordered list
            ingredientUL.appendChild(ingredientLineItem);
          }
          //append the element to the recipe container
          container.appendChild(ingredientUL);
          // append the subheading
          container.appendChild(ingParaNode);
          //append element to recipe container
          container.appendChild(ingPara);
          //apend element to recipe container
          container.appendChild(ingredientUL);

          //set attribute of input element with type of button
          button.setAttribute("type", "button");
          button.setAttribute("value", "Get this recipe");
          button.setAttribute("class", "getFullRecipe" + [i]);

          //set onclick to the onClickUrl result
          button.setAttribute("onclick", onClickUrl);
          //append button to recipe container
          container.appendChild(button);
          // append container to results div/DOM
          getResults.appendChild(container);
        }
      } else {
        console.log("Status error: " + ajaxRequest.status);
      }
    } else {
      console.log("Ignored readyState: " + ajaxRequest.readyState);
    }
  }




}