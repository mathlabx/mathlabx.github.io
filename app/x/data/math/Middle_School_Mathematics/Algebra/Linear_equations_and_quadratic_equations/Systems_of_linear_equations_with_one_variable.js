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
    let equations = [];
    let solutions = [];

    for (let i = 0; i < num_equ; i++) {
        let a, b, c, op;
        if (add && !sub) {
            op = '+';
        } else if (!add && sub) {
            op = '-';
        } else {
            op = Math.random() < 0.5 ? '+' : '-';
        }
        a = Math.floor(Math.random() * (max - min + 1)) + min;
        b = Math.floor(Math.random() * (max - min + 1)) + min;
        c = Math.floor(Math.random() * (max - min + 1)) + min;

        equations.push(`${a}x ${op === '+' ? '+' : '-'} ${b} = ${c}`);
        // 解方程
        let sol;
        if (op === '+') {
            sol = (c - b) / a;
        } else {
            sol = (c + b) / a;
        }
        solutions.push(sol);
    }

    let equation = [];
    equation.push("Solve the following system of linear equations for 'x'.");
    for (let i = 0; i < equations.length; i++) {
        equation.push(equations[i] + ",");
    }

    let answer = solutions;

    return [equation, answer];
}