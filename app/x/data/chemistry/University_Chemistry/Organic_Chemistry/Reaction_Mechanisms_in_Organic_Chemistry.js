/*
Reaction Mechanisms in Organic Chemistry

Description:
This function generates questions related to reaction mechanisms in organic chemistry, covering the basic concepts of different types of reactions and reaction steps.

Inputs:
- reactionTypes (boolean): Determines if questions related to different types of reactions should be included.
- reactionSteps (boolean): Determines if questions related to reaction steps should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ReactionMechanismsInOrganicChemistry(true, false);
console.log(result); // Output: ['What is the type of the given organic reaction?', 'The type of the given organic reaction is ...']
*/

$X.chemistry.University_Chemistry.Organic_Chemistry.ReactionMechanismsInOrganicChemistry = function (reactionTypes, reactionSteps) {
    var question = "";
    var answer = "";

    if (reactionTypes || reactionSteps) {
        var selectedInputs = [];
        if (reactionTypes) selectedInputs.push("reactionTypes");
        if (reactionSteps) selectedInputs.push("reactionSteps");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "reactionTypes") {
            var reactionTypesQuestions = [
                "What are the major types of organic reactions, and how do they differ in terms of reaction mechanisms and product formation?",
                "Discuss the characteristics and applications of substitution reactions in organic synthesis and the modification of functional groups in organic compounds.",
                "Explain the principles behind addition reactions in organic chemistry and their role in the formation of new carbon-carbon and carbon-heteroatom bonds.",
                "Discuss the mechanisms of elimination reactions and their significance in the preparation of alkenes, alkynes, and other unsaturated organic compounds.",
                "What are the key features of oxidation and reduction reactions in organic chemistry, and how do they contribute to the functionalization and structural modification of organic molecules?",
                "Explain the mechanisms of radical reactions and their applications in polymerization, free radical halogenation, and other chain reactions in organic synthesis.",
                "Discuss the principles behind pericyclic reactions, such as cycloaddition, electrocyclic reactions, and sigmatropic rearrangements, and their role in the synthesis of cyclic organic compounds.",
                "What are the characteristics of rearrangement reactions in organic chemistry, and how do they contribute to the structural isomerization and stereochemical transformations of organic molecules?",
                "Explain the principles behind coupling reactions, cross-coupling reactions, and other transition metal-catalyzed reactions in organic synthesis and their applications in the construction of complex organic molecules.",
                "Discuss the mechanisms of name reactions in organic chemistry and their historical significance in the development of key synthetic methods and strategies in organic synthesis."
            ];

            var reactionTypesAnswers = [
                "Major types of organic reactions include substitution reactions, addition reactions, elimination reactions, oxidation-reduction reactions, radical reactions, pericyclic reactions, rearrangement reactions, coupling reactions, and name reactions, each characterized by specific reaction mechanisms and the formation of distinct products with unique functional groups and structural motifs.",
                "Substitution reactions involve the replacement of one functional group with another in an organic compound, contributing to the synthesis of new compounds and the functionalization of specific carbon centers through processes such as nucleophilic substitution, electrophilic substitution, and radical substitution.",
                "Addition reactions in organic chemistry encompass the addition of chemical species, such as electrophiles or nucleophiles, to multiple bonds, leading to the formation of saturated organic compounds and the creation of new carbon-carbon and carbon-heteroatom bonds through processes like electrophilic addition, nucleophilic addition, and radical addition.",
                "Elimination reactions involve the removal of functional groups or atoms from organic compounds, resulting in the formation of pi bonds and the generation of unsaturated products, such as alkenes, alkynes, and conjugated systems, through mechanisms like E1, E2, and E1cb reactions.",
                "Oxidation and reduction reactions in organic chemistry involve the transfer of electrons between reactants, leading to the functionalization of organic molecules, the modification of oxidation states, and the interconversion of functional groups through processes such as oxidation, reduction, dehydrogenation, and hydrogenation.",
                "Radical reactions in organic chemistry proceed through radical intermediates, initiating chain reactions, polymerization processes, and radical substitution reactions, contributing to the synthesis of polymers, the halogenation of organic compounds, and the modification of chemical structures through radical chain mechanisms.",
                "Pericyclic reactions in organic chemistry involve the concerted rearrangement of pi-electron systems, leading to the formation of cyclic structures, the interconversion of geometric isomers, and the creation of new bonds in multi-step processes, such as cycloaddition, electrocyclic reactions, and sigmatropic rearrangements.",
                "Rearrangement reactions in organic chemistry encompass the isomerization of organic compounds, the migration of functional groups, and the stereochemical transformations of molecular configurations, contributing to the formation of stable products and the generation of structurally diverse compounds through complex reaction pathways.",
                "Coupling reactions and cross-coupling reactions in organic synthesis utilize transition metal catalysts, such as palladium, nickel, or copper complexes, to facilitate the formation of new carbon-carbon bonds, the construction of complex molecular frameworks, and the synthesis of natural products and pharmaceuticals through catalytic and stoichiometric pathways.",
                "Name reactions in organic chemistry represent key synthetic methods and strategies, such as the Grignard reaction, the Wittig reaction, and the Diels-Alder reaction, playing pivotal roles in the development of organic synthesis, the advancement of chemical research, and the discovery of novel chemical transformations and synthetic routes."
            ];

            var randomIndex = Math.floor(Math.random() * reactionTypesQuestions.length);
            question = reactionTypesQuestions[randomIndex];
            answer = reactionTypesAnswers[randomIndex];
        } else if (selectedInput === "reactionSteps") {
            var reactionStepsQuestions = [
                "What are the key steps involved in the mechanism of nucleophilic substitution reactions in organic chemistry?",
                "Explain the reaction mechanisms of electrophilic addition reactions and the sequence of steps leading to the formation of addition products in organic compounds.",
                "Discuss the stepwise mechanisms of elimination reactions, including E1, E2, and E1cb processes, and the role of leaving groups in the formation of alkenes and alkynes.",
                "Explain the mechanisms of oxidation and reduction reactions, highlighting the role of oxidizing and reducing agents and the steps involved in the transfer of electrons in organic molecules.",
                "Discuss the radical chain mechanisms involved in free radical halogenation reactions, the propagation steps in radical polymerization, and the termination steps in radical chain reactions.",
                "Explain the concerted mechanisms of pericyclic reactions, such as cycloaddition, sigmatropic rearrangements, and electrocyclic reactions, emphasizing the role of symmetry and orbital interactions in the formation of cyclic products.",
                "Discuss the steps involved in the rearrangement of organic compounds, including hydride shifts, alkyl shifts, and ring expansion or contraction, in the context of specific rearrangement reactions and their synthetic applications.",
                "Explain the catalytic cycles of transition metal-catalyzed coupling reactions and cross-coupling reactions, highlighting the oxidative addition, transmetallation, and reductive elimination steps in the formation of carbon-carbon bonds.",
                "Discuss the reaction mechanisms of specific name reactions, such as the Grignard reaction, the Wittig reaction, and the Diels-Alder reaction, emphasizing the key steps, intermediates, and functional group transformations involved in these synthetic methods."
            ];

            var reactionStepsAnswers = [
                "Nucleophilic substitution reactions involve key steps such as nucleophilic attack, leaving group departure, and the formation of substitution products, proceeding through mechanisms like SN1 and SN2 reactions, depending on the nature of the substrate, the leaving group, and the reaction conditions.",
                "Electrophilic addition reactions proceed through steps such as electrophile formation, pi bond attack, and carbocation stabilization, leading to the formation of addition products, such as alcohols, halides, or amines, through processes like hydration, halogenation, and hydroamination.",
                "Elimination reactions proceed through multiple steps, including proton abstraction, leaving group departure, and pi bond formation, resulting in the generation of alkenes or alkynes, and the formation of conjugated systems, with mechanisms like E1, E2, and E1cb pathways depending on the nature of the substrate and the leaving group.",
                "Oxidation and reduction reactions involve steps such as electron transfer, radical formation, and functional group conversion, leading to the formation of oxidation or reduction products, such as aldehydes, ketones, or alcohols, through processes like hydroxylation, dehydrogenation, and hydrogenation.",
                "Radical chain reactions proceed through initiation, propagation, and termination steps, involving the generation of radical species, the propagation of radical chains, and the termination of radical intermediates, contributing to the formation of halogenated products, polymer chains, and stable organic compounds through radical chain mechanisms.",
                "Pericyclic reactions proceed through concerted rearrangements, involving cyclic transition states, orbital interactions, and symmetry elements, leading to the formation of cycloaddition products, rearranged systems, or stereoisomeric products in complex reaction networks and multistep mechanisms.",
                "Rearrangement reactions involve stepwise transformations, such as hydride shifts, alkyl shifts, or ring expansions, leading to the isomerization of organic compounds and the formation of stable products or intermediates with modified functional groups and altered molecular configurations.",
                "Transition metal-catalyzed reactions proceed through catalytic cycles, involving oxidative addition, transmetallation, and reductive elimination steps, facilitating the formation of new carbon-carbon bonds, the construction of complex molecular frameworks, and the synthesis of natural products and pharmaceuticals through catalytic and stoichiometric processes.",
                "Name reactions proceed through specific pathways, involving key steps such as nucleophilic addition, carbocation rearrangement, or cycloaddition, leading to the formation of characteristic products, functional groups, or stereoisomeric configurations in classic synthetic methods and strategic organic transformations."
            ];

            var randomIndex = Math.floor(Math.random() * reactionStepsQuestions.length);
            question = reactionStepsQuestions[randomIndex];
            answer = reactionStepsAnswers[randomIndex];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
