// Replace the first <p> with a new <h1>
let paragraphs = document.body.getElementsByTagName('p');
let newHeading = document.createElement('h1');
newHeading.textContent = 'Welcome!';
paragraphs[0].parentNode.replaceChild(newHeading, paragraphs[0]);