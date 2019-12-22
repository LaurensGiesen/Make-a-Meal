"use strict";

function popUpDishes(e) {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        let meals = JSON.parse(localStorage.getItem(`localMeals`));
        if (e.target.tagName !== "A") {
            document.querySelector(`#popup`).classList.remove(`hidden`);
        }

        let selectedMealID = e.target.closest("article").getAttribute(`data-id`);
        if (e.target.tagName === "ARTICLE") {
            selectedMealID = e.target.getAttribute(`data-id`);
        }
        let meal = {};
        for (let i = 0; i < meals.length; i++) {
            if (meals[i].id.toString() === selectedMealID) {
                meal = meals[i];
            }
        }
        document.querySelector('#popup .contentwrapper').innerHTML =
            `<article data-id="${meal["id"]}">
                <h3>${meal["title"]}</h3>
                <figure>
                    <img src="images/${meal["img"]}"
                         alt="${meal["title"]}"
                         title="${meal["title"]}">
                    <figcaption>
                        Meal by: <span>${meal["cook"]}</span>
                    </figcaption>
                </figure>
                <div class="info">
                  <dl>
                                <dt>calories:</dt>
                                <dd>${meal["calories"]}</dd>
                                <dt>servings:</dt>
                                <dd>${meal["servings"]}</dd>
                                <dt>days to book in advance:</dt>
                                <dd>${meal["book"]}</dd>
                                <dt>type:</dt>
                                <dd>${meal["type"]}</dd> 
                  </dl>

                    <p>€ <span>${meal["price"]}</span>/pp</p>
                    <a href="#" class="order">Order</a>
                </div>
            </article>`;
        initPopUpOrderButton();
    }
}

function closePopUpDishes(e) {
    e.preventDefault();
    document.querySelector(`#popup`).classList.add(`hidden`);
}