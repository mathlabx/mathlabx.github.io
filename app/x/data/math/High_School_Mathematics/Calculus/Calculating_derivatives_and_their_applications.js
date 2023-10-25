/*
Calculating derivatives and their applications

Inputs:
- C_derivative (boolean): Determines if questions about calculating derivatives should be included.
- C_application (boolean): Determines if questions about the applications of derivatives should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the calculation of derivatives and their various applications. It covers topics such as finding the derivative of functions, using the derivative to analyze the behavior of functions, and applying derivatives in real-world scenarios. The questions aim to test the user's understanding of these fundamental concepts in calculus and their practical applications.

Example Usage:
const result = CalculatingDerivativesAndApplications(true, false);
console.log(result); // Output: ['Find the derivative of the function f(x) = 3x^2 + 2x - 5', 'The derivative is f'(x) = 6x + 2.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Calculus.CalculatingDerivativesAndApplications = function (C_derivative, C_application) {
	// Your code goes here
	function makeMixEquation(func, oper, length) {
		var equation = "Find the derivative of the function  f(x) = ";
		var derivative = "The derivative is f'(x) = ";
		for (var i = 0; i < length; i++) {
			var randNum1 = Math.floor(Math.random() * func.length);
			var randNum2 = Math.floor(Math.random() * oper.length);
			if (randNum2 < 2) {
				if (i < length - 1) {
					var randNum1 = Math.floor(Math.random() * func.length);
					equation += func[randNum1] + " " + oper[1] + " ";
					derivative += deriveFunction(func[randNum1]) + " " + oper[1] + " ";
				} else {
					var randNum1 = Math.floor(Math.random() * func.length);
					equation += func[randNum1];
					derivative += deriveFunction(func[randNum1]);
				}
			} else if (randNum2 == 2) {
				if (i < length - 1) {
					var randNum3 = Math.floor(Math.random() * func.length);
					var randNum4 = Math.round(Math.random());
					equation += "( " + func[randNum1] + " " + oper[2] + " " + func[randNum3] + " ) " + oper[randNum4] + " ";
					derivative += "( " + func[randNum1] + " * " + deriveFunction(func[randNum3]) + " + " + func[randNum3] + " * " + deriveFunction(func[randNum1]) + " ) " + oper[randNum4] + " ";
				} else {
					var randNum3 = Math.floor(Math.random() * func.length);
					var randNum4 = Math.round(Math.random());
					equation += "( " + func[randNum1] + " " + oper[2] + " " + func[randNum3] + " ) ";
					derivative += "( " + func[randNum1] + " * " + deriveFunction(func[randNum3]) + " + " + func[randNum3] + " * " + deriveFunction(func[randNum1]) + " ) ";
				}
			} else {
				if (i < length - 1) {
					var randNum3 = Math.floor(Math.random() * func.length);
					var randNum4 = Math.round(Math.random());
					equation += "( " + func[randNum1] + " " + oper[3] + " " + func[randNum3] + " ) " + oper[randNum4] + " ";
					derivative += "( " + func[randNum3] + " * " + deriveFunction(func[randNum1]) + " - " + func[randNum1] + " * " + deriveFunction(func[randNum3]) + ")/((" + func[randNum3] + ")^2) ) " + oper[randNum4] + " ";
				} else {
					var randNum3 = Math.floor(Math.random() * func.length);
					var randNum4 = Math.round(Math.random());
					equation += "( " + func[randNum1] + " " + oper[3] + " " + func[randNum3] + " ) ";
					derivative += "( " + func[randNum3] + " * " + deriveFunction(func[randNum1]) + " - " + func[randNum1] + " * " + deriveFunction(func[randNum3]) + ")/((" + func[randNum3] + ")^2) ) ";
				}
			}
		}
		return [equation, derivative];
	}

	function deriveFunction(func) {
		if (func === "x") {
			return "1";
		} else if (func === "x^2") {
			return "2x";
		} else if (func === "cos(x)") {
			return "(-sin(x))";
		} else if (func === "sin(x)") {
			return "cos(x)";
		} else if (func === "ln(x)") {
			return `(\\frac{1}{x})`;
		} else if (func === "tan(x)") {
			return "sec^2(x)";
		} else if (func === "e^x") {
			return "(e^x)";
		} else if (func === "log(x)") {
			return `\\frac{1}{x*ln(10)}`;
		} else if (func === "cot(x)") {
			return "(-csc^2(x))";
		} else if (func === "sec(x)") {
			return "tan(x) * sec(x)";
		} else if (func === "csc(x)") {
			return "-cot(x) * csc(x)";
		} else if (func === "arcsin(x)") {
			return `\\frac{1}{sqrt{1-x^2}}`;
		} else if (func === "arccos(x)") {
			return `\\frac{-1}{sqrt{1-x^2}}`;
		} else if (func === "arctan(x)") {
			return `\\frac{1}{1-x^2}`;
		} else if (func === "arccsc(x)") {
			return `\\frac{-x}{x^2 * (sqrt{x^2 - 1})}`;
		} else if (func === "arcsec(x)") {
			return `\\frac{x}{x^2 * (sqrt{x^2 - 1})}`;
		} else if (func === "arccot(x)") {
			return `\\frac{-1}{1+x^2}`;
		}
	}

	var question;
	var answer;
	if (C_derivative) {
		//create a list of function and operators
		const functionArray = ["x", "x^2", "cos(x)", "sin(x)", "ln(x)", "tan(x)", "e^x", "log(x)", "cot(x)", "sec(x)", "csc(x)", "arcsin(x)", "arccos(x)", "arctan(x)", "arccsc(x)", "arcsec(x)", "arccot(x)"];
		const operatorArray = ["+", "-", "*", "/"];
		const functionLength = Math.floor((Math.random() * 4) + 1);
		var output = makeMixEquation(functionArray, operatorArray, functionLength);
		question = output[0];
		answer = output[1];
	} else {
		return null;
	}
	// Return the question and answer in an array
	return [question, answer];
}
