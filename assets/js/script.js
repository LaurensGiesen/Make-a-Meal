'use strict';

/*----init----*/
document.addEventListener('DOMContentLoaded',init);

function init() {
    inLadenDishes();
    mealOfTheDay();
    totalMeals();
    document.querySelector(`#collection .flexcontainer`).addEventListener(`click`,popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`,closePopUpDishes);
    document.querySelector(`.viewcart`).addEventListener(`click`,popUpViewCart);
    document.querySelector(`#cart .close`).addEventListener(`click`,closePopUps);
    document.querySelector(`#cart .order`).addEventListener(`click`,proceedToCheckOut);
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

function popUpDishes(e) {
    e.preventDefault();
    document.querySelector(`#popup`).classList.remove(`hidden`);

     let selectedMealID = e.target.parentNode.parentNode.getAttribute(`data-id`) -1;
         console.log(selectedMealID);
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

function popUpViewCart(e) {
    e.preventDefault();
    console.log('shoppingcart');
    document.querySelector(`#cart`).classList.remove(`hidden`);
}

function closePopUps(e) {
    e.preventDefault();
    console.log("jk");
    document.querySelector(`#cart`).classList.add(`hidden`);
}

function proceedToCheckOut(e) {
    e.preventDefault();
    document.querySelector(`#personalinformation`).classList.remove(`hidden`);
}