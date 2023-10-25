/*
Polynomials Multiplication

Description:
This function generates a problem of polynomial multiplication, simplifying the expressions within the specified coefficient constraints. It creates different types of polynomial multiplication problems based on the provided boolean inputs.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.
- one_two (boolean): Determines whether to include the 1*2 type of multiplication.
- two_two (boolean): Determines whether to include the 2*2 type of multiplication.
- two_three (boolean): Determines whether to include the 2*3 type of multiplication.
- three_three (boolean): Determines whether to include the 3*3 type of multiplication.

Outputs:
- Array: An array containing the problem and answer in Katex format.

Example Usage:
const result = Polynomials_multiplication(1, 10, true, false, true, false);
console.log(result); // Output: ['3x(4x+2y)', '12x^2+6xy']
*/

$X.math.Middle_School_Mathematics.Algebra.Polynomials_multiplication = function (min, max, one_two, two_two, two_three, three_three) {
    var problem = '';
    var answer = '';

    // Generate random coefficients for the terms
    var coefficient1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var coefficient2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Generate random variables
    var variable1 = 'x';
    var variable2 = 'y';

    if (one_two) {
        // Logic for 1*2 type of multiplication
        var term1 = `${coefficient1}${variable1}`;
        var term2 = `${coefficient2}(${coefficient1}${variable1}+${coefficient2}${variable2})`;
        problem = term1 + term2;
        answer = `${coefficient1 * coefficient2}(${coefficient1}x+${coefficient2}y)`;
    }

    if (two_two) {
        // Logic for 2*2 type of multiplication
        var term1 = `(${coefficient1}${variable1}+${coefficient2})`;
        var term2 = `(${coefficient1}${variable1}+${coefficient2})`;
        problem = term1 + term2;
        answer = `${coefficient1 * coefficient1}x^2+${2 * coefficient1 * coefficient2}xy+${coefficient2 * coefficient2}`;
    }

    if (two_three) {
        // Logic for 2*3 type of multiplication
        var term1 = `(${coefficient1}${variable1}^2+${coefficient2})`;
        var term2 = `(${coefficient1}${variable1}^2+${coefficient2}${variable1}+${coefficient1})`;
        problem = term1 + term2;
        answer = `${coefficient1 * coefficient1}x^4+${2 * coefficient1 * coefficient2}x^3y+${(2 * coefficient1 * coefficient1 + coefficient2 * coefficient1)}x^2+${coefficient2 * coefficient2}x+${coefficient1 * coefficient1}`;
    }

    if (three_three) {
        // Logic for 3*3 type of multiplication
        var term1 = `(${coefficient1}${variable1}^2+${coefficient2}${variable1}+${coefficient1})`;
        var term2 = `(${coefficient2}${variable1}^2+${coefficient1}${variable1}+${coefficient2})`;
        problem = term1 + term2;
        answer = `${coefficient1 * coefficient2}x^4+${(2 * coefficient1 * coefficient1 + 2 * coefficient2 * coefficient2)}x^3+${(2 * coefficient1 * coefficient2 + 2 * coefficient2 * coefficient1)}x^2+${coefficient1 * coefficient1 + coefficient2 * coefficient2}x+${coefficient1 * coefficient2}`;
    }

    return [problem, answer];
}
