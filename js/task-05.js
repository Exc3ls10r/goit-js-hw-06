const inputRef = document.querySelector('#name-input');
const userNameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
  if (event.currentTarget.value === '') {
    userNameRef.textContent = "Anonymous";
  } else {
    userNameRef.textContent = event.currentTarget.value;
  }
});
