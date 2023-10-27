/*
Trapezoid Height

Description:
This function generates a problem related to finding the height of a trapezoid. It randomly generates the values for the area, upper base, and lower base of the trapezoid within specific ranges. Using these values, it calculates the height of the trapezoid and constructs a question asking the user to find the height. It also provides the formula for calculating the height of a trapezoid in the answer. The function returns the question and answer in an array.

Example Usage:
const result = TrapezoidHeight();
console.log(result);
// Example output: ["A trapezoid has an area of 175, an upper base of 17, and a lower base of 10. Calculate the height of this trapezoid.", "Use the trapezoid area formula: (2 * area) / (upper base + lower base), substitute the values to get 14."]

*/

$X.math.Middle_School_Mathematics.Geometry.TrapezoidHeight = function () {
    var area = Math.floor(Math.random() * 200) + 50; // Generating a random number between 50 and 250 as the area
    var base1 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the first base
    var base2 = Math.floor(Math.random() * 20) + 5; // Generating a random number between 5 and 25 as the second base
    var height = (2 * area) / (base1 + base2); // Calculating the height
    var question = "A trapezoid has an area of " + area + ", an upper base of " + base1 + ", and a lower base of " + base2 + ". Calculate the height of this trapezoid.";
    var answer = "Use the trapezoid area formula: (2 * area) / (upper base + lower base), substitute the values to get " + height + ".";
    return [question, answer];
};