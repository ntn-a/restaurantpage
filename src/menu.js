function menu() {
  const main = document.createElement("div");
  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");
  const item1Name = document.createElement("div");
  const item1Description = document.createElement("div");
  const item2Name = document.createElement("div");
  const item2Description = document.createElement("div");
  const item3Name = document.createElement("div");
  const item3Description = document.createElement("div");
  const itemContainer1 = document.createElement("div");
  const itemContainer2 = document.createElement("div");
  const itemContainer3 = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img")
  itemContainer1.classList.add("itemContainer");
  itemContainer2.classList.add("itemContainer");
  itemContainer3.classList.add("itemContainer");
  item1Name.textContent = "The Burger";
  item1Description.textContent = "Nominated best burger in California";
  item2Name.textContent = "The Burger";
  item2Description.textContent = "Nominated best burger in California";
  item3Name.textContent = "The Burger";
  item3Description.textContent = "Nominated best burger in California";
  main.classList.add("main");
  item1.classList.add("item");
  item2.classList.add("item");
  item3.classList.add("item");
  img1.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80";
  img2.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80";
  img3.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80";
  item1.appendChild(img1);
  itemContainer1.appendChild(item1Name);
  itemContainer1.appendChild(item1Description);
  item1.appendChild(itemContainer1)
  item2.appendChild(img2);
  itemContainer2.appendChild(item2Name);
  itemContainer2.appendChild(item2Description);
  item2.appendChild(itemContainer2)
  item3.appendChild(img3);
  itemContainer3.appendChild(item3Name);
  itemContainer3.appendChild(item3Description);
  item3.appendChild(itemContainer3)
  main.appendChild(item1);
  main.appendChild(item2);
  main.appendChild(item3);
  
  return main;
}

export { menu };