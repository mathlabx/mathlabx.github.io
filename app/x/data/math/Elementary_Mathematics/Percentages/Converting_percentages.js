/*
Decimal and Percentage Conversion

Description:
This function generates problems related to the conversion between decimals and percentages. It can convert decimals to percentages or percentages to decimals based on the input flags. The function returns both the problem statement and the answer to the conversion.

Inputs:
- decimalToPercentage (boolean): A flag indicating whether the conversion is from decimal to percentage.
- percentageToDecimal (boolean): A flag indicating whether the conversion is from percentage to decimal.
- decimalPlaces (number): The number of decimal places to consider in the conversion.

Outputs:
- Array: An array containing the problem statement and the answer to the conversion.

Example Usage:
const result = Converting_percentages(true, false, 2);
console.log(result); // Output: ['Convert 0.72 to a percentage.', '72.00%'] // 0.72 as a percentage is 72.00%.

*/

$X.math.Elementary_Mathematics.Percentages.Converting_percentages = function (decimalToPercentage, percentageToDecimal, decimalPlaces) {
    var question = "";
    var answer = "";

    if (decimalToPercentage) {
        var decimal = Math.random();
        var percentage = (decimal * 100).toFixed(decimalPlaces) + "%";
        question = "Convert " + decimal.toFixed(decimalPlaces) + " to a percentage.";
        answer = percentage;
    } else if (percentageToDecimal) {
        var percentage = Math.floor(Math.random() * 100 + 1);
        var decimal = (percentage / 100).toFixed(decimalPlaces);
        question = "Convert " + percentage + "% to a decimal.";
        answer = decimal;
    }

    return [question, answer];
}
