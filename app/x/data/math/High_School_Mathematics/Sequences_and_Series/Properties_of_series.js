/*
Properties of series

Inputs:
- C_convergence (boolean): Determines if questions about the convergence of series should be included.
- C_divergence (boolean): Determines if questions about the divergence of series should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the properties of series, including their convergence and divergence. It assesses the user's understanding of these fundamental concepts in series. The questions aim to cover various types of series, including arithmetic, geometric, and more complex series. The answers are provided to help users validate their understanding of the properties of series.

Example Usage:
const result = PropertiesOfSeries(true, false);
console.log(result); // Output: ['Determine the convergence of the series 1 + 1/2 + 1/4 + 1/8 + ...', 'The series converges to 2.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Sequences_and_Series.PropertiesOfSeries = function (C_convergence, C_divergence) {
    // Your code goes here
    if(C_convergence){
	const constant = Math.ceil(Math.random()*9) + 1;
	var question = "Is the infinity series of 1/" + constant + "^x a convergence or divergence series?";
	var answer = "convergence series";
	// Return the question and answer in an array
        return [question, answer];
    }else if(C_divergence){
	const randFunc = Math.round(Math.random());
	var question;
	var answer;
	if(randFunc == 0){
		const constant = Math.ceil(Math.random()*9) + 1;
		question = "Is the infinity series of " + constant + func[randFunc] + " a convergence or divergence series?";
		answer = "divergence series";
	}else if(randFunc == 1){
		const constant = Math.ceil(Math.random()*9) + 1;
		const power = Math.ceil(Math.random()*9) + 1;
		question = "Is the infinity series of " + constant + func[randFunc] + power + " a convergence or divergence series?";
		answer = "divergence series"; 
	}
	// Return the question and answer in an array
	return [question, answer];	
     }
}
