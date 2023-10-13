/*
基本运算-乘法，两个的乘积

输入：(最小数，最大数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Basic_Operations.Multiplication = function (min, max) {
    // 生成两个随机数，位于指定范围内
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // 构造题干和答案
    var question = num1 + " × " + num2 + " = ?";
    var answer = num1 * num2;

    // 返回题干和答案
    return [question, answer];
}

$X.math.Elementary_Mathematics.Basic_Operations.Multiplication_w = function (min, max) {
    // 生成两个随机数，位于指定范围内
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // 随机选择一个场景和一个物体
    var scenarios = ["In a classroom, ", "On a farm, ", "At a zoo, ", "In a bakery, "];
    var objects = ["apples", "bananas", "books", "pencils", "toys"];
    var randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    var randomObject = objects[Math.floor(Math.random() * objects.length)];

    // 构造应用题的问题描述和答案
    var question = randomScenario + "there are " + num1 + " groups of " + num2 + " " + randomObject + ". ";
    question += "How many " + randomObject + " are there in total?";
    var answer = num1 * num2;

    // 返回应用题的问题描述和答案
    return [question, answer];
}
