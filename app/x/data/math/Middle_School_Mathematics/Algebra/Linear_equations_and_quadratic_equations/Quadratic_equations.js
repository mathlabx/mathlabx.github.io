//一元二次方程
/*
输入：(最小数，最大数)
输出：[题干Katex格式，答案]
*/

$X.math.Middle_School_Mathematics.Algebra.Quadratic_equations = function (min, max) {
    let a, b, c, discriminant;

    // Function to find the greatest common divisor (GCD) of two numbers
    function findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return findGCD(b, a % b);
    }

    // Function to simplify a fraction
    function simplifyFraction(numerator, denominator) {
        const gcd = findGCD(numerator, denominator);
        return [numerator / gcd, denominator / gcd];
    }

    function generateCoefficients() {
        let a, b, c, discriminant;
        do {
            a = Math.floor(Math.random() * (max - min + 1)) + min;
            b = Math.floor(Math.random() * (max - min + 1)) + min;
            c = Math.floor(Math.random() * (max - min + 1)) + min;

            discriminant = b * b - 4 * a * c;

            // Check if the fraction is too large and regenerate if necessary
            const numerator = Math.abs(b);
            const denominator = 2 * Math.abs(a);
            if (denominator > 100) { 
                continue; 
            }
        } while (a === 0 || discriminant < 0);

        return [a, b, c, discriminant];
    }

    [a, b, c, discriminant] = generateCoefficients();

    // Generate the question
    const question = [
        `Solve the equation: `,
        `${a}x^2 + ${b}x + ${c} = 0`
    ];

    // Calculate the answer using the quadratic formula
    let answer;
    if (discriminant === 0) {
        const x = -b / (2 * a);
        if (x % 1 !== 0) {
            // If the answer is a decimal, simplify it to a fraction
            const numerator = -b;
            const denominator = 2 * a;
            const simplifiedFraction = simplifyFraction(numerator, denominator);
            answer = `x = \\frac{${simplifiedFraction[0]}}{${simplifiedFraction[1]}}`;
        } else {
            answer = `x = ${x}`;
        }
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let answer1, answer2;
        if (x1 % 1 !== 0) {
            const numerator1 = -b + Math.sqrt(discriminant);
            const denominator1 = 2 * a;
            const simplifiedFraction1 = simplifyFraction(numerator1, denominator1);
            answer1 = `\\frac{${simplifiedFraction1[0]}}{${simplifiedFraction1[1]}}`;
        } else {
            answer1 = x1;
        }
        if (x2 % 1 !== 0) {
            const numerator2 = -b - Math.sqrt(discriminant);
            const denominator2 = 2 * a;
            const simplifiedFraction2 = simplifyFraction(numerator2, denominator2);
            answer2 = `\\frac{${simplifiedFraction2[0]}}{${simplifiedFraction2[1]}}`;
        } else {
            answer2 = x2;
        }
        answer = `x_1 = ${answer1}, \\ x_2 = ${answer2}`;
    }

    return [question, answer];
}