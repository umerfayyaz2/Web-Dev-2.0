// dynamic_table_creation.js

// Step 1: Create a <table> element
let table = document.createElement('table');

// Step 2: Define data for the table
let data = [
  ['Name', 'Age', 'City'],
  ['Alice', 25, 'New York'],
  ['Bob', 30, 'Los Angeles'],
  ['Charlie', 35, 'Chicago']
];

// Step 3: Populate the table with rows and cells
for (let row of data) {
  let tr = document.createElement('tr'); // Create a <tr> element
  for (let cell of row) {
    let td = document.createElement('td'); // Create a <td> element
    td.textContent = cell; // Set the cell content
    tr.appendChild(td); // Append the cell to the row
  }
  table.appendChild(tr); // Append the row to the table
}

// Step 4: Add the table to the DOM
document.body.appendChild(table);