function home() {
  const main = document.createElement("div");
  const tagline = document.createElement("div");
  const img = document.createElement("img");
  img.classList.add("homeimg");
  tagline.classList.add("tagline");
  tagline.textContent = "Best Burger Restaurant in California";
  img.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
  main.classList.add("main");
  main.append(tagline);
  main.append(img);

  return main
}

export { home };