// Step 1: Select all input fields with class "required"
let requiredFields = document.querySelectorAll('input.required');

// Step 2: Define a function to validate the form
function validateForm() {
  let isValid = true;

  // Check each required field
  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red'; // Highlight empty fields
      isValid = false;
    } else {
      field.style.borderColor = ''; // Reset border color
    }
  });

  return isValid;
}

// Step 3: Attach a submit event listener to the form
document.querySelector('form').addEventListener('submit', event => {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form submission if invalid
    alert('Please fill out all required fields.');
  }
});