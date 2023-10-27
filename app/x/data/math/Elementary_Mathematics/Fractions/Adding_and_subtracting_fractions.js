/*
Fraction Addition (with consecutive additions)

Description:
This function generates a fraction addition problem involving multiple fractions. It generates a specified number of random fractions within a given range. The function calculates the sum of the generated fractions and simplifies the answer if necessary. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be added.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Addition(1, 10, 3, true);
console.log(result); // Output: ['Calculate the sum of the following fractions: \\frac{a}{b} + \\frac{c}{d} + \\frac{e}{f}', [numerator, denominator]] // The answer is the sum of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Addition = function (min, max, numCount, divisible) {
    // Generating random fractions
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // Calculating the greatest common divisor of two fractions
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // Generating 'numCount' random fractions
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // Constructing the expression
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " + ";
        }
    }

    // Calculating the answer
    var answer = [0, 1]; // Initial answer is 0
    for (var i = 0; i < numCount; i++) {
        answer[0] = answer[0] * fractions[i][1] + fractions[i][0] * answer[1];
        answer[1] = answer[1] * fractions[i][1];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the problem statement
    let question = [
        "Calculate the sum of the following fractions: ",
        expression
    ];

    // Returning the problem statement and the answer
    return [question, answer];
}


/*
Fraction Addition with Context

Description:
This function generates a fraction addition problem involving multiple fractions with context. It generates a specified number of random fractions within a given range. The function calculates the sum of the generated fractions and simplifies the answer if necessary. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be added.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Addition_w(1, 10, 3, true);
console.log(result); // Output: ['Add the fractions. Simplify your answer if necessary.', [numerator, denominator]] // The answer is the sum of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Addition_w = function (min, max, numCount, divisible) {
    // Generating random fractions
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // Calculating the greatest common divisor of two fractions
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // Generating 'numCount' random fractions
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // Constructing the text description
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " plus ";
        }
    }

    // Calculating the answer
    var answer = [0, 1]; // Initial answer is 0
    for (var i = 0; i < numCount; i++) {
        answer[0] = answer[0] * fractions[i][1] + fractions[i][0] * answer[1];
        answer[1] = answer[1] * fractions[i][1];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the text description of the problem
    let question = [
        "Add the fractions. Simplify your answer if necessary.",
        expression
    ];

    // Returning the problem description and the answer
    return [question, answer];
}


/*
Fraction Subtraction (with consecutive subtractions)

Description:
This function generates a fraction subtraction problem involving multiple fractions. It generates a specified number of random fractions within a given range. The function calculates the difference of the generated fractions and simplifies the answer if necessary. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be subtracted.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Subtraction(1, 10, 3, true);
console.log(result); // Output: ['Calculate the difference of the following fractions: \\frac{a}{b} - \\frac{c}{d} - \\frac{e}{f}', [numerator, denominator]] // The answer is the difference of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Subtraction = function (min, max, numCount, divisible) {
    // Generating random fractions
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // Calculating the greatest common divisor of two fractions
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // Generating 'numCount' random fractions
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // Constructing the expression
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " - ";
        }
    }

    // Calculating the answer
    var answer = [fractions[0][0], fractions[0][1]]; // Initial answer is the first fraction
    for (var i = 1; i < numCount; i++) {
        answer[0] = answer[0] * fractions[i][1] - fractions[i][0] * answer[1];
        answer[1] = answer[1] * fractions[i][1];
    }

    var gcdValue = findGCD(Math.abs(answer[0]), answer[1]); // Using the absolute value to calculate the greatest common divisor
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the problem statement
    let question = [
        "Calculate the difference of the following fractions: ",
        expression
    ];

    // Returning the problem statement and the answer
    return [question, answer];
}


/*
Fraction Subtraction with Context

Description:
This function generates a fraction subtraction problem involving multiple fractions with context. It generates a specified number of random fractions within a given range. The function calculates the difference of the generated fractions and simplifies the answer if necessary. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be subtracted.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Subtraction_w(1, 10, 3, true);
console.log(result); // Output: ['Subtract the fractions. Simplify your answer if necessary.', [numerator, denominator]] // The answer is the difference of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Subtraction_w = function (min, max, numCount, divisible) {
    // Generating random fractions
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // Calculating the greatest common divisor of two fractions
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // Generating 'numCount' random fractions
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // Constructing the text description
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " minus ";
        }
    }

    // Calculating the answer
    var answer = [fractions[0][0], fractions[0][1]]; // Initial answer is the first fraction
    for (var i = 1; i < numCount; i++) {
        answer[0] = answer[0] * fractions[i][1] - fractions[i][0] * answer[1];
        answer[1] = answer[1] * fractions[i][1];
    }

    var gcdValue = findGCD(Math.abs(answer[0]), answer[1]); // Using the absolute value to calculate the greatest common divisor
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the text description of the problem
    let question = [
        "Subtract the fractions. Simplify your answer if necessary.",
        expression
    ];

    // Returning the problem description and the answer
    return [question, answer];
}
