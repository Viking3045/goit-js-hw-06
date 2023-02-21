const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


  const list = document.querySelector("#ingredients");
  const result = ingredients.map(ingredient =>{
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    return element;
  }).reduce((accumulator, curentElement) => {
        accumulator.append(curentElement);
        return accumulator
  }, list)
