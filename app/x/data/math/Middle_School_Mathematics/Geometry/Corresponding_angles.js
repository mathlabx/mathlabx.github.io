/*
Corresponding Angles

Description:
This function generates a problem related to corresponding angles in a given geometric figure. It randomly selects angle values and constructs a question and answer based on the generated angles. The function returns the question and the corresponding answer.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = Corresponding_angles();
console.log(result);
// Example output: ["In the given figure, if ∠1 and ∠2 are corresponding angles, and the measure of ∠1 is 60 degrees, what is the measure of ∠2?", "The measure of ∠2 is 60 degrees."]
// The question involves corresponding angles in a geometric figure, and the answer provides the measure of ∠2 based on the given measure of ∠1.

*/

$X.math.Middle_School_Mathematics.Geometry.Corresponding_angles = function () {

    // Generate random angle values
    let angle1 = Math.floor(Math.random() * 90) + 1;
    let angle2 = angle1;

    // Construct the question and answer
    let question = "In the given figure, if ∠1 and ∠2 are corresponding angles, and the measure of ∠1 is " + angle1 + " degrees, what is the measure of ∠2?";
    let answer = "The measure of ∠2 is " + angle2 + " degrees.";

    // Return the question and answer in an array
    return [question, answer];
}