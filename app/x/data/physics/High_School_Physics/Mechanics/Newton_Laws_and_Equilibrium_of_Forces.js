/*
Newton Laws and Equilibrium of Forces

Inputs:
- firstLaw (boolean): Determines if questions related to the first law of Newton should be included.
- secondLaw (boolean): Determines if questions related to the second law of Newton should be included.
- thirdLaw (boolean): Determines if questions related to the third law of Newton should be included.
- equilibrium (boolean): Determines if questions related to the equilibrium of forces should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the Newton's laws of motion and equilibrium of forces, covering topics such as the first, second, and third laws of motion and the principles of equilibrium. All numerical values are randomly generated.

Example Usage:
const result = NewtonLawsAndEquilibrium(true, true, false, false);
console.log(result); // Output: ['A force of 10 N acts on a body of mass 2 kg. What is the acceleration of the body according to the second law of Newton?', 'The acceleration of the body is 5 m/s^2.']
*/

$X.physics.High_School_Physics.Mechanics.NewtonLawsAndEquilibrium = function (firstLaw, secondLaw, thirdLaw, equilibrium) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [firstLaw, secondLaw, thirdLaw, equilibrium];
    var trueCount = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] === true) {
            trueCount++;
        }
    }

    if (trueCount > 1) {
        var randomIndex = Math.floor(Math.random() * options.length);
        for (var j = 0; j < options.length; j++) {
            if (j === randomIndex) {
                options[j] = true;
            } else {
                options[j] = false;
            }
        }
        firstLaw = options[0];
        secondLaw = options[1];
        thirdLaw = options[2];
        equilibrium = options[3];
    }

    if (firstLaw) {
        // Logic for questions related to the first law of Newton
        var situation = ['space', 'elevator', 'car', 'plane', 'train'];
        var randomSituationIndex = Math.floor(Math.random() * situation.length);
        var selectedSituation = situation[randomSituationIndex];

        question = 'Explain how the first law of Newton applies to ' + selectedSituation + ' motion.';
        answer = 'In ' + selectedSituation + ' motion, the first law of Newton implies that if no external force is acting, the object will remain at rest or continue to move at a constant velocity.';
    }

    if (secondLaw) {
        // Logic for questions related to the second law of Newton
        var force = Math.floor(Math.random() * 20) + 5; // Random force between 5 and 25 N
        var mass = Math.floor(Math.random() * 5) + 1; // Random mass between 1 and 5 kg
        var accelerationValue = (force / mass).toFixed(2);

        question = 'A force of ' + force + ' N acts on a body of mass ' + mass + ' kg. What is the acceleration of the body according to the second law of Newton? Round to the nearest hundred.';
        answer = 'The acceleration of the body is ' + accelerationValue + ' m/s².';
    }

    if (thirdLaw) {
        // Logic for questions related to the third law of Newton
        var action = ['kicking', 'hitting', 'throwing', 'stopping', 'catching'];
        var object = ['ball', 'box', 'book', 'stone', 'pencil'];
        var randomActionIndex = Math.floor(Math.random() * action.length);
        var randomObjectIndex = Math.floor(Math.random() * object.length);
        var selectedAction = action[randomActionIndex];
        var selectedObject = object[randomObjectIndex];

        question = 'Provide an example of the third law of Newton in action, involving ' + selectedAction + ' a ' + selectedObject + '.';
        answer = 'When ' + selectedAction + ' the ' + selectedObject + ', the ' + selectedObject + ' exerts an equal force in the opposite direction.';
    }

    if (equilibrium) {
        // Logic for questions related to the equilibrium of forces
        var object = ['shelf', 'table', 'bridge', 'ladder', 'beam'];
        var randomObjectIndex = Math.floor(Math.random() * object.length);
        var selectedObject = object[randomObjectIndex];
        var weight1 = Math.floor(Math.random() * 80) + 20; // Random weight between 20 and 100 N
        var weight2 = weight1;

        question = 'For a ' + selectedObject + ' to be in equilibrium, which weights should be balanced?';
        answer = 'The ' + weight1 + ' N weight and the ' + weight2 + ' N weight should be balanced.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
