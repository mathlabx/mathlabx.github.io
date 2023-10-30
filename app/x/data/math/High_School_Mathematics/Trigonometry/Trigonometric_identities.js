/*
Trigonometric identities

Inputs:
- C_pythagorean (boolean): Determines if Pythagorean identities should be included.
- C_quotient (boolean): Determines if quotient identities should be included.
- C_reciprocal (boolean): Determines if reciprocal identities should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to various trigonometric identities based on the specified input values. It can include Pythagorean identities, quotient identities, and reciprocal identities based on the user's selection. The questions are designed to test the user's understanding and application of these identities in various contexts. The answers are provided in a clear and concise manner to help users verify their solutions.

Example Usage:
const result = TrigonometricIdentities(true, false, true);
console.log(result); // Output: ['Given sin(theta) = 0.6, find cos(theta) using the reciprocal identity.', 'cos(theta) is equal to 0.8.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Trigonometry.TrigonometricIdentities = function (C_pythagorean, C_quotient, C_reciprocal) {
    // Your code goes here
    if(C_pythagorean){
		var question;
		var answer;
		const identities = ["sin^2x + cos^2x = 1", "1 + tan^2x = sec^2x", "1 + cot^2x = csc^2x"];
		const randIdent = Math.floor(Math.random() * 3);
		if(randIdent == 0){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given sin(x) = " + `${solution.toFixed(2)}` + ", find cos(x) using the pythagorean identity";
				answer = "cos(x) = " + `${Math.sqrt((1 - solution*solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random();
				question = "Given cos(x) = " + `${solution.toFixed(2)}` + ", find sin(x) using the pythagorean identity";
				answer = "sin(x) = " + `${Math.sqrt((1 - solution*solution)).toFixed(2)}`;
			}
		}else if(randIdent == 1){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given tan(x) = " + `${solution.toFixed(2)}` + ", find sec(x) using the pythagorean identity";
				answer = "sec(x) = " + `${Math.sqrt((1 + solution*solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random() + 1;
				question = "Given sec(x) = " + `${solution.toFixed(2)}` + ", find tan(x) using the pythagorean identity";
				answer = "tan(x) = " + `${Math.sqrt((solution*solution - 1)).toFixed(2)}`;
			}
		}else if(randIdent == 2){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given cot(x) = " + `${solution.toFixed(2)}` + ", find csc(x) using the pythagorean identity";
				answer = "csc(x) = " + `${Math.sqrt((1 + solution*solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random() + 1;
				question = "Given csc(x) = " + `${solution.toFixed(2)}` + ", find cot(x) using the pythagorean identity";
				answer = "cot(x) = " + `${Math.sqrt((solution*solution - 1)).toFixed(2)}`;
			}
		}
		// Return the question and answer in an array
        return [question, answer];
	}else if(C_quotient){
		var question;
		var answer;
		const identities = ["tanx = sinx/cosx", "cotx = cosx/sinx"];
		const randIdent = Math.round(Math.random());
		if(randIdent == 0){
			const randTrig = Math.floor(Math.random() * 3);
			if(randTrig == 0){
				const sin = Math.random();
				const tan = Math.random();
				question = "Given sin(x) = " + `${sin.toFixed(2)}` + " and tan(x) = " + `${tan.toFixed(2)}` + ", find cos(x) using the quotient identity";
				answer = "cos(x) = " + `${(sin/tan).toFixed(2)}`;
			}else if(randTrig == 1){
				const cos = Math.random();
				const tan = Math.random();
				question = "Given cos(x) = " + `${cos.toFixed(2)}` + " and tan(x) = " + `${tan.toFixed(2)}` + ", find sin(x) using the quotient identity";
				answer = "sin(x) = " + `${(tan*cos).toFixed(2)}`;
			}else if(randTrig == 2){
				const cos = Math.random();
				const sin = Math.random();
				question = "Given sin(x) = " + `${sin.toFixed(2)}` + " and cos(x) = " + `${cos.toFixed(2)}` + ", find tan(x) using the quotient identity";
				answer = "tan(x) = " + `${(sin/cos).toFixed(2)}`;
			}
		}else if(randIdent == 1){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const sin = Math.random();
				const cot = Math.random();
				question = "Given sin(x) = " + `${sin.toFixed(2)}` + " and cot(x) = " + `${cot.toFixed(2)}` + ", find cos(x) using the quotient identity";
				answer = "cos(x) = " + `${(sin*cot).toFixed(2)}`;
			}else if(randTrig == 1){
				const cos = Math.random();
				const cot = Math.random();
				question = "Given cos(x) = " + `${cos.toFixed(2)}` + " and cot(x) = " + `${cot.toFixed(2)}` + ", find sin(x) using the quotient identity";
				answer = "sin(x) = " + `${(cos/cot).toFixed(2)}`;
			}else if(randTrig == 2){
				const cos = Math.random();
				const sin = Math.random();
				question = "Given sin(x) = " + `${sin.toFixed(2)}` + " and cos(x) = " + `${cos.toFixed(2)}` + ", find tan(x) using the quotient identity";
				answer = "cot(x) = " + `${(cos/sin).toFixed(2)}`;
			}
		}
		// Return the question and answer in an array
        return [question, answer];
	}else if(C_reciprocal){
		var question;
		var answer;
		const identities = ["cscx = 1/sinx", "secx = 1/cosx", "cotx = 1/tanx", "sinx = 1/cscx", "cosx = 1/secx", "tanx = 1/cotx"];
		const randIdent = Math.floor(Math.random() * 6);
		if(randIdent == 0){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given sin(x) = " + `${solution.toFixed(2)}` + ", find csc(x) using the pythagorean identity";
				answer = "csc(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random() + 1;
				question = "Given csc(x) = " + `${solution.toFixed(2)}` + ", find sin(x) using the pythagorean identity";
				answer = "sin(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}
		}else if(randIdent == 1){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given cos(x) = " + `${solution.toFixed(2)}` + ", find sec(x) using the pythagorean identity";
				answer = "sec(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random() + 1;
				question = "Given sec(x) = " + `${solution.toFixed(2)}` + ", find cos(x) using the pythagorean identity";
				answer = "cos(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}
		}else if(randIdent == 2){
			const randTrig = Math.round(Math.random());
			if(randTrig == 0){
				const solution = Math.random();
				question = "Given tan(x) = " + `${solution.toFixed(2)}` + ", find cot(x) using the pythagorean identity";
				answer = "tan(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}else if(randTrig == 1){
				const solution = Math.random() + 1;
				question = "Given cot(x) = " + `${solution.toFixed(2)}` + ", find tan(x) using the pythagorean identity";
				answer = "tan(x) = " + `${Math.sqrt((1/solution)).toFixed(2)}`;
			}
		}
        // Return the question and answer in an array
        return [question, answer];
	}
}
