/**
 * UI/UX Pro Max Scroll Reveal Utility
 * Implements intersection observer to handle "reveal on scroll" animations.
 */
export function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: stop observing after reveal for performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}
