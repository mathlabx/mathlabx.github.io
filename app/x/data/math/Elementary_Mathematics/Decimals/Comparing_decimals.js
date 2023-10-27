/*
Decimal Comparison

Description:
This function generates a comparison problem involving decimal numbers. It generates two random decimal numbers with a specified number of decimal places. The function randomly determines the comparison relationship (greater than, less than, or equal to) and returns the problem statement and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Comparing_decimals(1, 10, 2);
console.log(result); // Output: ['is 2.34 < 5.67 ?', true] // The answer is determined based on the comparison relationship between the two generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Comparing_decimals = function (min, max, decimalPlaces) {
    // Generate two random decimals with the number of decimal places specified by decimalPlaces
    var num1 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    var num2 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

    // Randomly determine the comparison relationship (less than, greater than, or equal to)
    var comparison;
    var answer;
    var randomComparison = Math.floor(Math.random() * 3); // 0, 1, 2 represent <, >, and =

    if (randomComparison === 0) {
        comparison = " < ";
        answer = num1 < num2;
    } else if (randomComparison === 1) {
        comparison = " > ";
        answer = num1 > num2;
    } else {
        comparison = " = ";
        answer = num1 === num2;
    }

    // Construct the problem statement
    var question = "is " + num1 + comparison + num2 + " ?";

    // Return the problem statement and the answer
    return [question, answer];
}


/*
Decimal Comparison with Context

Description:
This function generates a comparison problem involving decimal numbers with context. It generates two random decimal numbers with a specified number of decimal places. The function randomly determines the comparison relationship (greater than, less than, or equal to) and returns both the problem description and the answer.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.
- decimalPlaces (number): The number of decimal places for the generated numbers.

Outputs:
- Array: An array containing the problem description and the answer.

Example Usage:
const result = Comparing_decimals_w(1, 10, 2);
console.log(result); // Output: ['Compare the two numbers: 2.34 and 5.67. Is 2.34 is less than 5.67 ?', true] // The answer is determined based on the comparison relationship between the two generated random decimal numbers.
*/

$X.math.Elementary_Mathematics.Decimals.Comparing_decimals_w = function (min, max, decimalPlaces) {
    // Generate two random decimals with the number of decimal places specified by decimalPlaces
    var num1 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    var num2 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

    // Randomly determine the comparison relationship (greater than, less than, or equal to)
    var comparison;
    var randomComparison = Math.floor(Math.random() * 3); // 0, 1, 2 represent <, >, and =

    if (randomComparison === 0) {
        comparison = "is less than";
    } else if (randomComparison === 1) {
        comparison = "is greater than";
    } else {
        comparison = "is equal to";
    }

    // Construct the problem description
    var question = "Compare the two numbers: " + num1 + " and " + num2 + ". Is " + num1 + " " + comparison + " " + num2 + "?";

    // Calculate the answer
    var answer = false;
    if (randomComparison === 0) {
        answer = num1 < num2;
    } else if (randomComparison === 1) {
        answer = num1 > num2;
    } else {
        answer = num1 === num2;
    }

    // Return the problem description and the answer
    return [question, answer];
}
