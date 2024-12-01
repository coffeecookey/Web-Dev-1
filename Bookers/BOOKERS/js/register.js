document.addEventListener('DOMContentLoaded', function () {
  // Typewriter effect for "Create A New Account"
  const typewriterText = 'Create A New Account';
  let index = 0;
  const speed = 100;

  function typeWriter() {
    if (index < typewriterText.length) {
      document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  // Handle registration form submission
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Add form validation or backend call here, e.g., via AJAX

    alert('Registered successfully!');
    window.location.href = "login.html"; // Redirect to login page after success
  });
});
