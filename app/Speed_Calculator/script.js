function main() {
    // Display some equations or formulas using KaTeX
    Operate.newStep("Equation 1: \(V = \\frac{d}{t}\)");
    Operate.newStep("Equation 2: \(d = V \\cdot t\)");
    Operate.newStep("Equation 3: \(t = \\frac{d}{V}\)");

    // Create input fields for two of the three quantities: distance, time, or velocity
    Operate.newInput(["Distance (meters):", "Time (seconds):", "Velocity (m/s):"])
        .then((inputValues) => {
            // Extract user inputs
            const distance = parseFloat(inputValues[0]);
            const time = parseFloat(inputValues[1]);
            const velocity = parseFloat(inputValues[2]);

            // Check which two quantities are provided by the user
            if (!isNaN(distance) && !isNaN(time)) {
                // Calculate velocity
                const calculatedVelocity = distance / time;

                // Display the result
                Operate.newStart("Result:");
                Operate.newSolution("Velocity (m/s) = ");
                Operate.newStep(calculatedVelocity.toString());
            } else if (!isNaN(distance) && !isNaN(velocity)) {
                // Calculate time
                const calculatedTime = distance / velocity;

                // Display the result
                Operate.newStart("Result:");
                Operate.newSolution("Time (seconds) = ");
                Operate.newStep(calculatedTime.toString());
            } else if (!isNaN(time) && !isNaN(velocity)) {
                // Calculate distance
                const calculatedDistance = time * velocity;

                // Display the result
                Operate.newStart("Result:");
                Operate.newSolution("Distance (meters) = ");
                Operate.newStep(calculatedDistance.toString());
            } else {
                // Handle the case where there are not enough inputs
                Operate.newStart("Error:");
                Operate.newStart("Please provide any two of the three quantities (Distance, Time, Velocity) to calculate the third.");
            }

            // Add a reset button
            Operate.newRestart();
        });
}