// Get the form element
const form = document.getElementById('registration-form');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values of the form fields
  const event = document.getElementById('myListBox').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Check if the required fields are filled
  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill in all the required fields.');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
  } else if (!validatePhone(phone)) {
    alert('Please enter a valid phone number.');
  } else {
    // Create an alert with the form data
    alert(`Thank you for your enquiry, ${name}! We will get back to you soon.`);
  }
});

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
  const phoneRegex = /^0\d{9}$/;
  return phoneRegex.test(phone);
}