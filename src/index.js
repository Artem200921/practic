// 1
// import galleryTemplate from "./templates/gallery-item.handlebars";

// import items from "./countries.json";
// const list = document.querySelector(".gallery");
// const layout = galleryTemplate(items);
// list.innerHTML = layout;

// 2

// import heroInfo from "./templates/heros.handlebars";

// import items from "./heroes.json";
// const list = document.querySelector(".list");
// const layout = heroInfo(items);
// list.innerHTML = layout;

// 3

// import characterInfo from "./templates/character.handlebars";

// import items from "./character.json";
// const list = document.querySelector(".gallery");
// const layout = characterInfo(items);
// list.innerHTML = layout;

// 4

// import booksGallery from "./templates/books.handlebars";

// import items from "./books.json";

// const list = document.querySelector(".gallery");
// const layout = booksGallery(items);
// list.innerHTML = layout;

// json - 1

// import { save } from "./modules/storage.js";

// document.querySelector("#inpEmail").addEventListener("input", (event) => {
//   const email = event.currentTarget.value;
//   save("email", email);
//   console.log(localStorage.getItem("email"));
// });

// document.querySelector("#inpName").addEventListener("input", (event) => {
//   const name = event.currentTarget.value;
//   save("name", name);
//   console.log(localStorage.getItem("name"));
// });

// document.querySelector("#comments").addEventListener("input", (event) => {
//   const comments = event.currentTarget.value;
//   save("comments", comments);
//   console.log(localStorage.getItem("comments"));
// });

// window.addEventListener("load", () => {
//   const loadName = localStorage.getItem("name");
//   console.log(loadName);
//   const loadEmail = localStorage.getItem("email");
//   console.log(loadEmail);
//   const loadComments = localStorage.getItem("comments");
//   console.log(loadComments);
// });

// async

// 1

// const openBtn = document.querySelector(".open");
// const closeBtn = document.querySelector(".close");

// let timer = null;

// openBtn.addEventListener("click", () => {
//   timer = setInterval(() => { console.log(`Hello ${Math.random()}`)}, 500);
// });

// closeBtn.addEventListener("click", () => {
//   clearInterval(timer);
// });

// 2

// const startBtn = document.querySelector(".start");
// const closeBtn = document.querySelector(".close");

// let timer = null;

// let num = 0

// startBtn.addEventListener("click", () => {
//   timer = setInterval(() => {
//     console.log(`Часікі тікают: ${num += 1}`);
//   }, 1000);
// });

// closeBtn.addEventListener("click", () => {
//   clearInterval(timer);
// });

// 3

// const startBtn = document.querySelector(".start");
// const closeBtn = document.querySelector(".close");
// const box = document.getElementById("box");

// const colors = ["red", "blue", "yellow", "grey", "black", "green"];

// let timer = null;

// let num = -1;

// startBtn.addEventListener("click", () => {
//   timer = setInterval(() => {
//     box.style.backgroundColor = colors[(num += 1)];
//     console.log(num);
//     console.log(colors[num]);
//     if (num == 5) {
//       num = -1;
//     }
//   }, 3000);
// });

// closeBtn.addEventListener("click", () => {
//   clearInterval(timer);
// });

// 4

// const startBtn = document.querySelector(".start");
// const closeBtn = document.querySelector(".close");
// const subtitle = document.getElementById("subtitle");

// const text = ["Hello", "Bye"];

// let timer = null;

// let num = -1;

// startBtn.addEventListener("click", () => {
//   timer = setInterval(() => {
//     subtitle.innerHTML = text[(num += 1)];
//     console.log(num);
//     console.log(text[num]);
//     if (num == 1) {
//       num = -1;
//     }
//   }, 2000);
// });

// closeBtn.addEventListener("click", () => {
//   clearInterval(timer);
// });

// 5

// const startBtn = document.querySelector(".start");

// function timedouts() {
//   return console.log("Hello my friend");
// }

// startBtn.addEventListener("click", () => {
//     setTimeout(timedouts, 2000);
// });

// DZ 7

import SongsGallary from "./templates/songs.handlebars";

import items from "./items/songs.json";

const list = document.querySelector(".gallery");
const layout = SongsGallary(items);
list.innerHTML = layout;

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    e.target.parentElement.classList.add("deleted")
  }
})

