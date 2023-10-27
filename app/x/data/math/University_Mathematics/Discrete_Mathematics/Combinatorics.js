/*
Combinatorics

Inputs:
- counting_principles (boolean): Determines if questions related to basic counting principles should be included.
- permutations_combinations (boolean): Determines if questions related to permutations and combinations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to combinatorial mathematics, including various counting principles, permutations, and combinations. It covers topics such as factorial notation, binomial coefficients, and the application of combinatorial concepts in probability and algebra.

Example Usage:
const result = Combinatorics(true, true);
console.log(result); // Output: ['How many ways can 5 books be arranged on a shelf...', 'The number of ways to arrange 5 books on a shelf is...']
*/

$X.math.University_Mathematics.Discrete_Mathematics.Combinatorics = function(counting_principles, permutations_combinations) {
    // Your code goes here
    
    if(permutations_combinations){
        return null;
    }else if(counting_principles){
        function factorial(value){
    		var result = 1;
    		for(var i=value; i>0; i--){
    			result = result*i;
    		}
    		return result;
    	}

        var randNumPeople = Math.ceil(Math.random() * 5);
		const randNumPosition = randNumPeople - Math.ceil(Math.random() * randNumPeople) + 2;
		randNumPeople++;
		var question = "There are " + randNumPeople + " people running for positions. If there are " + randNumPosition + " position(s), "; 
		var answer;
		const randType = Math.floor(Math.random()*4);
		if(randType == 0){
			question += "how many ways can this be done?";
			var result = (factorial(randNumPeople))/(factorial((randNumPeople-randNumPosition)));
			answer = "There are " + result + " ways.";
		}else if(randType == 1){
			question += "how many ways can this be done if either Person A or Person B must to hold position X?";
			var result = 2*((factorial((randNumPeople-1)))/((factorial((randNumPeople-randNumPosition)))));
			answer = "There are " + result + " ways.";
		}else if(randType == 2){
			question += "how many ways can this be done if both Person A and Person B must to hold a position?";
			var result = 2*((factorial(randNumPosition))/(factorial(2)*factorial((randNumPosition-2))))*(randNumPeople-2);
			answer = "There are " + result + " ways.";
		}else if(randType == 3){
			question += "how many ways can this be done if Person A must to hold a position?";
			var result = randNumPosition*((factorial((randNumPeople-1)))/((factorial((randNumPeople-randNumPosition)))));
			answer = "There are " + result + " ways.";
		}else if(randType == 4){
			question += "how many ways can this be done if either Person A or Person B or both must to hold a position?";
			var result = (2*randNumPosition*((factorial((randNumPeople-1)))/((factorial((randNumPeople-randNumPosition)))))) - 2*((factorial(randNumPosition))/(factorial(2)*factorial((randNumPosition-2))))*(randNumPeople-2);
			answer = "There are " + result + " ways.";
		}
        // Return the question and answer in an array
        return [question, answer];
    }
}
