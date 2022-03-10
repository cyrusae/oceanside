document.addEventListener('DOMContentLoaded', function() {
  var parallaxElement = document.getElementById('parallax');
  if (getComputedStyle(document.getElementById('overflow')).webkitOverflowScrolling) {
    document.body.classList.add('sticky-parallax');
  } else {
    document.body.classList.add('overflow-parallax');
  }
});
