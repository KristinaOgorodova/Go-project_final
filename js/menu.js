import {overlay} from "./modal.js";

const menuOpenBtn = document.querySelector('.header__menu');
const menu = document.querySelector('.mobile-menu');
const logo = document.querySelector('.header__logo-link');
const oderBtn = document.querySelector('.header__btn');
const img =document.querySelector('.image-btn');

const openMenu = () => {
    menu.classList.add('active');
    overlay.classList.add('overlay_open');
    menuOpenBtn.classList.add('active');
    logo.classList.add('active');
    oderBtn.classList.add('active');
    img.src = '../icons/close-menu-btn.png';
}

const closeMenu = () => {
    menu.classList.remove('active');
    overlay.classList.remove('overlay_open');
    menuOpenBtn.classList.remove('active');
    logo.classList.remove('active');
    oderBtn.classList.remove('active');
    img.src = '../img/menu.svg';
}


menuOpenBtn.addEventListener('click', openMenu);


overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.classList.closest('.header__menu')) {
        closeMenu();
    }
});

