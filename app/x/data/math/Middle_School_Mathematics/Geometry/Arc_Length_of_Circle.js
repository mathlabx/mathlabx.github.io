/*
Circle Arc Length

Description:
This function generates a problem related to the calculation of the arc length in a circle. It randomly generates a diameter and an angle within specified ranges, constructs a question based on them, and calculates the arc length using the appropriate formula. The answer is then provided, rounded to two decimal places.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = CircleArcLength();
console.log(result);
// Example output: ['In a circle with diameter 7 units, if the central angle is 120 degrees, find the arc length. Round to the nearest hundredth.', 'The arc length of a circle with a diameter of 7 units and a central angle of 120 degrees is 7.33 units.']
// The question asks for the calculation of the arc length, and the answer provides the result rounded to two decimal places.

*/

$X.math.Middle_School_Mathematics.Geometry.CircleArcLength = function () {
    var diameter = Math.floor(Math.random() * 10) + 1; // Generating a random diameter between 1 and 10
    var angle = Math.floor(Math.random() * 180) + 1; // Generating a random angle between 1 and 180
    var question = "In a circle with diameter " + diameter + " units, if the central angle is " + angle + " degrees, find the arc length. Round to the nearest hundredth.";
    var arcLength = (Math.PI * diameter * angle) / 360;
    var answer = "The arc length of a circle with a diameter of " + diameter + " units and a central angle of " + angle + " degrees is " + arcLength.toFixed(2) + " units.";
    return [question, answer];
};
