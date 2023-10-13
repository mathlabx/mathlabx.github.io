/*
整数的加减（有连加/连减）

输入：(最小数，最大数，几个数相加)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Integers.Addition = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" + " + num));
        answer += num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Addition_w = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" + " + num));
        answer += num;
    }

    // 随机选择一个情境
    var scenarios = ["In a basket, ", "At a party, ", "In a store, ", "On a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items. " + "If you add " + question + ", how many items are there in total?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Subtraction = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" - " + num));
        answer -= num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Subtraction_w = function (min, max, numCount) {
    var question = "";
    var answer = 0;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" - " + num));
        answer -= num;
    }

    // 随机选择一个情境
    var scenarios = ["In a basket, ", "At a party, ", "In a store, ", "On a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items. " + "If you take away " + question + ", how many items are left?";

    return [question, answer];
}