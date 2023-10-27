/*
Circle Circumference

Description:
This function generates a problem related to the calculation of the circumference of a circle. It randomly generates the diameter within a specified range, constructs a question based on this value, calculates the circumference using the appropriate formula, and provides the answer rounded to two decimal places.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = CircleCircumference();
console.log(result);
// Example output: ['Given the diameter of a circle as 8 units, find the circumference of the circle. Round to the nearest hundredth.', 'The circumference of a circle with a diameter of 8 units is 25.13 units.']
// The question asks for the calculation of the circumference, and the answer provides the result rounded to two decimal places.

*/

$X.math.Middle_School_Mathematics.Geometry.CircleCircumference = function () {
    var diameter = Math.floor(Math.random() * 10) + 1; // Generating a random diameter between 1 and 10
    var question = "Given the diameter of a circle as " + diameter + " units, find the circumference of the circle. Round to the nearest hundredth.";
    var answer = "The circumference of a circle with a diameter of " + diameter + " units is " + (Math.PI * diameter).toFixed(2) + " units.";
    return [question, answer];
};
