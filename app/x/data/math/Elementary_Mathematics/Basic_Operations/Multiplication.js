/*
Basic Operations - Multiplication

Description:
This function generates a multiplication problem by calculating the product of two random numbers within the specified range. It provides both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Multiplication(1, 10);
console.log(result); // Output: ['8 × 2 = ?', 16] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Multiplication = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the problem statement and the answer
    var question = num1 + " × " + num2 + " = ?";
    var answer = num1 * num2;

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Basic Operations - Multiplication with Context

Description:
This function generates a multiplication problem with context, providing a scenario and an object to count. It includes both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Multiplication_w(1, 10);
console.log(result); // Output: ['In a classroom, there are 8 groups of 2 pencils. How many pencils are there in total?', 16] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Multiplication_w = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Randomly select a scenario and an object
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // Construct the problem description and the answer for the word problem
    var question = randomScenario + "there are " + num1 + " groups of " + num2 + " " + randomObject + ". ";
    question += "How many " + randomObject + " are there in total?";
    var answer = num1 * num2;

    // Return the problem description and the answer for the word problem
    return [question, answer];
}
