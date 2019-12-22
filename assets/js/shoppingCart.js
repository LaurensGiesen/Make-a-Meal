"use strict";

let localStorageMeals =  getMeals();

let cartTeller = 0;
let currentCart = [];
let totalPrice = 0;

function getCurrentCart() {
    if (localStorage.getItem('currentCart') === null) {
        localStorage.setItem(`currentCart`, JSON.stringify(currentCart));
        localStorage.setItem(`cartTeller`, cartTeller);
        localStorage.setItem(`lsPrice`, totalPrice);
        document.querySelector('.cart').innerHTML = `<a href='#' class='viewcart'>view cart</a>`;
    } else if (localStorage.getItem('currentCart') !== null && localStorage.cartTeller >= 1) {
        currentCart = JSON.parse(localStorage.getItem('currentCart'));
        cartTeller = parseInt(localStorage.getItem('cartTeller'));
        totalPrice = parseInt(localStorage.getItem('lsPrice'));
        displayCart();
    } else {
        document.querySelector('.cart').innerHTML = `<a href='#' class='viewcart'>view cart</a>`;
    }
}

function displayCart() {
    document.querySelector('.cart').innerHTML = "<a href='#' class='viewcart'><span>" + cartTeller + "</span> view cart</a>";
    document.querySelector('.items table').innerHTML = '<thead><tr><th>Meal</th><th>Price</th></tr></thead>';
    document.querySelector('.items table').innerHTML += '<tbody></tbody>';
    currentCart.forEach(e => {
        document.querySelector('.items table tbody').innerHTML += '<tr><td>' + e.title + '</td><td>€' + e.price + '</td></tr>';
    });
    document.querySelector('.items table tbody').innerHTML += '<tr><td></td><td>Price: €' + totalPrice + '</td></tr>'
}

function getMeals() {
    let localStorageMeals = JSON.parse(localStorage.getItem(`localMeals`));
    if (localStorageMeals === null) {
        // opslaan in localstorage
        return meals;
    }

    return localStorageMeals;
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
    document.querySelector(`form .order`).addEventListener(`click`, confirm);
}

function finalPopUp(e) {
    e.preventDefault();
    document.querySelector(`#personalinformation`).classList.add(`hidden`);
    document.querySelector(`#confirmation`).classList.remove(`hidden`);
}

function initOrderButton() {
    let order = document.querySelectorAll('.flexcontainer .order');
    for (let i = 0; i < order.length; i++) {
        order[i].addEventListener("click", function(e) {
            e.preventDefault();
            e.target.classList.add(`addedtocart`);
            e.target.addEventListener('transitionend', transitionEnd);
            plusTeller();
            addToCart(i);
        });
    }
}

function transitionEnd(e) {
    e.target.classList.remove('addedtocart');
}

function initPopUpOrderButton() {
    let order = document.querySelectorAll('#popup .contentwrapper .order');
    for (let i = 0; i < order.length; i++) {
        order[i].addEventListener("click", function(e) {
            e.preventDefault();
            e.target.classList.add(`addedtocart`);
            e.target.addEventListener('transitionend', transitionEnd);
            plusTeller();
            addToCart(i);
        });
    }
}

function plusTeller() {
    cartTeller = parseInt(localStorage.getItem('cartTeller'));
    cartTeller += 1;
    localStorage.setItem('cartTeller', cartTeller);
    document.querySelector('.cart').innerHTML = "<a href='#' class='viewcart'><span>" + cartTeller + "</span> view cart</a>";
}

function addToCart(i){
    let obj = {
        title: localStorageMeals[i].title,
        price: localStorageMeals[i].price
    };
    currentCart.push(obj);
    localStorage.setItem('currentCart', JSON.stringify(currentCart));
    totalPrice = JSON.parse(localStorage.getItem('lsPrice'));
    totalPrice += obj.price;
    localStorage.setItem('lsPrice', totalPrice);

    displayCart();
}

function confirm(e) {
    e.preventDefault();
    document.querySelector('#personalinformation').style.display ="none";
    document.querySelector('#confirmation').style.display ="block";
    let nameConfirm = document.querySelector("span.personname");let payment;
    let name = document.getElementById("ordername");nameConfirm.innerHTML = name.value;
    let price = localStorage.getItem('lsPrice');
    document.querySelector('#confirmation .price').innerHTML = "€" + price;

    let paymentConfirm = document.querySelector(".paymentmethod");
    let paymentMethods = document.querySelectorAll('input[name="paymentmethod"]');
    paymentMethods.forEach(function (e) {
        if (e.checked) {
            let id = e.id;
            paymentConfirm.innerHTML = " in " + document.querySelector('[for="' + id + '"]').innerHTML;
        }
    });
    currentCart = [];
    cartTeller = 0;
    totalPrice = 0;

    localStorage.removeItem('cartTeller');
    let span = document.querySelector('.viewcart span');
    span.parentNode.removeChild(span);
    localStorage.removeItem('currentCart');
    localStorage.removeItem('lsPrice');

    loadDishes( null );
    resetShoppingCart();
}

function resetShoppingCart() {
    localStorage.setItem(`currentCart`, []);
    localStorage.setItem(`cartTeller`, 0);
    localStorage.setItem(`lsPrice`, 0);
}