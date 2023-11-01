function main() {
	//Start Page
	Operate.newPage();

	const equation1 = "a_1x + b_1y + c_1z + ... + y_1b = z_1a";
	const equation2 = "a_2x + b_2y + c_2z + ... + y_2b = z_2a";
	const equation3 = "a_3x + b_3y + c_3z + ... + y_3b = z_3a";
	const equation4 = "a_nx + b_ny + c_nz + ... + y_nb = z_na";

	// Step 1: Display the three linear equations
	Operate.newStart(`Multi-variable linear equation:`);
	Operate.newStep(`${equation1}`);
	Operate.newStep(`${equation2}`);
	Operate.newStep(`${equation3}`);
	Operate.newStep(`${equation4}`);

	Operate.newStart("Please number of variable:");

	Operate.newInput(["n"]).then((countData) => {
		const n = parseInt(countData[0]);
		if (isNaN(n) || n <= 0) {
			// Handle invalid input here
			Operate.newSolution("Invalid\\ input\\ for\\ the\\ number\\ of\\ data\\ values.");
			return;
		}
		// Prompt the user to enter n data values
		Operate.newInput(Array.from({ length: (n + 1) * n }, (_, i) => `x${i + 1}`)).then((dataArray) => {
			const values = dataArray.map((data, i) => parseInt(data));
			console.log(values);
			let solution = [];
			let coefficientsArray = [];
			for (var i = 0; i < n; i++) {
				var temp = [];
				for (var j = 0; j <= n; j++) {
					temp.push(values[j + i * (n + 1)]);
				}
				coefficientsArray.push(temp);
			}
			console.log(coefficientsArray);
			solution = solveEquation(coefficientsArray, coefficientsArray.length);
			Operate.newSolution("Solution\\ to\\ the\\ equations:");
			solution.forEach((solution) => {
			    Operate.newStep(String(solution));
			});
		});
	});

	function solveEquation(coefficientsArray, n) {
		let differenceArray = [];
		let solutions = [];
		let tempEquationArray = [];
		tempEquationArray.push(coefficientsArray[0]);
		let counter = n;
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
						for (var k = 0; k <= counter; k++) {
							var difference = differenceArray[i][k] - (differenceArray[j][k] * multiplier);
							if (difference != 0) {
								tempArray.push(difference);
							}
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
		return solutions;
	}

	// Step 8: Create equations for graphing
	// const equationGraph1 = `${e1} = ${a1}x + ${b1}y + ${c1}z + ${d1}w`;
	// const equationGraph2 = `${e2} = ${a2}x + ${b2}y + ${c2}z + ${d2}w`;
	// const equationGraph3 = `${e3} = ${a3}x + ${b3}y + ${c3}z + ${d3}w`;
	// const equationGraph4 = `${e4} = ${a4}x + ${b4}y + ${c4}z + ${d4}w`;
	// const zValueGraph = `z = ${z}`;
	// const wValueGraph = `w = ${w}`;

	// // Step 9: Display the equations on a graph
	// Operate.newGraph([equationGraph1, equationGraph2, equationGraph3, zValueGraph]);

	// // Step 10: Restart
	// Operate.newRestart();

}
