/*
小数的比较

输入：(最小数，最大数，小数位数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Decimals.Comparing_decimals = function (min, max, decimalPlaces) {
    // 生成两个随机小数，小数位数由 decimalPlaces 指定
    var num1 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    var num2 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

    // 随机确定比较关系（大于、小于、或等于）
    var comparison;
    var answer;
    var randomComparison = Math.floor(Math.random() * 3); // 0, 1, 2 分别代表 <, >, =

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

    // 构造题干
    var question = "is " + num1 + comparison + num2 + "？";

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Decimals.Comparing_decimals_w = function (min, max, decimalPlaces) {
    // 生成两个随机小数，小数位数由 decimalPlaces 指定
    var num1 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    var num2 = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

    // 随机确定比较关系（大于、小于、或等于）
    var comparison;
    var randomComparison = Math.floor(Math.random() * 3); // 0, 1, 2 分别代表 <, >, =

    if (randomComparison === 0) {
        comparison = "is less than";
    } else if (randomComparison === 1) {
        comparison = "is greater than";
    } else {
        comparison = "is equal to";
    }

    // 构造题干的文字描述
    var question = "Compare the two numbers: " + num1 + " and " + num2 + ". Is " + num1 + " " + comparison + " " + num2 + "?";

    // 计算答案
    var answer = false;
    if (randomComparison === 0) {
        answer = num1 < num2;
    } else if (randomComparison === 1) {
        answer = num1 > num2;
    } else {
        answer = num1 === num2;
    }

    // 返回题干和答案
    return [question, answer];
}
