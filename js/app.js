// DOM
const navWrapper = document.querySelector('.navbar-wrapper'),
  hero = document.querySelector('.hero'),
  winWidth = window.innerWidth,
  heroHeight = hero.getBoundingClientRect().height;

if (winWidth > 1200) {
  window.addEventListener('scroll', () => {
    console.log(heroHeight);
    console.log(window.scrollY);
    if ((heroHeight / 4) < window.scrollY) {
      navWrapper.classList.add('dark');
    } else {
      navWrapper.classList.remove('dark');
    }
  });
}