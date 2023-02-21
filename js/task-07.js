let input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `${input.value}px`;
const callback = function () {
  span.style.fontSize = `${input.value}px`;
};
input.addEventListener("input", callback);
