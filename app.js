document.querySelectorAll('[data-segment]').forEach((group) => {
  group.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    group.querySelectorAll('button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelector('[data-menu]')?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

document.addEventListener('click', (event) => {
  if (window.innerWidth > 860 || !document.body.classList.contains('menu-open')) return;
  if (!event.target.closest('.sidebar') && !event.target.closest('[data-menu]')) {
    document.body.classList.remove('menu-open');
  }
});
