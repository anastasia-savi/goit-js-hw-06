const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const changeVal = document.querySelector("#value");
let counterValue = 0;
const minusOne = () => {
  counterValue -= 1;
  changeVal.textContent = counterValue;
};
const plusOne = () => {
  counterValue += 1;
  changeVal.textContent = counterValue;
};
decrement.addEventListener("click", minusOne);
increment.addEventListener("click", plusOne);
