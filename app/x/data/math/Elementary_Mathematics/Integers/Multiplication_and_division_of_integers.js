/*
整数的乘除（有连乘/连除）

输入：(最小数，最大数，几个数相乘/除)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Integers.Multiplication = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" × " + num));
        answer *= num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Multiplication_w = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        question += (i === 0 ? num.toString() : (" × " + num));
        answer *= num;
    }

    // 随机选择一个情境
    var scenarios = ["In a garden, ", "At a birthday party, ", "In a classroom, ", "At a campfire, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " groups of items. " + "If you have " + question + ", how many items are there in total?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Division = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;

        // 避免出现除数为零的情况
        while (num === 0) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        question += (i === 0 ? num.toString() : (" ÷ " + num));
        answer /= num;
    }

    question += " = ?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Division_w = function (min, max, numCount) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;

        // 避免出现除数为零的情况
        while (num === 0) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        question += (i === 0 ? num.toString() : (" ÷ " + num));
        answer /= num;
    }

    // 随机选择一个情境
    var scenarios = ["In a bakery, ", "At a zoo, ", "In a library, ", "At a picnic, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "there are " + numCount + " items to be distributed equally. " + "If you divide them " + question + ", how many items are there in each group?";

    return [question, answer];
}
