const fontSizeControlRef = document.querySelector('#font-size-control');
const testTextRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', (event) => {
  testTextRef.style.fontSize = `${event.currentTarget.value}px`;
});
