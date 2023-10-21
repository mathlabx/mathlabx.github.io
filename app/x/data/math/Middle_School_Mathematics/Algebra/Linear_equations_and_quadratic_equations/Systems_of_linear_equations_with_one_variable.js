//一元一次方程组（Systems of linear equations with one variable）
//2x + 3 = 7, 3x - 2 = 8
//4y - 7 = 15, 2y + 5 = 11
/*
基本代数-一元一次方程组
- 数字题 Systems_of_linear_equations_with_one_variable(系数最小值, 系数最大值,是否加法(布尔值),是否减法(布尔值), 方程组的方程数量) return 一个数组[题干(字符串), 解(数字)]

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
PS: 不会可以参考小学加减法
*/

// 一元一次方程组题目和答案生成函数
$X.math.Middle_School_Mathematics.Algebra.Systems_of_linear_equations_with_one_variable = function (min, max, add, sub, num_equ) {
    let storedQuestions = [];

    function checkIfQuestionExists(question) {
        return storedQuestions.includes(question);
    }

    function convertToFractionIfDecimal(number) {
        const tolerance = 1.0E-6;

        if (Math.abs(Math.round(number) - number) < tolerance) {
            return number;
        } else {
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

            return [h1, k1];
        }
    }

    function solveEquations(equations, solutions) {
        let variables = {};

        for (let i = 0; i < equations.length; i++) {
            let equation = equations[i];
            let solution = solutions[i];

            let parts = equation.split(" ");
            let a = parseInt(parts[0]);
            let operator = parts[1]; // 更正操作符索引
            let b = parseInt(parts[2]);
            let c = parseInt(parts[4]);

            if (operator === "+") {
                variables.x = (c - b) / a;
            } else if (operator === "-") {
                variables.x = (b - c) / a; // 修正减法运算
            }
        }

        return variables.x;
    }

    let equation = new Array();
    let answer;
    do {
        let equations = [];
        let solutions = [];

        for (let i = 0; i < num_equ; i++) {
            let factor = Math.floor(Math.random() * (max - min + 1)) + min;
            let a = Math.floor(Math.random() * (max - min + 1)) + min;
            let b = Math.floor(Math.random() * (max - min + 1)) + min;
            let c = a * factor + b;

            let operator = add ? '+' : sub ? '-' : '+';

            let equationDesc = `${a}x ${operator} ${b} = ${c}`;
            equations.push(equationDesc);

            let x = add ? (c - b) / a : sub ? (b - c) / a : (c - b) / a;
            solutions.push(x);
        }

        equation.push("Solve the following system of linear equations of one variable.");
        for (let i = 0; i < equations.length; i++) {
            equation.push(equations[i] + ",");
        }

        let xValue = solveEquations(equations, solutions);

        answer = convertToFractionIfDecimal(xValue);

    } while (checkIfQuestionExists(equation));

    storedQuestions.push(equation);

    return [equation, answer];
}
