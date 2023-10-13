/*
整数的比较

输入：(最小数，最大数)
输出：[题干，答案]
输出讲解（计算题）：
num1 > num2 返回 greater
num1 < num2 返回 less
num1 = num2 返回 equal
输出讲解（文字题）：
num1 > num2 返回 first
num1 < num2 返回 second
num1 = num2 返回 equal
*/

$X.math.Elementary_Mathematics.Integers.Comparing_integers = function (min, max) {
    // 生成两个随机整数，位于指定范围内
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // 构造题干
    var question = "Compare " + num1 + " and " + num2 + ". Is " + num1 + " greater, equal to, or less than " + num2 + "?";

    // 构造答案
    var answer;
    if (num1 > num2) {
        answer = "greater";
    } else if (num1 < num2) {
        answer = "less";
    } else {
        answer = "equal";
    }

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Integers.Comparing_integers_w = function (min, max) {
    // 生成两个随机整数，位于指定范围内
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // 随机选择一个场景和一个物体
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // 构造问题描述
    var question = randomScenario + "there are " + num1 + " " + randomObject + ". ";
    question += "In another " + randomScenario + "there are " + num2 + " " + randomObject + ". ";
    question += "Are there more " + randomObject + " in the first " + randomScenario + " or the second " + randomScenario + "?";

    // 构造答案
    var answer;
    if (num1 > num2) {
        answer = "first";
    } else if (num1 < num2) {
        answer = "second";
    } else {
        answer = "equal";
    }

    // 返回问题描述和答案
    return [question, answer];
}
