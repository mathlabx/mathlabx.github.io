/*
Interaction of Electromagnetic Fields

Description:
This function generates questions related to the interaction of electromagnetic fields, covering various aspects such as the interaction between electric and magnetic fields, Lorentz force, etc. All numerical values are randomly generated.

Inputs:
- fieldInteraction (boolean): Determines if questions related to the interaction between electric and magnetic fields should be included.
- lorentzForce (boolean): Determines if questions related to the Lorentz force should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = InteractionOfElectromagneticFields(true, false);
console.log(result); // Output: ['An electron moves with a velocity of 2 m/s in a magnetic field of 3 T. What is the magnetic force experienced by the electron?', 'The magnetic force experienced by the electron is 6 x 10^-19 N.']
*/

$X.physics.University_Physics.Electromagnetism.InteractionOfElectromagneticFields = function (fieldInteraction, lorentzForce) {
    var question = "";
    var answer = "";

    if (fieldInteraction && lorentzForce) {
        if (Math.random() < 0.5) {
            const electricFieldStrength = Math.floor(Math.random() * 20) + 1;
            const magneticFieldStrength = (Math.floor(Math.random() * 50) + 1) / 10;
            const force = electricFieldStrength * magneticFieldStrength;
            question = `An electric field of ${electricFieldStrength} N/C interacts with a magnetic field of ${magneticFieldStrength} T. What is the resulting force?`;
            answer = `The resulting force is ${force} N.`;
        } else {
            const velocity = Math.floor(Math.random() * 10) + 1;
            const magneticField = (Math.floor(Math.random() * 50) + 1) / 10;
            const force = (1.6 * Math.pow(10, -19) * velocity * magneticField).toExponential(2);
            question = `An electron moves with a velocity of ${velocity} m/s in a magnetic field of ${magneticField} T. What is the magnetic force experienced by the electron?`;
            answer = `The magnetic force experienced by the electron is ${force} N.`;
        }
    } if (fieldInteraction) {
        // Logic for questions related to the interaction between electric and magnetic fields
        var electricFieldStrength = Math.floor(Math.random() * 100) + 1; // Generating a random electric field strength
        var magneticFieldStrength = Math.floor(Math.random() * 10) + 1; // Generating a random magnetic field strength

        question = `An electron moves in an electric field of ${electricFieldStrength} N/C and a magnetic field of ${magneticFieldStrength} T. What is the force experienced by the electron?`;
        var magneticForce = electricFieldStrength * magneticFieldStrength; // Simple calculation for the force
        answer = `The force experienced by the electron is ${magneticForce} N.`;
    } else if (lorentzForce) {
        // Logic for questions related to the Lorentz force
        var charge = Math.floor(Math.random() * 10) + 1; // Generating a random charge
        var velocity = Math.floor(Math.random() * 10) + 1; // Generating a random velocity

        question = `An electron with a charge of ${charge} C moves with a velocity of ${velocity} m/s in a magnetic field. What is the magnetic force experienced by the electron?`;
        var lorentzForce = charge * velocity; // Simple calculation for the force
        answer = `The magnetic force experienced by the electron is ${lorentzForce} N.`;
    }


    return [question, answer];
}
