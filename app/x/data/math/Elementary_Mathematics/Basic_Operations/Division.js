/*
Basic Operations - Division

Description:
This function generates a division problem by dividing two random numbers within the specified range. It provides both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Division(1, 10);
console.log(result); // Output: ['8 ÷ 2 = ?', 4] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Division = function (min, max) {
    // Generate two random numbers within the specified range
    var dividend = 0;
    var divisor = 0;

    // Generate a non-zero divisor to avoid division by zero
    do {
        dividend = Math.floor(Math.random() * (max - min + 1)) + min;
        divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (divisor === 0 && dividend === 0);

    // Ensure the dividend is divisible by the divisor
    var remainder = dividend % divisor;
    dividend -= remainder;

    // Construct the problem statement and the answer
    var question = dividend + " ÷ " + divisor + " = ?";
    var answer = dividend / divisor;

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Basic Operations - Division with Context

Description:
This function generates a division problem with context, providing a scenario and an object to share. It includes both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Division_w(1, 10);
console.log(result); // Output: ['In a classroom, there are 8 pencils. If you share them equally among 2 people, how many pencils does each person get?', 4] // The answer is calculated based on the generated random numbers.
*/

$X.math.Elementary_Mathematics.Basic_Operations.Division_w = function (min, max) {
    // Generate two random numbers within the specified range
    var dividend = Math.floor(Math.random() * (max - min + 1)) + min;
    var divisor = 0;

    // Generate a non-zero divisor to avoid division by zero
    do {
        divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (divisor === 0);

    // Ensure the dividend is divisible by the divisor
    var remainder = dividend % divisor;
    dividend -= remainder;

    // Randomly select a scenario and an object
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // Construct the problem description and the answer for the word problem
    var question = randomScenario + "there are " + dividend + " " + randomObject + ". ";
    question += "If you share them equally among " + divisor + " people, how many " + randomObject + " does each person get?";
    var answer = dividend / divisor;

    // Return the problem description and the answer for the word problem
    return [question, answer];
}
