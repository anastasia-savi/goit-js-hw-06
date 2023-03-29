const categoriesAll = document.querySelectorAll(".item");
const arrayCat = categoriesAll.length;
console.log(`Number of categories: ${arrayCat}`);
categoriesAll.forEach((element) => {
  const headerOfcategories = element.querySelector(".item > h2");
  console.log(`Category: ${headerOfcategories.textContent}`);
  const allLi = element.querySelectorAll(".item > ul > li");
  console.log(`Elements: ${allLi.length}`);
});
