const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting Ananya! We will get back to you soon.');
  form.reset();
});
