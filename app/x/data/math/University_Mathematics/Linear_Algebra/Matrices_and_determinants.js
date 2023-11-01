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
    const determinant = m =>
        m.length == 1 ?
            m[0][0] :
            m.length == 2 ?
                m[0][0] * m[1][1] - m[0][1] * m[1][0] :
                m[0].reduce((r, e, i) =>
                    r + (-1) ** (i + 2) * e * determinant(m.slice(1).map(c =>
                        c.filter((_, j) => i != j))), 0)

    if (C_matrix_operations) {
        var question;
        var answer;
        const randOperation = 0;//Math.floor(Math.random() * 4);
        const matrixRow1 = Math.ceil(Math.random() * 4) + 1;
        const matrixColumn1 = Math.ceil(Math.random() * 4) + 1;
        const matrixColumn2 = Math.ceil(Math.random() * 4) + 1;
        const matrix1 = [];
        const matrix2 = [];
        for (var i = 0; i < matrixRow1; i++) {
            var temp = [];
            for (var j = 0; j < matrixColumn1; j++) {
                temp.push(Math.floor(Math.random() * 9));
            }
            matrix1.push(temp);
        }
        for (var i = 0; i < matrixColumn1; i++) {
            var temp = [];
            for (var j = 0; j < matrixColumn2; j++) {
                temp.push(Math.floor(Math.random() * 9));
            }
            matrix2.push(temp);
        }

        if (randOperation == 0) {
            console.log(matrix2);
            question = ""; //"\\begin{bmatrix}" + matrixToKaTeX(matrix1) + "\\end{bmatrix} + \\begin{bmatrix}" + matrixToKaTeX(matrix2) + "\\end{bmatrix}";
            const additionResult = addMatrices(matrix1, matrix2);
            answer = "\\begin{bmatrix}" + matrixToString(additionResult) + "\\end{bmatrix}";
            return [question, answer];
        } else if (randOperation == 1) {
            question = "\\begin{bmatrix}" + matrixToKaTeX(matrix1) + "\\end{bmatrix} - \\begin{bmatrix}" + matrixToKaTeX(matrix2) + "\\end{bmatrix}";
            const subtractionResult = subtractMatrices(matrix1, matrix2);
            answer = "\\begin{bmatrix}" + matrixToString(subtractionResult) + "\\end{bmatrix}";
            return [question, answer];
        } else if (randOperation == 2) {
            question = "\\begin{bmatrix}" + matrixToKaTeX(matrix1) + "\\end{bmatrix} x \\begin{bmatrix}" + matrixToKaTeX(matrix2) + "\\end{bmatrix}";
            const multiplicationResult = multiplyMatrices(matrix1, matrix2);
            answer = "\\begin{bmatrix}" + matrixToString(multiplicationResult) + "\\end{bmatrix}";
            return [question, answer];
        } else if (randOperation == 3) {
            question = "\\begin{bmatrix}" + matrixToKaTeX(matrix1) + "\\end{bmatrix} ÷ \\begin{bmatrix}" + matrixToKaTeX(matrix2) + "\\end{bmatrix}";
            const divisionResult = divideMatrices(matrix1, matrix2);
            answer = "\\begin{bmatrix}" + matrixToString(divisionResult) + "\\end{bmatrix}";
            return [question, answer];
        }

        function matrixToString(matrix) {
            return matrix.map(row => row.join(" & ")).join("\\\\");
        }

        function addMatrices(matrix1, matrix2) {
            const result = [];
            for (let i = 0; i < matrix1.length; i++) {
                const row = [];
                for (let j = 0; j < matrix1[0].length; j++) {
                    row.push(Number(matrix1[i][j]) + Number(matrix2[i][j]));
                }
                result.push(row);
            }
            return result;
        }

        function subtractMatrices(matrix1, matrix2) {
            const result = [];
            for (let i = 0; i < matrix1.length; i++) {
                const row = [];
                for (let j = 0; j < matrix1[0].length; j++) {
                    row.push(matrix1[i][j] - matrix2[i][j]);
                }
                result.push(row);
            }
            return result;
        }

        function multiplyMatrices(matrix1, matrix2) {
            const result = [];
            for (let i = 0; i < matrix1.length; i++) {
                const row = [];
                for (let j = 0; j < matrix2[0].length; j++) {
                    let sum = 0;
                    for (let k = 0; k < matrix1[0].length; k++) {
                        sum += matrix1[i][k] * matrix2[k][j];
                    }
                    row.push(sum);
                }
                result.push(row);
            }
            return result;
        }

        function divideMatrices(matrix1, matrix2) {
            const result = [];
            for (let i = 0; i < matrix1.length; i++) {
                const row = [];
                for (let j = 0; j < matrix1[0].length; j++) {
                    row.push(matrix1[i][j] / matrix2[i][j]);
                }
                result.push(row);
            }
            return result;
        }

    } else if (C_matrix_properties) {
        var question;
        var answer;
        const properties = ["associative", "distributive", "multiplicative identity", "inverse", "additive identity", "commutative", "Scalar Multiplication"];
        const randProp = Math.floor(Math.random() * properties.length);
        if (randProp == 0) {
            const randUse = ["A + (B + C) = (A + B) + C", "A(BC) = (AB)C"];
            question = "For any three matrices, A , B, C of the same order m x n. What is the property that allows " + randUse[Math.round(Math.random())] + "?";
            answer = properties[randProp];
        } else if (randProp == 1) {
            const randUse = ["A(B + C) = AB + AC", "(A + B)C = AC + BC"];
            question = "For any three matrices, A , B, C of the same order m x n. What is the property that allows " + randUse[Math.round(Math.random())] + "?";
            answer = properties[randProp];
        } else if (randProp == 2) {
            question = "Let A be m x n matrix, I_m and I_n be identiy matrixs. What is the property that says I_m*A = A*I_n = A?";
            answer = properties[randProp];
        } else if (randProp == 3) {
            const randUse = ["If matrix A is the inverse of matrix B, then matrix B is the inverse of matrix A.", "The inverse of a matrix if it exists is unique. AB = BA = I."];
            question = "True/False: " + randUse[Math.floor(Math.random())];
            answer = "True";
        } else if (randProp == 4) {
            question = "Let A be a matrix of order m × n, and O be a zero matrix or a null matrix of the same order m × n. What identity allows A + O = O + A = A?";
            answer = properties[randProp];
        } else if (randProp == 5) {
            question = "Given a m x n matrix, A and B. What is the property that allows A + B = B + A?";
            answer = properties[randProp];
        } else if (randProp == 6) {
            const randUse = ["r(sA) = (rs)A", "(r + s)A = rA + sA", "r(A + B) = rA + rB", "A(rB) = r(AB) = (rA)B"];
            question = "Let r and s be real numbers and A and B be matrices. Which property proves that " + randUse[Math.floor(Math.random())] + "?";
            answer = properties[randProp];
        }
        return [question, answer];
    } else if (C_determinants) {
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
        console.log(matrixPresent);
        const matrixText = "\\begin{bmatrix}" + matrixToKaTeX(matrix) + "\\end{bmatrix}";
        question = "Find the determinant of the matrix " + matrixText;
        answer = determinant(matrix);
        // Return the question and answer in an array
        return [question, answer];
    }
}
