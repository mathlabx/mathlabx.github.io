/*
Basic Operations - Subtraction

Description:
This function generates a subtraction problem by calculating the difference between two random numbers within the specified range. It provides both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Subtraction(1, 10);
console.log(result); // Output: ['8 - 3 = ?', 5] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Subtraction = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Ensure num1 is greater than or equal to num2 to avoid negative answers
    if (num1 < num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Construct the problem statement and the answer
    var question = num1 + " - " + num2 + " = ?";
    var answer = num1 - num2;

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Basic Operations - Subtraction with Context

Description:
This function generates a subtraction problem with context, providing a scenario and an object to count. It includes both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Subtraction_w(1, 10);
console.log(result); // Output: ['In a classroom, there are 8 pencils. If you take away 3 pencils, how many pencils do you have left?', 5] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Subtraction_w = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Ensure num1 is greater than or equal to num2 to avoid negative answers
    if (num1 < num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Randomly select a scenario and an object
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // Construct the problem description and the answer for the word problem
    var question = randomScenario + "there are " + num1 + " " + randomObject + ". ";
    question += "If you take away " + num2 + " " + randomObject + ", how many " + randomObject + " do you have left?";
    var answer = num1 - num2;

    // Return the problem description and the answer for the word problem
    return [question, answer];
}
