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
	function makeApproximationProblem(length){
		const constant = Math.floor(Math.random() * 5);
		var func = makeApproximationEquation(length, constant);
		var question = "Find the linearization of the function " + func[0] + " at x = " + constant + " and use it to approximate f(" + (constant-.1) + ").";
		var answer = func[1];
		return [question, answer];
	}
	function makeTangentLineProblem(length){
		const constant = Math.ceil(Math.random() * 5);
		var func = makeTangentLineEquation(length, constant);
		var question = "Find the tangent line to the function " + func[0] + " at x = " + constant;
		var answer = func[1];
		return [question, answer];
	}
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

	function makeApproximationEquation(length, value){
		const functionArray = ["x", "x^2", "cos(x)", "sin(x)", "ln(x)", "tan(x)", "e^x", "log(x)", "cot(x)", "sec(x)", "csc(x)", "arctan(x)", "arccot(x)", "sinh(x)", "cosh(x)", "tanh(x)"];
		const operatorArray = ["+", "-", "*"];
		var equation = "f(x) = ";
		var slope = 0;
		var pointValue = 0;
		var answer;
		var isMinus = false;
		var isAdd = true;
		for(var i = 0; i < length; i++){
			var randNum1 = Math.floor(Math.random() * functionArray.length);
			var randNum2 = Math.floor(Math.random() * operatorArray.length);
			if(randNum2 < 2){
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value);
					slope += calculateDeriveValue(deriveFunction(functionArray[randNum1]), value);
					isAdd = false;
				}else if(isMinus){
					pointValue -= calculateValue(functionArray[randNum1], value);
					slope -= calculateDeriveValue(deriveFunction(functionArray[randNum1]), value);
					isMinus = false;
				}
				if(i < length - 1){
					equation += functionArray[randNum1] + " " + operatorArray[randNum2] + " ";
					if(randNum2 == 0){isAdd = true;}
					if(randNum2 == 1){isMinus = true;}
				}else{
					equation += functionArray[randNum1];
				}
				
			}else if(randNum2 == 2){
				var randNum3 = Math.floor(Math.random() * functionArray.length);
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value) * calculateValue(functionArray[randNum3], value);
					slope += calculateValue(functionArray[randNum1], value) * calculateDeriveValue(deriveFunction(functionArray[randNum3]), value) + calculateValue(functionArray[randNum3], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum3]), value);
					isAdd = false;
				}else if(isMinus){
					pointValue += calculateValue(functionArray[randNum1], value) * calculateValue(functionArray[randNum3], value);
					slope += calculateValue(functionArray[randNum1], value) * calculateDeriveValue(deriveFunction(functionArray[randNum3]), value) + calculateValue(functionArray[randNum3], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum3]), value);
					isMinus = false;
				}
				if(i < length - 1){
					var randNum4 = Math.round(Math.random());
					equation += "( " + functionArray[randNum1] + " " + operatorArray[2] + " " + functionArray[randNum3] + " ) " + operatorArray[randNum4] + " ";
					if(randNum4 == 0){isAdd = true;}
					if(randNum4 == 1){isMinus = true;}
				}else{
					equation += "( " + functionArray[randNum1] + " " + operatorArray[2] + " " + functionArray[randNum3] + " ) ";
				}
			}else{
				var randNum3 = Math.floor(Math.random() * functionArray.length);
				var randNum4 = Math.round(Math.random());
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value)/calculateValue(functionArray[randNum3], value);
					slope += (calculateValue(functionArray[randNum3], value) * calculateDeriveValue(deriveFunction(functionArray[randNum1]), value) - calculateValue(functionArray[randNum1], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum1]), value))/(calculateValue(functionArray[randNum3], value) * calculateValue(functionArray[randNum3], value))
					isAdd = false;
				}else if(isMinus){
					pointValue += calculateValue(functionArray[randNum1], value)/calculateValue(functionArray[randNum3], value);
					slope += (calculateValue(functionArray[randNum3], value) * calculateDeriveValue(deriveFunction(functionArray[randNum1]), value) - calculateValue(functionArray[randNum1], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum1]), value))/(calculateValue(functionArray[randNum3], value) * calculateValue(functionArray[randNum3], value))
					isMinus = false;
				}
				if(i < length - 1){
					equation += "( " + functionArray[randNum1] + " " + operatorArray[3] + " " + functionArray[randNum3] + " ) " + operatorArray[randNum4] + " ";
					if(randNum4 == 0){isAdd = true;}
					if(randNum4 == 1){isMinus = true;}
				}else{
					equation += "( " + functionArray[randNum1] + " " + operatorArray[3] + " " + functionArray[randNum3] + " ) ";
				}
			}
		}
		if(isFinite(slope)){
			answer = pointValue - slope * (.1);
		}
		if(!isFinite(slope) || !isFinite(pointValue)){
			answer = "There exist a non finite number in the approximation so it can't be solved.";
		}
		return [equation, answer];
	}
	
	function makeTangentLineEquation(length, value){
		const functionArray = ["x", "x^2", "cos(x)", "sin(x)", "ln(x)", "tan(x)", "e^x", "log(x)", "cot(x)", "sec(x)", "csc(x)", "arctan(x)", "arccot(x)", "sinh(x)", "cosh(x)", "tanh(x)"];
		const operatorArray = ["+", "-", "*"];
		var equation = "f(x) = ";
		var slope = 0;
		var pointValue = 0;
		var answer;
		var isMinus = false;
		var isAdd = true;
		for(var i = 0; i < length; i++){
			var randNum1 = Math.floor(Math.random() * functionArray.length);
			var randNum2 = Math.floor(Math.random() * operatorArray.length);
			if(randNum2 < 2){
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value);
					slope += calculateDeriveValue(deriveFunction(functionArray[randNum1]), value);
					isAdd = false;
				}else if(isMinus){
					pointValue -= calculateValue(functionArray[randNum1], value);
					slope -= calculateDeriveValue(deriveFunction(functionArray[randNum1]), value);
					isMinus = false;
				}
				if(i < length - 1){
					equation += functionArray[randNum1] + " " + operatorArray[randNum2] + " ";
					if(randNum2 == 0){isAdd = true;}
					if(randNum2 == 1){isMinus = true;}
				}else{
					equation += functionArray[randNum1];
				}
				
			}else if(randNum2 == 2){
				var randNum3 = Math.floor(Math.random() * functionArray.length);
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value) * calculateValue(functionArray[randNum3], value);
					slope += calculateValue(functionArray[randNum1], value) * calculateDeriveValue(deriveFunction(functionArray[randNum3]), value) + calculateValue(functionArray[randNum3], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum3]), value);
					isAdd = false;
				}else if(isMinus){
					pointValue += calculateValue(functionArray[randNum1], value) * calculateValue(functionArray[randNum3], value);
					slope += calculateValue(functionArray[randNum1], value) * calculateDeriveValue(deriveFunction(functionArray[randNum3]), value) + calculateValue(functionArray[randNum3], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum3]), value);
					isMinus = false;
				}
				if(i < length - 1){
					var randNum4 = Math.round(Math.random());
					equation += "( " + functionArray[randNum1] + " " + operatorArray[2] + " " + functionArray[randNum3] + " ) " + operatorArray[randNum4] + " ";
					if(randNum4 == 0){isAdd = true;}
					if(randNum4 == 1){isMinus = true;}
				}else{
					equation += "( " + functionArray[randNum1] + " " + operatorArray[2] + " " + functionArray[randNum3] + " ) ";
				}
			}else{
				var randNum3 = Math.floor(Math.random() * functionArray.length);
				var randNum4 = Math.round(Math.random());
				if(isAdd){
					pointValue += calculateValue(functionArray[randNum1], value)/calculateValue(functionArray[randNum3], value);
					slope += (calculateValue(functionArray[randNum3], value) * calculateDeriveValue(deriveFunction(functionArray[randNum1]), value) - calculateValue(functionArray[randNum1], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum1]), value))/(calculateValue(functionArray[randNum3], value) * calculateValue(functionArray[randNum3], value))
					isAdd = false;
				}else if(isMinus){
					pointValue += calculateValue(functionArray[randNum1], value)/calculateValue(functionArray[randNum3], value);
					slope += (calculateValue(functionArray[randNum3], value) * calculateDeriveValue(deriveFunction(functionArray[randNum1]), value) - calculateValue(functionArray[randNum1], value) *  calculateDeriveValue(deriveFunction(functionArray[randNum1]), value))/(calculateValue(functionArray[randNum3], value) * calculateValue(functionArray[randNum3], value))
					isMinus = false;
				}
				if(i < length - 1){
					equation += "( " + functionArray[randNum1] + " " + operatorArray[3] + " " + functionArray[randNum3] + " ) " + operatorArray[randNum4] + " ";
					if(randNum4 == 0){isAdd = true;}
					if(randNum4 == 1){isMinus = true;}
				}else{
					equation += "( " + functionArray[randNum1] + " " + operatorArray[3] + " " + functionArray[randNum3] + " ) ";
				}
			}
		}
		if(isFinite(slope)){
			answer = "(y - " + `${pointValue.toFixed(2)}` + ") = " + `${slope.toFixed(2)}` + "(x - " + value + ")";
		}
		if(!isFinite(slope) || !isFinite(pointValue)){
			answer = "There exist a non finite number in the line so it can't be written.";
		}
		return [equation, answer];
	}
	
	function deriveFunction(func){
		if(func === "x"){
			return "1";
		}else if(func === "x^2"){
			return "2x";
		}else if(func === "cos(x)"){
			return "(-sin(x))";
		}else if(func === "sin(x)"){
			return "cos(x)";
		}else if(func === "ln(x)"){
			return "(1/x)";
		}else if(func === "tan(x)"){
			return "sec^2(x)";
		}else if(func === "e^x"){
			return "(e^x)";
		}else if(func === "log(x)"){
			return "(1/x*ln(10))";
		}else if(func === "cot(x)"){
			return "(-csc^2(x))";
		}else if(func === "sec(x)"){
			return "tan(x) * sec(x)";
		}else if(func === "csc(x)"){
			return "-cot(x) * csc(x)";
		}else if(func === "arcsin(x)"){
			return "(1/sqrt(1-x^2))";
		}else if(func === "arccos(x)"){
			return "-(1/sqrt(1-x^2))";
		}else if(func === "arctan(x)"){
			return "(1 / (1 + x^2))";
		}else if(func === "arccsc(x)"){
			return "-(x / (x^2 * (sqrt(x^2 - 1))))";
		}else if(func === "arcsec(x)"){
			return "(x / (x^2 * (sqrt(x^2 - 1))))";
		}else if(func === "arccot(x)"){
			return "-(1/(1+x^2))";
		}else if(func === "tanh(x)"){
			return "sech^2(x)";
		}else if(func === "sinh(x)"){
			return "cosh(x)";
		}else if(func === "cosh(x)"){
			return "sinh(x)";
		}
	}
	function calculateValue(func, value){
		if(func === "x"){
			return value;
		}else if(func === "x^2"){
			return (value*value);
		}else if(func === "cos(x)"){
			return (Math.cos(value));
		}else if(func === "sin(x)"){
			return (Math.sin(value));
		}else if(func === "ln(x)"){
			return Math.log(value);
		}else if(func === "tan(x)"){
			return (Math.tan(value));
		}else if(func === "e^x"){
			return Math.exp(value);
		}else if(func === "log(x)"){
			return Math.log10(value);
		}else if(func === "cot(x)"){
			return (1/Math.tan(value));
		}else if(func === "sec(x)"){
			return (1/Math.cos(value));
		}else if(func === "csc(x)"){
			return (1/Math.sin(value));
		}else if(func === "arctan(x)"){
			return Math.atan(value);
		}else if(func === "arccot(x)"){
			return (1/Math.atan(value));
		}else if(func === "sinh(x)"){
			return Math.sinh(value);
		}else if(func === "cosh(x)"){
			return Math.cosh(value);
		}else if(func === "tanh(x)"){
			return Math.tanh(value);
		}
	}
	function calculateDeriveValue(func, value){
		if(func === "1"){ /////////////////////
			return 1;
		}else if(func === "2x"){
			return 2*value;
		}else if(func === "(-sin(x))"){
			return (-1*Math.sin(value));
		}else if(func === "cos(x)"){
			return Math.cos(value);
		}else if(func === "(1/x)"){
			return 1/value;
		}else if(func === "sec^2(x)"){
			return (1/(Math.cos(value)*Math.cos(value)));
		}else if(func === "(e^x)"){
			return Math.exp(value);
		}else if(func === "(1/x*ln(10))"){
			return (1/(value*Math.log(10)));
		}else if(func === "(-csc^2(x))"){
			return (-1/(Math.sin(value)*Math.sin(value)));
		}else if(func === "tan(x) * sec(x)"){
			return (Math.tan(value) * (1/Math.cos(value)));
		}else if(func === "-cot(x) * csc(x)"){
			return (-1/(Math.tan(value)*Math.sin(value)));
		}else if(func === "(1/sqrt(1-x^2))"){
			return (1/Math.sqrt(1-value*value));
		}else if(func === "-(1/sqrt(1-x^2))"){
			return (-1/Math.sqrt(1-value*value));
		}else if(func === "(1 / (1 + x^2))"){
			return (1/(1+value*value));
		}else if(func === "-(x / (x^2 * (sqrt(x^2 - 1))))"){
			return (-1*value/(value*value*(sqrt(value*value-1))));
		}else if(func === "(x / (x^2 * (sqrt(x^2 - 1))))"){
			return (value/(value*value*(sqrt(value*value-1))));
		}else if(func === "-(1/(1+x^2))"){
			return (-1/(1+value*value));
		}else if(func === "sech^2(x)"){
			return (1/(Math.cosh(value)*Math.cosh(value)));
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
		const application = ["related rate", "optimization", "approximation", "tangent line"];
		const randApp = 2; //Math.floor(Math.random() * application.length);
		if(application[randApp] === "related rate"){
			var output = makeRelatedRatesProblem();
		}else if(application[randApp] === "optimization"){
			var output = makeOptimizationProblem();
		}else if(application[randApp] === "approximation"){
			var output = makeApproximationProblem(functionLength);
			equation = output[0];
			answer = output[1];
		}else if(application[randApp] === "tangent line"){
			var output = makeTangentLineProblem(functionLength);
			equation = output[0];
			answer = output[1];
		}
	}
	// Return the question and answer in an array
	return [question, answer];
}
