// dom_navigation.js

// Step 1: Create a new <div> element
const container = document.createElement('div');
container.id = 'container';

// Step 2: Create child elements
const heading = document.createElement('h1');
heading.textContent = 'My Favorite Books';

const paragraph1 = document.createElement('p');
paragraph1.textContent = 'I love reading science fiction.';
paragraph1.className = 'genre';

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'My favorite book is Dune.';
paragraph2.className = 'favorite';

// Step 3: Append child elements to the <div>
container.appendChild(heading);
container.appendChild(paragraph1);
container.appendChild(paragraph2);

// Step 4: Add the <div> to the <body>
document.body.appendChild(container);

// Step 5: Find elements using DOM methods
// Get all <p> elements
const paragraphs = container.getElementsByTagName('p');
console.log('All paragraphs:', Array.from(paragraphs));

// Get the element with id "container"
const containerElement = document.getElementById('container');
console.log('Container element:', containerElement);

// Get all elements with class "favorite"
const favoriteElements = document.getElementsByClassName('favorite');
console.log('Favorite elements:', Array.from(favoriteElements));

// Step 6: Traverse the DOM tree
// Access the first child of the container
const firstChild = container.firstElementChild;
console.log('First child of container:', firstChild);

// Access the last child of the container
const lastChild = container.lastElementChild;
console.log('Last child of container:', lastChild);

// Access the next sibling of the first <p>
const nextSibling = paragraph1.nextElementSibling;
console.log('Next sibling of first paragraph:', nextSibling);