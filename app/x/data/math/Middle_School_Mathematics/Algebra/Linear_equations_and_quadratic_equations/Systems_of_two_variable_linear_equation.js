//二元一次方程组
//2x + 3y = 7, 3x - 4y = 10
//5x - 8y = 12, 7x + 2y = 2
/*
基本代数-二元一次方程组
- 数字题 Two_variable_linear_equations(系数最小值, 系数最大值, 是否加法(布尔值), 是否减法(布尔值), 方程组的方程数量) return 一个数组[题干(字符串), 解(数字)]

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
PS: 不会可以参考小学加减法
*/

$X.math.Middle_School_Mathematics.Algebra.Systems_of_two_variable_linear_equation = function (min, max, add, sub, num_equ) {
    const coefficientRange = (max - min) + 1;
    const equations = [];
    const coefficients = [];
    for (let i = 0; i < num_equ; i++) {
        const a = Math.floor(Math.random() * coefficientRange) + min;
        const b = Math.floor(Math.random() * coefficientRange) + min;
        const c = Math.floor(Math.random() * coefficientRange) + min;
        const d = Math.floor(Math.random() * coefficientRange) + min;
        const e = Math.floor(Math.random() * coefficientRange) + min;
        const f = Math.floor(Math.random() * coefficientRange) + min;
        equations.push([[a, b, c], [d, e, f]]);
        coefficients.push(a, b, c, d, e, f);
    }

    // Gaussian elimination
    for (let i = 0; i < num_equ; i++) {
        const m = equations[i][1][0] / equations[i][0][0];
        for (let j = 0; j < 3; j++) {
            equations[i][1][j] -= m * equations[i][0][j];
        }
    }

    const y = equations[num_equ - 1][1][2] / equations[num_equ - 1][1][1];
    let x = (equations[num_equ - 1][0][2] - equations[num_equ - 1][0][1] * y) / equations[num_equ - 1][0][0];

    const problem = [`Solve the Systems of linear equations: `];
    equations.forEach(eq => {
        problem.push(`${eq[0][0]}x + ${eq[0][1]}y = ${eq[0][2]}`);
    });

    const answer = [x, y];
    return [problem, answer];
}