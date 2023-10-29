/*
Modeling and solving linear programming problems

Inputs:
- LP_modeling (boolean): Determines if questions related to modeling linear programming problems should be included.
- LP_solving (boolean): Determines if questions related to solving linear programming problems should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the modeling and solving of linear programming problems. It covers topics such as the formulation of objective functions, constraints, and the graphical and analytical methods used to find optimal solutions. The questions may involve understanding the simplex algorithm, duality, and sensitivity analysis.

Example Usage:
const result = LinearProgramming(true, true);
console.log(result); // Output: ['Explain the simplex algorithm...', 'The simplex algorithm is a method for...']
*/

$X.math.University_Mathematics.Linear_Programming.LinearProgramming = function (LP_modeling, LP_solving) {
    // Your code goes here
    if(LP_modeling){
        const requirements = ["decision variable", "objective function", "constraints"];
		const optimize = ["maximizes", "minimize"];
		const operator = ["+", "-", "*", "/"];
		const constraints = "x1 >= " + Math.floor(Math.random()*9) + ", x2 >= " + Math.floor(Math.random()*9) + " and x1 + x2 >= " + Math.floor(Math.random()*9) + ", " + (Math.ceil(Math.random() * 5) + 1) + "*x1 - x2 <= " + (Math.ceil(Math.random() * 9 ) + 50);
		const randReq = Math.floor(Math.random() * requirements.length);
		const randOpt = Math.round(Math.random());
		const randOperator = Math.floor(Math.random() * operator.length);
		var question = "Find the number x1 and x2 that " + optimize[randOpt];
		var answer;
		if(randReq == 0){
			if(randOperator == 0){
				question += " the sum x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 and x2";
			}else if(randOperator == 1){
				question += " the difference x1 - x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 and x2";
			}else if(randOperator == 2){
				question += " the product x1 * x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 and x2";
			}else if(randOperator == 3){
				question += " the quotient x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 and x2";
			}
		}else if(randReq == 1){
			if(randOperator == 0){
				question += " the sum x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 + x2";
			}else if(randOperator == 1){
				question += " the difference x1 - x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 - x2";
			}else if(randOperator == 2){
				question += " the product x1 * x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 * x2";
			}else if(randOperator == 3){
				question += " the quotient x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is x1 - x2";
			}
		}
		else if(randReq == 2){
			if(randOperator == 0){
				question += " the sum x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is " + constraints;
			}else if(randOperator == 1){
				question += " the difference x1 - x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is " + constraints;
			}else if(randOperator == 2){
				question += " the product x1 * x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is " + constraints;
			}else if(randOperator == 3){
				question += " the quotient x1 + x2 subject to constraints: " + constraints + ". What is the " + requirements[randReq] + " in this question?";
				answer = "The " + requirements[randReq] + " in this question is " + constraints;
			}
		}
        // Return the question and answer in an array
        return [question, answer];
    }else if(LP_solving){
        var question;
        var answer;
        const techniques = ["Simplex method", "R method", "graphical method", "open solver"];
        const randTech = Math.floor(Math.random() * techniques.length);
        if(randTech == 0){
            question = "Which techniques in linear programming is use for solving an optimization problem, typically one involving a function and several constraints expressed as inequalities?";
            answer = techniques[randTech];
        }else if(randTech == 1){
            question = "Which techniques is used when all the objectives and constraints are linear (in the variables) and when all the decision variables are continuous?";
            answer = techniques[randTech];
        }else if(randTech == 2){
            question = "Which techniques is used used to optimize the two-variable linear programming?";
            answer = techniques[randTech];
        }else if(randTech == 3){
            question = "What is the open source Excel add-in that allows spreadsheet users to solve their LP/IP models using the COIN-OR CBC solver called?";
            answer = techniques[randTech];
        }
        // Return the question and answer in an array
        return [question, answer];
    }
}
