const button = document.querySelector(".btn");
const text = document.querySelector(".container-text");
const selection = document.querySelector(".container-selection");
const btn = document.querySelector(".btn");
const selecteur1 = document.getElementById("1");
const selecteur2 = document.getElementById("2");
const selecteur3 = document.getElementById("3");
const selecteur4 = document.getElementById("4");
const selecteur5 = document.getElementById("5");
const thankYou = document.querySelector(".thank-you");

button.addEventListener("click", () => {
  console.log("button go");
  text.style.display = "none";
  selection.style.display = "none";
  btn.style.display = "none";
  thankYou.style.display = "block";
});

selecteur1.addEventListener("click", () => {
  console.log("hello world");
  selecteur1.classList.toggle("isactive");
  const sum = "1";
  document.getElementById("choix1").innerHTML = sum;
});
selecteur2.addEventListener("click", () => {
  console.log("hello world");
  selecteur2.classList.toggle("isactive");
  const sum = "2";
  document.getElementById("choix1").innerHTML = sum;
});
selecteur3.addEventListener("click", () => {
  console.log("hello world");
  selecteur3.classList.toggle("isactive");
  const sum = "3";
  document.getElementById("choix1").innerHTML = sum;
});
selecteur4.addEventListener("click", () => {
  console.log("hello world");
  selecteur4.classList.toggle("isactive");
  const sum = "4";
  document.getElementById("choix1").innerHTML = sum;
});
selecteur5.addEventListener("click", () => {
  console.log("hello world");
  selecteur5.classList.toggle("isactive");
  const sum = "5";
  document.getElementById("choix1").innerHTML = sum;
});
