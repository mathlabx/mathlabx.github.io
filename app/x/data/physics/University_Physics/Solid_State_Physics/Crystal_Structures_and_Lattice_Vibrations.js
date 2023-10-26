/*
Crystal Structures and Lattice Vibrations

Description:
This function generates questions related to crystal structures and lattice vibrations, covering various aspects such as the concept of crystal structures, principles of lattice vibrations, etc. All numerical values are randomly generated.

Inputs:
- crystalStructureConcepts (boolean): Determines if questions related to the concept of crystal structures should be included.
- latticeVibrationsPrinciples (boolean): Determines if questions related to the principles of lattice vibrations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = CrystalStructuresAndLatticeVibrations(true, false);
console.log(result); // Output: ['What is a unit cell in crystallography?', 'A unit cell is the smallest repeating unit in a crystal lattice.']
*/

$X.physics.University_Physics.Solid_State_Physics.CrystalStructuresAndLatticeVibrations = function (crystalStructureConcepts, latticeVibrationsPrinciples) {
    var question = "";
    var answer = "";

    if (crystalStructureConcepts && latticeVibrationsPrinciples) {
        if (Math.random() > 0.5) {
            crystalStructureConcepts = false;
        } else {
            latticeVibrationsPrinciples = false;
        }
    }

    if (crystalStructureConcepts) {
        const crystalTerms = ['unit cell', 'lattice points', 'crystal system', 'Bravais lattice', 'coordination number'];
        const randomTermIndex = Math.floor(Math.random() * crystalTerms.length);
        const randomTerm = crystalTerms[randomTermIndex];

        if (randomTerm === 'unit cell') {
            question = `What is a unit cell in crystallography?`;
            answer = `A unit cell is the smallest repeating unit in a crystal lattice.`;
        } else if (randomTerm === 'lattice points') {
            question = `Define lattice points in crystal structures.`;
            answer = `Lattice points refer to the positions within a crystal structure where the atoms, ions, or molecules are located.`;
        } else if (randomTerm === 'crystal system') {
            question = `Describe the concept of crystal systems.`;
            answer = `Crystal systems are a method of categorizing crystals based on their unit cell geometry.`;
        } else if (randomTerm === 'Bravais lattice') {
            question = `What are Bravais lattices in crystallography?`;
            answer = `Bravais lattices represent the 14 distinct 3-dimensional lattice structures that can fill space in a periodic manner.`;
        } else if (randomTerm === 'coordination number') {
            question = `Explain coordination number in crystal structures.`;
            answer = `Coordination number is the number of atoms or ions immediately surrounding a central atom in a crystal lattice.`;
        }
    }

    if (latticeVibrationsPrinciples) {
        const vibrationTerms = ['phonons', 'Einstein solid', 'dispersion relation', 'Debye temperature', 'thermal conductivity'];
        const randomTermIndex = Math.floor(Math.random() * vibrationTerms.length);
        const randomTerm = vibrationTerms[randomTermIndex];

        if (randomTerm === 'phonons') {
            question = `Define phonons in the context of lattice vibrations.`;
            answer = `Phonons are quantized lattice vibrations that describe the propagation of vibrational waves through a crystal lattice.`;
        } else if (randomTerm === 'Einstein solid') {
            question = `Explain the concept of an Einstein solid in lattice vibrations.`;
            answer = `An Einstein solid is a model used to understand the vibrations of atoms in a solid as quantized harmonic oscillators.`;
        } else if (randomTerm === 'dispersion relation') {
            question = `What is the dispersion relation in lattice dynamics?`;
            answer = `The dispersion relation describes the relationship between the frequency and wave vector of lattice vibrations in a crystal.`;
        } else if (randomTerm === 'Debye temperature') {
            question = `Describe the Debye temperature and its significance.`;
            answer = `The Debye temperature is a characteristic temperature that defines the relationship between the lattice vibrations and the temperature of a solid.`;
        } else if (randomTerm === 'thermal conductivity') {
            question = `Explain the role of lattice vibrations in the thermal conductivity of solids.`;
            answer = `Lattice vibrations contribute to the thermal conductivity of solids by transferring energy through the material via phonons.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
