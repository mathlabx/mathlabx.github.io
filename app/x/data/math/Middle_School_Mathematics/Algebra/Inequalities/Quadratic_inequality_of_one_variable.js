/*
Quadratic Inequalities

Description:
This function generates quadratic inequality problems of the form ax^2 + bx + c < 0 or ax^2 + bx + c > 0, where a, b, and c are random coefficients within the specified range. The function returns an array with the problem statement and the solution expressed in the Katex notation.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Quadratic_inequality_of_one_variable(1, 5);
console.log(result); // Output: [['Solve the equation:', '3x^2 + 4x - 2 > 0'], 'x < \\frac{-2}{3}']
// The problem is to solve the quadratic inequality 3x^2 + 4x - 2 > 0, and the solution is x < -2/3.

*/

$X.math.Middle_School_Mathematics.Algebra.Quadratic_inequality_of_one_variable = function (min, max) {
        var answer;
        let valid = false;
        function getRandomSymbolKatex() {
                const symbols = ['>', '<', '\\geq', '\\leq'];
                const randomIndex = Math.floor(Math.random() * symbols.length);
                return symbols[randomIndex];
        }
        const randomSymbolKatex = getRandomSymbolKatex();
        while (!valid) {
                // Generate random fractions
                function generateRandomFraction(min, max) {
                        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
                        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
                        return [numerator, denominator];
                }

                // Find the greatest common divisor of two fractions
                function findGCD(a, b) {
                        a = Math.abs(a);
                        b = Math.abs(b);
                        if (b === 0) {
                                return a;
                        }
                        return findGCD(b, a % b);
                }

                var a, b, c, discriminant;
                do {
                        a = Math.floor(Math.random() * (max - min + 1)) + min;
                        b = Math.floor(Math.random() * (max - min + 1)) + min;
                        c = Math.floor(Math.random() * (max - min + 1)) + min;

                        discriminant = b * b - 4 * a * c;

                        // Check if the fraction is too large and regenerate if necessary
                        var numerator = Math.abs(b);
                        var denominator = 2 * Math.abs(a);

                        var chanceOfNoSolution = Math.random();
                        if (chanceOfNoSolution < 0.1 && discriminant >= 0) {
                                a = 0; // Adjust to make the equation have no solution
                                discriminant = -1; // Set discriminant to -1 to indicate no solution
                        }
                } while (
                        a === 0 ||
                        discriminant < 0 ||
                        findGCD(numerator, denominator) > max
                );

                // Simplify the fraction
                function simplifyFraction(numerator, denominator) {
                        var gcd = findGCD(numerator, denominator);
                        var sign = (numerator < 0) === (denominator < 0) ? '' : '-';
                        numerator = Math.abs(numerator) / gcd;
                        denominator = Math.abs(denominator) / gcd;
                        return (numerator % denominator == 0) ? `${sign}${numerator / denominator}` : `${sign}\\frac{${numerator}}{${denominator}}`;
                }

                // Construct the problem statement
                var question = [
                        `Solve the equation: `,
                        `${a}x^2 + ${b}x + ${c} ${randomSymbolKatex} 0`
                ];

                function compareKatexFractions(fraction1, fraction2) {
                        function parseKatexFraction(fraction) {
                                const stripped = fraction.replace(/\\frac{(\d+)}{(\d+)}/, '$1/$2');
                                return eval(stripped);
                        }

                        const float1 = parseKatexFraction(fraction1);
                        const float2 = parseKatexFraction(fraction2);

                        const sortedFractions = [fraction1, fraction2].sort((a, b) => {
                                const floatA = parseKatexFraction(a);
                                const floatB = parseKatexFraction(b);
                                return floatA - floatB;
                        });

                        return sortedFractions;
                }

                // Construct the answer
                if (discriminant === 0) {
                        var x = -b / (2 * a);
                        if (x % 1 !== 0) {
                                // If the answer is a decimal, simplify it to a fraction
                                answer = simplifyFraction(-b, 2 * a);
                        } else {
                                answer = `x = ${x}`;
                        }
                } else if (discriminant === -1) {
                        answer = "∅";
                } else {
                        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                        var simplifiedFraction1 = simplifyFraction(-b + Math.sqrt(discriminant), 2 * a);
                        var simplifiedFraction2 = simplifyFraction(-b - Math.sqrt(discriminant), 2 * a);
                        let sortedFractions = compareKatexFractions(simplifiedFraction1, simplifiedFraction2);
                        let new_sy = "";
                        if (randomSymbolKatex == '>' || randomSymbolKatex == '<') new_sy = "<";
                        if (randomSymbolKatex == '\\geq' || randomSymbolKatex == '\\leq') new_sy = "\\leq";
                        answer = `${sortedFractions[0]} ${new_sy} x ${new_sy} ${sortedFractions[1]}`;
                }

                if (answer != "" && answer.length <= 40) valid = true;
        }

        // Return the problem statement and the answer
        return [question, answer];
}
