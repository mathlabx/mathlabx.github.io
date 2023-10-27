/*
Decimal Addition (with multiple consecutive additions)

Description:
This function generates an addition problem involving decimal numbers, with the option to add multiple numbers consecutively. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to add.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Addition(1, 10, 3, 2);
console.log(result); // Output: ['2.34 + 5.67 + 6.78 = ?', 14.79] // The answer is calculated based on the generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Addition = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" + " + num));
        answer += num;
    }

    question += " = ?";

    return [question, answer];
}

/*
Decimal Addition with Context (with multiple consecutive additions)

Description:
This function generates an addition problem involving decimal numbers with context, allowing for multiple consecutive additions. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to add.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Addition_w(1, 10, 3, 2);
console.log(result); // Output: ['In a recipe, you have 3 ingredients. If you add 2.34 + 5.67 + 6.78, what is the total quantity?', 14.79] // The answer is calculated based on the generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Addition_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" + " + num));
        answer += num;
    }

    // Randomly select a scenario
    var scenarios = ["In a recipe, ", "At a grocery store, ", "In a science experiment, ", "At a restaurant, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " ingredients. " + "If you add " + question + ", what is the total quantity?";

    return [question, answer];
}

/*
Decimal Subtraction (with multiple consecutive subtractions)

Description:
This function generates a subtraction problem involving decimal numbers, with the option to subtract multiple numbers consecutively. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to subtract.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Subtraction(1, 10, 3, 2);
console.log(result); // Output: ['6.78 - 5.67 - 2.34 = ?', -1.23] // The answer is calculated based on the generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Subtraction = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" - " + num));
        answer -= num;
    }

    question += " = ?";

    return [question, answer];
}


/*
Decimal Subtraction with Context (with multiple consecutive subtractions)

Description:
This function generates a subtraction problem involving decimal numbers with context, allowing for multiple consecutive subtractions. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to subtract.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Subtraction_w(1, 10, 3, 2);
console.log(result); // Output: ['In a recipe, you have 3 ingredients. If you take away 6.78 - 5.67 - 2.34, what is the remaining quantity?', -1.23] // The answer is calculated based on the generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Subtraction_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" - " + num));
        answer -= num;
    }

    // Randomly select a scenario
    var scenarios = ["In a recipe, ", "At a grocery store, ", "In a science experiment, ", "At a restaurant, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " ingredients. " + "If you take away " + question + ", what is the remaining quantity?";

    return [question, answer];
}
