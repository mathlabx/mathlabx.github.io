function main() {
	// Display some equations or formulas using KaTeX
	Operate.newStart("Equations:");
	Operate.newStep("Equation 1: \(F = ma\)");
	Operate.newStep("Equation 2: \(a = \\frac{F}{m}\)");
	Operate.newStep("Equation 3: \(m = \\frac{F}{a}\)");

	// Create input fields for two of the three quantities: force, mass, or acceleration
	Operate.newInput(["Force (N):", "Mass (kg):", "Acceleration (m/s²):"])
		.then((inputValues) => {
			// Extract user inputs
			const force = parseFloat(inputValues[0]);
			const mass = parseFloat(inputValues[1]);
			const acceleration = parseFloat(inputValues[2]);

			// Check which two quantities are provided by the user
			if (!isNaN(force) && !isNaN(mass)) {
				// Calculate acceleration using Equation 1
				const calculatedAcceleration = force / mass;

				// Display the result
				Operate.newStart("Result:");
				Operate.newStep("Acceleration (m/s²) = ");
				Operate.newStep(calculatedAcceleration.toString());
			} else if (!isNaN(force) && !isNaN(acceleration)) {
				// Calculate mass using Equation 3
				const calculatedMass = force / acceleration;

				// Display the result
				Operate.newStart("Result:");
				Operate.newStep("Mass (kg) = ");
				Operate.newStep(calculatedMass.toString());
			} else if (!isNaN(mass) && !isNaN(acceleration)) {
				// Calculate force using Equation 1
				const calculatedForce = mass * acceleration;

				// Display the result
				Operate.newStart("Result:");
				Operate.newStep("Force (N) = ");
				Operate.newStep(calculatedForce.toString());
			} else {
				// Handle the case where there are not enough inputs
				Operate.newStart("Error:");
				Operate.newStep("Please provide any two of the three quantities (Force, Mass, Acceleration) to calculate the third.");
			}

			// Add a reset button
			Operate.newRestart();
		});
}