"use strict";

document.addEventListener('DOMContentLoaded',init3);

function init3() {
    if(localStorage.getItem(`localMeals`) === null){
        localStorage.setItem(`localMeals`, JSON.stringify(meals));
    }
}