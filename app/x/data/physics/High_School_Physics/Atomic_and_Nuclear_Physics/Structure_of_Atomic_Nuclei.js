/*
Structure of Atomic Nuclei

Inputs:
- subatomicParticles (boolean): Determines if questions related to subatomic particles should be included.
- nuclearForces (boolean): Determines if questions related to nuclear forces should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the structure of atomic nuclei, covering topics such as subatomic particles and nuclear forces. All numerical values are randomly generated.

Example Usage:
const result = StructureOfAtomicNuclei(true, false);
console.log(result); // Output: ['What are the subatomic particles present in a nucleus?', 'The subatomic particles are protons and neutrons.']
*/

$X.physics.High_School_Physics.Atomic_and_Nuclear_Physics.StructureOfAtomicNuclei = function (subatomicParticles, nuclearForces) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [subatomicParticles, nuclearForces];
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
        subatomicParticles = options[0];
        nuclearForces = options[1];
    }

    if (subatomicParticles) {
        // Logic for questions related to subatomic particles
        var protons = Math.floor(Math.random() * 100) + 1; // Random number of protons between 1 and 100
        var neutrons = Math.floor(Math.random() * 100) + 1; // Random number of neutrons between 1 and 100

        question = 'If a nucleus has ' + protons + ' protons and ' + neutrons + ' neutrons, what is the total number of subatomic particles in the nucleus?';
        answer = 'The total number of subatomic particles in the nucleus is ' + (protons + neutrons) + '.';
    }

    if (nuclearForces) {
        // Logic for questions related to nuclear forces
        var forces = ['strong nuclear force', 'weak nuclear force', 'electromagnetic force', 'gravitational force'];
        var randomForceIndex = Math.floor(Math.random() * forces.length);
        var nuclearForce = forces[randomForceIndex];

        question = 'What force is responsible for holding nucleons together in the nucleus?';
        answer = 'The ' + nuclearForce + ' is responsible for holding nucleons together in the nucleus.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
