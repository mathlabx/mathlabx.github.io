/*
Corresponding Exterior Angles

Description:
This function generates a problem related to corresponding exterior angles in parallel lines. It randomly selects an angle value and constructs a question and answer based on the generated angle. The function returns the question and the corresponding answer, indicating the relationship between the two corresponding exterior angles in parallel lines.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = CorrespondingExteriorAngles();
console.log(result);
// Example output: ["In parallel lines, if the measure of one corresponding exterior angle is 70 degrees, what is the measure of the other corresponding exterior angle?", "Corresponding exterior angles in parallel lines are supplementary, so the measure of the other corresponding exterior angle is 110 degrees."]
// The question involves corresponding exterior angles in parallel lines, and the answer provides the relationship between the measures of the corresponding exterior angles.

*/

$X.math.Middle_School_Mathematics.Geometry.CorrespondingExteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one corresponding exterior angle is " + angle1 + " degrees, what is the measure of the other corresponding exterior angle?";
    var answer = "Corresponding exterior angles in parallel lines are supplementary, so the measure of the other corresponding exterior angle is " + (180 - angle1) + " degrees.";
    return [question, answer];
};