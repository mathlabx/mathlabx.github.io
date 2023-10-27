/*
Fractional Inequalities

Description:
This function generates fractional inequality problems using the Katex notation. The function generates inequalities of the form (ax+b)/c < d or (ax+b)/c >= d, where a, b, c, and d are random coefficients within the specified range. The function returns an array with the problem statement and the solution expressed in the Katex notation.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Fractional_inequality(1, 5);
console.log(result); // Output: [['Solve the inequality:', '\\frac{3x}{4} > 2'], 'x < \\frac{8}{3}'] // The problem is to solve the inequality (3x/4) > 2, and the solution is x < 8/3.

*/

$X.math.Middle_School_Mathematics.Algebra.Fractional_inequality = function (min, max) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const coefficients = [1, 2, 3, 4, 5]; // Additional coefficients can be added as needed
    const numerator1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const denominator1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const numerator2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const denominator2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const coefficient1 = coefficients[Math.floor(Math.random() * coefficients.length)];
    const coefficient2 = coefficients[Math.floor(Math.random() * coefficients.length)];
    const variable = letters.charAt(Math.floor(Math.random() * letters.length));
    const operation = ["<", ">", "\\leq", "\\geq"][Math.floor(Math.random() * 4)]; // Randomly select an operator
    const reciprocalOperation = operation === "<" ? ">" : "<"; // Obtain the reciprocal operator based on the selected operator
    let question = [];
    let answer;

    // Generate the problem and the answer
    if (Math.random() < 0.5) {
        // Generate < or >
        const inequality = operation === "<" ? ">" : "<";
        question.push(`Solve the inequality: `);
        question.push(`\\frac{${coefficient1}${variable}${numerator1 !== 1 ? '' : ''}}{${denominator1 !== 1 ? denominator1 : ''}} ${inequality} ${coefficient2}`);
        answer = `${variable} ${reciprocalOperation} \\frac{${coefficient2}}{${coefficient1 * numerator1}}`;
    } else {
        // Generate \\leq or \\geq
        const inequality = operation === "\\leq" ? "\\geq" : "\\leq";
        question.push(`Solve the inequality: `);
        question.push(`\\frac{${coefficient1}${variable}${numerator1 !== 1 ? '' : ''}}{${denominator1 !== 1 ? denominator1 : ''}} ${inequality} ${coefficient2}`);
        answer = `${variable} ${operation} \\frac{${coefficient2 * denominator1 - coefficient1 * numerator1}}{${coefficient1 * denominator1}}`;
    }

    return [question, answer];
}
