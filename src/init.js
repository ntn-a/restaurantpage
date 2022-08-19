import { home } from "./home.js";

function init() {
  const container = document.querySelector(".container");
  const topbar = document.createElement("div");
  const homeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const contactButton = document.createElement("div");
  const header = document.createElement("div");
  const footer = document.createElement("div");
  topbar.classList.add("topbar");
  header.classList.add("header");
  footer.classList.add("footer");
  homeButton.classList.add("home");
  menuButton.classList.add("menu");
  contactButton.classList.add("contact");
  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";
  header.textContent = "Le Burger";
  footer.textContent = "Created by Nhan Nguyen | The Odin Project";
  topbar.appendChild(homeButton);
  topbar.appendChild(menuButton);
  topbar.appendChild(contactButton);
  container.appendChild(header);
  container.appendChild(topbar);
  container.appendChild(home());
  container.appendChild(footer)
  return container;
}

export { init };