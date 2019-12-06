'use strict';

/*----init----*/
document.addEventListener('DOMContentLoaded',init);

function init() {
 inLadenDishes();
document.querySelectorAll(`img`).forEach(function (img) {
    img.addEventListener(`click`,popUpDishes);
})
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

    // querySelectAll(dien image).forEach(function(img){
    //  img.addEventListner()
    // }
function popUpDishes(){
    console.log("popup");
    document.querySelector(`#popup`).classList.remove(`hidden`);
    }


