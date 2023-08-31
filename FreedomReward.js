const menu = document.querySelector(".menu-toggle input");
const ul = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("slide");
});

var mati = document.querySelector(".loading");

window.addEventListener("load", function () {
  mati.style.display = "none";
});

var gambar = document.querySelector(".asa");
window.addEventListener("load", function () {
  gambar.style.display = "none";
});

var tutup = document.querySelector(".backg");
window.addEventListener("load", function () {
  tutup.style.display = "none";
});
