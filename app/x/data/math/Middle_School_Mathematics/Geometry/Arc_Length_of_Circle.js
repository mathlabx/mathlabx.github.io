/*
圆形-弧长
*/

$X.math.Middle_School_Mathematics.Geometry.CircleArcLength = function () {
    var diameter = Math.floor(Math.random() * 10) + 1; // Generating a random diameter between 1 and 10
    var angle = Math.floor(Math.random() * 180) + 1; // Generating a random angle between 1 and 180
    var question = "In a circle with diameter " + diameter + " units, if the central angle is " + angle + " degrees, find the arc length. Round to the nearest hundredth.";
    var arcLength = (Math.PI * diameter * angle) / 360;
    var answer = "The arc length of a circle with a diameter of " + diameter + " units and a central angle of " + angle + " degrees is " + arcLength.toFixed(2) + " units.";
    return [question, answer];
};
