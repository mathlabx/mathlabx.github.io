/*
百分比计算
- 70% of 780
- 文字题 小杰家具店的经理正在计算新到的沙发应该卖多少钱. 沙发是 $100, 打70% off...

输入：(最小数，最大数)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Percentages.Calculating_percentages = function (min, max) {
    // 生成一个随机数作为百分比
    var percentage = Math.floor(Math.random() * (max - min + 1)) + min;

    // 生成一个随机数作为基数
    var base = Math.floor(Math.random() * (max - min + 1)) + min;

    // 计算百分比
    var result = (percentage / 100) * base;

    // 构造题干
    var question = "What is " + percentage + "% of " + base + "?";

    // 返回题干和答案
    return [question, result];
}

$X.math.Elementary_Mathematics.Percentages.Calculating_percentages_w = function (min, max) {
    // 随机选择一种情景
    var scenario = Math.floor(Math.random() * 3);

    // 初始化相关变量
    var description = "";
    var result = 0;

    // 根据不同情景生成题目
    if (scenario === 0) {
        // 情景1: 商品原价和折扣价
        var originalPrice = Math.floor(Math.random() * (max - min + 1)) + min;
        var discountPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
        var discountedPrice = originalPrice - (discountPercentage / 100) * originalPrice;

        description = "A product originally costs $" + originalPrice + ". It is now on sale at a " + discountPercentage + "% discount. What is the new price?";
        result = discountedPrice;
    } else if (scenario === 1) {
        // 情景2: 学生考试分数
        var maxScore = 100;
        var studentScore = Math.floor(Math.random() * (maxScore - min + 1)) + min;
        var passingPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
        var passingScore = (passingPercentage / 100) * maxScore;

        description = "In a test, a student scored " + studentScore + " out of " + maxScore + ". To pass the test, a student needs to score at least " + passingPercentage + "%. Did the student pass?";
        result = studentScore >= passingScore ? "Yes" : "No";
    } else {
        // 情景3: 投资收益
        var initialInvestment = Math.floor(Math.random() * (max - min + 1)) + min;
        var annualInterestRate = Math.floor(Math.random() * (max - min + 1)) + min;
        var investmentDuration = Math.floor(Math.random() * (max - min + 1)) + min;
        var futureValue = initialInvestment * Math.pow(1 + annualInterestRate / 100, investmentDuration);

        description = "If you invest $" + initialInvestment + " at an annual interest rate of " + annualInterestRate + "% for " + investmentDuration + " years, what will be the future value of your investment?";
        result = futureValue.toFixed(2); // 保留两位小数
    }

    // 返回题干和答案
    return [description, result];
}