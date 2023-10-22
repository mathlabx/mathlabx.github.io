/*
Linear Inequality
- Using Katex to express the function
- return[0] or question is an array used to express multi-line questions, such as ["description of the question", "formula of the question*&&……@#……！*"]
- return[1] or answer can be a single value, such as: 1, "z=2", ...; or it can be a string in Katex format to express a fraction solution, such as: "\\frac{1}{2}" to express 1/2
- (min, max) is the minimum and maximum random range of coefficients

Example:
- 2x + 3 > 7 Solution: x > 2
    - Katex: 2x + 3 > 7 Solution: x > 2
- -3x - 4 <= 5 Solution: x >= -3
    - Katex: -3x - 4 \leq 5 Solution: x \geq -3
*/

$X.math.Middle_School_Mathematics.Algebra.Linear_inequality_of_one_variable = function (min, max) {
        // 数组用于存储生成的问题
        let storedQuestions = [];

        // 检查问题是否已存在的函数
        function checkIfQuestionExists(question) {
                return storedQuestions.includes(question);
        }

        // 将小数转换为分数的函数
        function convertToFractionIfDecimal(number) {
                const tolerance = 1.0E-6; // 容差值，用于判断是否为小数

                if (Math.abs(Math.round(number) - number) < tolerance) {
                        // 是整数
                        return number.toString();
                } else {
                        // 是小数，将其转换为分数
                        const tolerance = 1.0E-6; // 容差值
                        let h1 = 1;
                        let h2 = 0;
                        let k1 = 0;
                        let k2 = 1;
                        let b = number;
                        do {
                                let a = Math.floor(b);
                                let aux = h1;
                                h1 = a * h1 + h2;
                                h2 = aux;
                                aux = k1;
                                k1 = a * k1 + k2;
                                k2 = aux;
                                b = 1 / (b - a);
                        } while (Math.abs(number - h1 / k1) > number * tolerance);

                        return `\\frac{${h1}}{${k1}}`;
                }
        }

        // 生成唯一问题的函数
        let question;
        let answer;
        do {
                // 生成随机的系数
                const letters = "abcdefghijklmnopqrstuvwxyz";
                const operators = ["+", "-"];
                const signs = ["<", ">", "\\leq", "\\geq"];
                const coefficient = Math.floor(Math.random() * (max - min + 1)) + min;
                const constant = Math.floor(Math.random() * (max - min + 1)) + min;
                const solution = Math.floor(Math.random() * (max - min + 1)) + min;
                const variable = letters.charAt(Math.floor(Math.random() * letters.length));
                const operation = operators[Math.floor(Math.random() * operators.length)];
                const inequality = signs[Math.floor(Math.random() * signs.length)];

                question = ["Solve the inequality: ", `${coefficient}${variable} ${operation} ${constant} ${inequality} ${solution}`];

                let numerator = solution - constant;
                let denominator = coefficient;
                const gcd = function (a, b) {
                        if (!b) {
                                return a;
                        }
                        return gcd(b, a % b);
                };
                const gcdValue = gcd(numerator, denominator);
                const isInteger = gcdValue === 1 && numerator % denominator === 0;

                if (signs.indexOf(inequality) < 2) {
                        if (gcdValue !== 1) {
                                answer = isInteger ? numerator / denominator : convertToFractionIfDecimal(numerator / gcdValue / denominator);
                        } else {
                                answer = numerator / denominator;
                        }
                } else {
                        if (gcdValue !== 1) {
                                answer = isInteger ? numerator / denominator : convertToFractionIfDecimal(numerator / gcdValue / denominator);
                        } else {
                                answer = numerator / denominator;
                        }
                }
        } while (checkIfQuestionExists(question.join(" ")));

        // 存储问题以避免重复
        storedQuestions.push(question.join(" "));

        answer = `x = ${answer}`;

        // 返回问题描述和答案
        return [question, answer];
};
