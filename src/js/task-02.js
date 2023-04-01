const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condimentss",
];

const findIngr = document.querySelector("#ingredients");
// const ingredLi = ingredients.((item) => {
//   const newLi = document.createElement("li");
//   newLi.value = item;
// });
// findIngr.append(newLi);
// const ingredLi = ingredients.reduce((acc, item) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item;
//   return newLi;
// }, []);
// findIngr.append(ingredLi);
// console.dir(newLi);
let arr = [];
for (var i = 0; i < ingredients.length; i += 1) {
  const newLi = document.createElement("li");
  newLi.textContent = ingredients[i];
  arr.push(newLi);
}
console.log(i);
findIngr.append(...arr);
// i=6
