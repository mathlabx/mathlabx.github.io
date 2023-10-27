/*
Atomic and Molecular Structure

Description:
This function generates questions related to the atomic and molecular structure, covering basic concepts of atomic structure, molecular composition, and related topics. All numerical values are randomly generated.

Inputs:
- atomicStructure (boolean): Determines if questions related to the basic concepts of atomic structure should be included.
- molecularComposition (boolean): Determines if questions related to the composition of molecules should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = AtomicAndMolecularStructure(true, false);
console.log(result); // Output: ['What is the basic structure of an atom?', 'The basic structure of an atom consists of a nucleus containing protons and neutrons, surrounded by electrons in energy levels.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Bonds_and_Molecular_Structure.AtomicAndMolecularStructure = function (atomicStructure, molecularComposition) {
    var question = "";
    var answer = "";

    if (atomicStructure || molecularComposition) {
        var selectedInputs = [];
        if (atomicStructure) selectedInputs.push("atomicStructure");
        if (molecularComposition) selectedInputs.push("molecularComposition");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "atomicStructure") {
            var atomicStructureDict = {
                "1": "The basic structure of an atom consists of a nucleus containing protons and neutrons, surrounded by electrons in energy levels.",
                "2": "Protons have a positive charge and are located in the nucleus of the atom, while neutrons have no charge and are also located in the nucleus.",
                "3": "Electrons have a negative charge and orbit the nucleus in various energy levels or electron shells.",
                "4": "The atomic number of an element is determined by the number of protons in the nucleus, while the mass number is the sum of protons and neutrons.",
                "5": "Isotopes are variants of an element that have the same number of protons but a different number of neutrons, leading to variations in atomic mass."
            };

            var atomicStructureKeys = Object.keys(atomicStructureDict);
            var randomAtomicStructure = atomicStructureKeys[Math.floor(Math.random() * atomicStructureKeys.length)];
            question = "What is the basic structure of an atom?";
            answer = atomicStructureDict[randomAtomicStructure];
        } else if (selectedInput === "molecularComposition") {
            var molecularCompositionDict = {
                "1": "Molecules are formed when two or more atoms are chemically bonded together, creating a stable particle with different properties from its constituent atoms.",
                "2": "The chemical formula of a molecule represents the types of atoms in the molecule and the relative numbers of each atom present.",
                "3": "Covalent bonds are formed when atoms share one or more pairs of electrons, creating a stable molecular structure.",
                "4": "Ionic bonds result from the transfer of electrons between atoms, leading to the formation of positively and negatively charged ions that are attracted to each other.",
                "5": "Polar covalent bonds occur when there is an unequal sharing of electrons between atoms, resulting in a partial positive charge on one atom and a partial negative charge on the other."
            };

            var molecularCompositionKeys = Object.keys(molecularCompositionDict);
            var randomMolecularComposition = molecularCompositionKeys[Math.floor(Math.random() * molecularCompositionKeys.length)];
            question = "What is the basic concept of molecular composition?";
            answer = molecularCompositionDict[randomMolecularComposition];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
