/* The == operator is known as the loose equality operator.
 -It compares two values for equality, but unlike the strict equality operator (===),
 -it performs type conversion if the values being compared are of different types.

 1. How the == Operator Works
 -Loose Equality: The == operator first checks if the two values are of the same type.
 If they are, it directly compares them.
 -Type Conversion: If the two values are of different types, JavaScript tries to convert one or both of them
 to a common type before making the comparison.   */

//  Case 1: Comparing a String and a Number

console.log ("10" = 10); // this will result True

/*
In Case 1:
-The string "10" is converted to the number 10.
-Then, 10 is compared to 10, which results in true.
*/

// Case 2: Comparing a Boolean and a Non-Boolean Value

console.log(true == 1); // true - converts true into 1
console.log(false == 0); // true - converts false into 0

// Case 3: Comparing null and undefined

console.log(null == undefined); // Results true

/*
Case 3 Explanation:
-null and undefined are loosely equal, but they are not equal to any other values (including 0, "", or false).
*/

// Case 4: Comparing Objects with Primitives

console.log([1, 2] == "1,2"); // true

/*
Case 4 Explanation:
-The array [1, 2] is converted to the string "1,2" using the toString() method.
-Then, "1,2" is compared to "1,2", resulting in true.
*/

// Case 5: Special Cases - JavaScript has some unique cases where type conversion can produce surprising results.

console.log("" == 0);      // true - The empty string "" is converted to the number 0, so "" == 0 becomes 0 == 0.
console.log(0 == false);   // true - The number 0 is considered equal to false because false converts to 0.
console.log("" == false);  // true - The empty string "" is also considered equal to false because both are converted to 0.

/*
3. Why Can This Be Confusing?
- The type conversions performed by == can lead to unexpected results if you're not familiar with the specific rules JavaScript follows.
- It's easy to assume that == will behave consistently, but the hidden type conversions can cause bugs if you're not careful.

4. Best Practices
- Use === for Strict Equality:
  - To avoid confusion, it's generally recommended to use the === operator for comparisons.
  - This operator does not perform type conversion; it only returns true if both values are of the same type and have the same value.
*/

console.log("10" === 10); // false
console.log(true === 1);  // false
console.log(null === undefined); // false








