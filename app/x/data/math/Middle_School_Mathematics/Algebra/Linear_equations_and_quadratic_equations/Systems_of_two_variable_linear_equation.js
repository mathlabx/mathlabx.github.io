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
                c = a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5);
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5);
            } else if (!add && sub) {
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                c = a * Math.floor(Math.random() * 5) - b * Math.floor(Math.random() * 5);
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = a * Math.floor(Math.random() * 5) - b * Math.floor(Math.random() * 5);
            } else {
                const isAdd = Math.random() < 0.5;
                a = Math.floor(Math.random() * coefficientRange) + min;
                b = Math.floor(Math.random() * coefficientRange) + min;
                c = isAdd ? a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5) : a * Math.floor(Math.random() * 5) - b * Math.floor(Math.random() * 5);
                d = Math.floor(Math.random() * coefficientRange) + min;
                e = Math.floor(Math.random() * coefficientRange) + min;
                f = isAdd ? a * Math.floor(Math.random() * 5) + b * Math.floor(Math.random() * 5) : a * Math.floor(Math.random() * 5) - b * Math.floor(Math.random() * 5);
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