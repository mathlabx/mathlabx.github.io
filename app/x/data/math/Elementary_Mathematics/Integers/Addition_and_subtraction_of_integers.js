/*
Integer Addition

Description:
This function generates an integer addition problem. It generates random integers within a specified range and then adds them together. The function returns both the problem statement and the sum of the generated integers.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to be added.

Outputs:
- Array: An array containing the problem statement and the sum of the generated integers.

Example Usage:
const result = Addition(1, 10, 3);
console.log(result); // Output: ['Calculate the sum of the following numbers: a + b + c = ?', sum] // The sum is the result of adding the generated random integers.

*/

$X.math.Elementary_Mathematics.Integers.Addition = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" + " + num));
        answer += num;
    }

    question += " = ?";

    return [question, answer];
}


/*
Integer Addition with Context

Description:
This function generates an integer addition problem with context. It generates random integers within a specified range and then adds them together. The function returns both the problem description and the sum of the generated integers.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to be added.

Outputs:
- Array: An array containing the problem description and the sum of the generated integers.

Example Usage:
const result = Addition_w(1, 10, 3);
console.log(result); // Output: ['In a basket, there are n items. If you add a + b + c, how many items are there in total?', sum] // The sum is the result of adding the generated random integers.

*/

$X.math.Elementary_Mathematics.Integers.Addition_w = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" + " + num));
        answer += num;
    }

    // Selecting a random scenario
    var scenarios = ["In a basket, ", "At a party, ", "In a store, ", "On a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items. " + "If you add " + question + ", how many items are there in total?";

    return [question, answer];
}


/*
Integer Subtraction

Description:
This function generates an integer subtraction problem. It generates random integers within a specified range and then subtracts them. The function returns both the problem statement and the result of the subtraction.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to be subtracted.

Outputs:
- Array: An array containing the problem statement and the result of the subtraction.

Example Usage:
const result = Subtraction(1, 10, 3);
console.log(result); // Output: ['Calculate the difference of the following numbers: a - b - c = ?', result] // The result is the result of subtracting the generated random integers.

*/

$X.math.Elementary_Mathematics.Integers.Subtraction = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" - " + num));
        answer -= num;
    }

    question += " = ?";

    return [question, answer];
}


/*
Integer Subtraction with Context

Description:
This function generates an integer subtraction problem with context. It generates random integers within a specified range and then subtracts them. The function returns both the problem description and the result of the subtraction.

Inputs:
- min (number): The minimum value for the random integers.
- max (number): The maximum value for the random integers.
- numCount (number): The number of integers to be subtracted.

Outputs:
- Array: An array containing the problem description and the result of the subtraction.

Example Usage:
const result = Subtraction_w(1, 10, 3);
console.log(result); // Output: ['In a basket, there are n items. If you take away a - b - c, how many items are left?', result] // The result is the result of subtracting the generated random integers.

*/

$X.math.Elementary_Mathematics.Integers.Subtraction_w = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" - " + num));
        answer -= num;
    }

    // Selecting a random scenario
    var scenarios = ["In a basket, ", "At a party, ", "In a store, ", "On a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items. " + "If you take away " + question + ", how many items are left?";

    return [question, answer];
}
