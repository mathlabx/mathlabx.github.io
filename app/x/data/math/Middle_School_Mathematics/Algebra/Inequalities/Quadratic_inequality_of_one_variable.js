/*
# 二次方程不等式
 - 使用Katex表达函数
 - return[0]或者question是一个数组，用于表达多行的题比如["题目的说明","题目的公式*&&……@#……！*"]
 - return[1]或者answer可以是一个比如：1, "z=2", ...; 也可以是一个长度为2的数组来表达分数解，比如：[1,2]表达的是1/2
 - (min, max)是系数的最小和最大随机范围
 
 题目示例：
 - x^2 - 3x + 2 > 0 解：x < 1, x > 2
    - Katex: x^2 - 3x + 2 > 0 解：x < 1, x > 2
 - 4x^2 - 12x + 9 < 0  解：∅
    - Katex: 4x^2 - 12x + 9 < 0  解：\emptyset
*/

$X.math.Middle_School_Mathematics.Algebra.Quadratic_inequality_of_one_variable = function (min, max) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const operators = ["+", "-"];
        const signs = ["<", ">", "<=", ">="];
        const coefficient1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const coefficient2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const constant = Math.floor(Math.random() * (max - min + 1)) + min;
        const solution = Math.floor(Math.random() * (max - min + 1)) + min;
        const variable = letters.charAt(Math.floor(Math.random() * letters.length));
        const operation1 = operators[Math.floor(Math.random() * operators.length)];
        const operation2 = operators[Math.floor(Math.random() * operators.length)];
        const inequality = signs[Math.floor(Math.random() * signs.legnth)];
        const discriminant = coefficient2 * coefficient2 - 4 * coefficient1 * (constant - solution);
        let question = new Array();
        question.push("Solve the inequality: ");
        question.push(coefficient1 + variable + "^2 " + operation1 + " " + coefficient2 + variable + " " + operation2 + " " + constant + "  " + inequality + " " + solution);
        var answer;
        if (discriminant > 0) {
                // Two real roots
                const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                answer = variable + " " + inequality + " " + x1 + ", " + variable + " " + inequality + " " + x2;
        } else if (discriminant === 0) {
                // One real root
                const x = -b / (2 * a);
                answer = variable + " " + inequality + " " + x;
        }
        return [question, answer];
}
