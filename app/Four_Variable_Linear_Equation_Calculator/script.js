function main() {
	const equation1 = "a_1x + b_1y + c_1z + d_1w = e_1";
	const equation2 = "a_2x + b_2y + c_2z + d_2w = e_2";
	const equation3 = "a_3x + b_3y + c_3z + d_3w = e_3";
	const equation4 = "a_4x + b_4y + c_4z + d_4w = e_4";

	// Step 1: Display the three linear equations
	Operate.newStart(`Three-variable linear equation 1:`);
	Operate.newStep(`${equation1}`);
	Operate.newStart(`Three-variable linear equation 2:`);
	Operate.newStep(`${equation2}`);
	Operate.newStart(`Three-variable linear equation 3:`);
	Operate.newStep(`${equation3}`);
	Operate.newStart(`Three-variable linear equation 4:`);
	Operate.newStep(`${equation4}`);

	// Step 2: Prompt user to input coefficients
	Operate.newStart("Please enter coefficients a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3. d4, e1, e2, e3, e4:");

	// Step 3: Collect coefficient input from the user
	Operate.newInput(["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4", "e1", "e2", "e3", "e4"]).then((coefficients) => {

		const [a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4, e1, e2, e3, e4] = coefficients.map(Number);

		// Step 4: Display the entered coefficients
		Operate.newStep(`Entered\\ coefficients: `);
		Operate.newStep(`a1 = ${a1}, a2 = ${a2}, a3 = ${a3}, a4 = ${a4},`);
		Operate.newStep(`b1 = ${b1}, b2 = ${b2}, b3 = ${b3}, b4 = ${b4},`);
		Operate.newStep(`c1 = ${c1}, c2 = ${c2}, c3 = ${c3}, c4 = ${c4},`);
		Operate.newStep(`d1 = ${d1}, d2 = ${d2}, d3 = ${d3}, d4 = ${d4},`);
		Operate.newStep(`e1 = ${e1}, e2=${e2}, e3 = ${e3}, e4 = ${e4}`);
		let solution = [];
		let coefficientsArray = [[a1, b1, c1, d1, e1], [a2, b2, c2, d2, e2], [a3, b3, c3, d3, e3], [a4, b4, c4, d4, e4]];
		solution = solveEquation(coefficientsArray);
		Operate.newSolution("Solution\\ to\\ the\\ equations:");
		solution.forEach((solution) => {
			Operate.newStep(String(solution));

		});
		// Step 8: Create equations for graphing
		const equationGraph1 = `${e1} = ${a1}x + ${b1}y + ${c1}z + ${d1}w`;
		const equationGraph2 = `${e2} = ${a2}x + ${b2}y + ${c2}z + ${d2}w`;
		const equationGraph3 = `${e3} = ${a3}x + ${b3}y + ${c3}z + ${d3}w`;
		const equationGraph4 = `${e4} = ${a4}x + ${b4}y + ${c4}z + ${d4}w`;
		//const zValueGraph = solutions[2];
		//const wValueGraph = `w = ${w}`;

		// // Step 9: Display the equations on a graph
		Operate.newGraph([equationGraph1, equationGraph2, equationGraph3, equationGraph4, solution[0], solution[1]]);

		// // Step 10: Restart
		Operate.newRestart();
	});
	function solveEquation(coefficientsArray) {
		let differenceArray = [];
		let solutions = [];
		let tempEquationArray = [];
		tempEquationArray.push(coefficientsArray[0]);
		let counter = 4;
		for (var i = 0; i < coefficientsArray.length; i++) {
			differenceArray[i] = coefficientsArray[i];
		}
		for (var l = 0; l < 3; l++) {
			let tempDifferenceArray = [];
			for (var i = 0; i < counter - 1; i++) {
				for (var j = 1; j < counter; j++) {
					if (j == i + 1) {
						var multiplier = differenceArray[i][0] / differenceArray[j][0];
						var tempArray = [];
						for (var k = 1; k <= counter; k++) {
							var difference = differenceArray[i][k] - (differenceArray[j][k] * multiplier);
							//if(difference > 0.00001 || difference < -0.00001){
							tempArray.push(difference);
							//}
						}
						if (j == counter - 1) {
							tempEquationArray.push(tempArray);
						}
						tempDifferenceArray.push(tempArray);
					}
				}
			}
			differenceArray.length = 0;
			for (var h = 0; h < tempDifferenceArray.length; h++) {
				differenceArray[h] = tempDifferenceArray[h];
			}
			counter--;
		}
		var firstVariable = tempEquationArray[tempEquationArray.length - 1][1] / tempEquationArray[tempEquationArray.length - 1][0];
		solutions.push(firstVariable);
		for (var i = tempEquationArray.length - 1; i >= 0; i--) {
			var tempArray = [];
			var index = 0;
			for (var j = tempEquationArray[i].length - 1; j >= 1; j--) {
				if (j == tempEquationArray[i].length - 1) {
					tempArray.push(tempEquationArray[i][j]);
				} else {
					tempArray.push(tempArray[index] - solutions[index] * tempEquationArray[i][j]);
					index++;
				}

			}
			if (tempArray[index] / tempEquationArray[i][0] != 0 && tempArray[index] / tempEquationArray[i][0] != solutions[0]) {
				solutions.push(tempArray[index] / tempEquationArray[i][0]);
			}
		}
		solutions[0] = "w = " + solutions[0];
		solutions[1] = "z = " + solutions[1];
		solutions[2] = "y = " + solutions[2];
		solutions[3] = "x = " + solutions[3];
		return solutions;
	}


}
