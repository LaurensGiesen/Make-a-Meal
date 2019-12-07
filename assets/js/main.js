'use strict';

/*----init----*/
document.addEventListener('DOMContentLoaded',init);

function init() {
    mealOfTheDay();
    inLadenDishes();
document.querySelector(`#collection .flexcontainer`).addEventListener(`click`,popUpDishes);

    totalMeals();
}

function inLadenDishes() {
    meals.forEach(function(meal){
        document.querySelector('.flexcontainer').innerHTML +=
            `<article data-id="${meal.id}">
                <h3>${meal.title}</h3>
                <figure>
                    <img src="images/${meal.img}"
                         alt="${meal.title}"
                         title="${meal.title}">
                    <figcaption>
                        Meal by: <span>${meal.cook}</span>
                    </figcaption>
                </figure>
                <div class="info">
                    <p>€ <span>${meal.price}</span>/pp</p>
                    <a href="#" class="order">Order</a>
                </div>
            </article>`
    })
    }

function popUpDishes(){
    console.log("popup");
    document.querySelector(`#popup`).classList.remove(`hidden`);
    }


function mealOfTheDay(){
   let randomMeals =  meals[Math.floor((Math.random() * meals.length))];
   let imageMeal = document.querySelector(`#mealoftheday`);
   imageMeal.innerHTML += `<img src="images/${randomMeals.img}" alt="${randomMeals.title}" title="${randomMeals.title}">`;

   let textMeal = document.querySelector(`#mealoftheday div p+p`);
   textMeal.innerHTML += `<strong>${randomMeals.title}</strong>`;
}

function totalMeals() {
    let total = document.querySelector(`main aside p`);
    total.innerHTML = `<span>${meals.length}</span> deliverable dishes and counting!`;
}