'use strict';

document.addEventListener('DOMContentLoaded',init);

function init() {
    initLocalStorage();
    totalMeals();
    mealOfTheDay();
    loadDishes(null);
    loadValues();
    getCurrentCart();
    DOMelement();
    setEventListeners();
    document.querySelector('#sortby').addEventListener('change', mealProperty);
    document.querySelector('#direction').addEventListener('change', adjustMealsDirection);
    document.querySelector(`.flexcontainer`).addEventListener(`click`, popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`, closePopUpDishes);
    // shoppingcart
    document.querySelector(`#collection .flexcontainer`).addEventListener(`click`,popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`, closePopUpDishes);
    document.querySelector(`.cart`).addEventListener(`click`,popUpViewCart);
    document.querySelector(`#cart .close`).addEventListener(`click`,closePopUps);
    document.querySelector(`#cart .order`).addEventListener(`click`,proceedToCheckOut);
    document.querySelector(`#personalinformation .order`).addEventListener(`click`,finalPopUp);
    orderButton();
}