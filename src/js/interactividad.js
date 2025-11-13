// Menú responsive
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar__menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}