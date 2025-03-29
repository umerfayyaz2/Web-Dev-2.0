// Select all <div> elements in the DOM
const divs = document.querySelectorAll("div");

// Define the custom addGlobalEventListener function
function addGlobalEventListener(type, selector, callback) {
  // Attach an event listener to the entire document
  document.addEventListener(type, (e) => {
    // Check if the target element matches the specified selector
    if (e.target.matches(selector)) {
      // If it matches, call the callback function
      callback(e);
    }
  });
}

// Example usage of addGlobalEventListener
addGlobalEventListener("click", "div", (e) => {
  console.log("You clicked on a div!");
});

// Additional example: Listen for clicks on elements with class "special"
addGlobalEventListener("click", ".special", (e) => {
  console.log("You clicked on an element with class 'special'!");
});