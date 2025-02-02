// transformation_percentage.js
const transformationLog = require("./transformation_log_data");

function calculateTransformationPercentage() {
  let transformedDays = 0;
  for (let entry of transformationLog) {
    if (entry.transformed) {
      transformedDays++;
    }
  }
  return (transformedDays / transformationLog.length) * 100;
}

// Example usage
console.log(`Transformation percentage: ${calculateTransformationPercentage()}%`);

module.exports = calculateTransformationPercentage;