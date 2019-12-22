"use strict";

function initLocalStorage() {
    if (localStorage.getItem(`localMeals`) === null) {
        localStorage.setItem(`localMeals`, JSON.stringify(meals));
    }
}