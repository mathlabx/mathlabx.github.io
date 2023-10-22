/*
Interior Angles
*/

$X.math.Middle_School_Mathematics.Geometry.InteriorAngles = function () {
    var angle1 = Math.floor(Math.random() * 150) + 10; // Generating a random angle between 10 and 160 degrees
    var question = "In parallel lines, if the measure of one interior angle is " + angle1 + " degrees, what is the measure of the other interior angle?";
    var answer = "Interior angles in parallel lines are supplementary, so the measure of the other interior angle is " + (180 - angle1) + " degrees.";
    return [question, answer];
};