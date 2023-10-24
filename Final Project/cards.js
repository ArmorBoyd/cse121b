// card.js
import { typeColor } from "./data.js";

export function generateCard(data) {
  const card = document.getElementById("card");
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const themeColor = typeColor[data.types[0].type.name];

  card.innerHTML = `
    <p class="hp">
      <span>HP</span>
      ${hp}
    </p>
    <img src=${imgSrc} />
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

  appendTypes(data.types);
  styleCard(themeColor);
}

function appendTypes(types) {
  const typesContainer = document.querySelector(".types");
  typesContainer.innerHTML = "";
  types.forEach((item) => {
    let span = document.createElement("span");
    span.textContent = item.type.name;
    typesContainer.appendChild(span);
  });
}

function styleCard(color) {
  const card = document.getElementById("card");
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
}
