function main() {
    const equation1 = "a_1x + b_1y = c_1";
    const equation2 = "a_2x + b_2y = c_2";
    Operate.newStart("System of Linear Equations: ")
    Operate.newStep(`${equation1}`);
    Operate.newStep(`${equation2}`);

    Operate.newStart("Please enter coefficients a1, a2, b1, b2, c1, c2:");

    Operate.newInput(["a1", "a2", "b1", "b2", "c1", "c2"]).then((coefficients) => {

        const [a1, a2, b1, b2, c1, c2] = coefficients.map(Number);

        Operate.newStart("Coefficients Entered: ");
        Operate.newStep(`a1 = ${a1}, a2 = ${a2}, `);
        Operate.newStep(`b1 = ${b1}, b2 = ${b2}, `);
        Operate.newStep(`c1 = ${c1}, c2 = ${c2}`);

        let solutions = [];
        if (a2 != 0 && (b1 - ((a1 / a2) * b2)) != 0) {
            const y = (c1 - (c2 * (a1 / a2))) / (b1 - ((a1 / a2) * b2));
            const x = (c2 - (b2 * y)) / a2;
            solutions = [
                `x = ${x.toFixed(2)}`,
                `y = ${y.toFixed(2)}`,
            ];
            console.log(solutions);
        } else if (a2 == 0 && (b1 - ((a1 / a2) * b2)) != 0) {
            const y = c2 / b2;
            const x = (c1 - (b1 * y)) / a1;
            solutions = [
                `x = ${x.toFixed(2)}`,
                `y = ${y.toFixed(2)}`,
            ];
        } else {
            solutions = ["Parallel\\ Equations"];
        }

        Operate.newSolution("Solution\\ to\\ Equations:");
        solutions.forEach((solution) => {
            Operate.newStep(String(solution));
        });

        if (a2 != 0 && (b1 - ((a1 / a2) * b2)) != 0) {
            Operate.newStart("Calculate y using the system of linear equations formula: ");
            const step1 = `y = \\frac{c1 - \\frac{a1}{a2}*c2}{b1-\\frac{a1}{a2}*b2}`;
            Operate.newStep(step1);

            const denominator1 = (b1 - ((a1 / a2) * b2));
            const numerator1 = (c1 - (c2 * (a1 / a2)));
            const yFraction = `\\frac{${numerator1}}{${denominator1}}`;

            const step2 = `y = ${yFraction}`;
            Operate.newStep(step2);

            Operate.newStart("Calculate y using the system of linear equations formula: ");
            const step3 = `x = \\frac{c2 - b2*y}{a2}`;
            Operate.newStep(step3);

            const numerator2 = c2 - (b2 * (numerator1 / denominator1));
            const xFraction = `\\frac{${numerator2}}{${a2}}`;

            const step4 = `x = ${xFraction}`;
            Operate.newStep(step4);


            const xDecimal = numerator2 / a2;
            const yDecimal = numerator1 / denominator1;

            const step5 = `Solution: x = ${xDecimal.toFixed(2)}\\ or\\ y = ${yDecimal.toFixed(2)}`;
            Operate.newStep(step5);
        }

        const equationGraph1 = `${c1} = ${a1}x + ${b1}y`;
        const equationGraph2 = `${c2} = ${a2}x + ${b2}y`;
        Operate.newGraph([equationGraph1, equationGraph2]);
        Operate.newRestart();
    });
}