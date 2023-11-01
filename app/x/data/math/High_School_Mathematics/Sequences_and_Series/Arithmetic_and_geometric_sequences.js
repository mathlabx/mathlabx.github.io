/*
Arithmetic and geometric sequences

Inputs:
- C_arithmetic (boolean): Determines if arithmetic sequences should be included.
- C_geometric (boolean): Determines if geometric sequences should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to arithmetic and geometric sequences based on the specified input values. It can include questions about finding the nth term, the sum of the first n terms, common differences, and common ratios. The questions are designed to assess the user's understanding of these fundamental concepts in sequences. The answers are provided in a clear and concise manner to help users verify their solutions.

Example Usage:
const result = ArithmeticAndGeometricSequences(true, false);
console.log(result); // Output: ['Find the 10th term of the arithmetic sequence 2, 5, 8, 11, ...', 'The 10th term is 29.']

PS: The answer should be in fractions (Katex), using GCF to calculate the simplest fraction.
*/

$X.math.High_School_Mathematics.Sequences_and_Series.ArithmeticAndGeometricSequences = function (C_arithmetic, C_geometric) {
    // Your code goes here
    if(C_arithmetic){
        var question;
        var answer;
        const randomNum = Math.floor(Math.random() * 9);
        const randomMulti = Math.floor(Math.random() * 9);
        const randDiff = Math.round(Math.random());
        let coefficients = [];
        for(let i = 0; i < 10; i++){
            coefficients.push(randomNum + i * randomMulti);
        }
        if(randDiff == 0){
            question = "What is the next term of the arithmetic sequence? \n";
            answer;
            for(let i = 0; i < coefficients.length; i++){
                if(i%4 != 0){
                    question += coefficients[i] + ", "; 
                }else{
                    question += "________, "; 
                    answer += coefficients[i];
                }
            }
        }else if(randDiff == 1){
            const constant = Math.floor(Math.random() * 9);
            const bValue = Math.floor(Math.random() * 9);
            const equation = "b(n) = b(n-1) + " + constant + "; b(1) = " + bValue;
            const randomNum = Math.floor(Math.random() * 9);
            question = "Find the " + randomNum + " term in the sequence.";
            answer;
            for(let i = 1; i < randomNum; i++){
                answer = bValue + constant;
                bValue = answer;
            }
        }
        return [question, answer];
    }else if(C_geometric){
        const randomNum = Math.floor(Math.random() * 9);
        const randomMulti = Math.floor(Math.random() * 9);
        const coefficients = [];
        for(let i = 0; i < 10; i++){
            coefficients.push(randomNum * Math.pow(randomMulti,i));
        }
        var question = "What is the next term of the gemoetric sequence? \n";
        var answer;
        for(let i = 0; i < coefficients.length; i++){
            if(i%4 != 0){
                question += coefficients[i] + ", "; 
            }else{
                question += "________, "; 
                answer += coefficients[i];
            }
        }
        // Return the question and answer in an array
        return [question, answer];
    }
}
