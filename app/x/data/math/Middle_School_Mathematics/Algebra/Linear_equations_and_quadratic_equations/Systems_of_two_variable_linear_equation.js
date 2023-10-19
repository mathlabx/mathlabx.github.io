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
    let valid = false;
    let equations, x, y;
    while (!valid) {
        const coefficientRange = (max - min) + 1;
        equations = [];
        for (let i = 0; i < num_equ; i++) {
            let a, b, c, d, e, f;
            if (add && !sub) {
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                c = a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5) + 1;
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = d * Math.floor(Math.random() * 5) + e * Math.floor(Math.random() * 5) + 1;
            } else if (!add && sub) {
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                const temp = Math.floor(Math.random() * 5) + 1;
                c = a * temp - b * temp;
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = d * temp - e * temp;
            } else {
                const isAdd = Math.random() < 0.5;
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                const temp1 = Math.floor(Math.random() * 5) + 1;
                const temp2 = Math.floor(Math.random() * 5) + 1;
                c = isAdd ? a * temp1 + b * temp2 : a * temp1 - b * temp2;
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                const temp3 = Math.floor(Math.random() * 5) + 1;
                const temp4 = Math.floor(Math.random() * 5) + 1;
                f = isAdd ? d * temp3 + e * temp4 : d * temp3 - e * temp4;
            }
            equations.push([[a, b, c], [d, e, f]]);
        }

        // Gaussian elimination
        for (let i = 0; i < num_equ; i++) {
            const m = equations[i][1][0] / equations[i][0][0];
            for (let j = 0; j < 3; j++) {
                equations[i][1][j] -= m * equations[i][0][j];
            }
        }

        y = equations[num_equ - 1][1][2] / equations[num_equ - 1][1][1];
        x = (equations[num_equ - 1][0][2] - equations[num_equ - 1][0][1] * y) / equations[num_equ - 1][0][0];

        if (Number.isInteger(x) && Number.isInteger(y)) {
            valid = true;
        }
    }

    const problem = [`Solve the Systems of linear equations: `];
    equations.forEach(eq => {
        problem.push(`${eq[0][0]}x + ${eq[0][1]}y = ${eq[0][2]}, `);
    });

    const answer = `x = ${x}, y = ${y}`;
    return [problem, answer];
}
