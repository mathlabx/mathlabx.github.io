/*
Geometry - Corresponding Angles
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