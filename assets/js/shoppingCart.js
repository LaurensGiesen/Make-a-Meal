"use strict";


let localStorageMeals = JSON.parse(localStorage.getItem(`localMeals`));

let cartTeller = 0;
let currentCart = [];
let totalPrice = 0;


localStorage.setItem(`cartTeller`, cartTeller);
localStorage.setItem(`currentCart`, JSON.stringify(currentCart));
localStorage.setItem(`lsPrice`, totalPrice);






document.addEventListener('DOMContentLoaded',init5);

function init5() {
    document.querySelector(`#collection .flexcontainer`).addEventListener(`click`,popUpDishes);
    document.querySelector(`.close`).addEventListener(`click`,closePopUpDishes);
    document.querySelector(`.viewcart`).addEventListener(`click`,popUpViewCart);
    document.querySelector(`#cart .close`).addEventListener(`click`,closePopUps);
    document.querySelector(`#cart .order`).addEventListener(`click`,proceedToCheckOut);
    document.querySelector(`#personalinformation .order`).addEventListener(`click`,finalPopUp);
    tellerCart();
    orderButton();
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
    if (cartTeller < 1) {
    } else {
        document.querySelector('.viewcart').innerHTML = "<span style=\"background-color: #ff7cd8 ;\"></span>view cart";
    }
}
function orderButton() {
    let order = document.querySelectorAll('.info .order');
    for (let i = 0; i < order.length; i++) {
        order[i].addEventListener("click", function(e) {
            e.preventDefault();
            plusTeller();
            addToCart(i);
        });
    }
}

function plusTeller() {
    cartTeller += 1;
    localStorage.setItem('cartTeller', cartTeller);
    tellerCart();
    document.querySelector('.viewcart span').innerHTML = localStorage.getItem('cartTeller');
}


function addToCart(i){
    currentCart.push(i);
    localStorage.setItem('currentCart', currentCart);

    let table = document.querySelector('.items table');

    table.deleteTHead();

    let header = table.createTHead();
    let rowHeader = header.insertRow(0);
    let meal = rowHeader.insertCell(0);
    let price = rowHeader.insertCell(1);
    meal.innerHTML = "Meal";
    price.innerHTML = "Price";
    let body = table.createTBody();

    let bodyRow = body.insertRow(0);
    let name = bodyRow.insertCell(0);
    let mealPrice = bodyRow.insertCell(1);
    name.innerHTML = localStorageMeals[i].title;
    mealPrice.innerHTML = "€" + localStorageMeals[i].price;

    let currentTotalPrice = parseFloat(localStorage.getItem('lsPrice'));
    currentTotalPrice += localStorageMeals[i].price;
    JSON.stringify(currentTotalPrice);
    localStorage.setItem('lsPrice', currentTotalPrice);

    table.deleteTFoot();
    table.deleteTFoot();

    let foot = table.createTFoot();
    let rowFoot = foot.insertRow(0);
    let empty = rowFoot.insertCell(0);
    let totalPrice = rowFoot.insertCell(1);
    empty.innerHTML = "";
    totalPrice.innerHTML = "Price: € " + currentTotalPrice;
}