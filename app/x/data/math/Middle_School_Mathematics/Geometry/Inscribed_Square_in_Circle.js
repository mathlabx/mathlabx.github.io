/*
Circle Inscribed Square

Description:
This function generates a problem related to the side length of a square inscribed in a circle. It randomly selects a radius for the circle and calculates the side length of the inscribed square. The function constructs a question and answer based on the generated values and returns them as an array.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = CircleInscribedSquare();
console.log(result);
// Example output: ["Consider a circle with radius 7 units. Find the side length of the inscribed square. Round to the nearest hundredth.", "The side length of the inscribed square in a circle with a radius of 7 units is 14.00 units."]
// The question involves finding the side length of the square inscribed in the given circle, and the answer provides the calculated side length.

*/

$X.math.Middle_School_Mathematics.Geometry.CircleInscribedSquare = function () {
    var radius = Math.floor(Math.random() * 10) + 1; // Generating a random radius between 1 and 10
    var question = "Consider a circle with radius " + radius + " units. Find the side length of the inscribed square. Round to the nearest hundredth.";
    var answer = "The side length of the inscribed square in a circle with a radius of " + radius + " units is " + (2 * radius).toFixed(2) + " units.";
    return [question, answer];
};
