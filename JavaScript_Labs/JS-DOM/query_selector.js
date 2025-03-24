// HTML Structure
/*
<div>
  <button id="start">Start</button>
  <button class="action">Action 1</button>
  <button class="action">Action 2</button>
</div>
*/

// Step 1: Select the first button with class "action"
let actionButton = document.querySelector('.action');

// Step 2: Add a click event listener
actionButton.addEventListener('click', () => {
  alert('Action button clicked!');
});