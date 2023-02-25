const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === Number(validationInputRef.dataset.length)) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  } else {
    validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');
  }
});