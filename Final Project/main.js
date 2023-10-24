// main.js
import { getPokemonData } from "./api.js";
import { generateCard } from "./card.js";

const button = document.getElementById("btn");

const getPokeData = () => {
  let id = Math.floor(Math.random() * 150) + 1;
  getPokemonData(id)
    .then((data) => {
      generateCard(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

button.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
