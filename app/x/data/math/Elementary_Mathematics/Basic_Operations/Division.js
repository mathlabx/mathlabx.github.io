/*
基本运算-除法，两个数的除法

输入：(最小数，最大数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Basic_Operations.Division = function (min, max) {
    // 生成两个随机数，位于指定范围内
    var dividend = 0;
    var divisor = 0;

    // 生成一个非零的除数，确保不会出现除以零的情况
    do {
        dividend = Math.floor(Math.random() * (max - min + 1)) + min;
        divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (divisor === 0 && dividend === 0);

    // 确保被除数能被除数整除
    var remainder = dividend % divisor;
    dividend -= remainder;

    // 构造题干和答案
    var question = dividend + " ÷ " + divisor + " = ?";
    var answer = dividend / divisor;

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Basic_Operations.Division_w = function (min, max) {
    // 生成两个随机数，位于指定范围内
    var dividend = Math.floor(Math.random() * (max - min + 1)) + min;
    var divisor = 0;

    // 生成一个非零的除数，确保不会出现除以零的情况
    do {
        divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (divisor === 0);

    // 确保被除数能被除数整除
    var remainder = dividend % divisor;
    dividend -= remainder;

    // 随机选择一个场景和一个物体
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // 构造应用题的问题描述和答案
    var question = randomScenario + "there are " + dividend + " " + randomObject + ". ";
    question += "If you share them equally among " + divisor + " people, how many " + randomObject + " does each person get?";
    var answer = dividend / divisor;

    // 返回应用题的问题描述和答案
    return [question, answer];
}
