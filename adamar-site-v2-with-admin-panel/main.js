// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Models dropdown in nav
const dropdown = document.getElementById('models-dropdown');
if (dropdown) {
  const toggleBtn = dropdown.querySelector('.nav-dropdown-toggle');
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal: any element with class "scroll-reveal" fades/slides up
// into place the first time it enters the viewport. Respects users who
// have reduced motion turned on.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger');

if (revealTargets.length) {
  if (prefersReducedMotion) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => observer.observe(el));
  }
}

// Contact form (placeholder submit — see README for how to connect this
// to a real inbox using a free form service like Formspree or Web3Forms)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "Thanks — this form isn't wired up to an inbox yet. See the README for a free, no-code way to connect it.";
    form.reset();
  });
}

// FAQ accordion (used on faq.html)
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});
