/*圆形-圆周*/

$X.math.Middle_School_Mathematics.Geometry.CircleCircumference = function () {
    var diameter = Math.floor(Math.random() * 10) + 1; // Generating a random diameter between 1 and 10
    var question = "Given the diameter of a circle as " + diameter + " units, find the circumference of the circle. Round to the nearest hundredth.";
    var answer = "The circumference of a circle with a diameter of " + diameter + " units is " + (Math.PI * diameter).toFixed(2) + " units.";
    return [question, answer];
};
