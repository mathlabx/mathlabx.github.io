/*
Fraction Simplification

Description:
This function generates a fraction simplification problem. It generates a random fraction within a given range and then simplifies it. The function calculates the greatest common divisor of the numerator and denominator of the fraction and simplifies it accordingly. It returns both the problem statement and the simplified answer.

Inputs:
- min (number): The minimum value for the random fraction.
- max (number): The maximum value for the random fraction.

Outputs:
- Array: An array containing the problem statement and the simplified answer.

Example Usage:
const result = Simplifying_fractions(1, 10);
console.log(result); // Output: ['Simplify the fraction $\\frac{a}{b}$.', '\\frac{numerator}{denominator}'] // The simplified fraction is the result of the generated random fraction.

*/

$X.math.Elementary_Mathematics.Fractions.Simplifying_fractions = function (min, max) {
    // Generating a random fraction
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

    var fraction = generateRandomFraction(min, max);
    var numerator = fraction[0];
    var denominator = fraction[1];

    // Calculating the greatest common divisor of the fraction
    var gcdValue = findGCD(numerator, denominator);

    // Simplifying the fraction
    numerator = numerator / gcdValue;
    denominator = denominator / gcdValue;

    // Constructing the problem statement
    var question = "Simplify the fraction $" + "\\frac{" + fraction[0] + "}{" + fraction[1] + "}$.";

    // Constructing the answer
    var answer = "\\frac{" + numerator + "}{" + denominator + "}";

    // Returning the problem statement and the answer
    return [question, answer];
}


/*
Fraction Simplification with Context

Description:
This function generates a fraction simplification problem with context. It generates a random fraction within a given range and then simplifies it. The function calculates the greatest common divisor of the numerator and denominator of the fraction and simplifies it accordingly. It returns both the problem description and the simplified answer.

Inputs:
- min (number): The minimum value for the random fraction.
- max (number): The maximum value for the random fraction.

Outputs:
- Array: An array containing the problem description and the simplified answer.

Example Usage:
const result = Simplifying_fractions_w(1, 10);
console.log(result); // Output: ['Simplify the fraction a/b.', 'numerator/denominator'] // The simplified fraction is the result of the generated random fraction.

*/

$X.math.Elementary_Mathematics.Fractions.Simplifying_fractions_w = function (min, max) {
    // Generating a random fraction
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

    var fraction = generateRandomFraction(min, max);
    var numerator = fraction[0];
    var denominator = fraction[1];

    // Calculating the greatest common divisor of the fraction
    var gcdValue = findGCD(numerator, denominator);

    // Simplifying the fraction
    numerator = numerator / gcdValue;
    denominator = denominator / gcdValue;

    // Constructing the text description of the problem
    var question = "Simplify the fraction " + fraction[0] + "/" + fraction[1] + ".";

    // Constructing the text description of the answer
    var answer = numerator + "/" + denominator;

    // Returning the problem description and the answer
    return [question, answer];
}
