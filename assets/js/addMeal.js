"use strict";

function addMealButton(){
    document.querySelector('#confirmMeal').addEventListener('click', addMeal);
}

function id() {
    let id = JSON.parse((localStorage.getItem('lsId'))) + 1;
    document.querySelector('p span').innerHTML = " " + id;
}

function addMeal(e) {
    e.preventDefault();
    let meal = {};

    let id = JSON.parse((localStorage.getItem('lsId')) + 1);
    meal["id"] = id;

    let title = document.querySelector('#title').value;
    meal["title"] = title;

    let img = "dummy.jpg";
    meal["img"] = img;

    let book = document.querySelector('#book').value;
    meal["book"] = book;

    let calories = document.querySelector('#calories').value;
    meal["calories"] = calories;

    let servings = document.querySelector('#servings').value;
    meal["servings"] = servings;

    let price = document.querySelector('#price').value;
    meal["price"] = price;

    let type = document.querySelector('#type').value;
    meal["type"] = type;

    let cook = document.querySelector('#cook').value;
    meal["cook"] = cook;

    let quantity = document.querySelector('#quantity').value;
    meal["quantity"] = quantity;

    let json = JSON.stringify(meal);
    localStorage.setItem('lsNewMeal', json);
}