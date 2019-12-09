"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    mealOfTheDay();
}

function mealOfTheDay(){
    let randomMeals =  meals[Math.floor((Math.random() * meals.length))];
    let imageMeal = document.querySelector(`#mealoftheday`);
    imageMeal.innerHTML += `<img src="images/${randomMeals.img}" alt="${randomMeals.title}" title="${randomMeals.title}">`;

    let textMeal = document.querySelector(`#mealoftheday div p+p`);
    textMeal.innerHTML += `<strong>${randomMeals.title}</strong>`;
}


