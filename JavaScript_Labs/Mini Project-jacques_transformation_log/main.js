// main.js
const transformationLog = require("./transformation_log_data");
const addLogEntry = require("./add_log_entry");
const didTransformOnDate = require("./check_transformation");
const calculateTransformationPercentage = require("./transformation_percentage");

// Add a new log entry
addLogEntry("2023-10-05", ["went jogging", "avoided trees"], false);

// Check if Jacque is transformed on a specific date
console.log(didTransformOnDate("2023-10-01")); // Output: true

// Calculate transformation percentage
console.log(`Transformation percentage: ${calculateTransformationPercentage()}%`);