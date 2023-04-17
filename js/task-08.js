
const form = document.querySelector(".login-form");
const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: useremail.value,
    password: password.value
  }
  if (useremail.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені')
  }
  console.log(elements);
  form.reset();
});