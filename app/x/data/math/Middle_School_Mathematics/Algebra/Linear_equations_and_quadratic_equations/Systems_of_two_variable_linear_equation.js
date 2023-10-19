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
    const coefficientRange = (max - min) + 1;

    while (!valid) {
        equations = [];
        for (let i = 0; i < num_equ; i++) {
            let a, b, c, d, e, f;
            do {
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                c = Math.floor(Math.random() * coefficientRange) + min;
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = Math.floor(Math.random() * coefficientRange) + min;
            } while (a === 0 || (add && sub && (a === d || b === e)));

            if (add && !sub) {
                c = a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5) + 1;
                f = d * Math.floor(Math.random() * 5) + e * Math.floor(Math.random() * 5) + 1;
            } else if (!add && sub) {
                const temp1 = Math.floor(Math.random() * 5) + 1;
                const temp2 = Math.floor(Math.random() * 5) + 1;
                c = a * temp1 - b * temp1;
                f = d * temp2 - e * temp2;
            } else {
                const isAdd = Math.random() < 0.5;
                const temp = Math.floor(Math.random() * 5) + 1;
                c = isAdd ? a * temp + b * temp : a * temp - b * temp;
                f = isAdd ? d * temp + e * temp : d * temp - e * temp;
            }
            equations.push([[a, b, c], [d, e, f]]);
        }

        // Gaussian elimination
        let validEquation = true;
        for (let i = 0; i < num_equ; i++) {
            if (equations[i][0][0] === 0) {
                if (i < num_equ - 1) {
                    const temp = equations[i];
                    equations[i] = equations[i + 1];
                    equations[i + 1] = temp;
                } else {
                    validEquation = false;
                    break;
                }
            }
            const m = equations[i][1][0] / equations[i][0][0];
            if (!isFinite(m)) {
                validEquation = false;
                break;
            }
            for (let j = 0; j < 3; j++) {
                equations[i][1][j] -= m * equations[i][0][j];
            }
        }

        if (!validEquation) {
            continue;
        }

        y = equations[num_equ - 1][1][2] / equations[num_equ - 1][1][1];
        x = (equations[num_equ - 1][0][2] - equations[num_equ - 1][0][1] * y) / equations[num_equ - 1][0][0];

        if (Number.isInteger(x) && Number.isInteger(y) && x >= min && x <= max && y >= min && y <= max) {
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