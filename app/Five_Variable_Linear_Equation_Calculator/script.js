function main() {
    const equation1 = "a_1x + b_1y + c_1z + d_1w + e_1v = f_1";
    const equation2 = "a_2x + b_2y + c_2z + d_2w + e_2v = f_2";
    const equation3 = "a_3x + b_3y + c_3z + d_3w + e_3v = f_3";
    const equation4 = "a_4x + b_4y + c_4z + d_4w + e_4v = f_4";
    const equation5 = "a_5x + b_5y + c_5z + d_5w + e_5v = f_5";

    // Step 1: Display the three linear equations
    Operate.newStep(`Five-variable linear\\ equation\\ 1:`);
	Operate.newStep(`${equation1}`);
    Operate.newStep(`Five-variable linear\\ equation\\ 2:`);
	Operate.newStep(`${equation2}`);
    Operate.newStep(`Five-variable linear\\ equation\\ 3:`);
	Operate.newStep(`${equation3}`);
    Operate.newStep(`Five-variable linear\\ equation\\ 4:`);
	Operate.newStep(`${equation4}`);
    Operate.newStep(`Five-variable linear\\ equation\\ 5:`);
	Operate.newStep(`${equation5}`);

    // Step 2: Prompt user to input coefficients
    Operate.newStart("Please enter coefficients a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3. d4, d5, e1, e2, e3, e4, e5, f1, f2, f3, f4, f5:");

    // Step 3: Collect coefficient input from the user
    Operate.newInput(["a1", "a2", "a3", "a4", "a5", "b1", "b2", "b3", "b4", "b5", "c1", "c2", "c3", "c4", "c5", "d1", "d2", "d3", "d4", "d5", "e1", "e2", "e3", "e4", "e5", "f1", "f2", "f3", "f4", "f5"]).then((coefficients) => {

        const [a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5, d1, d2, d3, d4, d5, e1, e2, e3, e4, e5, f1, f2, f3, f4, f5] = coefficients.map(Number);

        // Step 4: Display the entered coefficients
        Operate.newStep(`Entered\\ coefficients: a1 = ${a1}, a2 = ${a2}, a3 = ${a3}, a4 = ${a4}, a5 = ${a5}, b1 = ${b1}, b2 = ${b2}, b3 = ${b3}, b4 = ${b4}, b5 = ${b5}, c1 = ${c1}, c2 = ${c2}, c3 = ${c3}, c4 = ${c4}, c5 = ${c5}, d1 = ${d1}, d2=${d2}, d3 = ${d4}, d3 = ${d4}, d5 = ${d5}, e1 = ${e1}, e2=${e2}, e3 = ${e3}, e4 = ${e4}, e5 = ${e5}, f1 = ${f1}, f2=${f2}, f3 = ${f3}, f4 = ${f4}, f5 = ${f5}`);
        let solution = [];
        let coefficientsArray = [[a1, b1, c1, d1,e1,f1],[a2, b2, c2, d2,e2,f2],[a3, b3, c3, d3,e3,f3],[a4, b4, c4, d4,e4,f4],[a5, b5, c5, d5,e5,f5]];
        solution = solveEquation(coefficientsArray);
        Operate.newSolution("Solution\\ to\\ the\\ equations:");
        solution.forEach((solution) => {
            Operate.newStep(String(solution));
        });
	const equationGraph1 = `${f1} = ${a1}x + ${b1}y + ${c1}z + ${d1}w + ${e1}v`;
	const equationGraph2 = `${f2} = ${a2}x + ${b2}y + ${c2}z + ${d2}w + ${e2}v`;
	const equationGraph3 = `${f3} = ${a3}x + ${b3}y + ${c3}z + ${d3}w + ${e3}v`;
	const equationGraph4 = `${f4} = ${a4}x + ${b4}y + ${c4}z + ${d4}w + ${e4}v`;
	const equationGraph5 = `${f5} = ${a5}x + ${b5}y + ${c5}z + ${d5}w + ${e5}v`;
	
	// // Step 9: Display the equations on a graph
	Operate.newGraph([equationGraph1, equationGraph2, equationGraph3, equationGraph4, equationGraph5, solution[0], solution[1], solution[2]]);
	
	// // Step 10: Restart
	Operate.newRestart();

    });
    function solveEquation(coefficientsArray){
	    let differenceArray = [];
	    let solutions = [];
	    let tempEquationArray =[]; 
	    tempEquationArray.push(coefficientsArray[0]);
	    let counter = 5;
	    for(var i=0; i<coefficientsArray.length;i++){
	    	differenceArray[i] = coefficientsArray[i];
	    }
	    for(var l=0; l<4;l++){
	    	let tempDifferenceArray = [];
	    	for(var i=0;i<counter-1;i++){
	    		for(var j=1;j<counter;j++){
	    			if(j==i+1){
	    				var multiplier = differenceArray[i][0]/differenceArray[j][0];
	    				var tempArray=[];
	    				for(var k=0;k<=counter;k++){
	    					var difference = differenceArray[i][k]-(differenceArray[j][k]*multiplier);
	    					if(difference > 0.00001 || difference < -0.00001){
	    						tempArray.push(difference);	
	    					}
	    				}
	    				if(j==counter-1){
	    					tempEquationArray.push(tempArray);
	    				}
	    				tempDifferenceArray.push(tempArray);
	    			}
	    		}
	    	}
	    	differenceArray.length = 0;
	    	for(var h=0; h<tempDifferenceArray.length;h++){
	    		differenceArray[h] = tempDifferenceArray[h];
	    	}
	    	counter--;
	    }
	    console.log(tempEquationArray);
	    var firstVariable = tempEquationArray[tempEquationArray.length-1][1]/tempEquationArray[tempEquationArray.length-1][0];
	    solutions.push(firstVariable);
	    for(var i=tempEquationArray.length-1;i>=0;i--){
	    	var tempArray = [];
	    	var index = 0;
	    	for(var j=tempEquationArray[i].length-1; j>=1;j--){
	    		if(j==tempEquationArray[i].length-1){
	    			tempArray.push(tempEquationArray[i][j]);
	    		}else{
	    			tempArray.push(tempArray[index] - solutions[index]*tempEquationArray[i][j]);
	    			index++;
	    		}
            
	    	}
	    	if(tempArray[index]/tempEquationArray[i][0]!=0 && tempArray[index]/tempEquationArray[i][0]!=solutions[0]){ 
	    		solutions.push(tempArray[index]/tempEquationArray[i][0]);
	    	}
	    }
	    solutions[0] = "v = " + solutions[0];
	    solutions[1] = "w = " + solutions[1];
	    solutions[2] = "z = " + solutions[2];
	    solutions[3] = "y = " + solutions[3];
	    solutions[4] = "x = " + solutions[4];
	    return solutions;
    }   

        // // Step 8: Create equations for graphing
        // const equationGraph1 = `${d1} = ${a1}x + ${b1}y + ${c1}z`;
        // const equationGraph2 = `${d2} = ${a2}x + ${b2}y + ${c2}z`;
        // const equationGraph3 = `${d3} = ${a3}x + ${b3}y + ${c3}z`;
        // const equationGraph3 = `${d3} = ${a3}x + ${b3}y + ${c3}z`;
        // const zValueGraph = `z = ${z}`;

        // // Step 9: Display the equations on a graph
        // Operate.newGraph([equationGraph1, equationGraph2, equationGraph3, zValueGraph]);

        // // Step 10: Restart
        // Operate.newRestart();

}
