// adding json values in js file, treats it as object thats why key aren't having double quotes but if the same thing will be in JSON, each and everything should be inside double quotes
// const user = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

// what if we want to fetch the data through js and show it in DOM
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("Got the data : ");
//     console.log(json);
//   });

// the above code is the default code

// --------------------------------------------------------------------------

// saving the fetched data in a variable
// let userData;

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("Got the data : ");
//     console.log(json);
//     userData = json;
//   });

// this above code was generating the GET method

// --------------------------------------------------------------------------

// this below code will generate post method

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// --------------------------------------------------------------------------

// when we send request using post in thunderclient or postman we paste the url as :https://jsonplaceholder.typicode.com/posts
// and then we open the body, in the JSON we put our content : body, title and userid but not the id as:
// {
//   "userId": 1,
//   "title": "optio molestias id quia eum",
//   "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
// }

// --------------------------------------------------------------------------

// sending the get request to fetch the real data

// const image = document.querySelector("img");

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("Got the data : ");
//     console.log(json.message);
//     image.src = json.message;
//   });

// --------------------------------------------------------------------------

// fetching the data on event , API used : DOG API

// const button = document.querySelector("button");

// const image = document.querySelector("img");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log("Got the data : ");
//       console.log(json.message);
//       image.src = json.message;
//     });
// });

// --------------------------------------------------------------------------

// using slow api to test how fast the data comes

// const button = document.querySelector("button");

// const image = document.querySelector("img");

// button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   // parsing into object before it loads
//   xhr.responseType = "json";

//   xhr.addEventListener("load", () => {
//     console.log(xhr);
//   });

//   // xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.open("GET", "https://httpbin.org/anything");
//   xhr.send();
// });

// --------------------------------------------------------------------------
// again using dog api to update DOM

const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // parsing into object before it loads
  xhr.responseType = "json";

  // xhr.addEventListener("load", () => {
  //   image.src = xhr.response.message;

  //   console.log(xhr);
  // });

  xhr.onload = () => {
    image.src = xhr.response.message;
    console.log(xhr);
  };

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  // xhr.open("GET", "https://httpbin.org/anything");
  xhr.send();
});
