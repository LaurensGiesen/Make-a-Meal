"use strict";

function loadDishes(mealsToLoad) {
    document.querySelector('.flexcontainer').innerHTML ="";
    if(mealsToLoad === null) {
        mealsToLoad = JSON.parse(localStorage.getItem(`localMeals`));
    }

    resetNewMeals();
    mealsToLoad.forEach(function (meal) {
        addMealToList(meal);
    })

}

function addMealToList(meal) {
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
            </article>`;

    initOrderButton();
    newMeals.push(meal);
}

function resetNewMeals() {
    newMeals = [];
}