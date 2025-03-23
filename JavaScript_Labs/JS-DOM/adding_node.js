// Insert a new <p> element before the first <p>
let paragraphs = document.body.getElementsByTagName('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.insertBefore(newParagraph, paragraphs[0]);