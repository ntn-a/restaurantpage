function contact() {
  const main = document.createElement("div");
  const contact = document.createElement("div");
  const name = document.createElement("div");
  const phone = document.createElement("div");
  const location = document.createElement("div");
  const email = document.createElement("div");
  main.classList.add("main");
  contact.classList.add("contact");
  location.classList.add("location");
  location.textContent = "1600 Amphitheatre Pkwy, Mountain View, CA 94043";
  email.textContent = "leburger@gmail.com";
  name.textContent = "Le Burger";
  phone.textContent = "123-456-7890";
  name.classList.add("name");
  phone.classList.add("phone");
  contact.appendChild(name);
  contact.appendChild(email);
  contact.appendChild(phone);
  main.appendChild(contact);
  main.appendChild(location);

  return main;
}

export { contact };