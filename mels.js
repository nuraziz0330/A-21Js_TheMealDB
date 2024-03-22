let urlParms = new URLSearchParams( window.location.search)

let categorySearch = urlParms.get("category")

const API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySearch}`

let meals = document.querySelector(".meals")

async function getMeal() {
    try{
      const res = await fetch(API)
      const data = await res.json()
  
      console.log(data)
      showMeal(data.meals)
    }catch(error) {
      console.log(error);
    }
  }
  
  
  
  getMeal()
  
  function showMeal(data) {
    meals.innerHTML = data.map((item) => {
      return `
      <div onclick="doToInfo('${item.idMeal}')" class="prodact">
      <img src="${item.strMealThumb}" alt="" />
      <p>${item.strMeal}</p>
      </div>
      `
    }).join("")
  }

  function doToInfo(id){
    window.location.href = `info.html?id=${id}`
  }