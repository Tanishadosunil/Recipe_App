let input = document.querySelector(".search_box");
let btn = document.querySelector(".btn");
let mainSection = document.querySelector(".main_section");
let mainHeading = document.querySelector(".main_heading");
let recipeContainer = document.querySelector(".recipe-container");

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let value = input.value;
    let BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    let response = await fetch(BASE_URL);
    let data = await response.json();
    let Meals = data.meals;
    mainHeading.innerText = "Your Recipe";
    recipeContainer.innerHTML = "";
    for(let i=0; i<Meals.length; i++) {
        let recipeCard = document.createElement("div");
        recipeCard.style.cursor = "pointer";
        let recipeImage = document.createElement("img");
        recipeImage.src = Meals[i].strMealThumb;
        recipeImage.classList.add("image-class");
        recipeCard.appendChild(recipeImage);
        let recipeName = document.createElement("h4");
        recipeName.innerText = `${Meals[i].strMeal}`;
        recipeName.style.color = "black";
        recipeCard.appendChild(recipeName);
        recipeContainer.appendChild(recipeCard);

        recipeCard.addEventListener("click", () => {
            seeRecipe(Meals[i], recipeContainer);
        })
    }
})

let seeRecipe = (meal, recipeContainer) => {
    mainHeading.innerText = `${meal.strMeal}`;
    recipeContainer.innerHTML = "";

    let ingredientsDiv = document.createElement("div");
    let ingredients = document.createElement("h2");
    ingredients.innerText = "Ingredients";
    ingredients.style.color = "black";
    ingredientsDiv.appendChild(ingredients);
    recipeContainer.appendChild(ingredientsDiv);

    let ingredientsListDiv = document.createElement("div");
    ingredientsListDiv.style.marginLeft = "-120px";
    ingredientsListDiv.style.paddingTop = "50px";
    let ingredientsList = document.createElement("ul");
    ingredientsListDiv.appendChild(ingredientsList);
    ingredientsDiv.appendChild(ingredientsListDiv);
    for(key in meal) {
        if(meal[key] != "" && meal[key] != null && meal[key] != undefined) {
            for(i=0; i<key.length-1; i++) {
                if(i==8) {
                    if(key[i]=='d') {
                        let listItem = document.createElement("li");
                        listItem.innerText = meal[key];
                        listItem.style.color = "black";
                        ingredientsList.appendChild(listItem);
                    }
                }
            }
        }
    }

    let measuresDiv = document.createElement("div");
    measuresDiv.style.padding = "50px 0px 0px 15px";
    ingredientsDiv.appendChild(measuresDiv);
    for(key in meal) {
        if(meal[key] != "") {
            for(i=0; i<key.length-1; i++) {
                if(i==8) {
                    if(key[i]=='r') {
                        let measurePara = document.createElement("p");
                        measurePara.innerText = meal[key];
                        measurePara.style.color = "black";
                        measuresDiv.appendChild(measurePara);
                    }
                }
            }
        }
    }

    ingredientsDiv.classList.add("ingredients-div");

    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = meal.strMealThumb;
    image.style.height = "450px";
    image.style.width = "500px";
    image.style.objectFit = "cover";
    imageDiv.appendChild(image);
    recipeContainer.appendChild(imageDiv);

    recipeContainer.classList.add("instruction-page");

    let setOfInstructions = document.createElement("h2");
    setOfInstructions.innerText = "Instructions";
    setOfInstructions.style.color = "black";
    setOfInstructions.style.margin = "10px 280px 0px";
    recipeContainer.appendChild(setOfInstructions);
    

    let para = document.createElement("p");
    para.innerText = meal.strInstructions;
    para.style.color = "black";
    para.style.margin = "20px 0px 0px 200px";
    recipeContainer.appendChild(para);

}



// let seeRecipe = (meal, recipeContainer) => {
//     mainHeading.innerText = `${meal.strMeal}`;
//     recipeContainer.innerHTML = ""; // Clear container content
  
//     let imageDiv = document.createElement("div");
//     let image = document.createElement("img");
//     image.src = meal.strMealThumb;
//     image.classList.add("image-class");
//     imageDiv.appendChild(image);
//     recipeContainer.appendChild(imageDiv);
  
//     recipeContainer.style.border = "2px solid red";
  
//     let setOfInstructions = document.createElement("h3");
//     setOfInstructions.innerText = "Instructions";
//     recipeContainer.appendChild(setOfInstructions);
  
//     let instructionsContent = document.createElement("p");
//     instructionsContent.innerText = meal.strInstructions; // Access instructions
//     recipeContainer.appendChild(instructionsContent);
  
//     recipeContainer.style.display = "flex";
//     console.log(meal);
//   };
  








// let input = document.querySelector(".search_box");
// let btn = document.querySelector(".btn");
// let mainHeading = document.querySelector(".main_heading");
// let recipeContainer = document.querySelector(".recipe-container");

// btn.addEventListener("click", async (event) => {
//   event.preventDefault();
//   let value = input.value;

//   // Validate input (optional but recommended)
//   if (!value) {
//     alert("Please enter a search term.");
//     return;
//   }

//   const BASE_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;

//   try {
//     const response = await fetch(BASE_URL);
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.status}`);
//     }
//     const data = await response.json();

//     if (!data.meals || data.meals.length === 0) {
//       recipeContainer.innerHTML = '<p class="error">No recipes found.</p>';
//     } else {
//       mainHeading.innerText = "Your Recipes";
//       recipeContainer.classList.remove("hide"); // Ensure container is visible

//       // Clear existing content (optional)
//       recipeContainer.innerHTML = "";

//       // Create and append recipe elements dynamically
//       for (const meal of data.meals) {
//         const recipeCard = document.createElement("div");
//         recipeCard.classList.add("recipe-card"); // Add a CSS class for styling

//         // Extract meal details (adjust based on your HTML structure)
//         const recipeImage = document.createElement("img");
//         recipeImage.src = meal.strMealThumb;
//         const recipeTitle = document.createElement("h3");
//         recipeTitle.innerText = meal.strMeal;
//         // Optionally add more details like ingredients, instructions, etc.

//         recipeCard.appendChild(recipeImage);
//         recipeCard.appendChild(recipeTitle);

//         recipeContainer.appendChild(recipeCard);
//       }
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     recipeContainer.innerHTML = '<p class="error">Error fetching recipes.</p>';
//   }
// });









// let mealValue = meal['strMeal'];
        // let URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue}`;
        // let response2 = await fetch(URL);
        // console.log(response2);
        // let data2 = await response2.json();
        // console.log(data2);









//   https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg
//   https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }

//  https://www.themealdb.com/browse/search/?s=cake
//  https://www.themealdb.com/browse/search/?s=pizza
//  https://www.themealdb.com/browse/search/?s=paneer
  