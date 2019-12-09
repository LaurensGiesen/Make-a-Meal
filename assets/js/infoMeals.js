"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    document.querySelector(`#collection .flexcontainer`).addEventListener(`click`, popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`, closePopUpDishes);
}

function popUpDishes(e) {
    e.preventDefault();
    document.querySelector(`#popup`).classList.remove(`hidden`);
    let selectedMealID = e.target.closest("article").getAttribute(`data-id`) -1;
    document.querySelector('#popup .contentwrapper').innerHTML =
        `<article data-id="${meals[selectedMealID].id}">
                <h3>${meals[selectedMealID].title}</h3>
                <figure>
                    <img src="images/${meals[selectedMealID].img}"
                         alt="${meals[selectedMealID].title}"
                         title="${meals[selectedMealID].title}">
                    <figcaption>
                        Meal by: <span>${meals[selectedMealID].cook}</span>
                    </figcaption>
                </figure>
                <div class="info">
                  <dl>
                                <dt>calories:</dt>
                                <dd>${meals[selectedMealID].calories}</dd>
                                <dt>servings:</dt>
                                <dd>${meals[selectedMealID].servings}</dd>
                                <dt>days to book in advance:</dt>
                                <dd>${meals[selectedMealID].book}</dd>
                                <dt>type:</dt>
                                <dd>${meals[selectedMealID].type}</dd>          
                  </dl>

                    <p>€ <span>${meals[selectedMealID].price}</span>/pp</p>
                    <a href="#" class="order">Order</a>
                </div>
            </article>`
}

function closePopUpDishes(e) {
    e.preventDefault();
    document.querySelector(`#popup`).classList.add(`hidden`);
}
