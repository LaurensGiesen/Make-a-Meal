"use strict";
let searchField;

function DOMelement(){
    searchField =  document.querySelector('#search');
}

function setEventListeners(){
    searchField.addEventListener("keyup", SearchList);
}

function SearchList() {
    resetNewMeals();

    let length = meals.length;
    let searchString = searchField.value;
    if( searchString.length === 0 ) {
        loadDishes(null);
        return;
    }

    document.querySelector('.flexcontainer').innerHTML = "";
    for (let i = 0; i < length; i++) {
        let txtValue = meals[i].title.toLowerCase();
        if (txtValue.includes(searchString)) {
            addMealToList( meals[i] );
        }
    }
}