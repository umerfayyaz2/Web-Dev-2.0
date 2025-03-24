// Step 1: Select the element
let box = document.getElementById('box');

// Step 2: Modify styles dynamically
box.style.backgroundColor = 'lightblue'; // Set background color
box.style.width = '200px'; // Set width
box.style.height = '100px'; // Set height
box.style.border = '2px solid black'; // Add a border

// Step 3: Toggle visibility
function toggleVisibility() {
  if (box.style.display === 'none') {
    box.style.display = 'block'; // Show the element
  } else {
    box.style.display = 'none'; // Hide the element
  }
}

document.getElementById('toggleButton').addEventListener('click', toggleVisibility);