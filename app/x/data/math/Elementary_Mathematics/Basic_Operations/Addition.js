/*
Basic Operations - Addition

Description:
This function generates an addition problem by adding two random numbers within the specified range. It provides both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Addition(1, 10);
console.log(result); // Output: ['5 + 3 = ?', 8] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Addition = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the problem statement and the answer
    var question = num1 + " + " + num2 + " = ?";
    var answer = num1 + num2;

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Basic Operations - Addition with Context

Description:
This function generates an addition problem with context, providing a scenario and an object to add. It includes both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Addition_w(1, 10);
console.log(result); // Output: ['In a classroom, there are 5 books. If you add 3 more books, how many books do you have in total?', 8] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Addition_w = function (min, max) {
    // Generate two random numbers within the specified range
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Randomly select a scenario and an object
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // Construct the problem description and the answer for the word problem
    var question = randomScenario + "there are " + num1 + " " + randomObject + ". ";
    question += "If you add " + num2 + " more " + randomObject + ", how many " + randomObject + " do you have in total?";
    var answer = num1 + num2;

    // Return the problem description and the answer for the word problem
    return [question, answer];
}
