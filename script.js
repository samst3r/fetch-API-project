var pokeType;

let pokeList;
let pokemonChosen;
fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=1350")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    pokeList = data.results;
    // pickRandom(pokeList);
    let randIndex = Math.floor(Math.random() * 1350);
    console.log();
    let pokeChoice = pokeList[randIndex];
    let pokeUrl = pokeList[randIndex].url;
    console.log(pokeChoice);
    console.log(pokeUrl);
    let baseURL = "https://pokeapi.co/api/v2/pokemon/";
    let newURL = baseURL + pokeChoice.name + "/";

    console.log(newURL);
    loadPokemon(newURL);
  });

function loadPokemon(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data:    " + data);
    });
}
