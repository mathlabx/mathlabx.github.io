/*
梯形-面积
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