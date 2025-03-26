// HTML Structure
/*
<button id="greetButton">Greet</button>
*/

// Step 1: Select the button element
let greetButton = document.getElementById("greetButton");

// Step 2: Attach a click event handler
greetButton.addEventListener("click", () => {
  alert("Hello, World!");
});