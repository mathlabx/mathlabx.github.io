/*
一元二次方程

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
*/

$X.math.Middle_School_Mathematics.Algebra.Quadratic_equations = function (min, max) {
    var answer;
    let valid = false;
    while (!valid) {
        // 生成随机分数
        function generateRandomFraction(min, max) {
            var numerator = Math.floor(Math.random() * (max - min + 1)) + min;
            var denominator = Math.floor(Math.random() * (max - min + 1)) + min;
            return [numerator, denominator];
        }

        // 计算两个分数的最大公约数
        function findGCD(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);
            if (b === 0) {
                return a;
            }
            return findGCD(b, a % b);
        }

        var a, b, c, discriminant;
        do {
            a = Math.floor(Math.random() * (max - min + 1)) + min;
            b = Math.floor(Math.random() * (max - min + 1)) + min;
            c = Math.floor(Math.random() * (max - min + 1)) + min;

            discriminant = b * b - 4 * a * c;

            // Check if the fraction is too large and regenerate if necessary
            var numerator = Math.abs(b);
            var denominator = 2 * Math.abs(a);

            var chanceOfNoSolution = Math.random();
            if (chanceOfNoSolution < 0.1 && discriminant >= 0) {
                a = 0; // Adjust to make the equation have no solution
                discriminant = -1; // Set discriminant to -1 to indicate no solution
            }
        } while (
            a === 0 ||
            discriminant < 0 ||
            findGCD(numerator, denominator) > max
        );

        // 简化分数
        function simplifyFraction(numerator, denominator) {
            var gcd = findGCD(numerator, denominator);
            var sign = (numerator < 0) === (denominator < 0) ? 1 : -1;
            numerator = Math.abs(numerator) / gcd;
            denominator = Math.abs(denominator) / gcd;
            if (numerator === 1) {
                return sign === -1 ? `-${numerator}/${denominator}` : `${numerator}/${denominator}`;
            } else {
                return sign === -1 ? `-${numerator}/${denominator}` : `\\frac{${numerator}}{${denominator}}`;
            }
        }

        // 构造题干
        var question = [
            `Solve the equation: `,
            `${a}x^2 + ${b}x + ${c} = 0`
        ];

        // 构造答案
        if (discriminant === 0) {
            var x = -b / (2 * a);
            if (x % 1 !== 0) {
                // If the answer is a decimal, simplify it to a fraction
                answer = simplifyFraction(-b, 2 * a);
            } else {
                answer = `x = ${x}`;
            }
        } else if (discriminant === -1) {
            answer = "∅";
        } else {
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            var simplifiedFraction1 = simplifyFraction(-b + Math.sqrt(discriminant), 2 * a);
            var simplifiedFraction2 = simplifyFraction(-b - Math.sqrt(discriminant), 2 * a);
            answer = `x_1 = ${simplifiedFraction1}, \\ x_2 = ${simplifiedFraction2}`;
        }
    }
    if (answer != "") valid = true;

    // 返回题干和答案
    return [question, answer];
}