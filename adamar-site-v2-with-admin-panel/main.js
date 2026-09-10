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

// ============================================
// HEADER — shrinks slightly after scrolling down
// ============================================
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const onScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============================================
// BUTTONS — ripple effect on click
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (prefersReducedMotion) return;
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 1.4;
    ripple.className = 'btn-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});

// ============================================
// MODEL CARDS — subtle 3D tilt following the cursor
// ============================================
if (!prefersReducedMotion) {
  document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tiltX = (-y * 6).toFixed(2);
      const tiltY = (x * 6).toFixed(2);
      card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============================================
// SPEC NUMBERS — count up from 0 when scrolled into view
// ============================================
const specEls = document.querySelectorAll('.spec-value');
if (specEls.length) {
  const animateCount = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d.]+)(.*)$/);
    if (!match) return; // not a numeric spec (e.g. "Brushless"), leave as-is
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes('.');
    const duration = 900;
    const start = performance.now();

    if (prefersReducedMotion) {
      el.classList.add('counted');
      return;
    }

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = text; // lock to exact original value
        el.classList.add('counted');
      }
    }
    requestAnimationFrame(tick);
  };

  const specObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        specObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  specEls.forEach(el => specObserver.observe(el));
}
