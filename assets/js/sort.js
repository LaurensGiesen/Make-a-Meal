"use strict";

function loadValues() {
    document.querySelector(`#sortby`).innerHTML =
        `<option value="book">Book</option>
         <option value="calories">Calories</option>
         <option value="cook">Cook</option>
         <option value="id">id</option>
         <option value="img">img</option>
         <option value="price">price</option>
         <option value="quantity">quantity</option>
         <option value="servings">servings</option>
         <option value="title">title</option>
         <option value="type">type</option>`;
}

function mealProperty(e) {

    let selectedProperty = e.target.value;
    let ascOrDesc = document.querySelector('#direction').selectedIndex;
    meals.sort(function (a, b) {
        let propertyA = a[selectedProperty];
        let propertyB = b[selectedProperty];

        if(propertyA < propertyB){
            return -1;
        }
        if(propertyA > propertyB){
            return 1;
        }
        return 0;
    });
    if(ascOrDesc === 1){ meals.reverse()}
    loadDishes(meals);
}

function adjustMealsDirection(){
    meals.reverse();
    loadDishes(meals);
}