/*
基本同类项合并

输入：(最小数，最大数, 每道题的系数个数, 不同种类字母数量（a-z）担保最大26,)
输出：[题干Katex格式，答案]
*/

$X.math.Middle_School_Mathematics.Algebra.Polynomials_and_factoring_Simplification = function (min, max, num_coefficient, num_var) {
    const coefficients = [];
    const variables = "abcdefghijklmnopqrstuvwxyz".slice(0, num_var);
    let problem = [];
    let answer = "";

    problem[0] = "Factor the following expressions: ";

    for (let i = 0; i < num_coefficient; i++) {
        coefficients.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    let expression = "";
    // 生成问题
    for (let i = 0; i < num_coefficient; i++) {
        let term = "";
        const coefficient = coefficients[i];
        const variable = variables[Math.floor(Math.random() * variables.length)];
        term += coefficient !== 1 ? coefficient : "";
        term += variable;
        expression += term;
        if (i !== num_coefficient - 1) {
            expression += " + ";
        }
    }
    problem[1] = expression;

    // 合并同类项
    const terms = expression.split(' + ');
    const termMap = {};
    terms.forEach((term) => {
        const variable = term.match(/[a-z]/)[0];
        const coefficient = parseInt(term.match(/\d+/)) || 1;
        termMap[variable] = termMap[variable] ? termMap[variable] + coefficient : coefficient;
    });

    for (const key in termMap) {
        if (termMap.hasOwnProperty(key)) {
            answer += (answer.length !== 0 ? " + " : "") + termMap[key] + key;
        }
    }

    return [problem, answer];
}