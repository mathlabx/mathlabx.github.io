function main() {
    const equation1 = "a_1x + b_1y + c_1z = d_1";
    const equation2 = "a_2x + b_2y + c_2z = d_2";
    const equation3 = "a_3x + b_3y + c_3z = d_3";

    // Step 1: Display the three linear equations
    Operate.newStart("Three-variable linear equation 1: ");
    Operate.newStep(`${equation1}`);
    Operate.newStart("Three-variable linear equation 2: ");
    Operate.newStep(`${equation2}`);
    Operate.newStart("Three-variable linear equation 1: ");
    Operate.newStep(`${equation3}`);

    // Step 2: Prompt user to input coefficients
    Operate.newStart("Please enter coefficients a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3:");

    // Step 3: Collect coefficient input from the user
    Operate.newInput(["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3"]).then((coefficients) => {

        const [a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3] = coefficients.map(Number);

        // Step 4: Display the entered coefficients
        Operate.newStep(`Entered\\ coefficients: `);
        Operate.newStep(`a1 = ${a1}, a2 = ${a2}, a3 = ${a3},`);
        Operate.newStep(`b1 = ${b1}, b2 = ${b2}, b3 = ${b3},`);
        Operate.newStep(`c1 = ${c1}, c2 = ${c2}, c3 = ${c3},`);
        Operate.newStep(`d1 = ${d1}, d2 = ${d2}, d3 = ${d3}`);

        let solutions = [];
        const det = a1 * ((b2 * c3) - (c2 * b3)) - b1 * ((a2 * c3) - (c2 * a3)) + c1 * ((a2 * b3) - (b2 * a3));

        let z;

        // Step 5: Check if the determinant is zero (no solutions)
        if (det === 0) {
            solutions = [
                `No\\ solutions`
            ];
        } else {
            // Step 6: Calculate the solutions and display the steps
            Operate.newStep("Solving\\ using\\ Cramer's\\ Rule:");

            const x = (d1 * b2 * c3 - c2 * b3 * d1 - b1 * d2 * c3 + c1 * d2 * b3) / det;
            Operate.newStep(`x = \\frac{${d1 * b2 * c3 - c2 * b3 * d1 - b1 * d2 * c3 + c1 * d2 * b3}}{{${det}}}`);
            Operate.newStep(`x = ${x}`);

            const y = (a1 * d2 * c3 - c2 * d3 * a1 - d1 * a2 * c3 + c1 * a2 * d3) / det;
            Operate.newStep(`y = \\frac{${a1 * d2 * c3 - c2 * d3 * a1 - d1 * a2 * c3 + c1 * a2 * d3}}{{${det}}}`);
            Operate.newStep(`y = ${y}`);

            const z = (a1 * b2 * d3 - d2 * b3 * a1 - b1 * a2 * d3 + d1 * a2 * b3) / det;
            Operate.newStep(`z = \\frac{${a1 * b2 * d3 - d2 * b3 * a1 - b1 * a2 * d3 + d1 * a2 * b3}}{{${det}}}`);
            Operate.newStep(`z = ${z}`);

            // Step 7: Display the solutions
            solutions = [
                `x = ${x}`,
                `y = ${y}`,
                `z = ${z}`
            ];
        }

        Operate.newSolution("Solution\\ to\\ the\\ equations:");
        solutions.forEach((solution) => {
            Operate.newStep(String(solution));
        });

        // Step 8: Create equations for graphing
        const equationGraph1 = `${d1} = ${a1}x + ${b1}y + ${c1}z`;
        const equationGraph2 = `${d2} = ${a2}x + ${b2}y + ${c2}z`;
        const equationGraph3 = `${d3} = ${a3}x + ${b3}y + ${c3}z`;
        const zValueGraph = `z = ${z}`;

        // Step 9: Display the equations on a graph
        Operate.newGraph([equationGraph1, equationGraph2, equationGraph3, zValueGraph]);

        // Step 10: Restart
        Operate.newRestart();
    });
}
