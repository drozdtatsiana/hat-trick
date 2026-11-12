
  const dialog = document.getElementById('booking');
  const openBtn = document.getElementById('open-booking');

  openBtn.addEventListener('click', () => dialog.showModal());

  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const inside =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
