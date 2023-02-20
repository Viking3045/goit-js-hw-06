function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector("#boxes");
const inputEl = document.querySelector('[type="number"]');
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");



create.addEventListener("click", createBox);
destroy.addEventListener("click", destroyBoxes);



function createBox(event) {
  divBoxes;
  const divsEl = createBoxes(Number(inputEl.value));
  divBoxes.append(...divsEl);
}

function createBoxes(amount) {
  const array = Array.from({ length: amount }, (item, i) => {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.height = `${i * 10 + 30}px`;
    divEl.style.width = `${i * 10 + 30}px`;

    return divEl;
  });
  // console.log(array);
  return array;
}

function destroyBoxes() {
  divBoxes.innerHTML = " ";
}
