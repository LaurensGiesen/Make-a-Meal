"use strict";

document.addEventListener('DOMContentLoaded',init);
let searchField;

function init(){
    DOMelement();
    setEventListeners();
}
function DOMelement(){
    searchField =  document.querySelector('#search');
}

function setEventListeners(){
    searchField.addEventListener("keyup", SearchList);
}
function SearchList() {
    let length = meals.length;
    let searchString = searchField.value;
    document.querySelector('.flexcontainer').innerHTML = "";
    for (let i = 0; i < length; i++) {
        let txtValue = meals[i].title.toLowerCase();
        if (txtValue.includes(searchString)) {
            document.querySelector('.flexcontainer').innerHTML +=
                `<article data-id="${meals[i].id}">
                <h3>${meals[i].title}</h3>
                <figure>
                    <img src="images/${meals[i].img}"
                         alt="${meals[i].title}"
                         title="${meals[i].title}">
                    <figcaption>
                        Meal by: <span>${meals[i].cook}</span>
                    </figcaption>
                </figure>
                <div class="info">
                    <p>€ <span>${meals[i].price}</span>/pp</p>
                    <a href="#" class="order">Order</a>
                </div>
            </article>`
        }
    }
}