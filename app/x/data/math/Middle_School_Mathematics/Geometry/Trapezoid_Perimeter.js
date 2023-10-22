/*
梯形-周长
*/

$X.math.Middle_School_Mathematics.Geometry.TrapezoidPerimeter = function () {
    var side1 = Math.floor(Math.random() * 15) + 5; // Generating a random number between 5 and 20 as the first slant side
    var side2 = Math.floor(Math.random() * 15) + 5; // Generating a random number between 5 and 20 as the second slant side
    var base1 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the first base
    var base2 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the second base
    var perimeter = side1 + side2 + base1 + base2; // Calculating the perimeter
    var question = "A trapezoid has two slant sides " + side1 + " and " + side2 + " and two bases " + base1 + " and " + base2 + ". Calculate the perimeter of this trapezoid.";
    var answer = "Add the four side lengths to get the perimeter, which is " + perimeter + ".";
    return [question, answer];
};