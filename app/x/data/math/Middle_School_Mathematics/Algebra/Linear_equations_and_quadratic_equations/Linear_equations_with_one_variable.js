//一元一次方程
//2x + 3 = 7
//4y - 7 = 15
/*
基本代数-一元一次方程
- 数字题 Linear_equations_with_one_variable(系数最小值, 系数最大值,是否加法(布尔值),是否减法(布尔值), 乘除法(布尔值)) return 一个数组[题干(字符串), 解(数字)]

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
*/

// 一元一次方程组题目和答案生成函数
$X.math.Middle_School_Mathematics.Algebra.Linear_equations_with_one_variable = function (minCoeff, maxCoeff, isAddition, isSubtraction, isMD) {
    // Generate random coefficients and constants
    let coefficients = [];
    let constants = [];

    for (let i = 0; i < 3; i++) {
        let coefficient = Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff;
        coefficients.push(coefficient);

        let constant;
        if (isAddition) {
            constant = Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff;
        } else {
            constant = isSubtraction ? -Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) - minCoeff : coefficient * (Math.floor(Math.random() * (maxCoeff - minCoeff + 1)) + minCoeff);
        }
        constants.push(constant);
    }

    // Construct equations and solve
    let equations = [];
    let answers = [];

    for (let i = 0; i < 3; i++) {
        let equation = `${coefficients[i]}x`;
        if (isMD) {
            equation += ` = ${constants[i]}`;
        } else {
            equation += isAddition ? ` + ${constants[i]} = ${constants[i] + coefficients[i]}` : ` - ${-constants[i]} = ${constants[i] + coefficients[i]}`;
        }
        equations.push(equation);
        answers.push(`x=${isMD ? constants[i] / coefficients[i] : constants[i] / coefficients[i]}`);
    }

    return [equations, answers];
}