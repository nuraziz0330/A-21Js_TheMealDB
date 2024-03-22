let urlParams = new URLSearchParams(window.location.search);

let mealId = urlParams.get("id");

const API_BYID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

const INGREDIENTS = `https://www.themealdb.com/images/ingredients/`

let result = document.querySelector(".result");

async function getMealById() {
  try {
    const res = await fetch(API_BYID);
    const data = await res.json();

    console.log(data);
    showMeal(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
}

getMealById();

function showMeal(data) {
    let showUrl = ""
    for(let i = 0; i <= 20; i++){
        const findName = data["strIngredient" + i];
        if(findName){
            showUrl += `
                <div class="ingredient">
                    <img src="${INGREDIENTS + findName}-Small.png"/>
                    <p>${findName}</p>
                </div>
            `
                    
        }

    }
   result.innerHTML =`
   <div class="meals-title">
   <h2>${data.strMeal}</h2>
   <h2>Ingredients</h2>
   </div>
   <div class="meals-container">
        <div class="meals">
            <img src="${data.strMealThumb}" alt="${data.strMeal}"/>
            <button onclick="meals('home')">${data.strTags}</button>
            <div class="images">
                <img onclick="setId('prev')" src="https://www.themealdb.com/images/icons/Arrow-Left.png" />
                <img onclick="setId('next')" src="https://www.themealdb.com/images/icons/Arrow-Right.png" />
            </div>
        </div>
        <div class="meals-image">${showUrl}</div>
   </div>
   <div class="meals-info">
            <h2>Instructions</h2>
             <p>${data.strInstructions}</p>
         </div>
   `
}

function setId(str) {
    const newMealId = str == "prev" ? parseInt(mealId) -1 : parseInt(mealId) +1
    window.location.href = `info.html?id=${newMealId}`

}

// function meals(){

// }

   
       