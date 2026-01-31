(function() {
  function initArrow() {
    const arrow = document.getElementById('scroll-arrow');
    if (!arrow) return;

    // Hide arrow completely if disabled in config
    if (typeof SHOW_SCROLL_ARROW !== 'undefined' && !SHOW_SCROLL_ARROW) {
      arrow.style.display = 'none';
      return;
    }

    function updateArrow() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 50;
      if (scrollPosition >= threshold) {
        arrow.classList.add('fade-out');
      } else {
        arrow.classList.remove('fade-out');
      }
    }

    window.addEventListener('scroll', updateArrow);
    updateArrow(); // run once on load in case page is already scrolled
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArrow);
  } else {
    initArrow();
  }
})();