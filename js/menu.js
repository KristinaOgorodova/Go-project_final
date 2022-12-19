
const menuOpenBtn = document.querySelector('.header__menu');
const menu = document.querySelector('.mobile-menu');
const logo = document.querySelector('.header__logo-link');
const oderBtn = document.querySelector('.header__btn');
const img = document.querySelector('.image-btn');
const overlay = document.querySelector('.overlay');
const headerContainer = document.querySelector('.header__container');
const menuCloseBtn = document.querySelector('.header__menu_close');

const openMenu = () => {
  menu.classList.add('active');
  overlay.classList.add('overlay_open');
  headerContainer.classList.add('active');
  menuCloseBtn.classList.add('active');
  menuOpenBtn.classList.add('active')

};

const closeMenu = () => {
  menu.classList.remove('active');
  overlay.classList.remove('overlay_open');
  menuOpenBtn.classList.toggle('active');
  logo.classList.remove('active');
  oderBtn.classList.remove('active');
  menuCloseBtn.classList.remove('active');
  menuOpenBtn.classList.remove('active')
};


menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);


overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay) {
    closeMenu();
  }
});

