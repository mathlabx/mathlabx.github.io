/*
Systems of Two-Variable Linear Equations

Description:
This function generates problems for systems of two-variable linear equations. The equations are of the form ax + by = c, where a, b, and c are random coefficients within the specified range. The function returns an array with the problem statement and the solution.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.
- add (boolean): Determines whether the operation is addition or not.
- sub (boolean): Determines whether the operation is subtraction or not.
- num_equ (number): The number of equations in the system.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Systems_of_two_variable_linear_equation(1, 5, true, false, 2);
console.log(result);
// Output: [['Solve the Systems of linear equations: ', '3x + 4y = 9, 2x + 1y = 7, '], 'x = 3, y = 4']
// The problem is to solve the system of linear equations: 3x + 4y = 9, 2x + 1y = 7, and the solution is x = 3, y = 4.

*/

$X.math.Middle_School_Mathematics.Algebra.Systems_of_two_variable_linear_equation = function (min, max, add, sub, num_equ) {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const equations = [];
    const x = getRandomNumber(min, max);
    const y = getRandomNumber(min, max);

    for (let i = 0; i < num_equ; i++) {
        let a, b, c;
        if (add) {
            a = getRandomNumber(min, max);
            b = getRandomNumber(min, max);
            c = x * a + y * b;
        } else if (sub) {
            a = getRandomNumber(min, max);
            b = getRandomNumber(min, max);
            c = x * a - y * b;
        }
        equations.push([a, b, c]);
    }

    const problem = [`Solve the Systems of linear equations: `];
    equations.forEach(eq => {
        problem.push(`${eq[0]}x + ${eq[1]}y = ${eq[2]}, `);
    });

    const answer = `x = ${x}, y = ${y}`;
    return [problem, answer];
}
