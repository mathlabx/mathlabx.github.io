/*
Magnetic Fields and Electromagnetic Induction

Inputs:
- fields (boolean): Determines if questions related to magnetic fields should be included.
- induction (boolean): Determines if questions related to electromagnetic induction should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of magnetic fields and electromagnetic induction. It covers topics such as the properties of magnetic fields, the behavior of magnetic materials, electromagnetic waves, and practical applications of electromagnetic induction. All numerical values are randomly generated.

Example Usage:
const result = Magnetic_Fields_and_Electromagnetic_Induction(true, true);
console.log(result); // Output: ['What is the relationship between magnetic flux and the induced electromotive force?', 'The relationship is defined by Faraday's law of electromagnetic induction, which states that the electromotive force (EMF) induced in a circuit is directly proportional to the rate of change of magnetic flux through the circuit.']
*/

$X.physics.Middle_School_Physics.Electromagnetism.Magnetic_Fields_and_Electromagnetic_Induction = function (fields, induction) {
    function generateRandomMaterial() {
        const materials = ['conductor', 'semiconductor', 'superconductor', 'ferromagnetic material', 'paramagnetic material', 'diamagnetic material', 'insulator', 'resistor'];
        return materials[Math.floor(Math.random() * materials.length)];
    }
    
    function generateRandomCoil() {
        const coils = ['solenoid', 'toroid', 'magnetic coil', 'induction coil', 'Tesla coil', 'voice coil', 'choke coil', 'ignition coil'];
        return coils[Math.floor(Math.random() * coils.length)];
    }

    const questions = [];
    const answers = [];

    if (fields) {
        const material1 = generateRandomMaterial();
        const magneticField1 = (Math.random() * 10).toFixed(2);
        const current1 = (Math.random() * 10).toFixed(2);
        const force1 = (magneticField1 * current1).toFixed(2);
        questions.push(`Explain the force experienced by a ${material1} placed in a magnetic field of ${magneticField1} T with a current of ${current1} A.`);
        answers.push(`The force experienced by the ${material1} can be calculated using the formula F = B * I * L, where F is the force, B is the magnetic field strength, I is the current, and L is the length of the conductor in the magnetic field. Substituting the given values, the force experienced is ${force1} N.`);

        const material2 = generateRandomMaterial();
        const magneticField2 = (Math.random() * 10).toFixed(2);
        const area = (Math.random() * 10).toFixed(2);
        const flux = (magneticField2 * area).toFixed(2);
        questions.push(`Calculate the magnetic flux through a ${material2} of area ${area} m² in a magnetic field of ${magneticField2} T.`);
        answers.push(`The magnetic flux through the ${material2} can be calculated using the formula Φ = B * A, where Φ is the magnetic flux, B is the magnetic field, and A is the area of the surface. Substituting the given values, the magnetic flux is ${flux} Wb.`);
    }

    if (induction) {
        const coil1 = generateRandomCoil();
        const coil2 = generateRandomCoil();
        const magneticField3 = (Math.random() * 10).toFixed(2);
        const turns = Math.floor(Math.random() * 10) + 1;
        const emf = (magneticField3 * turns).toFixed(2);
        questions.push(`Explain the induced electromotive force (EMF) in a ${coil1} with ${turns} turns in a magnetic field of ${magneticField3} T.`);
        answers.push(`The induced electromotive force in the ${coil1} can be calculated using the formula EMF = -N * ΔΦ / Δt, where EMF is the electromotive force, N is the number of turns, and ΔΦ / Δt is the change in magnetic flux over time. Substituting the given values, the induced EMF is ${emf} V.`);

        const coil3 = generateRandomCoil();
        const area2 = (Math.random() * 10).toFixed(2);
        const magneticField4 = (Math.random() * 10).toFixed(2);
        const inducedCurrent = (area2 * magneticField4).toFixed(2);
        questions.push(`Determine the induced current in a ${coil3} with an area of ${area2} m² in a magnetic field of ${magneticField4} T.`);
        answers.push(`The induced current in the ${coil3} can be calculated using the formula I = B * A, where I is the induced current, B is the magnetic field, and A is the area of the coil. Substituting the given values, the induced current is ${inducedCurrent} A.`);
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
