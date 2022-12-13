'use strict'

let country = localStorage.getItem("name");
let detailEl = document.querySelector(".detail");
getCountryInfo();

function getCountryInfo() {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            let nativeNameN = "";
            for (let x in data[0].name.nativeName) {
                nativeNameN += data[0].name.nativeName[x].common + " ";
            }

            let ncur = "";
            console.log(Object.values(data[0].currencies)[0]);
            for (let x in data[0].currencies) {
                ncur += data[0].currencies[x].name + " ";
            }

            let lang=Object.values(data[0].languages)


            console.log(data[0]);
            detailEl.innerHTML += `<div class="flagDet">
            <img src="${data[0].flags.svg}" alt="#">
        </div>
        <div class="infoDet">
            <div class="nameDet">${data[0].name.common}</div>
            <div class="statistics">
                <div class="stat1"><p>Native Name: ${nativeNameN}</p>
                <p>Population : ${data[0].population}</p>
                <p>Region : ${data[0].region}</p>
                <p>Sub Region : ${data[0].subregion}</p>
                <p>Capital :${data[0].capital}</p></div>
                <div class="stat2">
                <p>Top Level Domain: ${data[0].tld[0]}</p>
                <p>Currencies : ${ncur}</p>
                <p>Languages : ${lang}</p>
                </div>
            </div>
            <div class="borders">
                Border Countries : <Button>France</Button><Button>Asgardia</Button><Button>Kurdemir</Button>
            </div>
        </div>`
        for (let x in data[0].borders) {
            let borderButtons = document.createElement("button");
            borderButtons.innerHTML = data[0].borders[x];}
            let borderDiv= document.querySelector(".borders")
            borderDiv.appendChild(borderButtons);
        })

}
