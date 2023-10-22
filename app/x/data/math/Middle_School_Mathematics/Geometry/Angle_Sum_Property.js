/*
Angle Sum Property
*/

$X.math.Middle_School_Mathematics.Geometry.AngleSumProperty = function () {
    var angle1 = Math.floor(Math.random() * 80) + 10;
    var angle2 = Math.floor(Math.random() * (90 - angle1)) + 1;
    var angle3 = 180 - angle1 - angle2;
    var question = "In a triangle ABC, if angle A measures " + angle1 + " degrees and angle B measures " + angle2 + " degrees, find the measure of angle C.";
    var answer = "The sum of the angles in a triangle is 180 degrees. Therefore, angle C measures " + angle3 + " degrees.";
    return [question, answer];
};