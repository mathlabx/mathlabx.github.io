/*
Eigenvalues and eigenvectors

Inputs:
- C_eigenvalues (boolean): Determines if questions related to eigenvalues should be included.
- C_eigenvectors (boolean): Determines if questions related to eigenvectors should be included.
- C_eigenbases (boolean): Determines if questions about eigenbases should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to eigenvalues and eigenvectors. It covers topics such as finding eigenvalues and eigenvectors of matrices, properties of eigenvalues and eigenvectors, and the concept of an eigenbasis. The questions may involve computations, properties, and applications of eigenvalues and eigenvectors.

Example Usage:
const result = EigenvaluesAndEigenvectors(true, false, true);
console.log(result); // Output: ['Find the eigenvalues of the matrix [[3, 1], [2, 4]]', 'The eigenvalues are 2 and 5.']
*/

$X.math.University_Mathematics.Linear_Algebra.EigenvaluesAndEigenvectors = function(C_eigenvalues, C_eigenvectors, C_eigenbases) {
    // Your code goes here
    const determinant = m => 
      m.length == 1 ?
      m[0][0] :
      m.length == 2 ? 
      m[0][0]*m[1][1]-m[0][1]*m[1][0] :
      m[0].reduce((r,e,i) => 
        r+(-1)**(i+2)*e*determinant(m.slice(1).map(c => 
          c.filter((_,j) => i != j))),0)
    if(C_eigenvalues){
        var matrix = [];
        var enigenvalues = [];
        function checkDeterminant(){
        	var isGood = false;
        	while(!isGood){
        		var tempMatrix = [];
        		for(var i =0; i<2;i++){
        			var temp = [];
        			for(var j =0; j<2; j++){
        				temp.push(Math.ceil(Math.random()*5))
        			}
        			tempMatrix.push(temp);
        		}
        		if(determinant(tempMatrix) == 0){
        			isGood = true
        			matrix = tempMatrix;
        		}
        	}
        }
        function findEigenvalues(){
        	var discriminant = Math.sqrt(((matrix[0][0]+matrix[1][1])*(matrix[0][0]+matrix[1][1])) - 4*(matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]));
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) - discriminant)/2);
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) + discriminant)/2);
        	console.log(enigenvalues);
        }
        var question = "Given the matrix \\begin{bmatrix}" + matrixToKaTeX(matrix) + "\\end{bmatrix}. Determine the eigenvalues.";
        var answer = "\lambda = " + eigenvalues[0] + " \lambda = " + eigenvalues[1];
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_eigenvectors){
        var matrix = [];
        var enigenvalues = [];
        var enigenvectors= [];
        function checkDeterminant(){
        	var isGood = false;
        	while(!isGood){
        		var tempMatrix = [];
        		for(var i =0; i<2;i++){
        			var temp = [];
        			for(var j =0; j<2; j++){
        				temp.push(Math.ceil(Math.random()*5))
        			}
        			tempMatrix.push(temp);
        		}
        		
        		if(determinant(tempMatrix) == 0){
        			isGood = true
        			matrix = tempMatrix;
        		}
        	}
        }
        function findEigenvalues(){
        	var discriminant = Math.sqrt(((matrix[0][0]+matrix[1][1])*(matrix[0][0]+matrix[1][1])) - 4*(matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]));
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) - discriminant)/2);
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) + discriminant)/2);
        }
        function findEigenvectors(){
        	for(var i=0;i<2;i++){
        		var difference = [];
        		var temp = [];
        		difference.push(matrix[0][0] - enigenvalues[i]);
        		difference.push(matrix[0][1]);
        		temp.push(1);
        		temp.push(-1*(difference[0]/difference[1]));
        		eigenvectors.push(temp);
        	}
        }
        var question = "Given the matrix \\begin{bmatrix}" + matrixToKaTeX(matrix) + "\\end{bmatrix}. Determine if there are eigenvectors for this matrix. If yes, what are the eigenvectors?";
        var answer = " v = (" +eigenvectors[0][0] + ", " + eigenvectors[0][1] + "), v = (" +eigenvectors[1][0] + ", " + eigenvectors[1][1] + ")";
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_eigenbases){
        var matrix = [];
        var enigenvalues = [];
        var enigenvectors= [];
        function checkDeterminant(){
        	var isGood = false;
        	while(!isGood){
        		var tempMatrix = [];
        		for(var i =0; i<2;i++){
        			var temp = [];
        			for(var j =0; j<2; j++){
        				temp.push(Math.ceil(Math.random()*5))
        			}
        			tempMatrix.push(temp);
        		}
        		
        		if(determinant(tempMatrix) == 0){
        			isGood = true
        			matrix = tempMatrix;
        		}
        	}
        }
        function findEigenvalues(){
        	var discriminant = Math.sqrt(((matrix[0][0]+matrix[1][1])*(matrix[0][0]+matrix[1][1])) - 4*(matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]));
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) - discriminant)/2);
        	enigenvalues.push(((matrix[0][0]+matrix[1][1]) + discriminant)/2);
        }
        function findEigenvectors(){
        	for(var i=0;i<2;i++){
        		var difference = [];
        		var temp = [];
        		difference.push(matrix[0][0] - enigenvalues[i]);
        		difference.push(matrix[0][1]);
        		temp.push(1);
        		temp.push(-1*(difference[0]/difference[1]));
        		eigenvectors.push(temp);
        	}
        }
        const eigenbase = [];
        function makeEigenbase(){
            for(var i = 0; i < 2; i++){
                var temp = [];
                temp.push(eigenvectors[0][i].toString());
                temp.push(eigenvectors[1][i].toString());
                eigenbase.push(temp);
            }
        }
        var question = "Given the matrix \\begin{bmatrix}" + matrixToKaTeX(matrix) + "\\end{bmatrix}. Determine the eigenbases?";
        var answer = "\\begin{bmatrix}" + matrixToKaTeX(eigenbase) + "\\end{bmatrix}";
        // Return the question and answer in an array
        return [question, answer];
    }
}
