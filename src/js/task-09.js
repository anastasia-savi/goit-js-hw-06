function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  const span = document.querySelector(".color");
  span.textContent = body.style.backgroundColor;
  console.dir(body);
};
const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor);
