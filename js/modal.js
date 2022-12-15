const overlay = document.querySelector('.overlay-form');
const modalOpenBtn = document.querySelector('#header__btn');

const openModal = () => overlay.classList.add('overlay-form_open');
const closeModal = () => overlay.classList.remove('overlay-form_open');

modalOpenBtn.addEventListener('click', openModal);

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.classList.contains('form-close-btn')) {
    closeModal();
  }
});

