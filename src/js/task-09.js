function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
  console.dir(body);
};
button.addEventListener("click", changeColor);
