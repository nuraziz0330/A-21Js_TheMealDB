let urlParms = new URLSearchParams( window.location.search)

let searchValue =urlParms.get("s")

let filterByLetter = urlParms.get("f")

let searchBy = "f"
let filterName = "a"

if(searchValue){
  searchBy = "s"
  filterName = searchValue
}

if(filterByLetter){
  searchBy = "f"
  filterName = filterByLetter
}

console.log(searchValue)
console.log(filterByLetter)

let input = document.querySelector(".search")

document.addEventListener("keydown", (event) => {
  if(event.keyCode === 13) {
    let letter = input.value;
    window.location.href = `index.html?s=${letter}`
  }
})
const API = `https://www.themealdb.com/api/json/v1/1/search.php?${searchBy}=${filterName}`;
console.log(API);

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
    <div class="prodact">
    <img src="${item.strMealThumb}" alt="" />
    <p>${item.strMeal}</p>
    </div>
    `
  }).join("")
}

let letter = document.querySelector(".letter")

let arrayLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

letter.innerHTML = arrayLetter.map((item) => {
  return`
  <a onclick="setLetter('${item}')">${item} <span>/</span></a>
  `
}).join("")

function setLetter(item){
  window.location.href = `index.html?f=${item}`
}
const CATEGORY_API = `https://www.themealdb.com/api/json/v1/1/categories.php`

let category = document.querySelector(".category")

async function getCategory(){
  try{
    const res = await fetch(CATEGORY_API)

    const data = await res.json()

    showCategory(data.categories)

    console.log(data);
  }catch(error){}
}
getCategory()

function showCategory(data){
  category.innerHTML = data.map((item) => {
    return`
    <div onclick="goToMealPage('${item.strCategory}')" class="prodact">
      <img src="${item.strCategoryThumb}"/>
      <p>${item.strCategory}</p>
    </div>
    `
  }).join("")
}

function goToMealPage(item){
  window.location.href = `mels.html?category=${item}`
}