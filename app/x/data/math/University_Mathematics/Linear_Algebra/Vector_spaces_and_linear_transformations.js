/*
Vector spaces and linear transformations

Inputs:
- C_vector_spaces (boolean): Determines if questions related to vector spaces should be included.
- C_linear_transformations (boolean): Determines if questions about linear transformations should be included.
- C_basis_and_dimension (boolean): Determines if questions about basis and dimension of vector spaces should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to vector spaces and linear transformations. It covers topics such as determining if a set of vectors forms a vector space, properties of vector spaces, properties of linear transformations, and the basis and dimension of vector spaces. The questions may involve matrix representations, transformations, and various properties associated with vector spaces.

Example Usage:
const result = VectorSpacesAndLinearTransformations(true, false, true);
console.log(result); // Output: ['Determine if the set of vectors forms a vector space: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', 'The set of vectors forms a vector space.']
*/

$X.math.University_Mathematics.Linear_Algebra.VectorSpacesAndLinearTransformations = function(C_vector_spaces, C_linear_transformations, C_basis_and_dimension) {
    // Your code goes here
    if(C_vector_spaces){
        var question;
        var answer;
        var vector1 = [];
        var vector2 = [];
        var vector3 = [];
        for(var i = 0; i<3; i++){vector1.push(Math.ceil(Math.random() * 9));}
        for(var i = 0; i<3; i++){vector2.push(Math.ceil(Math.random() * 9));}
        for(var i = 0; i<3; i++){vector3.push(Math.ceil(Math.random() * 9));}
        var checkCommutative = true;
        var checkDistributive = true;
        var checkAssociate = true;
        var checkAdditiveInverse = true;
        var checkAdditiveIdentity = true;
        for(var i = 0; i<3; i++){
            var constant1 = Math.ceil(Math.random()*9);
            var constant2 = Math.ceil(Math.random()*9);
            if((vector1[i] + vector2[i]) != (vector2[i] + vector1[i])){
                checkCommutative = false;
            }if((vector1[i] + -1*vector1[i]) != 0){
                checkAdditiveInverse = false;
            }if((vector1[i] + 0) != vector1[i]){
                checkAdditiveIdentity = false;
            }if(constant1*(vector1[i] +vector2[i]) != (constant1*vector1[i] + constant1*vector2[i])){
                checkDistributive = false;
            }if(constant1*(constant2*vector1[i]) != constant1*constant2*(vector1[i])){
                checkAssociate = false;
            }
        }
        question = 'Determine if the set of vectors forms a vector space: [" + vector1 + "], [" + vector2 + "], [" + vector3 + "].";
        if(checkCommutative && checkAdditiveIdentity && checkAdditiveInverse && checkAssociate && checkDistributive){
            answer = "The set of vectors forms a vector space.";
        }else{
            answer = "The set of vectors doesn't satisfy the axioms of addition and scalar multiplication.";
        }
    }else if(C_linear_transformations){
        var basicVector1 = [];
		var basicVector2 = [];
        var originalVector = [];
		var transformVector = [];
        for(var i = 0; i<2; i++){basicVector1.push(Math.ceil(Math.random() * 9));}
        for(var i = 0; i<2; i++){basicVector2.push(Math.ceil(Math.random() * 9));}
        for(var i = 0; i<2; i++){originalVector.push(Math.ceil(Math.random() * 9));}
		for(var i = 0; i<2; i++){
			transformVector.push(originalVector[0] * basicVector1[i] + originalVector[1] * basicVector2[i]);
		}
		var question = "On a 2D coordinate plane, the plane is transformed and moved so that i lands on the coordinate [" + basicVector1 + "] and j lands on the coordinate [" + basicVector2 + "]. Where will a vector [" + originalVector + "] land after the transformtion?";
		var answer = "The vector will land on the coordinate [" + transformVector + "]";
        return [question, answer];
    }else{
        return null;
    }
    // Return the question and answer in an array
    return [question, answer];
}
