// HTML Structure
/*
<div id="outer">
  <div id="inner">Click me</div>
</div>
*/

// Step 1: Select elements
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

// Step 2: Attach event handlers
outer.addEventListener("click", () => {
  console.log("Outer div clicked (bubbling)");
}, false); // Default: Bubbling phase

inner.addEventListener("click", () => {
  console.log("Inner div clicked (bubbling)");
}, false);

// Prevent event propagation in the inner div
inner.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Inner div clicked (capturing)");
}, true); // Capturing phase