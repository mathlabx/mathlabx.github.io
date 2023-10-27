/*
Triangle Area

Description:
This function generates a problem related to the calculation of the area of a triangle. It randomly generates the base and height within specified ranges, constructs a question based on these values, calculates the area using the appropriate formula, and provides the answer rounded to two decimal places.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = TriangleArea();
console.log(result);
// Example output: ['Consider a triangle with base 6 units and height 4 units. Find the area of the triangle. Round to the nearest hundredth.', 'The area of a triangle with base 6 units and height 4 units is 12.00 square units.']
// The question asks for the calculation of the area, and the answer provides the result rounded to two decimal places.

*/

$X.math.Middle_School_Mathematics.Geometry.TriangleArea = function () {
    var base = Math.floor(Math.random() * 10) + 1; // Generating a random base length between 1 and 10
    var height = Math.floor(Math.random() * 10) + 1; // Generating a random height between 1 and 10
    var question = "Consider a triangle with base " + base + " units and height " + height + " units. Find the area of the triangle. Round to the nearest hundredth.";
    var area = (0.5 * base * height).toFixed(2);
    var answer = "The area of a triangle with base " + base + " units and height " + height + " units is " + area + " square units.";
    return [question, answer];
};
