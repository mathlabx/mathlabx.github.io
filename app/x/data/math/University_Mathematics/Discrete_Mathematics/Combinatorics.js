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
	function combination(total, numChosen){
		var result = (factorial(total))/(factorial(numChosen)*factorial((total-numChosen)));
		return result;
	}
	function permutation(total, numChosen){
		var result = (factorial(total))/(factorial((total-numChosen)));
		return result;
	}
	function factorial(value){
		var result = 1;
		for(var i=value; i>0; i--){
			result = result*i;
		}
		return result;
	}
	    
        var question;
	var answer;
	const randType = Math.round(Math.random());
	if(randType == 0){
		const randQuestion = Math.floor(Math.random() * 3);
		if(randQuestion == 0){
			const randNumStudent = Math.ceil(Math.random()*5); 
			const randGroup = Math.ceil(Math.random()*randNumStudent);
			var randTotStud = randNumStudent*randGroup;
			question = "How many ways can you choose " + randGroup +" distinct groups of " + randNumStudent + " students from total " + randTotStud + " students?";
			answer = 1;
			for(var i = 0; i < randGroup; i++){
				answer *= combination(randTotStud, randNumStudent);
				randTotStud = randTotStud - randNumStudent;
			}
		}else if(randQuestion == 1){
			const randNumStud = Math.ceil(Math.random()*9);
			const randNumTeach = Math.ceil(Math.random()*9);
			const randStudCho = Math.ceil(Math.random()*randNumStud);
			const randTeachCho = Math.ceil(Math.random()*randNumTeach);
			question = "There are " + randNumStud + " students and " + randNumTeach + " teachers in a room. In how many ways we can choose " + randStudCho + " students and " + randTeachCho + " teachers from the room?", 
			answer = combination(randNumStud, randStudCho) * combination(randNumTeach, randTeachCho);
		}else if(randQuestion == 2){
			const randLength = Math.ceil(Math.random() * 9);
			const randElem = Math.ceil(Math.random() * randLength);
			var set = [];
			for(var i = 0; i < randLength; i++){set.push(Math.ceil(Math.random()*9));}
			question = "Find the number of subsets of the set {" + set + "} having " + randElem + " elements";
			answer = combination(randLength, randElem);
		}
	}else if(randType == 1){
		const randQuestion = Math.floor(Math.random() * 3);
		if(randQuestion == 0){
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			const wordLenght = Math.ceil(Math.random() * letters.length);
			var word = "";
			var counter = 0;
			while(word.length != wordLenght){
				var lett = letters.charAt(Math.floor(Math.random() * wordLenght));
				if(lett != "A" && lett != "E" && lett != "O" && lett != "I" && lett != "U" && counter < (wordLenght/2)){
					word += lett;
					counter++;
				}else{
					word += lett;
				}
			}
			question = "In how ways can the letters of the word " + word + " be arranged so that the consonants occupy only the even positions?";
			answer = permutation(Math.floor(wordLenght/2), counter) * permutation(Math.ceil(wordLenght/2), (wordLenght-counter));
		}else if(randQuestion == 1){
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			const wordLenght = Math.ceil(Math.random() * letters.length);
			var word = "";
			while(word.length != wordLenght){
				var letter = letters.charAt(Math.floor(Math.random() * wordLenght));
				if(word.indexOf(letter) == -1){
					word += letter;
				}
			}
			question = "In how many ways can the letters of the word '" + word + "' be arranged?"; 
			answer = factorial(wordLenght);
		}else if(randQuestion == 2){
			const randNum = Math.ceil(Math.random() * 9);
			question = "From a bunch of " + randNum + " different cards, how many ways we can permute it?";
			answer = permutation(randNum, randNum);
		}
	}
	    return [question, answer];
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
