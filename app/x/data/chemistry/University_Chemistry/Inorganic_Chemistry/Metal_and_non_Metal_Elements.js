/*
Metal and Non-Metal Elements

Description:
This function generates questions related to the properties and characteristics of metal and non-metal elements, covering the basic concepts of chemical elements, their properties, and behaviors.

Inputs:
- metalProperties (boolean): Determines if questions related to metal properties should be included.
- nonMetalProperties (boolean): Determines if questions related to non-metal properties should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = MetalAndNonMetalElements(true, false);
console.log(result); // Output: ['What are the distinguishing properties of metals?', 'The distinguishing properties of metals include ...']
*/

$X.chemistry.University_Chemistry.Inorganic_Chemistry.MetalAndNonMetalElements = function (metalProperties, nonMetalProperties) {
    var question = "";
    var answer = "";

    if (metalProperties || nonMetalProperties) {
        var selectedInputs = [];
        if (metalProperties) selectedInputs.push("metalProperties");
        if (nonMetalProperties) selectedInputs.push("nonMetalProperties");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "metalProperties") {
            var metalPropertiesQuestions = [
                "What are the distinguishing properties of metals?",
                "Explain the concepts of malleability and ductility in metal properties.",
                "How do metals conduct electricity and heat?",
                "What are the typical chemical reactions exhibited by metals?",
                "Explain the role of transition metals in catalysis and industrial applications.",
                "How are metal alloys formed and what are their applications?",
                "Discuss the importance of corrosion prevention in metal applications.",
                "What are the characteristics of alkali metals and alkaline earth metals?",
                "Explain the role of metals in biological systems and their importance in living organisms.",
                "What are the uses of noble metals and their unique properties?"
            ];

            var metalPropertiesAnswers = [
                "The distinguishing properties of metals include high electrical and thermal conductivity, luster, malleability, ductility, and the tendency to form positive ions.",
                "Malleability refers to the ability of metals to be hammered or pressed into thin sheets, whereas ductility refers to their capacity to be drawn into wires without breaking.",
                "Metals conduct electricity and heat due to the presence of delocalized electrons that can move freely within the metal structure.",
                "Metals typically undergo reactions such as oxidation, reduction, displacement, and complex formation, leading to the formation of metal oxides, salts, and coordination compounds.",
                "Transition metals play a crucial role in catalysis due to their ability to adopt multiple oxidation states and form complex structures, finding applications in industrial processes and chemical synthesis.",
                "Metal alloys are formed by combining two or more metallic elements to enhance specific properties, such as strength, durability, and resistance to corrosion, with applications in engineering, construction, and manufacturing.",
                "Corrosion prevention in metal applications is essential to protect metals from degradation and structural damage, often achieved through the use of protective coatings, surface treatments, and sacrificial anodes.",
                "Alkali metals and alkaline earth metals are characterized by their reactivity, ability to form ionic compounds, and the tendency to lose electrons to form cations, exhibiting diverse applications in chemical synthesis and industrial processes.",
                "Metals play vital roles in biological systems, serving as cofactors in enzymes, participating in electron transfer processes, and contributing to the structure and function of biomolecules, such as hemoglobin and chlorophyll.",
                "Noble metals, such as gold, silver, and platinum, are known for their resistance to oxidation and corrosion, making them valuable in jewelry, electronics, and industrial applications where durability and stability are crucial."
            ];

            var randomIndex = Math.floor(Math.random() * metalPropertiesQuestions.length);
            question = metalPropertiesQuestions[randomIndex];
            answer = metalPropertiesAnswers[randomIndex];
        } else if (selectedInput === "nonMetalProperties") {
            var nonMetalPropertiesQuestions = [
                "What are the key properties that distinguish non-metals from metals?",
                "Explain the concept of electronegativity and its role in non-metal properties.",
                "How do non-metals participate in covalent bonding and molecular formation?",
                "Discuss the typical chemical reactions exhibited by non-metal elements.",
                "Explain the role of non-metals in environmental processes and biological systems.",
                "What are the applications of non-metal elements in various industries?",
                "Discuss the properties and uses of halogens in chemical processes and industrial applications.",
                "Explain the characteristics of noble gases and their applications in different fields.",
                "What are the properties and uses of metalloids in materials science and technology?",
                "Discuss the significance of non-metal elements in the production of polymers and organic compounds."
            ];

            var nonMetalPropertiesAnswers = [
                "Key properties that distinguish non-metals from metals include low electrical conductivity, brittle solid or gaseous state, and the tendency to form negative ions.",
                "Electronegativity is the measure of an atom's ability to attract and share electrons in a chemical bond, with non-metals typically exhibiting higher electronegativity values compared to metals.",
                "Non-metals participate in covalent bonding and molecular formation by sharing electrons with other non-metal or metal atoms, resulting in the formation of stable molecular structures and compounds.",
                "Non-metal elements undergo reactions such as oxidation, reduction, and combination with metals or other non-metals, forming covalent compounds, acids, and non-metal oxides.",
                "Non-metals play significant roles in environmental processes, such as the carbon cycle and nitrogen fixation, and in biological systems, contributing to the structure and function of biomolecules, cellular processes, and physiological functions.",
                "Non-metal elements find applications in various industries, such as the production of fertilizers, pharmaceuticals, polymers, and electronic components, due to their diverse chemical properties and reactivity.",
                "Halogens exhibit properties such as high reactivity, diatomic molecular structures, and the ability to form salts and acids, finding applications in disinfectants, bleaching agents, and organic synthesis.",
                "Noble gases are characterized by their inertness, low reactivity, and stable electron configurations, making them suitable for use in lighting, welding, and cryogenics, as well as in research and analytical techniques.",
                "Metalloids possess properties that are intermediate between metals and non-metals, allowing for the tuning of electrical conductivity, thermal stability, and optical properties in materials science and technology.",
                "Non-metal elements are vital in the production of polymers and organic compounds, serving as building blocks for the synthesis of plastics, fibers, adhesives, and pharmaceuticals, among other organic products."
            ];

            var randomIndex = Math.floor(Math.random() * nonMetalPropertiesQuestions.length);
            question = nonMetalPropertiesQuestions[randomIndex];
            answer = nonMetalPropertiesAnswers[randomIndex];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
