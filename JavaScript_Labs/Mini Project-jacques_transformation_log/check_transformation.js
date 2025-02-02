// check_transformation.js
const transformationLog = require("./transformation_log_data");

function didTransformOnDate(date) {
  for (let entry of transformationLog) {
    if (entry.date === date) {
      return entry.transformed;
    }
  }
  return false;
}

// Example usage
console.log(didTransformOnDate("2023-10-01")); // Output: true
console.log(didTransformOnDate("2023-10-02")); // Output: false

module.exports = didTransformOnDate;