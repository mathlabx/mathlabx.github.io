/*
Momentum and Energy

Inputs:
- momentum (boolean): Determines if questions related to momentum should be included.
- energyConservation (boolean): Determines if questions related to the conservation of energy should be included.
- workEnergy (boolean): Determines if questions related to work-energy principle should be included.
- impulse (boolean): Determines if questions related to impulse should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to momentum, energy conservation, work-energy principle, and impulse. All numerical values are randomly generated.

Example Usage:
const result = MomentumAndEnergy(true, true, false, false);
console.log(result); // Output: ['A body of mass 4 kg has a velocity of 5 m/s. What is its momentum?', 'The momentum of the body is 20 kg*m/s.']
*/

$X.physics.High_School_Physics.Mechanics.MomentumAndEnergy = function (momentum, energyConservation, workEnergy, impulse) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [momentum, energyConservation, workEnergy, impulse];
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
        momentum = options[0];
        energyConservation = options[1];
        workEnergy = options[2];
        impulse = options[3];
    }

    if (momentum) {
        // Logic for questions related to momentum
        var mass = Math.floor(Math.random() * 20) + 1; // Random mass between 1 and 20 kg
        var velocity = Math.floor(Math.random() * 30) + 5; // Random velocity between 5 and 35 m/s
        var object = ['car', 'train', 'ball', 'bullet', 'truck'];
        var randomObjectIndex = Math.floor(Math.random() * object.length);
        var selectedObject = object[randomObjectIndex];

        question = 'A ' + selectedObject + ' of mass ' + mass + ' kg has a velocity of ' + velocity + ' m/s. What is its momentum?';
        var momentumValue = mass * velocity;
        answer = 'The momentum of the ' + selectedObject + ' is ' + momentumValue + ' kg*m/s.';
    }

    if (energyConservation) {
        // Logic for questions related to energy conservation
        var initialEnergy = Math.floor(Math.random() * 300) + 50; // Random initial energy between 50 and 350 J
        var finalEnergy = Math.floor(Math.random() * 500) + 400; // Random final energy between 400 and 900 J
        var process = ['heating', 'cooling', 'compression', 'expansion'];
        var randomProcessIndex = Math.floor(Math.random() * process.length);
        var selectedProcess = process[randomProcessIndex];

        question = 'During the process of ' + selectedProcess + ', a system has an initial energy of ' + initialEnergy + ' J and a final energy of ' + finalEnergy + ' J. How much energy is conserved in the system?';
        var conservationValue = finalEnergy - initialEnergy;
        answer = 'The energy conserved in the system during ' + selectedProcess + ' is ' + conservationValue + ' J.';
    }

    if (workEnergy) {
        // Logic for questions related to work-energy principle
        var force = Math.floor(Math.random() * 60) + 20; // Random force between 20 and 80 N
        var distance = Math.floor(Math.random() * 15) + 5; // Random distance between 5 and 20 m
        var action = ['lifting', 'pushing', 'pulling', 'dragging', 'lowering'];
        var randomActionIndex = Math.floor(Math.random() * action.length);
        var selectedAction = action[randomActionIndex];

        var work = force * distance;

        question = 'A force of ' + force + ' N is applied to an object, ' + selectedAction + ' it through a distance of ' + distance + ' m. What is the work done on the object?';
        answer = 'The work done on the object while ' + selectedAction + ' is ' + work + ' J.';
    }

    if (impulse) {
        // Logic for questions related to impulse
        var force2 = Math.floor(Math.random() * 60) + 20; // Random force between 20 and 80 N
        var time = Math.floor(Math.random() * 6) + 2; // Random time between 2 and 8 s
        var activity = ['kicking', 'hitting', 'throwing', 'stopping', 'catching'];
        var randomActivityIndex = Math.floor(Math.random() * activity.length);
        var selectedActivity = activity[randomActivityIndex];

        var impulseValue = force2 * time;
        question = 'A force of ' + force2 + ' N acts on an object for ' + time + ' seconds during ' + selectedActivity + '. What is the impulse experienced by the object?';
        answer = 'The impulse experienced by the object during ' + selectedActivity + ' is ' + impulseValue + ' N*s.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
