// HTML Structure
/*
<button id="actOnceButton">Act-once button</button>
*/

// Step 1: Select the button element
let actOnceButton = document.getElementById("actOnceButton");

// Step 2: Define the event handler function
function actOnce() {
  console.log("Done.");
  
  // Step 3: Remove the event handler after execution
  actOnceButton.removeEventListener("click", actOnce);
}

// Step 4: Attach the event handler
actOnceButton.addEventListener("click", actOnce);