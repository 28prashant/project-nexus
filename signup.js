document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the entered email
    const email = document.getElementById('signupEmail').value;
  
    // Send the email to the backend for user registration
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend (e.g., show success message)
      console.log(data);
    })
    .catch(error => {
      // Handle errors (e.g., show error message)
      console.error('Error:', error);
    });
  });
  