function setupButton() {
    let clickCount = 0;
  
    document.getElementById("myButton").addEventListener("click", function() {
      clickCount++;
      console.log(`Button clicked ${clickCount} times.`);
    });
  }
  
  setupButton();