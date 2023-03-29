const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const changeOutput = (event) => {
  output.textContent = event.currentTarget.value;
};
textInput.addEventListener("input", changeOutput);
