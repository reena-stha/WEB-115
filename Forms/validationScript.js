// JavaScript code for form validation

function isAlphanumeric(value) {
  // Regular expression pattern for alphanumeric input
  var regExpr = /^[a-zA-Z0-9]*$/;
  return regExpr.test(value);
}	
  

function validateInput(event) {
  // Retrieve the input field value
  const inputTextBox = document.getElementById('inputField');

  // Check if the input value matches the pattern
  var textBoxValue = inputTextBox.value;

  if (isAlphanumeric(textBoxValue))
    confirm('Would you like to submit this form?'); // Valid input: display confirmation and submit the form
  else
  {
    alert('The input is not alphanumeric!'); // Invalid input: display error message
    event.preventDefault();
  }  
}

// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', (event) => validateInput(event));
