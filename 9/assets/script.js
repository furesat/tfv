/* =============================================================
   TFV Österreich — JavaScript
   Mobile menu · Cookie consent · Smooth scroll · Section observer
   Vanilla JS · No tracking · DSGVO-konform
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
      const label = menuToggle.querySelector('.menu-label');
      if (label) label.textContent = isOpen ? 'Schließen' : 'Menü';
    });

    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const label = menuToggle.querySelector('.menu-label');
        if (label) label.textContent = 'Menü';
      });
    });
  }

  /* -------- Cookie Banner (DSGVO) --------
     Note: keine Tracker oder Analytics bis ausdrückliche Zustimmung.
     Nur technisch notwendige Cookies (Consent-Speicherung).
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
      /* localStorage nicht verfügbar */
    }
  }

  function showBanner() {
    if (banner) banner.classList.add('show');
  }

  function hideBanner() {
    if (banner) banner.classList.remove('show');
  }

  if (banner && !getConsent()) {
    setTimeout(showBanner, 600);
  }

  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      setConsent('accepted');
      hideBanner();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      setConsent('rejected');
      hideBanner();
    });
  }

  /* -------- Active Navigation Highlighting (current page) -------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* -------- Smooth Scroll for in-page anchors -------- */
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();

        const offset = 80; /* sticky header height */
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
          window.scrollTo(0, targetPos);
        } else {
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }

        /* Set focus for accessibility */
        target.setAttribute('tabindex', '-1');
        setTimeout(function () {
          target.focus({ preventScroll: true });
        }, 400);

        /* Update URL without jumping */
        if (history.pushState) {
          history.pushState(null, null, '#' + targetId);
        }
      }
    });
  });

  /* -------- Section Observer for active anchor highlighting -------- */
  const sectionLinks = document.querySelectorAll('.primary-nav a[href*="#"]');
  const sections = [];

  sectionLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href.indexOf('#') !== -1) {
      const id = href.split('#')[1];
      const section = document.getElementById(id);
      if (section) {
        sections.push({ link: link, section: section });
      }
    }
  });

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sections.forEach(function (s) {
            if (s.section === entry.target) {
              s.link.classList.add('is-active');
            } else {
              s.link.classList.remove('is-active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach(function (s) {
      observer.observe(s.section);
    });
  }

  /* -------- Smooth focus on hash navigation from URL -------- */
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
