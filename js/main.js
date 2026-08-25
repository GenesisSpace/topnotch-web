/* Topnotch Inc. — site scripts */
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile menu toggle */
  var hamburger = document.querySelector('.hamburger');
  var mainNav = document.querySelector('.main-nav');
  var overlay = document.querySelector('.nav-overlay');

  function closeNav() {
    mainNav && mainNav.classList.remove('open');
    overlay && overlay.classList.remove('show');
    hamburger && hamburger.classList.remove('active');
  }

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      overlay && overlay.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }
  if (overlay) overlay.addEventListener('click', closeNav);

  /* Mobile dropdown toggle (Services) */
  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 940) {
        e.preventDefault();
        link.parentElement.classList.toggle('mobile-open');
      }
    });
  });

  /* Close mobile nav on link click (non-dropdown) */
  document.querySelectorAll('.main-nav a:not(.has-dropdown > a)').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* Contact / Quote form submission (demo — replace with real backend or form service) */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
      setTimeout(function () {
        if (btn) { btn.textContent = 'Message Sent ✓'; }
        form.reset();
        setTimeout(function () {
          if (btn) { btn.textContent = originalText; btn.disabled = false; }
        }, 2500);
      }, 900);
    });
  });

  /* Set active nav link based on current page */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav > ul > li').forEach(function (li) {
    var a = li.querySelector(':scope > a');
    if (a && a.getAttribute('href') === path) li.classList.add('active');
  });

});
