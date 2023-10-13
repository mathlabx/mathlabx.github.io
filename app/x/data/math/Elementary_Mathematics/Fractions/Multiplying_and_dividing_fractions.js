/*
分数的乘除（有连乘/连除）

输入：(最小数，最大数，几个分数相乘/除，分数的解是否是整数)
输出：[题干，答案]
输出讲解：如果divisible是false - [题干，[分子, 分母]], 如果divisible是true - [题干，[分子, 分母]]
*/

$X.math.Elementary_Mathematics.Fractions.Multiplication = function (min, max, numCount, divisible) {
    // 生成随机分数
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // 计算两个分数的最大公约数
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // 生成 numCount 个随机分数
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // 构建表达式
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " \\cdot ";
        }
    }

    // 计算答案
    var answer = [1, 1]; // 初始答案为1
    for (var i = 0; i < numCount; i++) {
        answer = [answer[0] * fractions[i][0], answer[1] * fractions[i][1]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // 构造题干
    let question = [
        "Calculate the product of the following fractions: ",
        expression
    ];

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Fractions.Multiplication_w = function (min, max, numCount, divisible) {
    // 生成随机分数
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // 计算两个分数的最大公约数
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // 生成 numCount 个随机分数
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // 构建文字描述
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " \\ times \\ ";
        }
    }

    // 计算答案
    var answer = [1, 1]; // 初始答案为1
    for (var i = 0; i < numCount; i++) {
        answer = [answer[0] * fractions[i][0], answer[1] * fractions[i][1]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // 构造题干的文字描述
    let question = [
        "Multiply the fractions. Simplify your answer if necessary.",
        expression
    ];

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Fractions.Division = function (min, max, numCount, divisible) {
    // 生成随机分数
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // 计算两个分数的最大公约数
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // 生成 numCount 个随机分数
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // 构建表达式
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " \\div ";
        }
    }

    // 计算答案
    var answer = [fractions[0][0], fractions[0][1]]; // 初始答案为第一个分数
    for (var i = 1; i < numCount; i++) {
        answer = [answer[0] * fractions[i][1], answer[1] * fractions[i][0]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // 构造题干
    let question = [
        "Calculate the division of the following fractions: ",
        expression
    ];

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Fractions.Division_w = function (min, max, numCount, divisible) {
    // 生成随机分数
    function generateRandomFraction(min, max) {
        var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
        var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numerator, denominator];
    }

    // 计算两个分数的最大公约数
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    var fractions = [];
    var expression = "";

    // 生成 numCount 个随机分数
    for (var i = 0; i < numCount; i++) {
        fractions.push(generateRandomFraction(min, max));
    }

    // 构建文字描述
    for (var i = 0; i < numCount; i++) {
        expression += "\\frac{" + fractions[i][0] + "}{" + fractions[i][1] + "}";
        if (i < numCount - 1) {
            expression += " \\ divided \\ by \\ ";
        }
    }

    // 计算答案
    var answer = [fractions[0][0], fractions[0][1]]; // 初始答案为第一个分数
    for (var i = 1; i < numCount; i++) {
        answer = [answer[0] * fractions[i][1], answer[1] * fractions[i][0]];
    }

    var gcdValue = findGCD(answer[0], answer[1]);
    answer = [answer[0] / gcdValue, answer[1] / gcdValue];

    // 构造题干的文字描述
    let question = [
        "Divide the fractions. Simplify your answer if necessary.",
        expression
    ];

    // 返回题干和答案
    return [question, answer];
}