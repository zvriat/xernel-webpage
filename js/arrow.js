window.addEventListener('scroll', function() {
  const arrow = document.getElementById('scroll-arrow');
  
  // Calc how far the user has scrolled + the screen height
  const scrollPosition = window.innerHeight + window.scrollY;
  // Get the total height of the website
  const threshold = document.documentElement.scrollHeight - 50; 

  // If the user is within 50px of the bottom, hide the arrow
  if (scrollPosition >= threshold) {
    arrow.classList.add('fade-out');
  } else {
    arrow.classList.remove('fade-out');
  }
});