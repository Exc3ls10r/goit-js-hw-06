const incremBtn = document.querySelector('button[data-action="increment"]');
const decremBtn = document.querySelector('button[data-action="decrement"]');
const counterRef = document.querySelector('#value')
let counterValue = 0;

incremBtn.addEventListener("click", () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
});

decremBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
});
