/*
Nuclear Reactions and Nuclear Energy

Description:
This function generates questions related to nuclear reactions and nuclear energy, covering topics such as the principles, types, and applications of nuclear reactions in various fields, including nuclear physics, energy production, and environmental science.

Inputs:
- reactionPrinciples (boolean): Determines if questions related to the principles of nuclear reactions should be included.
- reactionTypes (boolean): Determines if questions related to the types of nuclear reactions should be included.
- energyApplications (boolean): Determines if questions related to the applications of nuclear energy should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = NuclearReactionsAndNuclearEnergy(true, false, true);
console.log(result); // Output: ['What are the fundamental principles underlying nuclear reactions?', 'The fundamental principles underlying nuclear reactions include...']
*/

$X.chemistry.University_Chemistry.Nuclear_Chemistry.NuclearReactionsAndNuclearEnergy = function (reactionPrinciples, reactionTypes, energyApplications) {
    var question = "";
    var answer = "";

    if (reactionPrinciples || reactionTypes || energyApplications) {
        var selectedInputs = [];
        if (reactionPrinciples) selectedInputs.push("reactionPrinciples");
        if (reactionTypes) selectedInputs.push("reactionTypes");
        if (energyApplications) selectedInputs.push("energyApplications");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "reactionPrinciples") {
            var reactionPrinciplesQuestions = [
                "What are the fundamental principles underlying nuclear reactions?",
                "Explain the concept of nuclear stability and its influence on radioactive decay.",
                "Discuss the role of nuclear forces in maintaining the stability of atomic nuclei.",
                "How do nuclear reactions differ from chemical reactions in terms of energy changes and reaction mechanisms?",
                "Explain the processes involved in fission and fusion reactions and their implications in energy production.",
                "Discuss the concept of half-life and its significance in understanding radioactive decay and nuclear processes.",
                "Explain the principles behind nuclear transmutation and its applications in nuclear medicine and material science.",
                "Discuss the factors influencing the rate of radioactive decay and the methods used for measuring radioactive decay rates.",
                "What are the safety measures and regulations involved in handling nuclear materials and radioactive substances?",
                "Explain the concept of nuclear cross-section and its role in predicting the probability of nuclear reactions."
            ];

            var reactionPrinciplesAnswers = [
                "The fundamental principles underlying nuclear reactions include the conservation of mass-energy, the principles of radioactive decay, and the interactions between subatomic particles, such as protons, neutrons, and electrons.",
                "Nuclear stability refers to the balance between the strong nuclear force and the electrostatic repulsion between protons, influencing the rates of alpha decay, beta decay, and gamma decay in radioactive elements.",
                "Nuclear forces, such as the strong force and weak force, play crucial roles in binding nucleons together in the nucleus, contributing to the stability of atomic nuclei and the occurrence of nuclear reactions.",
                "Nuclear reactions involve changes in the nucleus and result in significant energy changes, often involving the release of large amounts of energy due to the conversion of mass into energy, in contrast to the relatively small energy changes in chemical reactions.",
                "Fission reactions involve the splitting of heavy atomic nuclei into lighter nuclei, leading to the release of energy, whereas fusion reactions involve the merging of light atomic nuclei into heavier nuclei, resulting in the production of vast amounts of energy and the formation of new elements.",
                "Half-life represents the time required for half of the radioactive nuclei in a sample to undergo radioactive decay, serving as a measure of the rate of decay and the stability of radioactive isotopes in various applications and processes.",
                "Nuclear transmutation involves the conversion of one chemical element into another through nuclear reactions, finding applications in the synthesis of new isotopes, the production of radioactive tracers, and the modification of material properties for specific purposes.",
                "Factors influencing the rate of radioactive decay include temperature, pressure, external radiation, and the presence of other radioactive substances, with decay rates measured using techniques such as gamma spectroscopy, scintillation counting, and Geiger-Müller counters.",
                "Safety measures and regulations in handling nuclear materials and radioactive substances include the use of protective equipment, radiation shielding, contamination control, and adherence to established protocols and guidelines to minimize the risks of radiation exposure and contamination.",
                "Nuclear cross-section represents the effective area for nuclear interactions to occur, influencing the probability of nuclear reactions and providing insights into the behavior of particles in nuclear processes, such as scattering, absorption, and fission."
            ];

            var randomIndex = Math.floor(Math.random() * reactionPrinciplesQuestions.length);
            question = reactionPrinciplesQuestions[randomIndex];
            answer = reactionPrinciplesAnswers[randomIndex];
        } else if (selectedInput === "reactionTypes") {
            var reactionTypesQuestions = [
                "What are the main types of nuclear reactions, and how do they differ in terms of particle interactions and energy release?",
                "Explain the characteristics and applications of nuclear fusion reactions in energy production and astrophysical phenomena.",
                "Discuss the processes involved in nuclear fission reactions and their applications in nuclear power generation and the production of nuclear fuels.",
                "How do nuclear reactions contribute to the synthesis of heavy elements and the formation of stable isotopes in stellar nucleosynthesis?",
                "Explain the principles behind nuclear reactions in particle accelerators and their use in fundamental research and the study of subatomic particles.",
                "Discuss the role of nuclear reactions in the generation of nuclear waste and the challenges associated with radioactive waste management and disposal.",
                "Explain the mechanisms involved in nuclear decay chains and the series of radioactive decays leading to the formation of stable nuclides.",
                "Discuss the differences between natural and artificial nuclear reactions and their implications in nuclear technology and research.",
                "What are the processes involved in neutron capture reactions and their applications in the production of isotopes and the treatment of certain medical conditions?",
                "Explain the concepts of nuclear cross-section and reaction rates and their significance in predicting the outcomes of nuclear reactions."
            ];

            var reactionTypesAnswers = [
                "The main types of nuclear reactions include fission reactions, fusion reactions, radioactive decay, nuclear transmutation, and particle interactions, each characterized by specific particle interactions and the release of energy in the form of gamma radiation, kinetic energy, and mass-energy conversion.",
                "Nuclear fusion reactions involve the combination of light atomic nuclei to form heavier nuclei, producing vast amounts of energy and serving as the primary energy source in stars, such as the Sun, and in experimental fusion reactors aimed at achieving controlled energy production.",
                "Nuclear fission reactions encompass the splitting of heavy atomic nuclei into lighter fragments, releasing energy in the form of kinetic energy, gamma radiation, and additional neutrons, utilized in nuclear power plants for electricity generation and in nuclear weapons for explosive energy.",
                "Nuclear reactions contribute to the synthesis of heavy elements through processes such as nucleosynthesis, supernova explosions, and neutron capture, leading to the formation of stable isotopes and the production of elements beyond iron in the periodic table.",
                "Nuclear reactions in particle accelerators involve the collision of subatomic particles at high energies, leading to the production of new particles, the study of fundamental forces and interactions, and the exploration of the fundamental building blocks of matter and the universe.",
                "Nuclear reactions in the generation of nuclear waste occur through processes such as the decay of radioactive isotopes, the emission of alpha, beta, and gamma radiation, and the production of transuranic elements, posing significant challenges in the management, storage, and disposal of long-lived radioactive waste.",
                "Nuclear decay chains comprise a series of radioactive decays, including alpha decay, beta decay, and gamma decay, leading to the eventual formation of stable nuclides, contributing to the stability of isotopes and the maintenance of radioactive equilibrium in natural and artificial decay processes.",
                "Natural nuclear reactions occur spontaneously in nature, such as the decay of radioactive isotopes and the fusion reactions in stars, whereas artificial nuclear reactions are deliberately induced in laboratories and nuclear facilities for scientific research, medical applications, and the production of isotopes and nuclear materials.",
                "Neutron capture reactions involve the absorption of neutrons by atomic nuclei, leading to the formation of isotopes, the production of radioactive substances, and the initiation of nuclear chain reactions, finding applications in the synthesis of radioisotopes and the treatment of tumors in neutron capture therapy.",
                "Nuclear cross-section and reaction rates provide insights into the probability of nuclear interactions, the likelihood of particle collisions, and the rates of nuclear reactions, essential for predicting the outcomes of nuclear processes, optimizing reaction conditions, and ensuring the safety and efficiency of nuclear applications."
            ];

            var randomIndex = Math.floor(Math.random() * reactionTypesQuestions.length);
            question = reactionTypesQuestions[randomIndex];
            answer = reactionTypesAnswers[randomIndex];
        } else if (selectedInput === "energyApplications") {
            var energyApplicationsQuestions = [
                "What are the main applications of nuclear energy in electricity generation, industrial processes, and space exploration?",
                "Discuss the advantages and disadvantages of nuclear power plants in comparison to conventional fossil fuel-based power plants.",
                "Explain the principles behind nuclear fusion and its potential as a future energy source for addressing global energy demands and reducing reliance on fossil fuels.",
                "Discuss the safety measures and regulations involved in the operation and management of nuclear reactors and the handling of nuclear fuels and waste.",
                "Explain the role of nuclear energy in the production of medical isotopes for diagnostic imaging, cancer treatment, and therapeutic applications in nuclear medicine.",
                "Discuss the environmental impacts of nuclear energy production, including the risks of radioactive contamination, the management of nuclear waste, and the challenges in decommissioning nuclear facilities.",
                "What are the emerging trends and advancements in nuclear energy technology, such as fourth-generation nuclear reactors, fusion reactors, and advanced fuel cycle processes?",
                "Explain the principles behind nuclear propulsion systems and their use in spacecraft propulsion, interplanetary exploration, and deep-space missions.",
                "Discuss the ethical considerations and public perception surrounding the use of nuclear energy, the risks of nuclear accidents, and the global efforts to promote nuclear safety and non-proliferation initiatives.",
                "Explain the role of nuclear energy in addressing climate change, reducing carbon emissions, and achieving sustainable development goals through the integration of nuclear power in energy transition strategies and clean energy initiatives."
            ];

            var energyApplicationsAnswers = [
                "Nuclear energy finds applications in electricity generation, industrial processes, and space exploration, providing a reliable and efficient source of power, heat, and propulsion for various terrestrial and extraterrestrial applications.",
                "Nuclear power plants offer advantages such as high energy output, low carbon emissions, and long-term fuel availability, but face challenges related to radioactive waste disposal, safety concerns, and the risks of nuclear accidents, compared to conventional fossil fuel-based power plants.",
                "Nuclear fusion represents a promising energy source for the future, offering abundant fuel resources, minimal environmental impact, and the potential for sustainable energy production, though current technological limitations and scientific challenges hinder the commercial viability of fusion power generation.",
                "Safety measures and regulations in nuclear reactor operation and nuclear waste management encompass strict protocols for radiation protection, reactor cooling systems, emergency preparedness, and the secure handling, transport, and storage of nuclear fuels and radioactive waste materials.",
                "Nuclear energy plays a critical role in the production of medical isotopes, including technetium-99m, iodine-131, and cobalt-60, used in diagnostic imaging, cancer therapy, and medical research, contributing to advancements in disease diagnosis, treatment, and patient care in the field of nuclear medicine.",
                "The environmental impacts of nuclear energy production involve risks such as radioactive contamination, the generation of long-lived nuclear waste, and the challenges of decommissioning nuclear facilities, requiring stringent regulations, waste management strategies, and public engagement in addressing nuclear-related environmental concerns.",
                "Emerging trends in nuclear energy technology include the development of fourth-generation nuclear reactors, advanced fuel cycle processes, and innovative reactor designs aimed at enhancing safety, improving efficiency, and minimizing the production of nuclear waste in future nuclear energy systems.",
                "Nuclear propulsion systems utilize principles such as nuclear thermal propulsion and nuclear electric propulsion for spacecraft propulsion, interplanetary exploration, and deep-space missions, offering higher thrust levels, increased mission endurance, and enhanced propulsion efficiency for space missions and exploration endeavors.",
                "Ethical considerations and public perception regarding nuclear energy focus on issues such as nuclear safety, the risks of nuclear accidents, and the proliferation of nuclear weapons, prompting global efforts to strengthen nuclear safety measures, promote non-proliferation initiatives, and ensure the peaceful use of nuclear energy for the benefit of humanity.",
                "Nuclear energy contributes to addressing climate change and reducing carbon emissions by providing a low-carbon energy source, supporting sustainable development goals, and facilitating the integration of nuclear power in clean energy initiatives and global energy transition strategies for a more sustainable and environmentally friendly energy future."
            ];

            var randomIndex = Math.floor(Math.random() * energyApplicationsQuestions.length);
            question = energyApplicationsQuestions[randomIndex];
            answer = energyApplicationsAnswers[randomIndex];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
