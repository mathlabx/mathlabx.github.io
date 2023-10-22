/*
Area_of_Triangle
*/

$X.math.Middle_School_Mathematics.Geometry.TriangleArea = function () {
    var base = Math.floor(Math.random() * 10) + 1; // Generating a random base length between 1 and 10
    var height = Math.floor(Math.random() * 10) + 1; // Generating a random height between 1 and 10
    var question = "Consider a triangle with base " + base + " units and height " + height + " units. Find the area of the triangle. Round to the nearest hundredth.";
    var area = (0.5 * base * height).toFixed(2);
    var answer = "The area of a triangle with base " + base + " units and height " + height + " units is " + area + " square units.";
    return [question, answer];
};