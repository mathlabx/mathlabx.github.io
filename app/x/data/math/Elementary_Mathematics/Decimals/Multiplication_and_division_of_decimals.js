/*
小数的乘除（有连乘/连除）

输入：(最小数，最大数，几个数相乘/除，小数位数)
输出：[题干，答案]
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

$X.math.Elementary_Mathematics.Decimals.Multiplication_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        question += (i === 0 ? num : (" × " + num));
        answer *= num;
    }

    // 随机选择一个情境
    var scenarios = ["In a science experiment, ", "At a bakery, ", "In a recipe, ", "At a construction site, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " measurements. " + "If you multiply them " + question + ", what is the total product?";

    return [question, answer];
}

$X.math.Elementary_Mathematics.Decimals.Division = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

        // 避免出现除数为零的情况
        while (num === 0.0) {
            num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        }

        // 将问题的小数位数设置为与答案相同的小数位数
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

$X.math.Elementary_Mathematics.Decimals.Division_w = function (min, max, numCount, decimalPlaces) {
    var question = "";
    var answer = 1;

    for (var i = 0; i < numCount; i++) {
        var num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));

        // 避免出现除数为零的情况
        while (num === 0.0) {
            num = parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
        }

        // 将问题的小数位数设置为与答案相同的小数位数
        if (i === 0) {
            question += num;
            answer = num;
        } else {
            question += (" ÷ " + num);
            answer /= num;
        }
    }

    // 随机选择一个情境
    var scenarios = ["In a science experiment, ", "At a bakery, ", "In a recipe, ", "At a construction site, "];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    question = randomScenario + "you have " + numCount + " measurements to distribute. " + "If you divide them " + question + ", what is the result in each division?";

    return [question, answer];
}