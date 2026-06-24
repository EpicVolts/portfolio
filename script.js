const body = document.body;
const menuButton = document.querySelector('.menu-button');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const cursorGlow = document.querySelector('.cursor-glow');

menuButton?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

if (cursorGlow) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 35, 240)}ms`;
  observer.observe(element);
});
