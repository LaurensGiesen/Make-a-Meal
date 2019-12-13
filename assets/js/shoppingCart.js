"use strict";

let cartTeller = 0;

localStorage.setItem(`cartTeller`, cartTeller);




document.addEventListener('DOMContentLoaded',init5);

function init5() {
    document.querySelector(`#collection .flexcontainer`).addEventListener(`click`,popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`,closePopUpDishes);
    document.querySelector(`.viewcart`).addEventListener(`click`,popUpViewCart);
    document.querySelector(`#cart .close`).addEventListener(`click`,closePopUps);
    document.querySelector(`#cart .order`).addEventListener(`click`,proceedToCheckOut);
    document.querySelector(`#personalinformation .order`).addEventListener(`click`,finalPopUp);
    tellerCart();
}

function popUpViewCart(e) {
    e.preventDefault();
    document.querySelector(`#cart`).classList.remove(`hidden`);
}

function closePopUps(e) {
    e.preventDefault();
    document.querySelector(`#cart`).classList.add(`hidden`);
}

function proceedToCheckOut(e) {
    e.preventDefault();
    document.querySelector(`#personalinformation`).classList.remove(`hidden`);
    document.querySelector(`#cartoverview`).classList.add(`hidden`);
}

function finalPopUp(e) {
    e.preventDefault();
    document.querySelector(`#personalinformation`).classList.add(`hidden`);
    document.querySelector(`#confirmation`).classList.remove(`hidden`);
}

function tellerCart() {
    if (cartTeller < 1){
    }
    else{
        document.querySelector(`viewcart`).innerHTML = `<span style =\"background-color: #ff7cd8;\"></span>view cart`;
    }
}
