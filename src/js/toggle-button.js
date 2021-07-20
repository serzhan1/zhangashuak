const hamburger = document.querySelector('.menu__hamburger');
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.target.closest('.menu').classList.toggle('menu--active');
  })
}