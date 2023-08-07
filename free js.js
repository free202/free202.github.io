const menu = document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');

menu.addEventListener ('click', function () {
  ul.classList.toggle('slide');
});

const nav = document.querySelector('nav');
window.addEventListener ('pointerdown', function() {
  nav.classList.toggle('stiky')
})