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

function Two_variable_linear_equations(min, max, add, sub, num_equ) {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const equations = [];
    const x = getRandomNumber(min, max);
    const y = getRandomNumber(min, max);

    for (let i = 0; i < num_equ; i++) {
        let a, b, c;
        if (add) {
            a = getRandomNumber(min, max);
            b = getRandomNumber(min, max);
            c = x * a + y * b;
        } else if (sub) {
            a = getRandomNumber(min, max);
            b = getRandomNumber(min, max);
            c = x * a - y * b;
        }
        equations.push([a, b, c]);
    }

    const problem = [`Solve the Systems of linear equations: `];
    equations.forEach(eq => {
        problem.push(`${eq[0]}x + ${eq[1]}y = ${eq[2]}, `);
    });

    const answer = `x = \\frac{${y} + ${max}}{${x}}, y = ${y}`;
    return [problem, answer];
}
