const textInput = document.querySelector("#validation-input");
const attribute = Number(textInput.getAttribute("data-length"));
const inputBlur = (event) => {
  if (event.currentTarget.value.length >= attribute) {
    return textInput.classList.add("valid");
  } else {
    return textInput.classList.toggle("invalid");
  }
};
textInput.addEventListener("blur", inputBlur);
console.dir(inputBlur);
