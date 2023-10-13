/*
小数和百分比转换

输入：(小数到百分比, 百分比到小数, 小数位数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Percentages.Converting_percentages = function (decimalToPercentage, percentageToDecimal, decimalPlaces) {
    var question = "";
    var answer = "";

    if (decimalToPercentage) {
        // 将小数转换为百分比
        var decimal = Math.random(); // 生成一个0到1之间的小数
        var percentage = (decimal * 100).toFixed(decimalPlaces) + "%"; // 转换为百分比

        question = "Convert " + decimal.toFixed(decimalPlaces) + " to a percentage.";
        answer = percentage;
    } else if (percentageToDecimal) {
        // 将百分比转换为小数
        var percentage = Math.floor(Math.random() * 100 + 1); // 生成一个 1 到 100 之间的百分比
        var decimal = (percentage / 100).toFixed(decimalPlaces); // 转换为小数

        question = "Convert " + percentage + "% to a decimal.";
        answer = decimal;
    }

    return [question, answer];
}