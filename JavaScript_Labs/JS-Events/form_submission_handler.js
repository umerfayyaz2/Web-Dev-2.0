// form_submission_handler.js

// HTML Structure
/*
<form id="loginForm">
  <label>Username: <input type="text" name="username"></label><br>
  <label>Password: <input type="password" name="password"></label><br>
  <button type="submit">Login</button>
</form>
*/

// Step 1: Select the form element
let loginForm = document.getElementById("loginForm");

// Step 2: Attach a submit event handler
loginForm.addEventListener("submit", (event) => {
  // Step 3: Prevent default form submission behavior
  event.preventDefault();

  // Step 4: Validate form inputs
  let username = loginForm.elements.username.value.trim();
  let password = loginForm.elements.password.value.trim();

  if (!username || !password) {
    alert("Please fill out all fields.");
    return;
  }

  // Step 5: Simulate successful login
  alert("Login successful!");
});