/*
Matrices and determinants

Inputs:
- C_matrix_operations (boolean): Determines if questions related to basic matrix operations should be included.
- C_matrix_properties (boolean): Determines if questions about properties of matrices should be included.
- C_determinants (boolean): Determines if questions about determinants of matrices should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to matrices and determinants. It covers topics such as matrix addition, subtraction, multiplication, and properties of matrices. Additionally, it includes questions about finding determinants of matrices using various methods such as row operations, cofactor expansion, and properties of determinants.

Example Usage:
const result = MatricesAndDeterminants(true, false, true);
console.log(result); // Output: ['Find the determinant of the following 2x2 matrix: [[3, 4], [2, 6]]', 'The determinant of the matrix is 10.']
*/

$X.math.University_Mathematics.Linear_Algebra.MatricesAndDeterminants = function (C_matrix_operations, C_matrix_properties, C_determinants) {
    // Your code goes here
    const determinant = m => 
      m.length == 1 ?
      m[0][0] :
      m.length == 2 ? 
      m[0][0]*m[1][1]-m[0][1]*m[1][0] :
      m[0].reduce((r,e,i) => 
        r+(-1)**(i+2)*e*determinant(m.slice(1).map(c => 
          c.filter((_,j) => i != j))),0)

    var question;
    var answer = 0;
    if (C_matrix_operations) {
        return null;
    } else if (C_matrix_properties) {
        return null;
    } else {
        var question;
        var answer = 0;
        const matrixRow = Math.ceil(Math.random() * 4) + 1;
        const matrix = [];
        for (var i = 0; i < matrixRow; i++) {
            var temp = [];
            for (var j = 0; j < matrixRow; j++) {
                temp.push(Math.floor(Math.random() * 9));
            }
            matrix.push(temp);
        }
        const matrixText = "\\begin{bmatrix}" + matrixToKaTeX(matrix) + "\\end{bmatrix}";
        question = "Find the determinant of the matrix." + matrix;
        answer = determinant(matrix);
        // Return the question and answer in an array
        return [question, answer];
    }
}
