function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector('button.change-color');
const textColorValueRef = document.querySelector('span.color');

changeColorBtnRef.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  textColorValueRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
