let i = 0
let drink
let newArray = []
let optionsNum
 let ingredients = []

nameBoxes.style.display = 'none'
mainDrink.style.display = 'none'

first.addEventListener('click', () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(response => response.json())
  .then(data => {
      //console.log(data.drinks[1].strDrink)
      for (let i=0; i < data.drinks.length; i ++){
        //console.log(data.drinks[i].strDrink)
            newArray.push(data.drinks[i].strDrink)
            optionsNum = newArray.length
      }
    initial.style.display = 'none'
    nameBoxes.style.display = 'block'
    for (let i = 0; i < optionsNum; i++){
    nameBoxes.innerHTML += `<button class = 'id-box' id = '${data.drinks[i].idDrink}'>${data.drinks[i].strDrink}</button>` 
    //info.push(data.drinks[i])
    const idBoxes = document.querySelectorAll('.id-box');
    idBoxes.forEach(function(idBox) {
    idBox.addEventListener('click', function() {
        const drinkId = idBox.id;
    const drink = data.drinks.find(function(d) { return d.idDrink === drinkId });
    handleDrinkClick(drink); 
    console.log("Button with ID " + idBox.id + " was clicked.");
    nameBoxes.style.display = 'none'
    mainDrink.style.display = 'block'
    // Add your desired code here

  });
});
function handleDrinkClick(drink) {
    for (let i = 1; i <= 15; i++) {
    let ingredient = drink["strIngredient" + i];
    if (ingredient) {
    ingredients.push(ingredient);
    }
    }
    console.log(ingredients)
    
  console.log("Button for drink " + drink.strDrink + " was clicked.");
  console.log(drink.strDrinkThumb)
 
  mainDrink.innerHTML += `<div class = 'cocktail'> 
  <p1>${drink.strDrink}</p1>
  <img class = 'pic' src = "${drink.strDrinkThumb}">
  <p2>Type of Glass : ${drink.strGlass}</p2>
    <p3> Ingredients: ${ingredients}</p3>
    <p4>Preparation instructions: ${drink.strInstructions}</p4>
    <button id = 'restart'>Return to Menu</button>
  </div>` 
          restart.addEventListener('click', () => {
    console.log("hello")
     window.location.reload()
}) 
} 
}      
})
})


   
   

    