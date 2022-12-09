'use strict'

let containerEl = document.querySelector(".container");
let inputEl = document.getElementById("searchbar");
let errorEl = document.querySelector(".error");
let continentsEl = document.getElementById("continents");

function fillBoard() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                errorEl.innerHTML = "";
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

function selectContinent(continent) {
    fetch(`https://restcountries.com/v3.1/region/${continent}`)
        .then(res => res.json())
        .then(data => {
            errorEl.innerHTML = "";
            containerEl.innerHTML = "";
            console.log(data);
            data.forEach(element => {
                containerEl.innerHTML += `<div class="card">
           <div class="flag"><img src="${element.flags.svg}" alt=""></div>
           <div class="info"><h1>${element.name.common}</h1>
           <h3>Population: ${element.population}</h3>
           <h3>Region: ${element.region}</h3>
           <h3>Capital: ${element.capital}</h3></div>
       </div>`
            })

        })
}

function searchCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => {
            errorEl.innerHTML = "";
            containerEl.innerHTML = "";
            console.log(data);
            data.forEach(element => {
                containerEl.innerHTML += `<div class="card">
           <div class="flag"><img src="${element.flags.svg}" alt=""></div>
           <div class="info"><h1>${element.name.common}</h1>
           <h3>Population: ${element.population}</h3>
           <h3>Region: ${element.region}</h3>
           <h3>Capital: ${element.capital}</h3></div>
       </div>`
            })

        })
        .catch(err => {
            errorEl.innerHTML = `This country not found`
        })
}

inputEl.addEventListener("input", function () {
    if (inputEl.value == "") {
        fillBoard()
    } else {
        searchCountry(inputEl.value)
    }
})

continentsEl.addEventListener("change", function () {
    if (containerEl.value == "all") {
        fillBoard()
    } else {
        selectContinent(continentsEl.value);
    }
})