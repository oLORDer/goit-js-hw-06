const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  let res;

  email.value === '' || password.value === ''
    ? alert('все поля должны быть заполнены.')
    : (res = {
        email: email.value,
        password: password.value,
      });

  event.currentTarget.reset();

  console.log(res);
});
