/*
Radioactive Decay Processes

Description:
This function generates questions related to radioactive decay processes, covering topics such as the principles, types, and applications of radioactive decay in various fields, including nuclear physics, medicine, and environmental science.

Inputs:
- decayPrinciples (boolean): Determines if questions related to the principles of radioactive decay should be included.
- decayTypes (boolean): Determines if questions related to the types of radioactive decay should be included.
- decayApplications (boolean): Determines if questions related to the applications of radioactive decay should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = RadioactiveDecayProcesses(true, false, true);
console.log(result); // Output: ['What are the main principles governing radioactive decay?', 'The main principles governing radioactive decay include...']
*/

$X.chemistry.University_Chemistry.Nuclear_Chemistry.RadioactiveDecayProcesses = function (decayPrinciples, decayTypes, decayApplications) {
    var question = "";
    var answer = "";

    if (decayPrinciples || decayTypes || decayApplications) {
        var selectedInputs = [];
        if (decayPrinciples) selectedInputs.push("decayPrinciples");
        if (decayTypes) selectedInputs.push("decayTypes");
        if (decayApplications) selectedInputs.push("decayApplications");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "decayPrinciples") {
            var decayPrinciplesQuestions = [
                "What are the main principles governing radioactive decay?",
                "Explain the concept of half-life and its significance in the study of radioactive decay and the behavior of radioactive isotopes.",
                "Discuss the role of decay modes, such as alpha decay, beta decay, and gamma decay, in the process of radioactive decay and the transformation of unstable nuclei into stable isotopes.",
                "How do the principles of radioactive decay contribute to the determination of the age of rocks, fossils, and archaeological artifacts in geochronology and archaeological dating techniques?",
                "Explain the factors influencing the rate of radioactive decay and the methods used for measuring radioactive decay rates in laboratory settings and environmental studies.",
                "Discuss the significance of radioactive decay in the production of radioisotopes for medical imaging, cancer therapy, and diagnostic applications in nuclear medicine and radiopharmaceutical research.",
                "Explain the relationship between radioactive decay and the formation of radioactive elements in natural and artificial decay processes, as well as the implications for the stability of nuclear reactors and the management of radioactive waste.",
                "Discuss the principles behind nuclear transmutation and the use of particle accelerators in the synthesis of new isotopes and the production of radioactive substances for scientific research and industrial applications.",
                "What are the safety measures and regulations involved in handling radioactive materials and the disposal of radioactive waste in nuclear facilities and research laboratories?",
                "Explain the concept of radiation dose and its implications for human health, environmental safety, and the assessment of radiation risks in radiation protection and nuclear safety."
            ];

            var decayPrinciplesAnswers = [
                "The main principles governing radioactive decay encompass the concepts of half-life, decay modes, decay rates, and the transformation of unstable nuclei into stable isotopes through the emission of alpha particles, beta particles, and gamma radiation.",
                "Half-life represents the time required for half of the radioactive nuclei in a sample to undergo radioactive decay, serving as a measure of the rate of decay and the stability of radioactive isotopes in various applications and processes.",
                "Decay modes, including alpha decay, beta decay, and gamma decay, play essential roles in the decay process, involving the emission of alpha particles (helium nuclei), beta particles (electrons or positrons), and gamma radiation (high-energy photons) from the nucleus.",
                "The principles of radioactive decay contribute to the determination of the age of rocks, fossils, and archaeological artifacts by analyzing the decay of radioactive isotopes, such as carbon-14 and uranium-lead isotopes, and their decay products, used in radiometric dating techniques and geochronology methods.",
                "Factors influencing the rate of radioactive decay include the nature of the radioactive isotope, temperature, pressure, and external radiation, with decay rates measured using techniques such as Geiger-Müller counters, scintillation detectors, and gamma spectroscopy in laboratory settings and environmental studies.",
                "Radioactive decay plays a significant role in the production of radioisotopes for medical imaging, cancer therapy, and diagnostic applications in nuclear medicine, providing valuable tools for disease diagnosis, treatment, and research in various fields, including radiopharmaceuticals and nuclear imaging technologies.",
                "Radioactive decay contributes to the formation of radioactive elements through natural and artificial decay processes, influencing the stability of nuclear reactors, the management of radioactive waste, and the production of transuranic elements for scientific research, industrial applications, and energy generation.",
                "Nuclear transmutation involves the conversion of one chemical element into another through nuclear reactions, utilizing particle accelerators, such as cyclotrons and linear accelerators, for the synthesis of new isotopes and the production of radioactive substances in nuclear physics and material science.",
                "Safety measures and regulations in handling radioactive materials and the disposal of radioactive waste involve strict protocols for radiation protection, contamination control, waste management, and environmental monitoring in nuclear facilities, research laboratories, and medical institutions.",
                "Radiation dose represents the amount of energy absorbed from ionizing radiation by the body or a specific target, serving as a measure of the potential health effects, radiation risks, and safety standards in radiation protection, nuclear safety, and occupational safety and health."
            ];

            var randomIndex = Math.floor(Math.random() * decayPrinciplesQuestions.length);
            question = decayPrinciplesQuestions[randomIndex];
            answer = decayPrinciplesAnswers[randomIndex];
        } else if (selectedInput === "decayTypes") {
            var decayTypesQuestions = [
                "What are the main types of radioactive decay, and how do they differ in terms of particle emissions and energy release?",
                "Explain the processes involved in alpha decay, including the emission of alpha particles and the conversion of parent isotopes into daughter isotopes in radioactive decay chains.",
                "Discuss the principles behind beta decay and the different types of beta particles, such as beta-minus particles (electrons) and beta-plus particles (positrons), emitted during the radioactive decay of unstable nuclei.",
                "What is gamma decay, and how does it contribute to the stabilization of excited nuclei through the emission of high-energy gamma rays and the transition to lower energy states?",
                "Explain the concept of positron emission and electron capture in radioactive decay, involving the conversion of protons into neutrons and the formation of new elements in nuclear reactions and decay processes.",
                "Discuss the phenomenon of internal conversion and its implications for the de-excitation of excited nuclei, the emission of characteristic X-rays, and the electron transitions in atomic energy levels during radioactive decay events.",
                "Explain the process of spontaneous fission and the splitting of heavy nuclei into lighter nuclei, accompanied by the release of neutrons, gamma radiation, and significant amounts of energy in nuclear fission reactions.",
                "Discuss the principles behind cluster decay and the emission of atomic clusters, such as helium nuclei, carbon nuclei, and other light particles, in the decay of heavy and superheavy nuclei, leading to the formation of new isotopes and the synthesis of transuranic elements.",
                "What are the characteristics of double beta decay and double electron capture in the decay of unstable isotopes, and how do these processes contribute to the determination of the neutrino properties and the violation of lepton number conservation in particle physics?"
            ];

            var decayTypesAnswers = [
                "The main types of radioactive decay include alpha decay, beta decay, gamma decay, positron emission, electron capture, internal conversion, spontaneous fission, cluster decay, double beta decay, and double electron capture, each involving different particle emissions and energy release in the decay of unstable nuclei.",
                "Alpha decay is a process in which a parent nucleus emits an alpha particle (helium-4 nucleus) and transforms into a daughter nucleus with a lower atomic number and mass number, contributing to the formation of radioactive decay chains and the production of stable nuclides.",
                "Beta decay involves the conversion of neutrons into protons (beta-minus decay) or protons into neutrons (beta-plus decay), resulting in the emission of beta particles (electrons or positrons) from the nucleus and the transformation of unstable isotopes into more stable configurations.",
                "Gamma decay refers to the emission of high-energy gamma rays from excited nuclei undergoing de-excitation processes, leading to the stabilization of nuclear energy states and the transition to lower energy levels through the release of electromagnetic radiation in the form of gamma photons.",
                "Positron emission involves the conversion of a proton into a neutron and the emission of a positron from the nucleus, while electron capture occurs when an inner orbital electron is captured by the nucleus, leading to the formation of new elements and the conservation of charge and mass numbers in nuclear reactions and decay processes.",
                "Internal conversion occurs when an excited nucleus transfers its energy to an atomic electron, resulting in the emission of characteristic X-rays, the ejection of electrons, and the de-excitation of the nucleus to a lower energy state without the emission of gamma radiation, contributing to the energy transfer and electron transitions in the decay process.",
                "Spontaneous fission is a nuclear decay process in which heavy nuclei split into lighter nuclei, accompanied by the release of neutrons, gamma radiation, and significant amounts of energy, leading to the production of fission products, the generation of nuclear chain reactions, and the release of nuclear explosion energy.",
                "Cluster decay involves the emission of atomic clusters, such as helium nuclei, carbon nuclei, and other light particles, from the decay of heavy and superheavy nuclei, contributing to the synthesis of transuranic elements, the formation of new isotopes, and the study of nuclear stability and the limits of nuclear binding energies.",
                "Double beta decay and double electron capture are rare decay processes in which two beta decays or electron captures occur simultaneously, leading to the transformation of unstable isotopes into more stable configurations and providing insights into the properties of neutrinos, the violation of lepton number conservation, and the neutrinoless double beta decay hypothesis in particle physics."
            ];

            var randomIndex = Math.floor(Math.random() * decayTypesQuestions.length);
            question = decayTypesQuestions[randomIndex];
            answer = decayTypesAnswers[randomIndex];
        } else if (selectedInput === "decayApplications") {
            var decayApplicationsQuestions = [
                "What are the main applications of radioactive decay in nuclear medicine, radiography, and cancer therapy?",
                "Discuss the role of radioactive isotopes in environmental monitoring, geological dating, and the study of natural radioactivity in earth sciences and environmental science.",
                "Explain the applications of radioisotopes in industrial processes, material analysis, and quality control, including their use as tracers, radiotracers, and radio-labeled compounds in various applications and industries.",
                "What are the implications of radioactive decay in the fields of archaeology, paleontology, and forensic science for dating ancient artifacts, fossils, and human remains based on radiometric dating techniques and isotopic analysis?",
                "Discuss the significance of radioactive decay in the detection and measurement of radiation, the calibration of radiation detectors, and the assessment of radiation exposure in radiation dosimetry and radiation protection practices.",
                "Explain the applications of artificial radioactivity and neutron activation analysis in scientific research, nuclear physics experiments, and the production of radioisotopes for medical and industrial purposes.",
                "Discuss the role of radioactive decay in the exploration of space, the study of cosmic radiation, and the detection of extraterrestrial radioactivity in astrophysics, space science, and planetary exploration missions.",
                "Explain the use of radioisotope thermoelectric generators (RTGs) and nuclear batteries in remote power systems, deep-space missions, and unmanned spacecraft for the generation of electrical power and energy.",
                "Discuss the implications of radioactive decay in the nuclear fuel cycle, the management of nuclear waste, and the development of advanced nuclear reactor technologies for sustainable energy production and nuclear energy applications.",
                "What are the emerging trends and advancements in the use of radioactive decay for fundamental research, technological innovations, and interdisciplinary applications in the fields of physics, chemistry, biology, and engineering?"
            ];
            var decayApplicationsAnswers = [
                "The main principles governing radioactive decay encompass the concepts of half-life, decay modes, decay rates, and the transformation of unstable nuclei into stable isotopes through the emission of alpha particles, beta particles, and gamma radiation.",
                "Half-life represents the time required for half of the radioactive nuclei in a sample to undergo radioactive decay, serving as a measure of the rate of decay and the stability of radioactive isotopes in various applications and processes.",
                "Decay modes, including alpha decay, beta decay, and gamma decay, play essential roles in the decay process, involving the emission of alpha particles (helium nuclei), beta particles (electrons or positrons), and gamma radiation (high-energy photons) from the nucleus.",
                "The principles of radioactive decay contribute to the determination of the age of rocks, fossils, and archaeological artifacts by analyzing the decay of radioactive isotopes, such as carbon-14 and uranium-lead isotopes, and their decay products, used in radiometric dating techniques and geochronology methods.",
                "Factors influencing the rate of radioactive decay include the nature of the radioactive isotope, temperature, pressure, and external radiation, with decay rates measured using techniques such as Geiger-Müller counters, scintillation detectors, and gamma spectroscopy in laboratory settings and environmental studies.",
                "Radioactive decay plays a significant role in the production of radioisotopes for medical imaging, cancer therapy, and diagnostic applications in nuclear medicine, providing valuable tools for disease diagnosis, treatment, and research in various fields, including radiopharmaceuticals and nuclear imaging technologies.",
                "Radioactive decay contributes to the formation of radioactive elements through natural and artificial decay processes, influencing the stability of nuclear reactors, the management of radioactive waste, and the production of transuranic elements for scientific research, industrial applications, and energy generation.",
                "Nuclear transmutation involves the conversion of one chemical element into another through nuclear reactions, utilizing particle accelerators, such as cyclotrons and linear accelerators, for the synthesis of new isotopes and the production of radioactive substances in nuclear physics and material science.",
                "Safety measures and regulations in handling radioactive materials and the disposal of radioactive waste involve strict protocols for radiation protection, contamination control, waste management, and environmental monitoring in nuclear facilities, research laboratories, and medical institutions.",
                "Radiation dose represents the amount of energy absorbed from ionizing radiation by the body or a specific target, serving as a measure of the potential health effects, radiation risks, and safety standards in radiation protection, nuclear safety, and occupational safety and health."
            ];

            var randomIndex = Math.floor(Math.random() * decayApplicationsQuestions.length);
            question = decayApplicationsQuestions[randomIndex];
            answer = decayApplicationsAnswers[randomIndex];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
