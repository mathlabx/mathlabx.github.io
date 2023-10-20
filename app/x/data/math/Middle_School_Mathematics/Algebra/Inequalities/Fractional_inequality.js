/*
# 分数不等式
 - 使用Katex表达函数
 - return[0]或者question是一个数组，用于表达多行的题比如["题目的说明","题目的公式*&&……@#……！*"]
 - return[1]或者answer可以是一个比如：1, "z=2", ...; 也可以是一个长度为2的数组来表达分数解，比如：[1,2]表达的是1/2
 - (min, max)是系数的最小和最大随机范围
 
 题目示例：
 - 1/x > 3 解：x < 1/3
    - Katex: \frac{1}{x} > 3 解：x < \frac{1}{3}
 - (2x+3)/(5) - (x-1)/(3) >= 2  解：x ≥ 16
    - Katex: \frac{2x+3}{5} - \frac{x-1}{3} \geq 2  解：x \geq 16
*/

$X.math.Middle_School_Mathematics.Algebra.Fractional_inequality = function (min, max) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const coefficients = [1, 2, 3, 4, 5]; // 可以根据需要添加更多的系数选项
    const numerator1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const denominator1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const numerator2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const denominator2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const coefficient1 = coefficients[Math.floor(Math.random() * coefficients.length)];
    const coefficient2 = coefficients[Math.floor(Math.random() * coefficients.length)];
    const variable = letters.charAt(Math.floor(Math.random() * letters.length));
    const operation = ["<", ">", "\\leq", "\\geq"][Math.floor(Math.random() * 4)]; // 随机选择一个操作符
    const reciprocalOperation = operation === "<" ? ">" : "<"; // 根据选择的操作符获取倒数的操作符
    let question = [];
    let answer;

    // 生成问题和答案
    if (Math.random() < 0.5) {
        // 生成 < 或者 >
        const inequality = operation === "<" ? ">" : "<";
        question.push(`Solve the inequality: `);
        question.push(`\\frac{${coefficient1}${variable}${numerator1 !== 1 ? '' : ''}}{${denominator1 !== 1 ? denominator1 : ''}} ${inequality} ${coefficient2}`);
        answer = `${variable} ${reciprocalOperation} \\frac{${coefficient2}}{${coefficient1 * numerator1}}`;
    } else {
        // 生成 \leq 或者 \geq
        const inequality = operation === "\\leq" ? "\\geq" : "\\leq";
        question.push(`Solve the inequality: `);
        question.push(`\\frac{${coefficient1}${variable}${numerator1 !== 1 ? '' : ''}}{${denominator1 !== 1 ? denominator1 : ''}} ${inequality} ${coefficient2}`);
        answer = `${variable} ${operation} \\frac{${coefficient2 * denominator1 - coefficient1 * numerator1}}{${coefficient1 * denominator1}}`;
    }

    return [question, answer];
}