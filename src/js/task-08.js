const form = document.querySelector(".login-form");

const getInput = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  const objUser = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  event.currentTarget.reset();
  console.log(objUser);
  return objUser;
};
form.addEventListener("submit", getInput);
