/*
小数的加减（有连加/连减）

输入：(最小数，最大数，几个数相加，小数位数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Decimals.Addition = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" + " + num));
        answer += num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Decimals.Addition_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" + " + num));
        answer += num;
    }

    // 随机选择一个情境
    var scenarios = ["In a recipe, ", "At a grocery store, ", "In a science experiment, ", "At a restaurant, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " ingredients. " + "If you add " + question + ", what is the total quantity?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Decimals.Subtraction = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" - " + num));
        answer -= num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Decimals.Subtraction_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" - " + num));
        answer -= num;
    }

    // 随机选择一个情境
    var scenarios = ["In a recipe, ", "At a grocery store, ", "In a science experiment, ", "At a restaurant, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " ingredients. " + "If you take away " + question + ", what is the remaining quantity?";

    return [question, answer];
}