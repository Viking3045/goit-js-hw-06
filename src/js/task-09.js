function getRandomHexColor() {
  return   `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}
const button = document.querySelector(".change-color")
const color = document.querySelector(".color")
const body = document.body
button.addEventListener("click", bodyColor)
function bodyColor (){
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = getRandomHexColor()
}