function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let newDiv = document.createElement("div");
    boxes.append(newDiv);
    let widthHeight = 30;
    newDiv.style.width = `${widthHeight + i * 10}px`;
    newDiv.style.height = `${widthHeight + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
  }
}
createButton.addEventListener("click", () => {
  createBoxes(Number(input.value));
});
function destroyBoxes() {
  boxes.innerHTML = "";
}
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
