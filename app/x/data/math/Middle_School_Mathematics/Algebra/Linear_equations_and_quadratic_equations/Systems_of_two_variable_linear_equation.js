//二元一次方程组
//2x + 3y = 7, 3x - 4y = 10
//5x - 8y = 12, 7x + 2y = 2
/*
基本代数-二元一次方程组
- 数字题 Two_variable_linear_equations(系数最小值, 系数最大值,是否加法(布尔值),是否减法(布尔值), 方程组的方程数量) return 一个数组[题干(字符串), 解(数字)]

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
PS: 不会可以参考小学加减法
*/

$X.math.Middle_School_Mathematics.Algebra.Systems_of_two_variable_linear_equation = function (min, max, add, sub) {
    let coefficient1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let coefficient2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let coefficient3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let coefficient4 = Math.floor(Math.random() * (max - min + 1)) + min;
    let constant1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let constant2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let equation1, equation2, answer;

    if (add && !sub) {
        equation1 = `${coefficient1}x + ${coefficient2}y = ${constant1}`;
        equation2 = `${coefficient3}x + ${coefficient4}y = ${constant2}`;
        answer = [(constant2 * coefficient1 - constant1 * coefficient3) / (coefficient1 * coefficient4 - coefficient2 * coefficient3), (constant1 * coefficient4 - constant2 * coefficient2) / (coefficient1 * coefficient4 - coefficient2 * coefficient3)];
    } else if (!add && sub) {
        equation1 = `${coefficient1}x - ${coefficient2}y = ${constant1}`;
        equation2 = `${coefficient3}x - ${coefficient4}y = ${constant2}`;
        answer = [(constant2 * coefficient1 - constant1 * coefficient3) / (coefficient1 * coefficient4 - coefficient2 * coefficient3), (constant1 * coefficient4 - constant2 * coefficient2) / (coefficient1 * coefficient4 - coefficient2 * coefficient3)];
    } else {
        return "Invalid operation!";
    }

    return [[equation1, equation2], answer];
}
