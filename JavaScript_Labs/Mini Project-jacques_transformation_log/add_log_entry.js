// add_log_entry.js
const transformationLog = require("./transformation_log_data");

function addLogEntry(date, activities, transformed) {
  transformationLog.push({ date, activities, transformed });
}

// Example usage
addLogEntry("2023-10-04", ["went shopping", "avoided trees", "cooked dinner"], false);
console.log(transformationLog); // Check the updated log

module.exports = addLogEntry;