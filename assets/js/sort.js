"use strict";

document.addEventListener('DOMContentLoaded', init6);

function init6() {
    inLadenValues();
}
function inLadenValues() {
    document.querySelector(`#sortby`).innerHTML =
        `<option value="book">Book</option>
         <option value="calories">Calories</option>
         <option value="cook">Cook</option>
         <option value="id">id</option>
         <option value="img">img</option>
         <option value="price">price</option>
         <option value="quantity">quantity</option>
         <option value="servings">servings</option>
         <option value="title">title</option>
         <option value="type">type</option>`;
}