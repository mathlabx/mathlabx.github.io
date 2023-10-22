/*
Geometry - Alternate Angles
*/

$X.math.Middle_School_Mathematics.Geometry.Alternate_angles = function () {

    // Generate random angle values
    let angle3 = Math.floor(Math.random() * 90) + 1;
    let angle4 = angle3;

    // Construct the question and answer
    let question = "In the given diagram, if ∠3 and ∠4 are alternate angles, and the measure of ∠3 is " + angle3 + " degrees, what is the measure of ∠4?";
    let answer = "The measure of ∠4 is " + angle4 + " degrees.";

    // Return the question and answer in an array
    return [question, answer];
}
