/*
Kinematics

Inputs:
- velocity (boolean): Determines if questions related to velocity should be included.
- acceleration (boolean): Determines if questions related to acceleration should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the basic concepts of kinematics, covering topics such as velocity, acceleration, and their various properties. All numerical values are randomly generated.

Example Usage:
const result = Kinematics(true, true);
console.log(result); // Output: ['A car accelerates uniformly from 20 m/s to 50 m/s in 4 seconds. What is the acceleration of the car?', 'The acceleration of the car is 7.5 m/s^2.']
*/

$X.physics.High_School_Physics.Mechanics.Kinematics = function (velocity, acceleration) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [velocity, acceleration];
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
        velocity = options[0];
        acceleration = options[1];
    }

    if (velocity) {
        // Logic for questions related to velocity
        var initialVelocity = Math.floor(Math.random() * 50) + 1; // Random initial velocity between 1 and 50 m/s
        var finalVelocity = Math.floor(Math.random() * 100) + 51; // Random final velocity between 51 and 150 m/s
        var time = Math.floor(Math.random() * 10) + 1; // Random time between 1 and 10 seconds

        var vehicles = ['car', 'train', 'airplane'];
        var randomVehicleIndex = Math.floor(Math.random() * vehicles.length);
        var vehicle = vehicles[randomVehicleIndex];

        question = 'A ' + vehicle + ' accelerates uniformly from ' + initialVelocity + ' m/s to ' + finalVelocity + ' m/s in ' + time + ' seconds. What is the final velocity of the ' + vehicle + '?';
        var accelerationValue = (finalVelocity - initialVelocity) / time;
        answer = 'The final velocity of the ' + vehicle + ' is ' + finalVelocity + ' m/s. The acceleration of the ' + vehicle + ' is ' + accelerationValue + ' m/s^2.';
    }

    if (acceleration) {
        // Logic for questions related to acceleration
        var initialVelocity2 = Math.floor(Math.random() * 50) + 1; // Random initial velocity between 1 and 50 m/s
        var finalVelocity2 = Math.floor(Math.random() * 100) + 51; // Random final velocity between 51 and 150 m/s
        var time2 = Math.floor(Math.random() * 10) + 1; // Random time between 1 and 10 seconds

        var vehicles2 = ['car', 'train', 'airplane'];
        var randomVehicleIndex2 = Math.floor(Math.random() * vehicles2.length);
        var vehicle2 = vehicles2[randomVehicleIndex2];

        question = 'A ' + vehicle2 + ' initially traveling at ' + initialVelocity2 + ' m/s accelerates uniformly and reaches a final velocity of ' + finalVelocity2 + ' m/s in ' + time2 + ' seconds. What is the acceleration of the ' + vehicle2 + '?';
        var accelerationValue2 = (finalVelocity2 - initialVelocity2) / time2;
        answer = 'The acceleration of the ' + vehicle2 + ' is ' + accelerationValue2 + ' m/s^2.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
