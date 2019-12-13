"use strict";

document.addEventListener('DOMContentLoaded',init7);

function init7() {
    totalMeals();
}

function totalMeals() {
    let total = document.querySelector(`main aside p`);
    total.innerHTML = `<span>${meals.length}</span> deliverable dishes and counting!`;
}