/*
Differential equations

Inputs:
- C_first_order (boolean): Determines if questions about first-order differential equations should be included.
- C_second_order (boolean): Determines if questions about second-order differential equations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to first-order and second-order differential equations. It covers topics such as separable differential equations, homogeneous and non-homogeneous differential equations, and second-order linear differential equations with constant coefficients. The questions aim to test the user's understanding of solving these equations using various techniques and methods commonly used in calculus and differential equations.

Example Usage:
const result = DifferentialEquations(true, false);
console.log(result); // Output: ['Solve the first-order differential equation (dy/dx) = 3x^2 + 2x - 5', 'The solution to the differential equation is y = x^3 + x^2 - 5x + C.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Calculus.DifferentialEquations = function (C_first_order, C_second_order) {
    var question = "";
    var answer = "";

    if (C_first_order || C_second_order) {
        var selectedInputs = [];
        if (C_first_order) selectedInputs.push("C_first_order");
        if (C_second_order) selectedInputs.push("C_second_order");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "C_first_order") {
            // Logic for first-order differential equations
            var x = Math.floor(Math.random() * 10) + 1; // Generate a random value for x

            // Generate a random first-order differential equation
            var differentialEquation = `dy/dx = ${x}x^2 + ${x - 1}x - ${x + 1}`;
            question = `Solve the first-order differential equation ${differentialEquation}.`;

            // Compute and assign the answer
            var computedAnswer = `y = ${(x * x * x / 3)}x^3 + ${(x * x / 2)}x^2 - ${(x + 1) * x} + C`;
            answer = computedAnswer;
        } else if (selectedInput === "C_second_order") {
            // Logic for second-order differential equations
            var a = Math.floor(Math.random() * 5) + 1; // Generate a random value for a
            var b = Math.floor(Math.random() * 5) + 1; // Generate a random value for b
            var c = Math.floor(Math.random() * 5) + 1; // Generate a random value for c

            // Generate a random second-order differential equation
            var differentialEquation = `d^2y/dx^2 + ${a}dy/dx + ${b}y = ${c}`;
            question = `Solve the second-order differential equation ${differentialEquation}.`;

            // Compute and assign the answer
            var computedAnswer = `y = ${(c / (a * a + 1))} + Ce^(-${a / 2}x)sin(${Math.sqrt(b - (a * a / 4))}x) + De^(-${a / 2}x)cos(${Math.sqrt(b - (a * a / 4))}x)`;
            answer = computedAnswer;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
