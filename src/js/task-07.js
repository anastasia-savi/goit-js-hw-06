const span = document.querySelector("#text");
const input = document.querySelector("#font-size-control");
span.getAttribute("style");
span.style.fontSize = "16px";
const changeFontSize = (event) => {
  span.style.fontSize = input.value + "px";
};
input.addEventListener("input", changeFontSize);
