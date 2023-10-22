/*圆形-面积*/

$X.math.Middle_School_Mathematics.Geometry.CircleArea = function () {
    var radius = Math.floor(Math.random() * 10) + 1; // Generating a random radius between 1 and 10
    var question = "Given the radius of a circle as " + radius + " units, find the area of the circle. Round to the nearest hundredth.";
    var answer = "The area of a circle with a radius of " + radius + " units is " + (Math.PI * radius * radius).toFixed(2) + " square units.";
    return [question, answer];
};
