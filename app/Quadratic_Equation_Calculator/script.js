function main() {
    //Start Page
    Operate.newPage();

    // Print the quadratic equation
    const equation = "ax^2 + bx + c = 0";
    Operate.newStep(`Quadratic\\ Equation: ${equation}`);

    // Prompt the user to enter coefficients of the quadratic equation
    Operate.newStart("Please enter coefficients a, b, and c:");

    // Create input fields for entering coefficients
    Operate.newInput(["a", "b", "c"]).then((coefficients) => {
        // Destructure coefficients
        const [a, b, c] = coefficients.map(Number);

        // Print the coefficients entered by the user
        Operate.newStep(`a = ${a}, b = ${b}, c = ${c}`);

        // Function to format roots with or without square root symbol
        function formatRoot(value) {
            const sqrtValue = Math.sqrt(value);
            if (sqrtValue % 1 === 0) {
                return sqrtValue.toString(); // Integer inside the square root
            } else {
                return `√${Math.abs(value)}`; // Non-integer inside the square root
            }
        }

        // Calculate the solutions of the quadratic equation
        const discriminant = b * b - 4 * a * c;
        let solutions = [];

        if (discriminant > 0) {
            // Two real roots
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            solutions = [
                `Real\\ Root\\ 1: x = ${x1.toFixed(2)}`,
                `Real\\ Root\\ 2: x = ${x2.toFixed(2)}`
            ];
        } else if (discriminant === 0) {
            // One real root
            const x = -b / (2 * a);
            solutions = [`Real\\ Root: x = ${x.toFixed(2)}`];
        } else {
            // Complex roots
            const real = -b / (2 * a);
            const imaginary = Math.sqrt(-discriminant) / (2 * a);

            solutions = [
                `Complex\\ Roots: x = ${real.toFixed(2)} + ${imaginary.toFixed(2)}i`,
                `Complex\\ Roots: x = ${real.toFixed(2)} - ${imaginary.toFixed(2)}i`
            ];
        }

        // Display the calculation results
        Operate.newSolution("Equation\\ Solutions:");
        solutions.forEach((solution) => {
            // Convert solution to a string and pass it to Operate.newStep
            Operate.newStep(String(solution));
        });

        // Simplification process (only if real roots exist)
        if (a !== 0 && discriminant >= 0) {
            const step1 = `${a}x^2 + ${b}x + ${c}`;
            Operate.newStep(step1);

            Operate.newStart("Equation, p and q are the roots of the equation: ");
            const step2 = `${a}x^2 + ${b}x + ${c} = ${a}(x - p)(x - q)`;
            Operate.newStep(step2);

            Operate.newStart("Using the quadratic equation formula: ");
            const step3 = `p = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}`;
            Operate.newStep(step3);

            const step4 = `q = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a}`;
            Operate.newStep(step4);

            // Calculate the root values (in decimal form)
            const pDecimal = (-b + Math.sqrt(discriminant)) / (2 * a);
            const qDecimal = (-b - Math.sqrt(discriminant)) / (2 * a);

            const step5 = `p = ${pDecimal.toFixed(2)}`;
            Operate.newStep(step5);

            const step6 = `q = ${qDecimal.toFixed(2)}`;
            Operate.newStep(step6);

            Operate.newStart("Therefore, the equation simplifies to: ")
            const step7 = `${a}(x - ${pDecimal.toFixed(2)})(x - ${qDecimal.toFixed(2)})`;
            Operate.newStep(step7);

            // Calculate the solutions (in decimal form)
            const pFraction = pDecimal;
            const qFraction = qDecimal;

            const step8 = `Solutions: x = ${pDecimal.toFixed(2)} \\ or \\ x = ${qDecimal.toFixed(2)}`;
            Operate.newStep(step8);
        }

        // Plot the graph of the equation
        const equationGraph = [`y = ${a}x^2 + ${b}x + ${c}`];
        Operate.newGraph([equationGraph]);

        // Add a reset button
        Operate.newRestart();
    });
}
