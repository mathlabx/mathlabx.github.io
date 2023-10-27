/*
Integer Multiplication

Description:
This function generates an integer multiplication problem. It generates several random integers within a specified range and multiplies them. The function returns both the problem statement and the result of the multiplication.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to multiply.

Outputs:
- Array: An array containing the problem statement and the result of the multiplication.

Example Usage:
const result = Multiplication(1, 10, 3);
console.log(result); // Output: ['Calculate the product of the following integers: a × b × c = ?', 120] // The result of the multiplication is 120.

*/

$X.math.Elementary_Mathematics.Integers.Multiplication = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" × " + num));
        answer *= num;
    }

    question += " = ?";

    return [question, answer];
}


/*
Integer Multiplication with Context

Description:
This function generates an integer multiplication problem with context. It generates several random integers within a specified range and multiplies them. The function returns both the problem description and the result of the multiplication.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to multiply.

Outputs:
- Array: An array containing the problem description and the result of the multiplication.

Example Usage:
const result = Multiplication_w(1, 10, 3);
console.log(result); // Output: ['In a garden, there are n groups of items. If you have a × b × c, how many items are there in total?', 120] // The result of the multiplication is 120.

*/

$X.math.Elementary_Mathematics.Integers.Multiplication_w = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" × " + num));
        answer *= num;
    }

    // Randomly select a scenario
    var scenarios = ["In a garden, ", "At a birthday party, ", "In a classroom, ", "At a campfire, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " groups of items. " + "If you have " + question + ", how many items are there in total?";

    return [question, answer];
}


/*
Integer Division

Description:
This function generates an integer division problem. It generates several random integers within a specified range and divides them. The function returns both the problem statement and the result of the division.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to divide.

Outputs:
- Array: An array containing the problem statement and the result of the division.

Example Usage:
const result = Division(1, 10, 2);
console.log(result); // Output: ['Calculate the result of the division: a ÷ b = ?', 2.5] // The result of the division is 2.5.

*/

$X.math.Elementary_Mathematics.Integers.Division = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;

        // Avoid division by zero
        while (num === 0) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        question += (i === 0 ? num.toString() : (" ÷ " + num));
        answer /= num;
    }

    question += " = ?";

    return [question, answer];
}


/*
Integer Division with Context

Description:
This function generates an integer division problem with context. It generates several random integers within a specified range and divides them. The function returns both the problem description and the result of the division.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to divide.

Outputs:
- Array: An array containing the problem description and the result of the division.

Example Usage:
const result = Division_w(1, 10, 2);
console.log(result); // Output: ['In a bakery, there are n items to be distributed equally. If you divide them a ÷ b, how many items are there in each group?', 2.5] // The result of the division is 2.5.

*/

$X.math.Elementary_Mathematics.Integers.Division_w = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;

        // Avoid division by zero
        while (num === 0) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        question += (i === 0 ? num.toString() : (" ÷ " + num));
        answer /= num;
    }

    // Randomly select a scenario
    var scenarios = ["In a bakery, ", "At a zoo, ", "In a library, ", "At a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items to be distributed equally. " + "If you divide them " + question + ", how many items are there in each group?";

    return [question, answer];
}
