/*
# 绝对值不等式
 - 使用Katex表达函数
 - return[0]或者question是一个数组，用于表达多行的题比如["题目的说明","题目的公式*&&……@#……！*"]
 - return[1]或者answer可以是一个比如：1, "z=2", ...; 
 - 2个答案直接用逗号隔开就可以
 - (min, max)是系数的最小和最大随机范围
 
 题目示例：
 - |2x + 3| > 5 解：x < -4, x>2
    - Katex: |2x + 3| > 5 解：
 - |2x-1| + |x+2| < 5 解：(-4/3) < x < 3
    - Katex: |2x-1| + |x+2| < 5  解：-\frac{4}{3} < x < 3
*/

$X.math.Middle_School_Mathematics.Algebra.Absolute_value_inequality = function (min, max) {

    return [question, answer];
}