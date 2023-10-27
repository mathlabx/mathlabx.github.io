/*
Perimeter of Triangle

Description:
This function generates a problem related to the perimeter of a triangle. It randomly selects three side lengths, calculates the perimeter, and constructs a question and answer based on the generated values. The function returns the question and answer in an array.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = TrianglePerimeter();
console.log(result);
// Example output: ["Given three sides of lengths 4 units, 5 units, and 6 units, find the perimeter of the triangle. Round to the nearest hundredth.", "The perimeter of a triangle with side lengths 4 units, 5 units, and 6 units is 15 units."]
// The question involves finding the perimeter of a triangle with given side lengths, and the answer provides the calculated perimeter.

*/

$X.math.Middle_School_Mathematics.Geometry.TrianglePerimeter = function () {
    var side1 = Math.floor(Math.random() * 10) + 1; // Generating a random length for side 1 between 1 and 10
    var side2 = Math.floor(Math.random() * 10) + 1; // Generating a random length for side 2 between 1 and 10
    var side3 = Math.floor(Math.random() * 10) + 1; // Generating a random length for side 3 between 1 and 10
    var question = "Given three sides of lengths " + side1 + " units, " + side2 + " units, and " + side3 + " units, find the perimeter of the triangle. Round to the nearest hundredth.";
    var perimeter = (side1 + side2 + side3).toFixed(2);
    var answer = "The perimeter of a triangle with side lengths " + side1 + " units, " + side2 + " units, and " + side3 + " units is " + perimeter + " units.";
    return [question, answer];
};