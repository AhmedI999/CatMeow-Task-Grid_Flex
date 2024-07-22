document.getElementById("bars").addEventListener("click", () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('nav-open');
});
// Sticky implementation
const heroEl = document.querySelector('.hero');
const observer = new IntersectionObserver(function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    document.body.classList.add('sticky');
  }
  if (entry.isIntersecting) {
    document.body.classList.remove('sticky');
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
observer.observe(heroEl);

// Set current year to the copyright
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
yearEl.textContent = String(currentYear);
