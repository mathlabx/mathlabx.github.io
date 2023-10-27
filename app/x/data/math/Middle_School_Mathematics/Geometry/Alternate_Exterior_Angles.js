/*
Alternate Exterior Angles

Description:
This function generates a problem related to alternate exterior angles in geometry. It randomly generates an angle value within a specified range and constructs a question based on it. The function then provides the answer, emphasizing the equality of alternate exterior angles in parallel lines.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = AlternateExteriorAngles();
console.log(result);
// Output: ['In parallel lines, if the measure of one alternate exterior angle is 100 degrees, what is the measure of the other alternate exterior angle?', 'Alternate exterior angles in parallel lines are equal, so the measure of the other alternate exterior angle is also 100 degrees.']
// The question is regarding alternate exterior angles, and the answer explains their equality in parallel lines.

*/

$X.math.Middle_School_Mathematics.Geometry.AlternateExteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one alternate exterior angle is " + angle1 + " degrees, what is the measure of the other alternate exterior angle?";
    var answer = "Alternate exterior angles in parallel lines are equal, so the measure of the other alternate exterior angle is also " + angle1 + " degrees.";
    return [question, answer];
};
