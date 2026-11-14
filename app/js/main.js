const dialog = document.getElementById('booking');
const openBtns = document.querySelectorAll('[data-modal-open]');

openBtns.forEach((btn) => {
  btn.addEventListener('click', () => dialog.showModal());
});

dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

const btn = document.querySelector('.menu__btn');
const list = document.querySelector('.menu__list');

btn.addEventListener('click', () => {
  btn.classList.toggle('is-active');
  list.classList.toggle('is-open');
});