// HTML Structure
/*
<div>
  <p class="info">Paragraph 1</p>
  <p class="info">Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
*/

// Step 1: Select all <p> elements with class "info"
let paragraphs = document.querySelectorAll('p.info');

// Step 2: Convert NodeList to an array for easier manipulation
let paragraphArray = Array.from(paragraphs);

// Step 3: Add a border to each selected paragraph
paragraphArray.forEach(p => {
  p.style.border = '1px solid blue';
});