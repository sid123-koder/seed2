// Toggle burger menu on mobile
document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Form handling and thank-you alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you, ' + this.querySelector('input').value + '! Your message has been sent.');
  this.reset();
});
