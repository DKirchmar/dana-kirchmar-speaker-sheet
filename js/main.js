/* ============================================================
   DANA KIRCHMAR — SPEAKER SHEET  |  main.js
   ============================================================ */

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const open = mobileMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Download one-sheet — opens printable page in new tab
document.querySelectorAll('[data-action="download-one-sheet"]').forEach(btn => {
  btn.addEventListener('click', () => window.open('one-sheet.html', '_blank'));
});
