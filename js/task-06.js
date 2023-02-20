let textInput = document.querySelector("#validation-input");

const dataLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", () => {
  if (textInput.value.length <= dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
