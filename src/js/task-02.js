const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condimentss",
];

const findIngr = document.querySelector("#ingredients");
const arr = ingredients.map((item) => {
  const newLi = document.createElement("li");
  newLi.textContent = item;
  newLi.classList.add("item");
  return newLi;
});
findIngr.append(...arr);
