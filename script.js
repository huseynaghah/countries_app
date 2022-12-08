'use strict'

let containerEl = document.querySelector(".container");
let inputEl = document.getElementById("searchbar");

function fillBoard() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                containerEl.innerHTML += `<div class="card">
               <div class="flag"><img src="${element.flags.svg}" alt=""></div>
               <div class="info"><h1>${element.name.common}</h1>
               <h3>Population: ${element.population}</h3>
               <h3>Region: ${element.region}</h3>
               <h3>Capital: ${element.capital}</h3></div>
           </div>`
            });
        })
}


fillBoard();

function searchCountry(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
        containerEl.innerHTML="";
        console.log(data);
        data.forEach(element => {
            containerEl.innerHTML += `<div class="card">
           <div class="flag"><img src="${element.flags.svg}" alt=""></div>
           <div class="info"><h1>${element.name.common}</h1>
           <h3>Population: ${element.population}</h3>
           <h3>Region: ${element.region}</h3>
           <h3>Capital: ${element.capital}</h3></div>
       </div>`
        });
    })
}

inputEl.addEventListener("input", searchCountry(inputEl.value))