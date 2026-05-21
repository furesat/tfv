/* =============================================================
   TFV Österreich — Shared JavaScript
   Mobile menu · Cookie consent · No tracking until consent
   ============================================================= */

(function () {
  'use strict';

  /* -------- Mobile Menu -------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.querySelector('.menu-label').textContent = isOpen ? 'Schließen' : 'Menü';
    });

    // Close menu when a nav link is clicked
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const label = menuToggle.querySelector('.menu-label');
        if (label) label.textContent = 'Menü';
      });
    });
  }

  /* -------- Cookie Banner (DSGVO-konform) --------
     Wichtig: Hier werden noch keine Tracker geladen. Erst nach
     ausdrücklicher Zustimmung würden Analytics oder Marketing-Cookies
     aktiviert. Aktuell nur funktionale Cookies (Consent-Speicherung).
  -------- */
  const banner = document.getElementById('cookie-banner');
  const CONSENT_KEY = 'tfv_consent';

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      // localStorage nicht verfügbar — Banner bleibt
    }
  }

  function showBanner() {
    if (banner) banner.classList.add('show');
  }

  function hideBanner() {
    if (banner) banner.classList.remove('show');
  }

  if (banner && !getConsent()) {
    // Banner mit kleiner Verzögerung zeigen, damit Seite zuerst lädt
    setTimeout(showBanner, 600);
  }

  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      setConsent('accepted');
      hideBanner();
      // Hier könnten in Zukunft Analytics geladen werden:
      // loadAnalytics();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      setConsent('rejected');
      hideBanner();
    });
  }

  /* -------- Active Navigation Highlighting -------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* -------- Smooth focus on hash navigation (for skip-link) -------- */
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target && typeof target.focus === 'function') {
      setTimeout(function () {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: false });
      }, 100);
    }
  }
})();
