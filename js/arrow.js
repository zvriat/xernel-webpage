window.addEventListener('scroll', function() {
  const arrow = document.getElementById('scroll-arrow');
  
  // 50px is if the site is scrolled 50px it will disapear
  if (window.scrollY > 50) {
    arrow.classList.add('fade-out');
  } else {
    arrow.classList.remove('fade-out');
  }
});