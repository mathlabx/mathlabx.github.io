/*
Integer Comparison

Description:
This function generates an integer comparison problem. It generates two random integers within a specified range and compares them. The function returns both the problem statement and the comparison result, which can be 'greater', 'less', or 'equal'.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.

Outputs:
- Array: An array containing the problem statement and the comparison result.

Example Usage:
const result = Comparing_integers(1, 10);
console.log(result); // Output: ['Compare a and b. Is a greater, equal to, or less than b?', 'greater'] // The comparison result indicates that the first number is greater than the second number.

*/

$X.math.Elementary_Mathematics.Integers.Comparing_integers = function (min, max) {
    // Generate two random integers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the problem statement
    var question = "Compare " + num1 + " and " + num2 + ". Is " + num1 + " greater, equal to, or less than " + num2 + "?";

    // Construct the answer
    var answer;
    if (num1 > num2) {
        answer = "greater";
    } else if (num1 < num2) {
        answer = "less";
    } else {
        answer = "equal";
    }

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Integer Comparison with Context

Description:
This function generates an integer comparison problem with context. It generates two random integers within a specified range and compares them. The function returns both the problem description and the comparison result, which can be 'first', 'second', or 'equal'.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.

Outputs:
- Array: An array containing the problem description and the comparison result.

Example Usage:
const result = Comparing_integers_w(1, 10);
console.log(result); // Output: ['In a classroom, there are n apples. In another classroom, there are m apples. Are there more apples in the first classroom or the second classroom?', 'first'] // The comparison result indicates that there are more apples in the first classroom than in the second classroom.

*/

$X.math.Elementary_Mathematics.Integers.Comparing_integers_w = function (min, max) {
    // Generate two random integers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Select a random scenario and an object
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // Construct the problem description
    var question = randomScenario + "there are " + num1 + " " + randomObject + ". ";
    question += "In another " + randomScenario + "there are " + num2 + " " + randomObject + ". ";
    question += "Are there more " + randomObject + " in the first " + randomScenario + " or the second " + randomScenario + "?";

    // Construct the answer
    var answer;
    if (num1 > num2) {
        answer = "first";
    } else if (num1 < num2) {
        answer = "second";
    } else {
        answer = "equal";
    }

    // Return the problem description and the answer
    return [question, answer];
}
