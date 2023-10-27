/*
Covalent and Ionic Bonds

Description:
This function generates questions related to covalent and ionic bonds, covering the basic concepts of bond formation, properties, and related topics. All numerical values are randomly generated.

Inputs:
- covalentBonds (boolean): Determines if questions related to covalent bonds should be included.
- ionicBonds (boolean): Determines if questions related to ionic bonds should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = CovalentAndIonicBonds(true, false);
console.log(result); // Output: ['How are covalent bonds formed?', 'Covalent bonds are formed when two atoms share one or more pairs of electrons.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Bonds_and_Molecular_Structure.CovalentAndIonicBonds = function (covalentBonds, ionicBonds) {
    var question = "";
    var answer = "";

    if (covalentBonds || ionicBonds) {
        var selectedInputs = [];
        if (covalentBonds) selectedInputs.push("covalentBonds");
        if (ionicBonds) selectedInputs.push("ionicBonds");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "covalentBonds") {
            var covalentBondsDict = {
                "1": "Covalent bonds are formed when two atoms share one or more pairs of electrons.",
                "2": "The shared electrons in a covalent bond occupy the outermost electron shells of the bonded atoms, resulting in the formation of a stable molecular structure.",
                "3": "Single, double, and triple bonds are examples of covalent bonds, representing the sharing of one, two, and three pairs of electrons, respectively.",
                "4": "Molecules with covalent bonds often exhibit unique properties based on the types and arrangements of atoms within the molecule.",
                "5": "Covalent bonds are typically stronger than intermolecular forces but weaker than ionic bonds.",
                "6": "Polar covalent bonds result from an unequal sharing of electrons between atoms with different electronegativities.",
                "7": "The formation of covalent bonds is essential for the creation of various organic and inorganic compounds in nature.",
                "8": "The strength and stability of covalent bonds contribute to the structural integrity and function of biological molecules, such as proteins and DNA.",
                "9": "Electron dot structures are often used to represent the arrangement of electrons in covalent bonds, providing a simplified visual representation of the shared electron pairs.",
                "10": "The strength of a covalent bond is influenced by factors such as bond length, bond order, and the types of atoms involved in the bond formation.",
                "11": "Resonance structures can occur in molecules with delocalized electrons, where multiple valid electron dot structures can be drawn to represent the bonding within the molecule.",
                "12": "The hybridization of atomic orbitals is often observed in molecules with covalent bonds, leading to the formation of new orbitals that better accommodate the electron sharing between atoms.",
                "13": "The concept of valence electrons is crucial for understanding the formation and properties of covalent bonds, as these electrons participate in the bonding interactions between atoms.",
                "14": "Nonpolar covalent bonds arise when atoms share electrons equally, resulting in a balanced distribution of charge within the molecule.",
                "15": "The bond energy of a covalent bond represents the amount of energy required to break the bond and separate the bonded atoms completely.",
                "16": "The polarity of a covalent bond can give rise to dipole moments within a molecule, influencing its overall molecular polarity and behavior in different chemical environments.",
                "17": "Covalent bonds play a vital role in the formation of various materials, including synthetic polymers, ceramics, and composite materials used in different industrial applications.",
                "18": "Localized electron pair model and molecular orbital theory are two theoretical models commonly used to describe the nature of covalent bonding in different molecules and compounds.",
                "19": "The presence of lone pairs in covalent molecules can affect the overall geometry and properties of the molecule, leading to variations in its reactivity and behavior.",
                "20": "The concept of hybrid orbitals helps explain the directional nature of covalent bonds, providing insights into the spatial arrangement of atoms and the geometry of molecules."
            };

            var covalentBondsKeys = Object.keys(covalentBondsDict);
            var randomCovalentBonds = covalentBondsKeys[Math.floor(Math.random() * covalentBondsKeys.length)];
            question = "How are covalent bonds formed?";
            answer = covalentBondsDict[randomCovalentBonds];
        } else if (selectedInput === "ionicBonds") {
            var ionicBondsDict = {
                "1": "Ionic bonds are formed between atoms with significantly different electronegativities, resulting in the transfer of electrons from one atom to another.",
                "2": "The transfer of electrons in an ionic bond leads to the formation of positively and negatively charged ions that are attracted to each other due to their opposite charges.",
                "3": "Ionic compounds often form crystalline lattices and have high melting and boiling points due to the strong electrostatic forces between ions.",
                "4": "Common examples of ionic compounds include salts, such as sodium chloride (NaCl) and potassium iodide (KI).",
                "5": "The dissolution of ionic compounds in water results in the dissociation of ions, leading to the formation of electrolytic solutions that can conduct electricity.",
                "6": "Ionic bonds play a vital role in the formation of various minerals and geological structures found in nature, including rocks, crystals, and mineral deposits.",
                "7": "The stability of ionic compounds is influenced by factors such as ion size, lattice energy, and the arrangement of ions within the crystal lattice.",
                "8": "The presence of lattice defects and imperfections can affect the properties and behavior of ionic solids, leading to variations in their mechanical, electrical, and optical properties.",
                "9": "The coordination number of ions in an ionic compound reflects the number of ions surrounding a particular ion in the crystal lattice, indicating the overall structure and stability of the compound.",
                "10": "The concept of Born-Haber cycle is commonly used to calculate the lattice energy of an ionic compound, providing insights into the stability and energy changes associated with the formation of the compound.",
                "11": "The interaction between cations and anions in ionic compounds is governed by Coulomb's law, which describes the electrostatic attraction and repulsion between charged particles.",
                "12": "The formation of ionic bonds is critical for the development of various ceramic materials used in manufacturing industries, including ceramics, glass, and refractory materials.",
                "13": "The solubility of ionic compounds in different solvents is influenced by factors such as the polarity of the solvent, temperature, and the nature of the ions present in the compound.",
                "14": "The concept of lattice energy is essential for understanding the stability and formation of ionic solids, as it represents the energy released when gaseous ions combine to form an ionic solid.",
                "15": "The arrangement of ions in an ionic crystal lattice can give rise to different crystal structures, such as cubic, hexagonal, or tetragonal, each exhibiting unique physical and chemical properties.",
                "16": "The properties of ionic compounds can be modified by introducing doping elements, which replace some of the ions in the crystal lattice, leading to changes in conductivity, color, and other material characteristics.",
                "17": "The hardness and brittleness of ionic solids are influenced by the arrangement and strength of the ionic bonds within the crystal lattice, affecting their resistance to mechanical stress and deformation.",
                "18": "The formation of coordination complexes and metal-ligand interactions involves the coordination of metal ions with various ligands, leading to the creation of stable and often colorful compounds with distinctive optical and magnetic properties.",
                "19": "Ionic bonds play a crucial role in the development of various biomedical materials and applications, including biomaterials, drug delivery systems, and tissue engineering scaffolds.",
                "20": "The concept of Fajan's rules helps describe the polarization of ions in an ionic compound, explaining the influence of the size and charge of ions on the overall stability and properties of the compound."
            };

            var ionicBondsKeys = Object.keys(ionicBondsDict);
            var randomIonicBonds = ionicBondsKeys[Math.floor(Math.random() * ionicBondsKeys.length)];
            question = "What are some properties of ionic bonds?";
            answer = ionicBondsDict[randomIonicBonds];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
