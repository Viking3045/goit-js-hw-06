const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  let list = document.querySelector("#ingredients");
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  list.append(element);
}
