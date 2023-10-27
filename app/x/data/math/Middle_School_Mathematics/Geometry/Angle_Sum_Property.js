/*
Angle Sum Property

Description:
This function generates a problem related to the angle sum property in geometry. It randomly generates angle values within a specified range and constructs a question based on them. The function then calculates the third angle of a triangle using the angle sum property and provides the answer.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = AngleSumProperty();
console.log(result);
// Output: ['In a triangle ABC, if angle A measures 30 degrees and angle B measures 40 degrees, find the measure of angle C.', 'The sum of the angles in a triangle is 180 degrees. Therefore, angle C measures 110 degrees.']
// The question is regarding the calculation of the third angle in a triangle, and the answer applies the angle sum property to find the angle C.

*/

$X.math.Middle_School_Mathematics.Geometry.AngleSumProperty = function () {
    var angle1 = Math.floor(Math.random() * 80) + 10;
    var angle2 = Math.floor(Math.random() * (90 - angle1)) + 1;
    var angle3 = 180 - angle1 - angle2;
    var question = "In a triangle ABC, if angle A measures " + angle1 + " degrees and angle B measures " + angle2 + " degrees, find the measure of angle C.";
    var answer = "The sum of the angles in a triangle is 180 degrees. Therefore, angle C measures " + angle3 + " degrees.";
    return [question, answer];
};
