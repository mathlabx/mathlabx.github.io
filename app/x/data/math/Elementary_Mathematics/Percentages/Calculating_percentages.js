/*
Percentage Calculation

Description:
This function generates a percentage calculation problem. It generates a random percentage and a random base number, and calculates the result of the percentage of the base. The function returns both the problem statement and the result of the calculation.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem statement and the result of the calculation.

Example Usage:
const result = Calculating_percentages(1, 100);
console.log(result); // Output: ['What is n% of m?', 42] // The result of the percentage calculation is 42.

*/

$X.math.Elementary_Mathematics.Percentages.Calculating_percentages = function (min, max) {
    var percentage = Math.floor(Math.random() * (max - min + 1)) + min;
    var base = Math.floor(Math.random() * (max - min + 1)) + min;
    var result = (percentage / 100) * base;
    var question = "What is " + percentage + "% of " + base + "?";
    return [question, result];
}


/*
Percentage Calculation with Context

Description:
This function generates a percentage calculation problem with context. It generates different scenarios for percentage calculations, including calculating the discounted price of a product, determining whether a student passed a test, or finding the future value of an investment. The function returns both the problem description and the result of the calculation.

Inputs:
- min (number): The minimum value for the random numbers.
- max (number): The maximum value for the random numbers.

Outputs:
- Array: An array containing the problem description and the result of the calculation.

Example Usage:
const result = Calculating_percentages_w(1, 100);
console.log(result); // Output: ['A product originally costs $100. It is now on sale at a 50% discount. What is the new price?', 50] // The new price is $50.

*/

$X.math.Elementary_Mathematics.Percentages.Calculating_percentages_w = function (min, max) {
    var scenario = Math.floor(Math.random() * 3);
    var description = "";
    var result = 0;

    if (scenario === 0) {
        var originalPrice = Math.floor(Math.random() * (max - min + 1)) + min;
        var discountPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
        var discountedPrice = originalPrice - (discountPercentage / 100) * originalPrice;
        description = "A product originally costs $" + originalPrice + ". It is now on sale at a " + discountPercentage + "% discount. What is the new price?";
        result = discountedPrice;
    } else if (scenario === 1) {
        var maxScore = 100;
        var studentScore = Math.floor(Math.random() * (maxScore - min + 1)) + min;
        var passingPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
        var passingScore = (passingPercentage / 100) * maxScore;
        description = "In a test, a student scored " + studentScore + " out of " + maxScore + ". To pass the test, a student needs to score at least " + passingPercentage + "%. Did the student pass?";
        result = studentScore >= passingScore ? "Yes" : "No";
    } else {
        var initialInvestment = Math.floor(Math.random() * (max - min + 1)) + min;
        var annualInterestRate = Math.floor(Math.random() * (max - min + 1)) + min;
        var investmentDuration = Math.floor(Math.random() * (max - min + 1)) + min;
        var futureValue = initialInvestment * Math.pow(1 + annualInterestRate / 100, investmentDuration);
        description = "If you invest $" + initialInvestment + " at an annual interest rate of " + annualInterestRate + "% for " + investmentDuration + " years, what will be the future value of your investment?";
        result = futureValue.toFixed(2);
    }

    return [description, result];
}
