/*
Single-Variable Linear Equations

Description:
This function generates single-variable linear equation problems of the form ax + b = c, where a, b, and c are random coefficients within the specified range. The function returns an array with the problem statement and the solution.

Inputs:
- min (number): The minimum value for the coefficients.
- max (number): The maximum value for the coefficients.
- add (boolean): Determines whether the operation is addition or not.
- sub (boolean): Determines whether the operation is subtraction or not.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Single_variable_linear_equations(1, 5, true, false);
console.log(result); // Output: ['Solve the equation: 3x + 4 = 9.', 'x = 5/3']
// The problem is to solve the equation 3x + 4 = 9, and the solution is x = 5/3.

*/

// Numeric question: Single_variable_linear_equations
$X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations = function (min, max, add, sub) {
    // Array to store generated questions
    let storedQuestions = [];

    // Function to check if the question already exists
    function checkIfQuestionExists(question) {
        return storedQuestions.includes(question);
    }

    // Convert decimal to fraction
    function convertToFractionIfDecimal(number) {
        const tolerance = 1.0E-6; // Tolerance value for checking if the number is a decimal

        if (Math.abs(Math.round(number) - number) < tolerance) {
            // It's an integer
            return number;
        } else {
            // It's a decimal, convert to fraction
            const tolerance = 1.0E-6; // Tolerance value
            let h1 = 1;
            let h2 = 0;
            let k1 = 0;
            let k2 = 1;
            let b = number;
            do {
                let a = Math.floor(b);
                let aux = h1;
                h1 = a * h1 + h2;
                h2 = aux;
                aux = k1;
                k1 = a * k1 + k2;
                k2 = aux;
                b = 1 / (b - a);
            } while (Math.abs(number - h1 / k1) > number * tolerance);

            return [h1, k1];
        }
    }

    // Generate unique question
    let question;
    let answer;
    do {
        // Generate random factor
        let factor = Math.floor(Math.random() * (max - min + 1)) + min;
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let c = a * factor + b; // Using random factor to ensure c is not too small or too large


        // Determine the operator based on the parameters
        let operator = add ? '+' : sub ? '-' : '+';

        // Construct the question statement
        question = `Solve the equation: ${a}x ${operator} ${b} = ${c}.`;

        // Calculate the answer
        answer = add ? (c - b) / a : sub ? (c + b) / a : (c - b) / a;

        // Represent the answer as a fraction if it's a decimal
        answer = convertToFractionIfDecimal(answer);
    } while (checkIfQuestionExists(question));

    // Store the question to avoid repetition
    storedQuestions.push(question);

    answer = "x = " + answer;

    // Return the question statement and the answer
    return [question, answer];
}

// Verbal question: Single_variable_linear_equations_w
$X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations_w = function (min, max, add, sub) {
    // Array to store generated questions
    let storedQuestions = [];

    // Function to check if the question already exists
    function checkIfQuestionExists(question) {
        return storedQuestions.includes(question);
    }

    // Generate unique question
    let question;
    let answer;
    do {
        // Generate random coefficients within a reasonable range
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let c = a * 2 + b; // Ensure c is not too small or too large

        // Determine the operator based on the parameters
        let operator = add ? 'plus' : sub ? 'minus' : 'plus';

        // Create an array of potential scenarios
        let scenarios = [
            `John has ${a} apples. He ${operator === 'plus' ? 'gives away' : 'gets'} ${b} apples. How many apples does he have now?`,
            `In a classroom, there are ${a} students. If ${b} students ${operator === 'plus' ? 'join' : 'leave'}, how many students are present?`,
            `Tom bought ${a} candies. He ${operator === 'plus' ? 'eats' : 'receives'} ${b} candies. How many candies does he have left?`,
            `There are ${a} birds in a tree. ${b} more birds ${operator === 'plus' ? 'fly to' : 'leave'} the tree. How many birds are there now?`,
            `Lisa has ${a} stickers. She ${operator === 'plus' ? 'shares' : 'collects'} ${b} stickers with her friends. How many stickers does she have now?`,
            `In a game, there are ${a} players. If ${b} players ${operator === 'plus' ? 'join' : 'quit'}, how many players are there in total?`,
            `Alex saves $${a} per week. After ${b} weeks, how much money has he saved in total?`,
            `There are ${a} chocolates in a box. If ${b} chocolates ${operator === 'plus' ? 'are added' : 'are removed'}, how many chocolates are left in the box?`,
            `Megan has ${a} marbles. She ${operator === 'plus' ? 'wins' : 'loses'} ${b} more marbles in a game. How many marbles does she have now?`,
        ];

        // Randomly select a scenario
        let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

        // Construct the question statement
        question = `Solve the following equation: ${randomScenario}`;

        // Calculate the answer
        if (add) {
            answer = a - b;
        } else if (sub) {
            answer = a + b;
        } else {
            answer = a;
        }
    } while (checkIfQuestionExists(question) || answer !== Math.floor(answer));

    // Store the question to avoid repetition
    storedQuestions.push(question);

    // Return the question statement and the answer
    return [question, answer];
}
