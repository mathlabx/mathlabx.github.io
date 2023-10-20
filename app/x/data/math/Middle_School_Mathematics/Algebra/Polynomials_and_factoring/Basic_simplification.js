/*
基本同类项合并

输入：(最小数，最大数, 每道题的系数个数, 不同种类字母数量（a-z）担保最大26,)
输出：[题干Katex格式，答案]
*/

$X.math.Middle_School_Mathematics.Polynomials_and_factoring_Simplification = function (min, max, num_coefficient, num_var) {
    const coefficients = [];
    const variables = "abcdefghijklmnopqrstuvwxyz".slice(0, num_var);
    let problem = ["factoring the following expressions: "];
    let answer = "";

    for (let i = 0; i < num_coefficient; i++) {
        coefficients.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // 生成问题
    for (let i = 0; i < num_coefficient; i++) {
        let term = "";
        const coefficient = coefficients[i];
        const variable = variables[Math.floor(Math.random() * variables.length)];
        term += coefficient !== 1 ? coefficient : "";
        term += variable;
        problem[1] += term;
        if (i !== num_coefficient - 1) {
            problem[1] += " + ";
        }
    }

    // 合并同类项
    const uniqueVariables = Array.from(new Set(variables));
    for (let i = 0; i < uniqueVariables.length; i++) {
        let coefficientSum = 0;
        const currentVar = uniqueVariables[i];
        for (let j = 0; j < num_coefficient; j++) {
            const coefficient = coefficients[j];
            const term = coefficient + currentVar;
            if (problem[1].includes(term)) {
                coefficientSum += coefficient;
                problem[1] = problem[1].replace(term, "");
            }
        }
        if (coefficientSum !== 0) {
            answer += (i !== 0 ? " + " : "") + coefficientSum + currentVar;
        }
    }

    return [problem, answer];
}
