const registrationFormRef = document.querySelector('form.login-form');

registrationFormRef.addEventListener('submit', (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const pwd = formElements.password.value;

  if (mail.length === 0 || pwd.length === 0) {
    window.alert('ВСІ ПОЛЯ ПОВИННІ БУТИ ВВЕДЕНІ !!!')
  } else {
    const formData = {
      email: mail,
      password: pwd,
    }
    console.log(formData);
    registrationFormRef.reset();
  }
});
