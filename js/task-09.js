function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;
button.addEventListener("click", bodyColor);
function bodyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = `${randomColor}`;
  color.textContent = randomColor;
}
