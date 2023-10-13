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
    // 数组用于存储生成的问题
    let storedQuestions = [];

    // 检查问题是否已存在的函数
    function checkIfQuestionExists(question) {
        return storedQuestions.includes(question);
    }

    // 将小数转换为分数
    function convertToFractionIfDecimal(number) {
        const tolerance = 1.0E-6; // 容差值，用于判断是否为小数

        if (Math.abs(Math.round(number) - number) < tolerance) {
            // 是整数
            return number;
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

            return [h1, k1];
        }
    }

    // 解决一元一次方程组
    function solveEquations(equations, solutions) {
        // 创建一个对象来存储每个变量的值
        let variables = {};

        // 将方程组转换为只包含一个变量的形式，并解决
        for (let i = 0; i < equations.length; i++) {
            let equation = equations[i];
            let solution = solutions[i];

            // 假设每个方程只有一个变量 x，并且方程的形式为 "ax + b = c"
            let parts = equation.split(" ");
            let a = parseInt(parts[0]);
            let operator = parts[1];
            let b = parseInt(parts[2]);
            let c = parseInt(parts[4]);

            // 根据运算符计算 x 的值
            if (operator === "+") {
                variables.x = (c - b) / a;
            } else if (operator === "-") {
                variables.x = (c + b) / a;
            }
        }

        return variables.x;
    }

    // 生成唯一问题
    let equation = new Array();
    let answer;
    do {
        // 生成方程组
        let equations = [];
        let solutions = [];

        for (let i = 0; i < num_equ; i++) {
            // 生成随机的方程答案
            let factor = Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机因子
            let a = Math.floor(Math.random() * (max - min + 1)) + min;
            let b = Math.floor(Math.random() * (max - min + 1)) + min;
            let c = a * factor + b; // 使用随机因子确保 c 不会太小或太大


            // 根据参数确定运算符
            let operator = add ? '+' : sub ? '-' : '+';

            // 构建方程描述
            let equationDesc = `${a}x ${operator} ${b} = ${c}`;
            equations.push(equationDesc);

            // 计算每个方程的答案
            let x = add ? (c - b) / a : sub ? (c + b) / a : (c - b) / a;
            solutions.push(x);
        }

        // 构建问题描述
        equation.push("Solve the following system of linear equations of one variable.");
        for (let i = 0; i < equations.length; i++) {
            equation.push(equations[i] + ",");
        }

        // 计算答案
        let xValue = solveEquations(equations, solutions);

        // 根据答案是否小数，将答案表示为分数
        answer = convertToFractionIfDecimal(xValue);

    } while (checkIfQuestionExists(equation));

    // 存储问题以避免重复
    storedQuestions.push(equation);

    // 返回问题描述和答案
    return [equation, answer];
}