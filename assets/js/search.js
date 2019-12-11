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
function SearchList(){
    let length = meals.length;
    let searchString = searchField.value;

    for(let i = 0; i < length; i++){
        let txtValue = meals[i].title.toLowerCase();
        if(txtValue.indexOf(searchString) > -1){
            let displayNone;
            let showId = i + 1;
            displayNone = document.querySelector("[data-id='"+ showId + "'");
            displayNone.style.display = "";
        } else{
            let displayNone;
            let verwijderId = i + 1;
            displayNone = document.querySelector("[data-id='"+ verwijderId + "'");
            displayNone.style.display = "none";
        }
    }
}