const banner = document.querySelector('.cookie-banner');
const saved = localStorage.getItem('tfv_cookie_choice');
if (!saved && banner) banner.classList.add('active');
document.querySelectorAll('[data-cookie]').forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem('tfv_cookie_choice', btn.dataset.cookie);
    banner.classList.remove('active');
  });
});
