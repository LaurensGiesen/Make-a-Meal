"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    totalMeals();
}

function totalMeals() {
    let total = document.querySelector(`main aside p`);
    total.innerHTML = `<span>${meals.length}</span> deliverable dishes and counting!`;
}