/*
Decimal Multiplication (with consecutive multiplications)

Description:
This function generates a multiplication problem involving decimal numbers. It generates a specified number of random decimal numbers with a specified number of decimal places. The function calculates the product of the generated numbers and returns the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to be multiplied.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Multiplication(1, 10, 3, 2);
console.log(result); // Output: ['2.34 × 5.67 × 3.21 = ?', 38.123698] // The answer is the product of the three generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Multiplication = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" × " + num));
        answer *= num;
    }

    question += " = ?";

    return [question, answer];
}

/*
Decimal Multiplication with Context

Description:
This function generates a multiplication problem involving decimal numbers with context. It generates a specified number of random decimal numbers with a specified number of decimal places. The function calculates the product of the generated numbers and returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to be multiplied.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Multiplication_w(1, 10, 3, 2);
console.log(result); // Output: ['In a science experiment, you have 3 measurements. If you multiply them 2.34 × 5.67 × 3.21, what is the total product?', 38.123698] // The answer is the product of the three generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Multiplication_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" × " + num));
        answer *= num;
    }

    // Randomly select a context
    var scenarios = ["In a science experiment, ", "At a bakery, ", "In a recipe, ", "At a construction site, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " measurements. " + "If you multiply them " + question + ", what is the total product?";

    return [question, answer];
}

/*
Decimal Division (with consecutive divisions)

Description:
This function generates a division problem involving decimal numbers. It generates a specified number of random decimal numbers with a specified number of decimal places. The function ensures that the divisor is not zero and calculates the result of consecutive divisions. It returns the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to be divided.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Division(1, 10, 3, 2);
console.log(result); // Output: ['2.34 ÷ 5.67 ÷ 3.21 = ?', 0.1306] // The answer is the result of dividing the three generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Division = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

        // Avoid the situation where the divisor is zero
        while (num === 0.0) {
            num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        }

        // Set the decimal places of the question to match the answer
        if (i === 0) {
            question += num;
            answer = num;
        } else {
            question += (" ÷ " + num);
            answer /= num;
        }
    }

    question += " = ?";

    return [question, answer];
}


/*
Decimal Division with Context

Description:
This function generates a division problem involving decimal numbers with context. It generates a specified number of random decimal numbers with a specified number of decimal places. The function ensures that the divisor is not zero and calculates the result of consecutive divisions. It returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- numCount (number): The number of decimal numbers to be divided.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Division_w(1, 10, 3, 2);
console.log(result); // Output: ['In a science experiment, you have 3 measurements to distribute. If you divide them 2.34 ÷ 5.67 ÷ 3.21, what is the result in each division?', 0.1306] // The answer is the result of dividing the three generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Division_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

        // Avoid the situation where the divisor is zero
        while (num === 0.0) {
            num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        }

        // Set the decimal places of the question to match the answer
        if (i === 0) {
            question += num;
            answer = num;
        } else {
            question += (" ÷ " + num);
            answer /= num;
        }
    }

    // Randomly select a context
    var scenarios = ["In a science experiment, ", "At a bakery, ", "In a recipe, ", "At a construction site, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " measurements to distribute. " + "If you divide them " + question + ", what is the result in each division?";

    return [question, answer];
}
