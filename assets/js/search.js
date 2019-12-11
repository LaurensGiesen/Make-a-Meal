"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector(`#search`).addEventListener(`onkeypress`, search);
}

function search(e) {
    e.preventDefault();

}
