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
    const equations = [];
    for (let i = 0; i < num_equ; i++) {
        let a, b, c;
        if (add && !sub) {
            a = Math.floor(Math.random() * (max - min + 1)) + min;
            b = Math.floor(Math.random() * (max - min + 1)) + min;
            c = Math.floor(Math.random() * (max - min + 1)) + min;
        } else if (sub && !add) {
            a = Math.floor(Math.random() * (max - min + 1)) + min;
            b = Math.floor(Math.random() * (max - min + 1)) + min;
            c = Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            // Handle the case when both add and sub are true or false
        }
        equations.push([[a, b, c]]);
    }

    const problem = [`Solve the Systems of linear equations: `];
    equations.forEach(eq => {
        problem.push(`${eq[0][0]}x + ${eq[0][1]}y = ${eq[0][2]}, `);
    });

    const x = 0; // 请填写计算得到的 x 的值
    const y = 0; // 请填写计算得到的 y 的值

    const answer = `x = ${x}, y = ${y}`;
    return [problem.join(''), answer];
}
