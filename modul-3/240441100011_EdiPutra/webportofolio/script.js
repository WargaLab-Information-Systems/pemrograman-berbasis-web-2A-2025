// header
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('fixed', 'bg-white','bg-opacity-70', 'backdrop-blur', 'shadow-md');
    header.classList.remove('absolute');
  } else {
    header.classList.remove('fixed', 'bg-white','bg-opacity-70', 'backdrop-blur', 'shadow-md');
    header.classList.add('absolute');
  }
};

// hamburger
const hamburger = document.getElementById('hamburger');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
  navMenu.classList.toggle('hidden');
});