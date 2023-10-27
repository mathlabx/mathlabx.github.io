/*
Trapezoid Perimeter

Description:
This function generates a problem related to finding the perimeter of a trapezoid. It randomly generates the values for the slant sides, upper base, and lower base of the trapezoid within specific ranges. Using these values, it calculates the perimeter of the trapezoid and constructs a question asking the user to find the perimeter. It also provides the formula for calculating the perimeter of a trapezoid in the answer. The function returns the question and answer in an array.

Example Usage:
const result = TrapezoidPerimeter();
console.log(result);
// Example output: ["A trapezoid has two slant sides 12 and 18 and two bases 7 and 25. Calculate the perimeter of this trapezoid.", "Add the four side lengths to get the perimeter, which is 62."]

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