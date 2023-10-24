// Define colors for different Pokemon Types
export const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  
  // URL for the Pokemon API
  export const url = "https://pokeapi.co/api/v2/pokemon/";
  
  // Function to fetch and display Pokemon data
  export const getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        generateCard(data);
      });
  };
  
  const capitalizeName = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };
  
  // Function to filter Pokémon by a specific type
  const filterByType = (data, typeName) => {
    return data.filter((pokemon) => {
      return pokemon.types.some((type) => type.type.name === typeName);
    });
  };
  
  let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = capitalizeName(data.name);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
  
    // Match the color for the card based on the Pokemon's type
    const themeColor = typeColor[data.types[0].type.name];
    console.log(themeColor);
    const card = document.getElementById("card");
    card.innerHTML = `
          <p class="hp">
            <span>HP</span>
              ${hp}
          </p>
          <img src="${imgSrc}" />
          <h2 class="poke-name">${pokeName}</h2>
          <div class="types">
           
          </div>
          <div class="stats">
            <div>
              <h3>${statAttack}</h3>
              <p>Attack</p>
            </div>
            <div>
              <h3>${statDefense}</h3>
              <p>Defense</p>
            </div>
            <div>
              <h3>${statSpeed}</h3>
              <p>Speed</p>
            </div>
          </div>
    `;
    appendTypes(data.types); // Add the Pokemon types
    styleCard(themeColor);
  
    // Example usage of the filter method to get fire-type Pokémon
    const fireTypePokemon = filterByType(data, 'fire');
    console.log('Fire-type Pokémon:', fireTypePokemon);
  };
  
  const appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("span");
      span.textContent = capitalizeName(item.type.name);
      document.querySelector(".types").appendChild(span);
    });
  };
  
  const styleCard = (color) => {
    const card = document.getElementById("card");
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };
  
  document.getElementById("button").addEventListener("click", getPokeData);
  window.addEventListener("load", getPokeData);
  