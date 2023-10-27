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
        let coefficients = [];
        let operator = ['<', '>', '\\leq', '\\geq'];
        let constant;

        do {
                coefficients = Array.from({ length: 2 }, () => Math.floor(Math.random() * (max - min + 1)) + min);
                constant = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (coefficients[0] === 0);

        let [a, b] = coefficients;
        let op = operator[Math.floor(Math.random() * operator.length)];

        let question = `${a}x ${op} ${constant}`;
        let answer;

        switch (op) {
                case '<':
                        answer = `x < ${constant / a}`;
                        break;
                case '>':
                        answer = `x > ${constant / a}`;
                        break;
                case '\\leq':
                        answer = `x \\geq ${constant / a}`;
                        break;
                case '\\geq':
                        answer = `x \\leq ${constant / a}`;
                        break;
                default:
                        answer = '';
        }

        return [question, answer];
};
