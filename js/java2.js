// java2.js

// Function to validate the registration form
function validateForm() {
  // Get the form elements
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Validate the form elements
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email == "") {
    alert("Please enter your email");
    return false;
  }
  if (phone == "") {
    alert("Please enter your phone number");
    return false;
  }

  // Validate the phone number
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  // If all fields are valid, return true
  return true;
}

// Add an event listener to the form submission
document.getElementById("registration-form").addEventListener("submit", function(event) {
  if (validateForm()) {
    alert("Thank you for registering! We will contact you soon.");
  } else {
    alert("Please correct the errors in the form.");
    event.preventDefault();
  }
});