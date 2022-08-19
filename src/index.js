import { init } from "./init.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

document.body.appendChild(init());

var homeButton = document.querySelector(".home");
homeButton.addEventListener("click", () => {
  var container = document.querySelector(".container");
  var main = document.querySelector('.main');
  container.removeChild(main);
  container.appendChild(home());
});

var menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
  var container = document.querySelector(".container");
  var main = document.querySelector('.main');
  container.removeChild(main);
  container.appendChild(menu());
});

var contactButton = document.querySelector(".contact");
contactButton.addEventListener("click", () => {
  var container = document.querySelector(".container");
  var main = document.querySelector('.main');
  container.removeChild(main);
  container.appendChild(contact());
});