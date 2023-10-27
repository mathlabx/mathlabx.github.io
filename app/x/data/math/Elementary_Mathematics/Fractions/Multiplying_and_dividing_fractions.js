/*
Fraction Multiplication (with consecutive multiplications)

Description:
This function generates a fraction multiplication problem involving multiple fractions. It generates a specified number of random fractions within a given range. The function calculates the product of the generated fractions and simplifies the answer if necessary. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be multiplied.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Multiplication(1, 10, 3, true);
console.log(result); // Output: ['Calculate the product of the following fractions: \\frac{a}{b} \\cdot \\frac{c}{d} \\cdot \\frac{e}{f}', [numerator, denominator]] // The answer is the product of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Multiplication = function (min, max, numCount, divisible) {
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
            expression += " \\cdot ";
        }
    }

    // Calculating the answer
    var answer = [1, 1]; // Initial answer is 1
    for (var i = 0; i < numCount; i++) {
        answer = [answer[0] * fractions[i][0], answer[1] * fractions[i][1]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the problem statement
    let question = [
        "Calculate the product of the following fractions: ",
        expression
    ];

    // Returning the problem statement and the answer
    return [question, answer];
}


/*
Fraction Multiplication with Context

Description:
This function generates a fraction multiplication problem involving multiple fractions with context. It generates a specified number of random fractions within a given range. The function calculates the product of the generated fractions and simplifies the answer if necessary. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be multiplied.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Multiplication_w(1, 10, 3, true);
console.log(result); // Output: ['Multiply the fractions. Simplify your answer if necessary.', [numerator, denominator]] // The answer is the product of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Multiplication_w = function (min, max, numCount, divisible) {
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
            expression += " \\times ";
        }
    }

    // Calculating the answer
    var answer = [1, 1]; // Initial answer is 1
    for (var i = 0; i < numCount; i++) {
        answer = [answer[0] * fractions[i][0], answer[1] * fractions[i][1]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the text description of the problem
    let question = [
        "Multiply the fractions. Simplify your answer if necessary.",
        expression
    ];

    // Returning the problem description and the answer
    return [question, answer];
}


/*
Fraction Division (with consecutive divisions)

Description:
This function generates a fraction division problem involving multiple fractions. It generates a specified number of random fractions within a given range. The function calculates the division of the generated fractions and simplifies the answer if necessary. It returns both the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be divided.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Division(1, 10, 3, true);
console.log(result); // Output: ['Calculate the division of the following fractions: \\frac{a}{b} \\div \\frac{c}{d} \\div \\frac{e}{f}', [numerator, denominator]] // The answer is the division of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Division = function (min, max, numCount, divisible) {
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
            expression += " \\div ";
        }
    }

    // Calculating the answer
    var answer = [fractions[0][0], fractions[0][1]]; // Initial answer is the first fraction
    for (var i = 1; i < numCount; i++) {
        answer = [answer[0] * fractions[i][1], answer[1] * fractions[i][0]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the problem statement
    let question = [
        "Calculate the division of the following fractions: ",
        expression
    ];

    // Returning the problem statement and the answer
    return [question, answer];
}


/*
Fraction Division with Context

Description:
This function generates a fraction division problem involving multiple fractions with context. It generates a specified number of random fractions within a given range. The function calculates the division of the generated fractions and simplifies the answer if necessary. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random fractions.
- max (number): The maximum value for the random fractions.
- numCount (number): The number of fractions to be divided.
- divisible (boolean): Determines whether the answer should be an integer or a fraction.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Division_w(1, 10, 3, true);
console.log(result); // Output: ['Divide the fractions. Simplify your answer if necessary.', [numerator, denominator]] // The answer is the division of the three generated fractions.

*/

$X.math.Elementary_Mathematics.Fractions.Division_w = function (min, max, numCount, divisible) {
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
            expression += " \\ divided \\ by \\ ";
        }
    }

    // Calculating the answer
    var answer = [fractions[0][0], fractions[0][1]]; // Initial answer is the first fraction
    for (var i = 1; i < numCount; i++) {
        answer = [answer[0] * fractions[i][1], answer[1] * fractions[i][0]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // Constructing the text description of the problem
    let question = [
        "Divide the fractions. Simplify your answer if necessary.",
        expression
    ];

    // Returning the problem description and the answer
    return [question, answer];
}
