// const data = await fetch('./user.json')

// console.log(data)

const data = [];

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signUp = document.querySelector(".signup-button");

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  const userName = name.value;
  const userEmail = email.value;
  const userPassword = password.value;
  data.userName = userName;
  data.userEmail = userEmail;
  data.userpauserPassword = userPassword;
  const result = {
    userName: userName,
    userName: userName,
    userPassword: userPassword,
  };
  data.push(result);
  console.log(data);
});
