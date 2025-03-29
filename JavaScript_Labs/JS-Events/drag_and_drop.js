// HTML Structure
/*
<div id="draggable" draggable="true" style="width: 100px; height: 50px; background: lightblue;">Drag Me</div>
<div id="dropZone" style="width: 200px; height: 100px; border: 2px dashed gray; margin-top: 20px;">Drop Zone</div>
*/

// Step 1: Select elements
let draggable = document.getElementById("draggable");
let dropZone = document.getElementById("dropZone");

// Step 2: Add dragstart event handler
draggable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "Dragged Item");
  console.log("Drag started.");
});

// Step 3: Add dragover event handler to drop zone
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault(); // Allow dropping
  console.log("Dragging over drop zone.");
});

// Step 4: Add drop event handler to drop zone
dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  let data = event.dataTransfer.getData("text/plain");
  console.log(`Dropped: ${data}`);
  dropZone.style.backgroundColor = "lightgreen";
});