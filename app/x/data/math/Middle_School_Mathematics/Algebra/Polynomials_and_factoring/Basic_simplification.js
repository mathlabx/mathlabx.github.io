/*
Basic Like Terms Combination

Description:
This function generates problems for combining like terms. The terms are randomly generated based on the specified coefficients and variables. The function returns an array with the problem statement and the solution.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.
- num_coefficient (number): The number of coefficients in each problem.
- num_var (number): The number of different variables (a-z).

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Polynomials_and_factoring_Simplification(1, 5, 3, 4);
console.log(result);
// Output: [['Factor the following expressions: ', '3x + 4y + 2z, '], '2z + 4y + 3x']
// The problem is to factor the expression: 3x + 4y + 2z, and the solution is 2z + 4y + 3x.

*/

$X.math.Middle_School_Mathematics.Algebra.Polynomials_and_factoring_Simplification = function (min, max, num_coefficient, num_var) {
    const coefficients = [];
    const variables = "abcdefghijklmnopqrstuvwxyz".slice(0, num_var);
    let problem = [];
    let answer = "";

    problem[0] = "Factor the following expressions: ";

    for (let i = 0; i < num_coefficient; i++) {
        coefficients.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    let expression = "";
    // Generate the problem
    for (let i = 0; i < num_coefficient; i++) {
        let term = "";
        const coefficient = coefficients[i];
        const variable = variables[Math.floor(Math.random() * variables.length)];
        term += coefficient !== 1 ? coefficient : "";
        term += variable;
        expression += term;
        if (i !== num_coefficient - 1) {
            expression += " + ";
        }
    }
    problem[1] = expression;

    // Combine like terms
    const terms = expression.split(' + ');
    const termMap = {};
    terms.forEach((term) => {
        const variable = term.match(/[a-z]/)[0];
        const coefficient = parseInt(term.match(/\d+/)) || 1;
        termMap[variable] = termMap[variable] ? termMap[variable] + coefficient : coefficient;
    });

    // Sort the object in alphabetical order
    const sortedTermMap = {};
    Object.keys(termMap).sort().forEach(function (key) {
        sortedTermMap[key] = termMap[key];
    });

    for (const key in sortedTermMap) {
        if (sortedTermMap.hasOwnProperty(key)) {
            answer += (answer.length !== 0 ? " + " : "") + sortedTermMap[key] + key;
        }
    }

    return [problem, answer];
}
