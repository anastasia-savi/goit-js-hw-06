const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const findIngr = document.querySelector("#ingredients");

const ingredLi = ingredients.forEach((item) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${item}`;
  findIngr.append(newLi);
});
