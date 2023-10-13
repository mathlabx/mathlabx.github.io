function derivative(difficulty){
	//create a list of function and operators
	const functionArray = ["x", "x^2", "cos(x)", "sin(x)", "ln(x)", "tan(x)", "e^x", "log(x)", "cot(x)", "sec(x)", "csc(x)", "arcsin(x)", "arccos(x)", "arctan(x)", "arccsc(x)", "arcsec(x)", "arccot(x)"];
	const operatorArray = ["+", "-", "*", "/"];
	//generate the length of the equation
	const functionLength = Math.floor((Math.random() * 4) + 1);
	var equation;
	var derivative;
	//create an equation according to difficulty
	if(difficulty === "addition"){
		//create the equation
		var output = makeAdditionEquation(functionArray, operatorArray, functionLength);
		equation = output[0];
		derivative = output[1];
	}else if(difficulty === "subtraction"){
		//create the equation
		var output = makeSubtractionEquation(functionArray, operatorArray, functionLength);
		equation = output[0];
		derivative = output[1];
	}else if(difficulty === "multiplication"){
		//create the equation
		var output = makeMultiplicationEquation(functionArray, operatorArray);
		equation = output[0];
		derivative = output[1];
	}else if(difficulty === "division"){
		//create the equation
		var output = makeDivisionEquation(functionArray, operatorArray);
		equation = output[0];
		derivative = output[1];
	}else if(difficulty === "mix"){
		var output = makeMixEquation(functionArray, operatorArray, functionLength);
		equation = output[0];
		derivative = output[1];
	}
    //return equation and its derivative
    return [equation, derivative];
}
function makeAdditionEquation(func, oper, length){
	var equation = "f(x) = ";
	var derivative = "f'(x) = ";
	for(var i = 0 ; i < length; i++){
		if(i < length - 1){
			var randNum1 = Math.floor(Math.random() * func.length);
			equation += func[randNum1] + " " + oper[0] + " ";
			derivative += deriveFunction(func[randNum1]) + " " + oper[0] + " ";
		}else{
			var randNum1 = Math.floor(Math.random() * func.length);
			equation += func[randNum1];
			derivative += deriveFunction (func[randNum1]);
		}
	}
	return [equation, derivative];
}
function makeSubtractionEquation(func, oper, length){
	var equation = "f(x) = ";
	var derivative = "f'(x) = ";
	for(var i = 0 ; i < length; i++){
		if(i < length - 1){
			var randNum1 = Math.floor(Math.random() * func.length);
			equation += func[randNum1] + " " + oper[1] + " ";
			derivative += deriveFunction(func[randNum1]) + " " + oper[1] + " ";
		}else{
			var randNum1 = Math.floor(Math.random() * func.length);
			equation += func[randNum1];
			derivative += deriveFunction(func[randNum1]);
		}
	}
	return [equation, derivative];
}
function makeMultiplicationEquation(func, oper){
	var tempArray = [];
	for(var i = 0 ; i < 2; i++){
		var randNum1 = Math.floor(Math.random() * func.length);
		tempArray.push(func[randNum1]);
	}
	var equation = "f(x) = " + tempArray[0] + " " + oper[2] + " " + tempArray[1];
	var derivative = "f'(x) = " + tempArray[0] + " * " + deriveFunction(tempArray[1]) + " + " + tempArray[1] + " * " + deriveFunction(tempArray[0]);
	return [equation, derivative];
}

function makeDivisionEquation(func, oper){
	var tempArray = [];
	for(var i = 0 ; i < 2; i++){
		var randNum1 = Math.floor(Math.random() * func.length);
		tempArray.push(func[randNum1]);
	}
	var equation = "f(x) = " + `frac{tempArray[0]}{tempArray[1]}`;
	
	var derivative = "f'(x) = " + `frac{tempArray[1] + " * " + deriveFunction(tempArray[0]) + " - " + tempArray[0] + " * " + deriveFunction(tempArray[1])}{(" + tempArray[1] + ")^2}`;
	return [equation, derivative];
}

function makeMixEquation(func, oper,length){
	var equation = "f(x) = ";
	var derivative = "f'(x) = ";
	for(var i = 0; i < length; i++){
		var randNum1 = Math.floor(Math.random() * func.length);
		var randNum2 = Math.floor(Math.random() * oper.length);
		if(randNum2 < 2){
			if(i < length - 1){
				var randNum1 = Math.floor(Math.random() * func.length);
				equation += func[randNum1] + " " + oper[1] + " ";
				derivative += deriveFunction(func[randNum1]) + " " + oper[1] + " ";
			}else{
				var randNum1 = Math.floor(Math.random() * func.length);
				equation += func[randNum1];
				derivative += deriveFunction(func[randNum1]);
			}
		}else if(randNum2 == 2){
			var randNum3 = Math.floor(Math.random() * func.length);
			equation += "( " + func[randNum1] + " " + oper[2] + " " + func[randNum3] + " ) ";
			derivative += func[randNum1] + " * " + deriveFunction(func[randNum3]) + " + " + func[randNum3] + " * " + deriveFunction(func[randNum1]);
		}else{
			var randNum3 = Math.floor(Math.random() * func.length);
			equation += "( " + func[randNum1] + " " + oper[3] + " " + func[randNum3] + " )";
			derivative += func[randNum3] + " * " + deriveFunction(func[randNum1]) + " - " + func[randNum1] + " * " + deriveFunction(func[randNum3]) + ")/((" + func[randNum3] + ")^2)";
		}
	}
	return [equation, derivative];
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
		return `(frac{1}{x})`;
	}else if(func === "tan(x)"){
		return "sec^2(x)";
	}else if(func === "e^x"){
		return "(e^x)";
	}else if(func === "log(x)"){
		return `frac{1}{x*ln(10)}`;
	}else if(func === "cot(x)"){
		return "(-csc^2(x))";
	}else if(func === "sec(x)"){
		return "tan(x) * sec(x)";
	}else if(func === "csc(x)"){
		return "-cot(x) * csc(x)";
	}else if(func === "arcsin(x)"){
		return `frac{1}{sqrt{1-x^2}}`;
	}else if(func === "arccos(x)"){
		return `frac{-1}{sqrt{1-x^2}}`;
	}else if(func === "arctan(x)"){
		return `frac{1}{1-x^2}`;
	}else if(func === "arccsc(x)"){
		return `frac{-x}{x^2 * (sqrt{x^2 - 1})}`;
	}else if(func === "arcsec(x)"){
		return `frac{x}{x^2 * (sqrt{x^2 - 1})}`;
	}else if(func === "arccot(x)"){
		return `frac{-1}{1+x^2}`;
	}
}
