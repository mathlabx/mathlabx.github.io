function Arithmetic_sequence(min, max){
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomMulti = Math.floor(Math.random() * (max - min + 1)) + min;
    var randQuestion = Math.round(Math.random());
    let coefficients = [];
	var question;
	var answer = "";
    for(let i = 0; i < 10; i++){
        coefficients.push(randomNum + i * randomMulti);
    }
    if(randQuestion == 0){
        question = "What is the next term of the arithmetic sequence? \n";
        for(let i = 0; i < coefficients.length; i++){
            if(i%4 != 0){
                question += coefficients[i] + ", "; 
            }else{
                question += "________, "; 
                answer += coefficients[i] + ", ";
            }
        }
    }else if(randQuestion == 1){
        var constant = Math.floor(Math.random() * (max - min + 1)) + min;
        var bValue = Math.floor(Math.random() * (max - min + 1)) + min
        var equation = "b(n) = b(n-1) + " + constant + "; b(1) = " + bValue;
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        question = "Given the function " + equation + ". Find the " + randomNum + " term in the sequence.";
        var answer;
        for(let i = 1; i < randomNum; i++){
            answer = bValue + constant;
            bValue = answer;
        }
    }
    return [question, answer];
}
