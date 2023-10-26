/*
Maxwell Equations

Description:
This function generates questions related to Maxwell's equations, covering various aspects of the electromagnetic field, including electric fields, magnetic fields, and the relationships between electric charges and currents. All numerical values are randomly generated.

Inputs:
- electricField (boolean): Determines if questions related to electric fields should be included.
- magneticField (boolean): Determines if questions related to magnetic fields should be included.
- chargesAndCurrents (boolean): Determines if questions related to the relationships between charges and currents should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = MaxwellEquations(true, true, false);
console.log(result); // Output: ['An electric field in a vacuum has a magnitude of 50 N/C. What is the force experienced by a charge of 2 C?', 'The force experienced by the charge is 100 N.']
*/

$X.physics.University_Physics.Electromagnetism.MaxwellEquations = function(electricField, magneticField, chargesAndCurrents) {

    function getRandomCharge() {
        return parseFloat((Math.random() * 10).toFixed(2)); // Generate random charge between 0 to 10 C
    }

    function getRandomElectricFieldStrength() {
        return parseFloat((Math.random() * 100).toFixed(2)); // Generate random electric field strength between 0 to 100 N/C
    }

    function getRandomCurrent() {
        return parseFloat((Math.random() * 10).toFixed(2)); // Generate random current between 0 to 10 A
    }

    function getRandomMagneticFieldStrength() {
        return parseFloat((Math.random() * 10).toFixed(2)); // Generate random magnetic field strength between 0 to 10 T
    }

    function getRandomDistance() {
        return parseFloat((Math.random() * 10).toFixed(2)); // Generate random distance between 0 to 10 m
    }

    function calculateElectricForce(charge, electricFieldStrength) {
        const force = charge * electricFieldStrength;
        return parseFloat(force.toFixed(2)); // Calculate the force using the formula F = qE
    }

    function calculateMagneticForce(current, magneticFieldStrength) {
        const force = current * magneticFieldStrength;
        return parseFloat(force.toFixed(2)); // Calculate the force using the formula F = BIL
    }

    function calculateCoulombForce(charge1, charge2, distance) {
        const k = 8.99 * Math.pow(10, 9); // Coulomb's constant in Nm^2/C^2
        const force = (k * charge1 * charge2) / Math.pow(distance, 2);
        return parseFloat(force.toFixed(2)); // Calculate the force using Coulomb's law
    }

    const options = [{ key: 'electricField', value: electricField }, { key: 'magneticField', value: magneticField }, { key: 'chargesAndCurrents', value: chargesAndCurrents }];
    const selectedOption = options.filter(option => option.value);
    const selected = selectedOption[Math.floor(Math.random() * selectedOption.length)];

    const result = [];

    if (selected.key === 'electricField') {
        const charge = getRandomCharge();
        const electricFieldStrength = getRandomElectricFieldStrength();
        const force = calculateElectricForce(charge, electricFieldStrength);
        result.push(`An electric field has a magnitude of ${electricFieldStrength} N/C. What is the force experienced by a charge of ${charge} C?`);
        result.push(`The force experienced by the charge is ${force} N.`);
    }

    if (selected.key === 'magneticField') {
        const current = getRandomCurrent();
        const magneticFieldStrength = getRandomMagneticFieldStrength();
        const lorentzForce = calculateMagneticForce(current, magneticFieldStrength);
        result.push(`A current of ${current} A is flowing in a wire placed in a magnetic field of ${magneticFieldStrength} T. What is the Lorentz force experienced by the wire?`);
        result.push(`The Lorentz force experienced by the wire is ${lorentzForce} N.`);
    }

    if (selected.key === 'chargesAndCurrents') {
        const charge1 = getRandomCharge();
        const charge2 = getRandomCharge();
        const distance = getRandomDistance();
        const coulombForce = calculateCoulombForce(charge1, charge2, distance);
        result.push(`Two charges of ${charge1} C and ${charge2} C are placed ${distance} m apart. What is the Coulomb force between them?`);
        result.push(`The Coulomb force between the charges is ${coulombForce} N.`);
    }

    return result;
}
