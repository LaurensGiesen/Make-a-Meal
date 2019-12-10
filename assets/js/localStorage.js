"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    if(localStorage.getItem(`localMeals`) === null){
        localStorage.setItem(`localMeals`, JSON.stringify(meals));
    }
}