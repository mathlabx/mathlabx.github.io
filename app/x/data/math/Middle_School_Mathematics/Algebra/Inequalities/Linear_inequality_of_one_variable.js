/*
# 线性方程不等式
 - 使用Katex表达函数
 - return[0]或者question是一个数组，用于表达多行的题比如["题目的说明","题目的公式*&&……@#……！*"]
 - return[1]或者answer可以是一个比如：1, "z=2", ...; 也可以是一个长度为2的数组来表达分数解，比如：[1,2]表达的是1/2
 - (min, max)是系数的最小和最大随机范围
 
 题目示例：
 - 2x + 3 > 7 解：x > 2
    - Katex: 2x + 3 > 7 解：x > 2
 - -3x - 4 <= 5  解：x >= -3
    - Katex: -3x - 4 \leq 5 解：x \geq -3
*/

$X.math.Middle_School_Mathematics.Algebra.Linear_inequality_of_one_variable = function (min, max) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const operators = ["+", "-"];
        const signs = ["<", ">", "\\leq", "\\geq"];
        const coefficient = Math.floor(Math.random() * (max - min + 1)) + min;
        const constant = Math.floor(Math.random() * (max - min + 1)) + min;
        const solution = Math.floor(Math.random() * (max - min + 1)) + min;
        const variable = letters.charAt(Math.floor(Math.random() * letters.length));
        const operation = operators[Math.floor(Math.random() * operators.length)];
        const inequality = signs[Math.floor(Math.random() * signs.length)];
        let question = [];
        let answer;
        question.push("Solve the inequality: ");
        let numerator = solution - constant;
        let denominator = coefficient;
        const gcd = function (a, b) {
                if (!b) {
                        return a;
                }
                return gcd(b, a % b);
        };
        const gcdValue = gcd(numerator, denominator);
        if (signs.indexOf(inequality) < 2) {
                question.push(`${coefficient}${variable} ${operation} ${constant} ${inequality} ${solution}`);
                if (gcdValue !== 1) {
                        answer = `${variable} ${inequality} \\frac{${numerator / gcdValue}}{${denominator / gcdValue}}`;
                } else {
                        answer = `${variable} ${inequality} ${numerator / denominator}`;
                }
        } else {
                question.push(`${coefficient}${variable} ${operation} ${constant} ${inequality} ${solution}`);
                if (gcdValue !== 1) {
                        answer = `${variable} ${inequality} \\frac{${numerator / gcdValue}}{${denominator / gcdValue}}`;
                } else {
                        answer = `${variable} ${inequality} ${numerator / denominator}`;
                }
        }
        return [question, answer];
};    