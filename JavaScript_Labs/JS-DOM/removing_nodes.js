// Remove all <p> elements with class "secret"
let secretParagraphs = document.querySelectorAll('p.secret');
for (let para of secretParagraphs) {
  para.remove();
}