/*
分数的简化

输入：(最小数，最大数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Fractions.Simplifying_fractions = function (min, max) {
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

    var fraction = generateRandomFraction(min, max);
    var numerator = fraction[0];
    var denominator = fraction[1];

    // 计算分数的最大公约数
    var gcdValue = findGCD(numerator, denominator);

    // 简化分数
    numerator = numerator / gcdValue;
    denominator = denominator / gcdValue;

    // 构造题干
    var question = "Simplify the fraction $" + "\\frac{" + fraction[0] + "}{" + fraction[1] + "}$.";

    // 构造答案
    var answer = "\\frac{" + numerator + "}{" + denominator + "}";

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Fractions.Simplifying_fractions_w = function (min, max) {
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

    var fraction = generateRandomFraction(min, max);
    var numerator = fraction[0];
    var denominator = fraction[1];

    // 计算分数的最大公约数
    var gcdValue = findGCD(numerator, denominator);

    // 简化分数
    numerator = numerator / gcdValue;
    denominator = denominator / gcdValue;

    // 构造题干的文字描述
    var question = "Simplify the fraction " + fraction[0] + "/" + fraction[1] + ".";

    // 构造答案的文字描述
    var answer = numerator + "/" + denominator;

    // 返回题干和答案
    return [question, answer];
}
