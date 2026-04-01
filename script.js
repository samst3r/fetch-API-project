// var pokeType;

// let pokeList;
// let pokemonChosen;
let userPokemon = [];

// function grabPokemon{
//   let randomId = Math.floor(Math.random() * 1025) + 1;
// let baseURL = "https://pokeapi.co/api/v2/pokemon/";
// let newURL = baseURL + randomId + "/";
// }
let scenarioIMG = document.querySelector("#scenario-image");
let scenarioText = document.querySelector("#scenario-text");
let option1IMG = document.querySelector("#img1");
let option2IMG = document.querySelector("#img2");
let option3IMG = document.querySelector("#img3");
let option4IMG = document.querySelector("#img4");
let option1BTN = document.querySelector("#button1");
let option2BTN = document.querySelector("#button2");
let option3BTN = document.querySelector("#button3");
let option4BTN = document.querySelector("#button4");
//run the fetch and load the pokemon as soon as the page loads, this can also be palced into a button click event handler
setup();
function setup() {
  for (let i = 0; i < 5; i++) {
    let randomId = Math.floor(Math.random() * 1025) + 1;
    let baseURL = "https://pokeapi.co/api/v2/pokemon/";
    let newURL = baseURL + randomId + "/";
    loadPokemon(newURL);
  }

  console.log("loaded pokemon" + userPokemon);
  updateScreen();
}
function loadPokemon(url) {
  fetch(url)
    .then(function (response) {
      return response.json(); //convert raw data to json
    })
    .then(function (data) {
      pokeData = data; //store object response in variable
      pokemonChosen = pokeData.name; //store pokemon name from object response

      let allTypes = pokeData.types.map(function (item) {
        //this pattern makes a new short list of types from the pokedata.types array
        return item.type.name;
      });

      pokeType = allTypes.join(", "); //joins the new array of types with commas to seperate, makes it look better on UI
      //debugging logs below
      console.log(pokeData);
      console.log("Name: " + pokemonChosen);
      console.log("Type: " + pokeType);
      console.log("Image: " + pokeData.sprites.front_default);
      userPokemon.push(pokeData);

      //place name, types and image on the UI
      // nameOutput.innerHTML = pokemonChosen;
      // typeOutput.innerHTML = "Type: " + pokeType;
      // imageOutput.src = pokeData.sprites.front_default;
      // imageOutput.alt = pokemonChosen;
    });
}

function updateScreen() {
  // scenarioIMG.src = userPokemon[0].sprites.front_default;
  scenarioText.innerHTML = userPokemon[0];
  //PROPERTY CANNOT BE ACCESSED YET, DUE TO ASYNCRONIS BEHAVIORS OF FETCH
}
