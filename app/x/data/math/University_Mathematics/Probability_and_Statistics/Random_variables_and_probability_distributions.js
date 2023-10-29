/*
Random variables and probability distributions

Inputs:
- C_discrete (boolean): Determines if questions related to discrete probability distributions should be included.
- C_continuous (boolean): Determines if questions related to continuous probability distributions should be included.
- C_expectation (boolean): Determines if questions related to the calculation of expectations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to random variables and probability distributions. It covers topics such as discrete and continuous probability distributions, as well as the calculation of expectations for various distributions. The questions may involve finding probabilities, expected values, and variance for different types of random variables and distributions.

Example Usage:
const result = RandomVariablesAndDistributions(true, false, true);
console.log(result); // Output: ['Calculate the expectation for the discrete probability distribution given by the table... ', 'The expectation for the given discrete probability distribution is ... ']
*/

$X.math.University_Mathematics.Probability_and_Statistics.RandomVariablesAndDistributions = function(C_discrete, C_continuous, C_expectation) {
    // Your code goes here
    if(C_discrete){    
        return null;
    }else if(C_continuous){
        return null;
    }else if(C_expectation){var question;
		var answer;
		const gain = Math.ceil(Math.random() * 100) + 10;
		const lost = Math.ceil(Math.random() * 50) + gain;
		const given = ["probability", "win/lose"];
		const randGiven = Math.round(Math.random());
		if(randGiven == 0){
			const probability = Math.random();
			question = "A local charity is hosting a game to collect funds. The cost to play the game is " + gain + " dollars. If the charity pays the winner " + lost + " dollar and the probability to win is " + `${probability.toFixed(2)}` + "%. What is the expected value for the charity winning on average?";
			answer = "$" + (gain*(1-probability) - lost*probability);
		}else if(randGiven == 1){
			const bad = Math.ceil(Math.random() * 10);
			question = "A electronic company just launch a new product and earns " + gain + " dollars for each product they sell. But they found that " + bad + " out of every 100 of their new product had some problem in it, so they decided to take back all the product that had a problem and give back the customer " + lost + " dollars. What is the expected value of profit per product?";
			answer = "$" + `${(gain*(1-(bad/100)) - lost*(bad/100)).toFixed(2)}`;
		}
        // Return the question and answer in an array
        return [question, answer];
    }
}
