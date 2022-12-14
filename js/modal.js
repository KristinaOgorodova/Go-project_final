const overlay = document.querySelector('.overlay');
const modalOpenBtn =document.querySelector('.header__btn')

const openModal = () => overlay.classList.add('overlay_open');
const closeModal = () => overlay.classList.remove('overlay_open');

modalOpenBtn.addEventListener('click',openModal);

overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.classList.contains('form-close-btn')) {
        closeModal();
    }
});