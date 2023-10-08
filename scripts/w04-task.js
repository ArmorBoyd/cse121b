/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Boyd Poblete", 
    photo: "images/placeholder.png", 
    favoriteFoods: ["sisig", "atay", "pansit"], 
    hobbies: ["Playing sports", "playing video games", "reading articles"], 
    placesLived: [], 
  };

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({ place: "Cauayan", length: "24 years" });

/* DOM Manipulation - Output */
document.getElementById("name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach((food) => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
