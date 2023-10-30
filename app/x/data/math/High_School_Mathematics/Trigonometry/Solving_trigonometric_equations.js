/*
Solving trigonometric equations

Inputs:
- C_linear (boolean): Determines if linear equations should be included.
- C_quadratic (boolean): Determines if quadratic equations should be included.
- C_exponential (boolean): Determines if exponential equations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to solving trigonometric equations based on the specified input values. It can include linear equations, quadratic equations, and exponential equations involving trigonometric functions. The questions are designed to assess the user's ability to apply various methods to solve these equations. The answers are provided in a clear and concise manner to help users verify their solutions.

Example Usage:
const result = SolvingTrigonometricEquations(true, false, true);
console.log(result); // Output: ['Find the value of x satisfying the equation sin(x) = 0.5 in the interval [0, 2π].', 'x is equal to π/6 or 5π/6.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Trigonometry.SolvingTrigonometricEquations = function (C_linear, C_quadratic, C_exponential) {
    // Your code goes here
    function solveQuadratic(coe1, coe2, cons, solu){
        const discriminant = coe2 * coe2 - 4 * coe1 * (cons-solu);
        var solutions = [];
        if (discriminant > 0) {
            const x1 = (-coe2 + Math.sqrt(discriminant)) / (2 * coe1);
            const x2 = (-coe2 - Math.sqrt(discriminant)) / (2 * coe1);
            solutions = [
                `x = ${x1.toFixed(2)}`,
                `x = ${x2.toFixed(2)}`
            ];
        } else if (discriminant === 0) {
            const x = -coe2 / (2 * coe1);
            solutions = [`x = ${x.toFixed(2)}`];
        } else {
            const real = -coe2 / (2 * coe1);
            const imaginary = Math.sqrt(-discriminant) / (2 * coe1);
            solutions = [
                `x = ${real.toFixed(2)} + ${imaginary.toFixed(2)}i`,
                `x = ${real.toFixed(2)} - ${imaginary.toFixed(2)}i`
            ];
        }
        return solutions;
    }
    if(C_linear){
        var question;
        var answer;
        const coefficient = Math.ceil(Math.random()*9);
        const constant = Math.floor(Math.random()*9);
        const solution = Math.floor(Math.random()*9);
        const randOper = Math.round(Math.random());
        if(randOper == 0){
            question = "Find the value of x satisfying the equation " + solution + " = " + coefficient + "x + " + constant;
            answer = "x = " + `${((solution - constant)/coefficient).toFixed(2)}`;
        }else{
            question = "Find the value of x satisfying the equation " + solution + " = " + coefficient + "x - " + constant;
            answer = "x = " + `${((solution + constant)/coefficient).toFixed(2)}`;
        }
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_quadratic){
        var question;
        var answer;
        const coefficient1 = Math.ceil(Math.random()*9);
        const coefficient2 = Math.ceil(Math.random()*9);
        const constant = Math.floor(Math.random()*9);
        const solution = Math.floor(Math.random()*9);
        const randOper = Math.round(Math.random());
        if(randOper == 0){
            question = "Find the value of x satisfying the equation " + solution + " = " + coefficient1 + "x^2 + " + coefficient2 + "x + " + constant;
            var solutions = solveQuadratic(coefficient1, coefficient2, constant, solution);
            answer = solutions[0] + ", " + solutions[1];
        }else{
            question = "Find the value of x satisfying the equation " + solution + " = " + coefficient1 + "x^2 - " + coefficient2 + "x - " + constant;
            var solutions = solveQuadratic(coefficient1, (-1*coefficient2), (-1*constant), solution);
            answer = solutions[0] + ", " + solutions[1];
        }
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_exponential){
        const constant = Math.ceil(Math.random() * 9) + 1;
        const power = Math.floor(Math.random()* 9);
        const solution = Math.ceil(Math.random() * 9);
        var question;
        var answer;
        if(power != 0){
            question = constant + "^(x + " + power + ") = " + solution + "^x";
            answer = "x = " + (power/((Math.log(solution)/Math.log(constant))-1));
        }else if(power == 0){
            question = constant + "^x = " + solution;
            answer = "x = " + (Math.log(solution)/Math.log(constant));
        }
        // Return the question and answer in an array
        return [question, answer];
    }
}
