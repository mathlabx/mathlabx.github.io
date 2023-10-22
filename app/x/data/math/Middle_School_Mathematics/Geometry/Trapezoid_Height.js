/*
梯形-高
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