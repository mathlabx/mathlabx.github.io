function main() {
	// Display some equations or formulas using KaTeX
	Operate.newStart("Equations:");
	Operate.newStep("Eq. 1: \(a = \\frac{{v_f - v_i}}{{t}}\)");
	Operate.newStep("Eq. 2: \(v_f = v_i + at\)");
	Operate.newStep("Eq. 3: \(s = v_i t + \\frac{1}{2}at^2\)");

	// Create input fields for two of the four quantities: initial velocity, final velocity, time, or displacement
	Operate.newInput(["Initial Velocity (m/s):", "Final Velocity (m/s):", "Time (seconds):", "Displacement (meters):"])
		.then((inputValues) => {
			// Extract user inputs
			const initialVelocity = parseFloat(inputValues[0]);
			const finalVelocity = parseFloat(inputValues[1]);
			const time = parseFloat(inputValues[2]);
			const displacement = parseFloat(inputValues[3]);

			// Check which two quantities are provided by the user
			if (!isNaN(initialVelocity) && !isNaN(finalVelocity)) {
				// Calculate acceleration using Equation 1
				const acceleration = (finalVelocity - initialVelocity) / time;

				// Display the result
				Operate.newStart("Result:");
				Operate.newSolution("Acceleration (m/s²) = ");
				Operate.newStep(acceleration.toString());
			} else if (!isNaN(initialVelocity) && !isNaN(time)) {
				// Calculate final velocity using Equation 2
				const finalVelocity = initialVelocity + acceleration * time;

				// Display the result
				Operate.newStart("Result:");
				Operate.newSolution("Final Velocity (m/s) = ");
				Operate.newStep(finalVelocity.toString());
			} else if (!isNaN(initialVelocity) && !isNaN(displacement)) {
				// Calculate acceleration using Equation 3
				const acceleration = (2 * (displacement - initialVelocity * time)) / (time * time);

				// Display the result
				Operate.newStart("Result:");
				Operate.newSolution("Acceleration (m/s²) = ");
				Operate.newStep(acceleration.toString());
			} else {
				// Handle the case where there are not enough inputs
				Operate.newStart("Error:");
				Operate.newStart("Please provide any two of the four quantities (Initial Velocity, Final Velocity, Time, Displacement) to calculate the third (Acceleration).");
			}
			
			// Add a reset button
			Operate.newRestart();
		});
}
