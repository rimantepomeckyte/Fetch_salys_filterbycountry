"use strict"
const konteineris = document.querySelector("#konteineris");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

// https://restcountries.eu/rest/v2/all

//1. Su async ir await ir forEach metodu
visosSalys()
    .then(response =>{
        console.log("Valioooo!!!");
    })
    .catch(error =>{
        console.log("Ups!!")
        console.log(error);
    });

async function visosSalys() {
    const gaunuInfo = await fetch("https://restcountries.eu/rest/v2/all");
    const duomenys = await gaunuInfo.json();
    console.log(duomenys);

    duomenys.forEach(salis => {
    const card = document.createElement("div");
    const nuotrauka = document.createElement("img");
    const pavadinimas = document.createElement("h5");
    nuotrauka.src = salis.flag;
    konteineris.appendChild(card);
    card.appendChild(nuotrauka);
    card.appendChild(pavadinimas);
    pavadinimas.innerHTML = salis.name;
    console.log("forEach metodas labas");

    searchButton.addEventListener("click", ieskoti);

    function ieskoti(){
      const konkretiSalis = searchInput.value;
      if(konkretiSalis == salis.name){
      konteineris.innerHTML=""; 
      const card = document.createElement("div");
    const nuotrauka = document.createElement("img");
    const pavadinimas = document.createElement("h5"); 
      nuotrauka.src = salis.flag;
      konteineris.appendChild(card);
    card.appendChild(nuotrauka);
    card.appendChild(pavadinimas);
      pavadinimas.innerHTML = salis.name;
      searchInput.value="";
}
    }
searchInput.addEventListener("keyup", suggestions);

function suggestions(){
const option = document.createElement("option");
option.innerHTML = salis.name;
suggestionsList.appendChild(option);
}
  })
}   

