let textInput = document.querySelector("#validation-input");

let dataLength = textInput.getAttribute("data-length");
dataLength = Number(dataLength);
textInput.addEventListener("blur", () => {
  if (textInput.value.length === dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
