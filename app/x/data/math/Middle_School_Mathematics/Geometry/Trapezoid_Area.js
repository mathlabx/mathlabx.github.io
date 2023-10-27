/*
Trapezoid Area

Description:
This function generates a problem related to finding the area of a trapezoid. It randomly generates the values for the upper base, lower base, and height of the trapezoid within specific ranges. Using these values, it calculates the area of the trapezoid and constructs a question asking the user to find the area. It also provides the formula for calculating the area of a trapezoid in the answer. The function returns the question and answer in an array.

Example Usage:
const result = TrapezoidArea();
console.log(result);
// Example output: ["The upper base of a trapezoid is 15, the lower base is 8, and the height is 12. Calculate the area of this trapezoid.", "Use the trapezoid area formula: ((upper base + lower base) * height) / 2, substitute the values to get 126."]

*/

$X.math.Middle_School_Mathematics.Geometry.TrapezoidArea = function () {
    var base1 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the first base
    var base2 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the second base
    var height = Math.floor(Math.random() * 15) + 5; // Generating a random number between 5 and 20 as the height
    var area = ((base1 + base2) * height) / 2; // Calculating the area
    var question = "The upper base of a trapezoid is " + base1 + ", the lower base is " + base2 + ", and the height is " + height + ". Calculate the area of this trapezoid.";
    var answer = "Use the trapezoid area formula: ((upper base + lower base) * height) / 2, substitute the values to get " + area + ".";
    return [question, answer];
};