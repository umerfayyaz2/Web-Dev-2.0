// Step 1: Access the <body> element
const body = document.body;

// Step 2: Create a new <h1> element
const heading = document.createElement('h1');

// Step 3: Set the text content of the <h1> element
heading.textContent = 'Welcome to My Website!';

// Step 4: Append the <h1> element to the <body>
body.appendChild(heading);

// Step 5: Create a new <p> element
const paragraph = document.createElement('p');

// Step 6: Set the text content of the <p> element
paragraph.textContent = 'This is a dynamically added paragraph.';

// Step 7: Append the <p> element to the <body>
body.appendChild(paragraph);

// Step 8: Modify the existing <h1> element
heading.style.color = 'blue'; // Change the text color to blue
heading.style.fontSize = '24px'; // Change the font size to 24px

// Step 9: Add an event listener to the <p> element
paragraph.addEventListener('click', () => {
  alert('You clicked the paragraph!');
});