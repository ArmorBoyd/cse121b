/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Boyd Armor Poblete";
let currentYear = new Date().getFullYear();
let profilePicture = "images/placeholder.png"
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year")
const imageElement = document.getElementById(profilePicture);
/*Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear

//imageElement.setAttribute("src", profilePicture);
//imageElement.setAttribute("alt", `Profile image of ${fullName}`);
/* Step 5 - Array */
let favfood  = ["Sisig", "Karahay", "Chicharon bulaklak", "Adobo"];
foodElement.textContent = favfood;
let another = "pizza";
favfood.push(another);
foodElement.innerHTML += `<br>${favfood}`;
favfood.shift();
foodElement.innerHTML += `<br>${favfood}`;
favfood.pop();
foodElement.innerHTML += `<br>${favfood}`;


