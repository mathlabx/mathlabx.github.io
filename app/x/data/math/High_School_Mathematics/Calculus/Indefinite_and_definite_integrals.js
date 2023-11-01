/*
Indefinite and definite integrals

Inputs:
- C_indefinite (boolean): Determines if questions about indefinite integrals should be included.
- C_definite (boolean): Determines if questions about definite integrals should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to both indefinite and definite integrals. It covers topics such as finding antiderivatives, evaluating definite integrals over specific intervals, and applying the fundamental theorem of calculus. The questions aim to test the user's understanding of these fundamental concepts in calculus and their practical applications in solving various mathematical problems.

Example Usage:
const result = IndefiniteAndDefiniteIntegrals(true, false);
console.log(result); // Output: ['Find the indefinite integral of the function f(x) = 3x^2 + 2x - 5', 'The indefinite integral is F(x) = x^3 + x^2 - 5x + C.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Calculus.IndefiniteAndDefiniteIntegrals = function (C_indefinite, C_definite) {
	// Your code goes here
	function makeIndefiniteEquation(oper, vari, leng) {
		var equation = ``;
		var answer = ``;
		for (var i = 0; i < leng; i++) {
			const operNum = Math.floor(Math.random() * oper.length);
			const varNum = Math.floor(Math.random() * vari.length);
			if (i != leng - 1) {
				if (vari[varNum] === "const") {
					const temp = Math.ceil(Math.random() * leng);
					equation += " "  + temp + " " + oper[operNum] + " ";
					answer += solveIndefiniteIntergal(temp) + " " + oper[operNum] + " ";
				}else if(vari[varNum] === "1/x" || vari[varNum] === "1/sqrt(1-x^2)" || vari[varNum] === "1/1+x^2"){
					equation += " \\frac{1}{" + (vari[varNum].substring(vari[varNum].indexOf("/")+1))+"} " + oper[operNum] + " ";
					answer += solveIndefiniteIntergal(vari[varNum]) + " " + oper[operNum] + " ";
				}else {
					equation += " "  + vari[varNum] + " " + oper[operNum] + " ";
					answer += solveIndefiniteIntergal(vari[varNum]) + " " + oper[operNum] + " ";
				}
			} else {
				if (vari[varNum] === "const") {
					const temp = Math.ceil(Math.random() * leng);
					equation += " "  + temp;
					answer += solveIndefiniteIntergal(temp) + " + C";
				}else if(vari[varNum] === "1/x" || vari[varNum] === "1/sqrt(1-x^2)" || vari[varNum] === "1/1+x^2"){
					equation += " \\frac{1}{" + (vari[varNum].substring(vari[varNum].indexOf("/")+1))+"}";
					answer += solveIndefiniteIntergal(vari[varNum]) + " + C";
				}else {
					equation += " "  + vari[varNum];
					answer += solveIndefiniteIntergal(vari[varNum]) + " + C";
				}
			}
		}
		equation = `\[ \int`+equation+` \,dx \] `;
		return [equation, answer];
	}
	function makeDefiniteEquation(oper, vari, leng, low, up) {
		var equation = '';
		var lower = 0;
		var upper = 0;
		for (var i = 0; i < leng; i++) {
			const operNum = Math.floor(Math.random() * oper.length);
			const varNum = Math.floor(Math.random() * vari.length);
			if (i != leng - 1) {
				if (vari[varNum] === "const") {
					const temp = Math.ceil(Math.random() * leng);
					equation += " "  + temp + " " + oper[operNum] + " ";
					lower += solveDefiniteIntergal(temp, low);
					upper += solveDefiniteIntergal(temp, up);
				} else if(vari[varNum] === "1/x" || vari[varNum] === "1/sqrt(1-x^2)" || vari[varNum] === "1/1+x^2"){
					equation += " \\frac{1}{" + (vari[varNum].substring(vari[varNum].indexOf("/")+1))+"}";
					lower += solveDefiniteIntergal(vari[varNum], low);
					upper += solveDefiniteIntergal(vari[varNum], up);
				} else {
					equation += " "  + vari[varNum] + " " + oper[operNum] + " ";
					lower += solveDefiniteIntergal(vari[varNum], low);
					upper += solveDefiniteIntergal(vari[varNum], up);
				}
			} else {
				if (vari[varNum] === "const") {
					const temp = Math.ceil(Math.random() * leng);
					equation += " "  + temp;
					lower += solveDefiniteIntergal(temp, low);
					upper += solveDefiniteIntergal(temp, up);
				} else if(vari[varNum] === "1/x" || vari[varNum] === "1/sqrt(1-x^2)" || vari[varNum] === "1/1+x^2"){
					equation += " \\frac{1}{" + (vari[varNum].substring(vari[varNum].indexOf("/")+1))+"} " + oper[operNum] + " ";
					lower += solveDefiniteIntergal(vari[varNum], low);
					upper += solveDefiniteIntergal(vari[varNum], up);
				} else {
					equation += " "  + vari[varNum];
					lower += solveDefiniteIntergal(vari[varNum], low);
					upper += solveDefiniteIntergal(vari[varNum], up);
				}
			}
		}
		const answer = upper - lower;
		upper = `${upper.toFixed(2)}`;
		lower = `${lower.toFixed(2)}`;
		equation = `\[ \int_{`+upper+`}^{`+lower+`} `+equation+` \,dx \] `;
		return [equation, answer];
	}

	function solveDefiniteIntergal(fun, bound) {
		if (!isNaN(fun)) {
			const ans = fun * bound;
			return ans;
		} else if (fun === "x") {
			const ans = (bound * bound) / 2;
			return ans;
		} else if (fun === "cos(x)") {
			const ans = Math.sin(bound);
			return ans;
		} else if (fun === "sin(x)") {
			const ans = -Math.cos(bound);
			return ans;
		} else if (fun === "1/x") {
			const ans = Math.log(bound);
			return ans;
		} else if (fun === "ln(x)") {
			const ans = (bound * Math.log(bound) - bound);
			return ans;
		} else if (fun === "sec^2(x)") {
			const ans = Math.tan(bound);
			return ans;
		} else if (fun === "e^x") {
			const ans = Math.exp(bound);
			return ans;
		} else if (fun === "log(x)") {
			const ans = (bound * Math.log10(bound) - (bound / Math.log(10)));
			return ans;
		} else if (fun === "csc^2(x)") {
			const ans = -1 * (1 / Math.tan(bound));
			return ans;
		} else if (fun === "sec(x)tan(x)") {
			const ans = (1 / Math.cos(bound));
			return ans;
		} else if (fun === "cot(x)csc(x)") {
			const ans = -1 * (1 / Math.sin(bound));
			return ans;
		} else if (fun === "1/sqrt(1-x^2)") {
			const ans = Math.asin(bound);
			return ans;
		} else if (fun === "1/1+x^2") {
			const ans = Math.atan(bound);
			return ans;
		} else if (fun === "sinh(x)") {
			const ans = Math.cosh(bound);
			return ans;
		} else if (fun === "cosh(x)") {
			const ans = Math.sinh(bound);
			return ans;
		} else if (fun === "tan(x)") {
			const ans = -1 * (Math.log(Math.abs(Math.cos(bound))));
			return ans;
		} else if (fun === "cot(x)") {
			const ans = Math.log(Math.sin(bound));
			return ans;
		} else if (fun === "sec(x)") {
			const ans = Math.log((1 / Math.cos(bound)) + Math.tan(bound));
			return ans;
		} else if (fun === "csc(x)") {
			const ans = -1 * (Math.log(Math.abs((1 / Math.sin(bound)) + (1 / Math.tan(bound)))));
			return ans;
		} else if (fun === "tanh(x)") {
			const ans = Math.log(Math.cosh(bound));
			return ans;
		}
	}
	function solveIndefiniteIntergal(fun) {
		if (!isNaN(fun)) {
			return fun + "x";
		} else if (fun === "x") {
			return "\\frac{"x^2"}{2}";
		} else if (fun === "cos(x)") {
			return "sin(x)";
		} else if (fun === "sin(x)") {
			return "(-cos(x))";
		} else if (fun === "1/x") {
			return "ln(x)";
		} else if (fun === "ln(x)") {
			return "(xln(x) - x)";
		} else if (fun === "sec^2(x)") {
			return "tan(x)";
		} else if (fun === "e^x") {
			return "e^x";
		} else if (fun === "log(x)") {
			return "(xlog(x)) - (x/ln(10))";
		} else if (fun === "csc^2(x)") {
			return "(-cot(x))";
		} else if (fun === "sec(x)tan(x)") {
			return "sec(x)";
		} else if (fun === "cot(x)csc(x)") {
			return "(-csc(x))";
		} else if (fun === "1/sqrt(1-x^2)") {
			return "arcsin(x)";
		} else if (fun === "1/1+x^2") {
			return "arctan(x)";
		} else if (fun === "sinh(x)") {
			return "cosh(x)";
		} else if (fun === "cosh(x)") {
			return "sinh(x)";
		} else if (fun === "tan(x)") {
			return "(-ln(cos(x)))";
		} else if (fun === "cot(x)") {
			return "ln(sin(x))";
		} else if (fun === "sec(x)") {
			return "ln(sec(x) + tan(x))";
		} else if (fun === "csc(x)") {
			return "(-ln(csc(x) + cot(x)))";
		} else if (fun === "tanh(x)") {
			return "ln(cosh(x))";
		}
	}

	var question;
	var answer;
	const operation = ["+", "-"];
	const variable = ["const", "x", "cos(x)", "sin(x)", "tan(x)", "1/x", "ln(x)", "tan(x)", "sec^2(x)", "e^x", "log(x)", "csc^2(x)", "sec(x)tan(x)", "cot(x)csc(x)", "1/sqrt(1-x^2)", "1/1+x^2", "sinh(x)", "cosh(x)", "tanh(x)", "cot(x)", "sec(x)", "csc(x)"];
	const equaLength = Math.ceil(Math.random() * length);
	if (C_indefinite) {
		const holder = makeIndefiniteEquation(operation, variable, equaLength);
		question = holder[0];
		answer = holder[1];
	} else {
		const lowerBound = Math.ceil(Math.random() * 5);
		const upperBound = Math.ceil(Math.random() * 5);
		const holder = makeDefiniteEquation(operation, variable, equaLength, lowerBound, upperBound);
		question = holder[0];
		answer = holder[1];
	}
	// Return the question and answer in an array
	return [question, answer];
}
