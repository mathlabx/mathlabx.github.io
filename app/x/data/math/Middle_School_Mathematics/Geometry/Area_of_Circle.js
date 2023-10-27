/*
Circle Area

Description:
This function generates a problem related to the calculation of the area of a circle. It randomly generates a radius within a specified range, constructs a question based on it, and calculates the area using the appropriate formula. The answer is then provided, rounded to two decimal places.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = CircleArea();
console.log(result);
// Example output: ['Given the radius of a circle as 5 units, find the area of the circle. Round to the nearest hundredth.', 'The area of a circle with a radius of 5 units is 78.54 square units.']
// The question asks for the calculation of the area, and the answer provides the result rounded to two decimal places.

*/

$X.math.Middle_School_Mathematics.Geometry.CircleArea = function () {
    var radius = Math.floor(Math.random() * 10) + 1; // Generating a random radius between 1 and 10
    var question = "Given the radius of a circle as " + radius + " units, find the area of the circle. Round to the nearest hundredth.";
    var answer = "The area of a circle with a radius of " + radius + " units is " + (Math.PI * radius * radius).toFixed(2) + " square units.";
    return [question, answer];
};
