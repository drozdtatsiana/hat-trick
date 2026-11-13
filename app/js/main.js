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