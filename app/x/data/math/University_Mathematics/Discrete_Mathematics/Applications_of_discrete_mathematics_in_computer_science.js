/*
Applications of Discrete Mathematics in Computer Science

Inputs:
- graph_theory (boolean): Determines if questions related to graph theory and its applications should be included.
- logic_circuits (boolean): Determines if questions related to logic circuits and Boolean algebra should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the application of discrete mathematics in computer science. It covers topics such as graph theory, Boolean algebra, logic circuits, and their practical applications in designing algorithms and data structures in computer systems.

Example Usage:
const result = Applications_Discrete_Math_CS(true, true);
console.log(result); // Output: ['In a graph G with 5 vertices...', 'The number of edges in the graph G is...']
*/

$X.math.University_Mathematics.Discrete_Mathematics.Applications_Discrete_Math_CS = function(graph_theory, logic_circuits) {
    // Your code goes here
    if(graph_theory){
        
    // Return the question and answer in an array
    return [question, answer];
    }else if(logic_circuits){
        var question;
		var answer;
		const gates = ["AND", "OR"];
		const randGate = Math.round(Math.random());
		const gateNum = Math.floor(Math.random()*2) + 2;
		if(randGate == 0){
			if(gateNum == 2){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates that go through an " + gates[randGate] + " gate. If input A is " + input1 + " and input B is " + input2 + ", what is the output of the " + gateNum + " gates?";
				if(input1 != 1 || input2 != 1){
					answer = "The output of the " + gateNum + " gates is 0";
				}else{
					answer = "The output of the " + gateNum + " gates is 1";
				}
			}else if(gateNum == 3){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				const input3 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates where an " + gates[randGate] + " gate leads to an " + gates[randGate] + " gate. The circuit has three inputs (A, B, C) and a single output. If the input A is " + input1 + ", input B is " + input2 + " and input C is " + input3 + ", what is the output?";
				if(input1 != 1 || input2 != 1){
					answer = "The output of the " + gateNum + " gates is 0";
				}else{
					if(input3 != 1){
						answer = "The output of the " + gateNum + " gates is 0";
					}else{
						answer = "The output of the " + gateNum + " gates is 1";
					}
				}
			}else if(gateNum == 4){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				const input3 = Math.round(Math.random());
				const input4 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates where two " + gates[randGate] + " gate leads to an " + gates[randGate] + " gate. The circuit has four inputs (A, B, C, D) and a single output. If the input A is " + input1 + ", input B is " + input2 + ", input C is " + input3 + " and input D is " + input4 + ", what is the output?";
				if(input1 != 1 || input2 != 1){
					answer = "The output of the " + gateNum + " gates is 0";
				}else{
					if(input3 != 1 || input4 != 1){
						answer = "The output of the " + gateNum + " gates is 0";
					}else{
						answer = "The output of the " + gateNum + " gates is 1";
					}
				}
			}
		}else if(randGate == 1){
			if(gateNum == 2){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates that go through an " + gates[randGate] + " gate. If input A is " + input1 + " and input B is " + input2 + ", what is the output of the " + gateNum + " gates?";
				if(input1 != 0 || input2 != 0){
					answer = "The output of the " + gateNum + " gates is 1";
				}else{
					answer = "The output of the " + gateNum + " gates is 0";
				}
			}else if(gateNum == 3){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				const input3 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates where an " + gates[randGate] + " gate leads to an " + gates[randGate] + " gate. The circuit has three inputs (A, B, C) and a single output. If the input A is " + input1 + ", input B is " + input2 + " and input C is " + input3 + ", what is the output?";
				if(input1 != 0 || input2 != 0){
					answer = "The output of the " + gateNum + " gates is 1";
				}else{
					if(input3 != 0){
						answer = "The output of the " + gateNum + " gates is 1";
					}else{
						answer = "The output of the " + gateNum + " gates is 0";
					}
				}
			}else if(gateNum == 4){
				const input1 = Math.round(Math.random());
				const input2 = Math.round(Math.random());
				const input3 = Math.round(Math.random());
				const input4 = Math.round(Math.random());
				question = "A circuit has " + gateNum + " gates where two " + gates[randGate] + " gate leads to an " + gates[randGate] + " gate. The circuit has four inputs (A, B, C, D) and a single output. If the input A is " + input1 + ", input B is " + input2 + ", input C is " + input3 + " and input D is " + input4 + ", what is the output?";
				if(input1 != 0 || input2 != 0){
					answer = "The output of the " + gateNum + " gates is 1";
				}else{
					if(input3 != 0 || input4 != 0){
						answer = "The output of the " + gateNum + " gates is 1";
					}else{
						answer = "The output of the " + gateNum + " gates is 0";
					}
				}
			}
		}
        
        // Return the question and answer in an array
        return [question, answer];
    }
}
