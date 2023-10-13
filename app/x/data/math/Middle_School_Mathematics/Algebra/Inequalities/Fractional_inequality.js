/*
# 分数不等式
 - 使用Katex表达函数
 - return[0]或者question是一个数组，用于表达多行的题比如["题目的说明","题目的公式*&&……@#……！*"]
 - return[1]或者answer可以是一个比如：1, "z=2", ...; 也可以是一个长度为2的数组来表达分数解，比如：[1,2]表达的是1/2
 - (min, max)是系数的最小和最大随机范围
 
 题目示例：
 - 1/x > 3 解：x < 1/3
    - Katex: \frac{1}{x} > 3 解：x < \frac{1}{3}
 - (2x+3)/(5) - (x-1)/(3) >= 2  解：x ≥ 16
    - Katex: \frac{2x+3}{5} - \frac{x-1}{3} \geq 2  解：x \geq 16
*/

$X.math.Middle_School_Mathematics.Algebra.Fractional_inequality = function (min, max) {

    return [question, answer];
}