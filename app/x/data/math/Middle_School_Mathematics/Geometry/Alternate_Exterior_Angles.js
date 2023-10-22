/*
Alternate Exterior Angles
*/

$X.math.Middle_School_Mathematics.Geometry.AlternateExteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one alternate exterior angle is " + angle1 + " degrees, what is the measure of the other alternate exterior angle?";
    var answer = "Alternate exterior angles in parallel lines are equal, so the measure of the other alternate exterior angle is also " + angle1 + " degrees.";
    return [question, answer];
};