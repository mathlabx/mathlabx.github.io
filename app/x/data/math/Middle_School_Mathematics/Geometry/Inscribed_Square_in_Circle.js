/*
圆形-内部方形
*/

$X.math.Middle_School_Mathematics.Geometry.CircleInscribedSquare = function () {
    var radius = Math.floor(Math.random() * 10) + 1; // Generating a random radius between 1 and 10
    var question = "Consider a circle with radius " + radius + " units. Find the side length of the inscribed square. Round to the nearest hundredth.";
    var answer = "The side length of the inscribed square in a circle with a radius of " + radius + " units is " + (2 * radius).toFixed(2) + " units.";
    return [question, answer];
};
