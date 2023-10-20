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
        // Function to find the greatest common divisor (GCD) of two numbers
        function findGCD(a, b) {
                if (b === 0) {
                        return a;
                }
                return findGCD(b, a % b);
        }

        // Function to simplify a fraction
        function simplifyFraction(numerator, denominator) {
                const gcd = findGCD(numerator, denominator);
                return [numerator / gcd, denominator / gcd];
        }

        const letters = "abcdefghijklmnopqrstuvwxyz";
        const operators = ["+", "-"];
        const signs = ["<", ">", "\\leq", "\\geq"];
        const coefficient1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const coefficient2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const constant = Math.floor(Math.random() * (max - min + 1)) + min;
        const solution = Math.floor(Math.random() * (max - min + 1)) + min;
        const variable = letters.charAt(Math.floor(Math.random() * letters.length));
        const operation1 = operators[Math.floor(Math.random() * operators.length)];
        const operation2 = operators[Math.floor(Math.random() * operators.length)];
        const inequality = signs[Math.floor(Math.random() * signs.length)];
        const discriminant = coefficient2 * coefficient2 - 4 * coefficient1 * (constant - solution);
        let question = [];
        question.push("Solve the inequality: ");
        question.push(`${coefficient1}${variable}^2 ${operation1} ${coefficient2}${variable} ${operation2} ${constant}  ${inequality} ${solution}`);
        let answer;
        if (discriminant > 0) {
                // Two real roots
                const x1 = (-coefficient2 + Math.sqrt(discriminant)) / (2 * coefficient1);
                const x2 = (-coefficient2 - Math.sqrt(discriminant)) / (2 * coefficient1);

                const x1Fraction = simplifyFraction(-coefficient2 + Math.sqrt(discriminant), 2 * coefficient1);
                const x2Fraction = simplifyFraction(-coefficient2 - Math.sqrt(discriminant), 2 * coefficient1);

                if (x1Fraction[1] === 1) {
                        answer = `x_1 = ${x1Fraction[0]}, x_2 = ${x2Fraction[0]}`;
                } else {
                        answer = `x_1 = \\frac{${x1Fraction[0]}}{${x1Fraction[1]}}, x_2 = \\frac{${x2Fraction[0]}}{${x2Fraction[1]}}`;
                }
        } else if (discriminant === 0) {
                // One real root
                const x = -coefficient2 / (2 * coefficient1);
                const xFraction = simplifyFraction(-coefficient2, 2 * coefficient1);

                if (xFraction[1] === 1) {
                        answer = `x = ${xFraction[0]}`;
                } else {
                        answer = `x = \\frac{${xFraction[0]}}{${xFraction[1]}}`;
                }
        } else {
                answer = "\\emptyset";
        }

        return [question, answer];
}