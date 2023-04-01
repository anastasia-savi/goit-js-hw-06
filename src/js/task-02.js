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
  return newLi;
});
findIngr.append(...arr);

// let arr = [];
// const ingredLi = ingredients.forEach((item) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item;
//   arr.push(newLi);
// });
// findIngr.append(...arr);

// findIngr.append(newLi);
// const ingredLi = ingredients.reduce((acc, item) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item;
//   return newLi;
// }, []);
// findIngr.append(ingredLi);
// console.dir(newLi);
// let arr = [];
// for (var i = 0; i < ingredients.length; i += 1) {
//   const newLi = document.createElement("li");
//   newLi.textContent = ingredients[i];
//   arr.push(newLi);
// }
// findIngr.append(...arr);
