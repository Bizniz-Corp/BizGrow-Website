// You can add any JavaScript logic here, such as form validation or interaction
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (!email || !password) {
        alert('Please fill in both email and password.');
      } else {
        alert('Form submitted!');
        // Add form submission logic here
      }
    });
  });
  
