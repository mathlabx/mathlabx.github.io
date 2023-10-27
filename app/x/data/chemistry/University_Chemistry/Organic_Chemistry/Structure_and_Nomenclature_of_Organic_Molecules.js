/*
Structure and Nomenclature of Organic Molecules

Description:
This function generates questions related to the structure and nomenclature of organic molecules, covering the basic concepts of organic chemistry, including molecular structures and naming rules.

Inputs:
- structure (boolean): Determines if questions related to molecular structure should be included.
- nomenclature (boolean): Determines if questions related to nomenclature should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = StructureAndNomenclatureOfOrganicMolecules(true, false);
console.log(result); // Output: ['What is the structure of the given organic molecule?', 'The structure of the given organic molecule is ...']
*/

$X.chemistry.University_Chemistry.Organic_Chemistry.StructureAndNomenclatureOfOrganicMolecules = function (structure, nomenclature) {
    var question = "";
    var answer = "";

    if (structure || nomenclature) {
        var selectedInputs = [];
        if (structure) selectedInputs.push("structure");
        if (nomenclature) selectedInputs.push("nomenclature");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "structure") {
            var structureQuestions = [
                "What is the structural formula of the given organic compound?",
                "Discuss the key features and functional groups present in the molecular structure of the provided organic compound.",
                "Explain the stereochemical arrangements and isomeric forms of the given organic molecule, highlighting the spatial orientation and geometric relationships of functional groups.",
                "Describe the skeletal structure and bonding pattern of the provided organic compound, emphasizing the connectivity and hybridization of carbon atoms in the molecular framework.",
                "What are the characteristic substituent groups and side chains in the structure of the provided organic compound, and how do they contribute to the chemical reactivity and physical properties of the molecule?"
            ];

            var structureAnswers = [
                "The structural formula of the given organic compound is represented by a molecular formula depicting the arrangement of atoms and the bonding pattern between carbon, hydrogen, and other heteroatoms, indicating the connectivity and spatial configuration of functional groups and molecular motifs.",
                "Key features and functional groups present in the molecular structure of the provided organic compound include hydroxyl groups, carbonyl groups, amino groups, alkyl chains, aromatic rings, and other characteristic substituents, contributing to the chemical reactivity, intermolecular interactions, and biological activity of the compound.",
                "Stereochemical arrangements and isomeric forms of the given organic molecule involve specific configurations, such as geometric isomers, optical isomers, and meso compounds, characterized by asymmetric centers, chiral axes, and double bond geometries, leading to distinct physical properties and biological functions.",
                "The skeletal structure and bonding pattern of the provided organic compound are based on the carbon backbone, the arrangement of functional groups, and the hybridization states of carbon atoms, involving sp3, sp2, and sp hybridized carbons, forming single, double, and triple bonds with other atoms or groups.",
                "Characteristic substituent groups and side chains in the structure of the provided organic compound include alkyl groups, halogen substituents, alkoxyl groups, and functional moieties like esters, ethers, and amines, influencing the polarity, solubility, and chemical behavior of the molecule in various organic reactions and synthetic pathways."
            ];

            var randomIndex = Math.floor(Math.random() * structureQuestions.length);
            question = structureQuestions[randomIndex];
            answer = structureAnswers[randomIndex];
        } else if (selectedInput === "nomenclature") {
            var nomenclatureQuestions = [
                "What is the IUPAC name of the provided organic compound, and how is it derived based on the priority rules and functional group nomenclature?",
                "Discuss the common names and systematic names of the given organic compound, emphasizing the historical significance and traditional nomenclature used in chemical literature and research.",
                "Explain the principles of functional group nomenclature in organic chemistry, including the identification and classification of key functional groups, such as alkanes, alkenes, alkynes, and aromatic compounds, based on specific naming conventions and suffixes.",
                "Describe the rules and conventions for naming complex organic structures, such as cyclic compounds, fused ring systems, and polycyclic frameworks, considering the locants, prefixes, and substituent positions in the IUPAC nomenclature of organic molecules.",
                "What are the standard naming practices for organic compounds containing multiple functional groups, asymmetric centers, and stereoisomeric configurations, and how do they reflect the structural and stereochemical features of the molecule?"
            ];

            var nomenclatureAnswers = [
                "The IUPAC name of the provided organic compound follows the priority rules and nomenclature guidelines set by the International Union of Pure and Applied Chemistry, indicating the main functional groups, substituent positions, and structural features of the molecule in a systematic and unambiguous manner.",
                "Common names and systematic names of the given organic compound reflect the historical context and traditional nomenclature used in chemical literature, research publications, and educational materials, providing familiar terms and descriptors for specific organic structures and functional groups.",
                "Functional group nomenclature in organic chemistry involves the identification and classification of key functional groups, such as alkanes, alkenes, alkynes, and aromatic compounds, based on specific naming conventions, suffixes, and prefixes, facilitating the systematic naming and identification of organic molecules in chemical reactions and synthetic pathways.",
                "Rules and conventions for naming complex organic structures, such as cyclic compounds, fused ring systems, and polycyclic frameworks, consider the locants, prefixes, and substituent positions in the IUPAC nomenclature, ensuring the accurate and precise representation of structural elements and geometric configurations in organic molecules.",
                "Standard naming practices for organic compounds containing multiple functional groups, asymmetric centers, and stereoisomeric configurations emphasize the structural and stereochemical features of the molecule, providing detailed information about the spatial arrangements, molecular interactions, and biological activities of organic substances in pharmaceutical, biological, and environmental contexts."
            ];

            var randomIndex = Math.floor(Math.random() * nomenclatureQuestions.length);
            question = nomenclatureQuestions[randomIndex];
            answer = nomenclatureAnswers[randomIndex];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
