/*
Interior Angles

Description:
This function generates a problem related to the interior angles of parallel lines. It randomly selects an angle measure and calculates the measure of the other interior angle. The function constructs a question and answer based on the generated values and returns them as an array.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = InteriorAngles();
console.log(result);
// Example output: ["In parallel lines, if the measure of one interior angle is 120 degrees, what is the measure of the other interior angle?", "Interior angles in parallel lines are supplementary, so the measure of the other interior angle is 60 degrees."]
// The question involves finding the measure of the other interior angle given one angle measure, and the answer provides the calculated measure.

*/

$X.math.Middle_School_Mathematics.Geometry.InteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one interior angle is " + angle1 + " degrees, what is the measure of the other interior angle?";
    var answer = "Interior angles in parallel lines are supplementary, so the measure of the other interior angle is " + (180 - angle1) + " degrees.";
    return [question, answer];
};