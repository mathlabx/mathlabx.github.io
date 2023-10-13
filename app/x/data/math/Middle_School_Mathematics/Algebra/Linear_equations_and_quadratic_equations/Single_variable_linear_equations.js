//一元一次方程（Single-variable linear equations）
//2x + 3 = 7
//5y - 8 = 12
//如果一本书的原价是$20，现在打折50%，那么现在的价格是多少？
//如果小明有10个苹果，他吃掉了3个，还剩下多少个？
/*
基本代数-一元一次方程
- 数字题 Single_variable_linear_equations(系数最小值, 系数最大值,是否加法(布尔值),是否减法(布尔值)) return 一个数组[题干(字符串), 解(数字)]
- 文字题 Single_variable_linear_equations_w(系数最小值, 系数最大值,是否加法(布尔值),是否减法(布尔值)) return 一个数组[题干(字符串), 解(数字)]

输入：(最小数，最大数)
输出：[题干Katex格式，答案]
PS: 不会可以参考小学加减法
*/

// 数字题 Single_variable_linear_equations
$X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations = function (min, max, add, sub) {
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

    // 生成唯一问题
    let question;
    let answer;
    do {
        // 生成随机的因子
        let factor = Math.floor(Math.random() * (max - min + 1)) + min;
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let c = a * factor + b; // 使用随机因子确保 c 不会太小或太大


        // 根据参数确定运算符
        let operator = add ? '+' : sub ? '-' : '+';

        // 构建问题描述
        question = `Solve the equation: ${a}x ${operator} ${b} = ${c}.`;

        // 计算答案
        answer = add ? (c - b) / a : sub ? (c + b) / a : (c - b) / a;

        // 根据答案是否小数，将答案表示为分数
        answer = convertToFractionIfDecimal(answer);
    } while (checkIfQuestionExists(question));

    // 存储问题以避免重复
    storedQuestions.push(question);

    // 返回问题描述和答案
    return [question, answer];
}

// 文字题 Single_variable_linear_equations_w
$X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations_w = function (min, max, add, sub) {
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

    // 生成唯一问题
    let question;
    let answer;
    do {
        // 生成合理范围内的随机系数
        let a = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let c = a * 2 + b; // 确保 c 不会太小或太大

        // 根据参数确定运算符
        let operator = add ? 'plus' : sub ? 'minus' : 'plus';

        // 创建潜在场景的数组
        let scenarios = [
            `John has ${a} apples. He ${operator} gives away ${b} apples. How many apples does he have now?`,
            `Sarah is collecting ${a} ${objects[0]}. She ${operator} adds ${b} more ${objects[0]}. How many ${objects[0]} does she have in total?`,
            `In a classroom, there are ${a} students. If ${b} students are absent, how many students are present?`,
            `Tom bought ${a} candies. He ${operator} eats ${b} candies. How many candies does he have left?`,
            `There are ${a} birds in a tree. ${b} more birds fly to the tree. How many birds are there now?`,
            `Lisa has ${a} stickers. She ${operator} shares ${b} stickers with her friends. How many stickers does she have left?`,
            `In a game, there are ${a} players. If ${b} players join the game, how many players are there in total?`,
            `Alex saves $${a} per week. After ${b} weeks, how much money has he saved in total?`,
            `There are ${a} chocolates in a box. If ${b} chocolates are taken out, how many chocolates are left in the box?`,
            `Megan has ${a} marbles. She ${operator} wins ${b} more marbles in a game. How many marbles does she have now?`,
        ];

        // 随机选择一个场景
        let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

        // 构建问题描述
        question = `Solve the following equation: ${randomScenario}`;

        // 计算答案
        answer = add ? a - b : sub ? a + b : a;

        // 根据答案是否小数，将答案表示为分数
        answer = convertToFractionIfDecimal(answer);
    } while (checkIfQuestionExists(question));

    // 存储问题以避免重复
    storedQuestions.push(question);

    // 返回问题描述和答案
    return [question, answer];
}