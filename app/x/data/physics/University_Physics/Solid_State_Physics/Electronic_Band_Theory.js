/*
Electronic Band Theory

Description:
This function generates questions related to electronic band theory, covering various aspects such as band structure, conduction band, valence band, etc. All numerical values are randomly generated.

Inputs:
- bandStructure (boolean): Determines if questions related to band structure should be included.
- conductionBand (boolean): Determines if questions related to the conduction band should be included.
- valenceBand (boolean): Determines if questions related to the valence band should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ElectronicBandTheory(true, true, false);
console.log(result); // Output: ['What is the definition of the conduction band?', 'The conduction band is the energy band in a solid that is partially filled with electrons, allowing them to move and conduct electric current.']
*/

$X.physics.University_Physics.Solid_State_Physics.ElectronicBandTheory = function (bandStructure, conductionBand, valenceBand) {
    var question = "";
    var answer = "";

    if (bandStructure && conductionBand && valenceBand) {
        var randomNum = Math.random();
        if (randomNum < 0.33) {
            conductionBand = false;
            valenceBand = false;
        } else if (randomNum < 0.66) {
            bandStructure = false;
            valenceBand = false;
        } else {
            bandStructure = false;
            conductionBand = false;
        }
    } else if (bandStructure && conductionBand) {
        if (Math.random() > 0.5) {
            bandStructure = false;
        } else {
            conductionBand = false;
        }
    } else if (bandStructure && valenceBand) {
        if (Math.random() > 0.5) {
            bandStructure = false;
        } else {
            valenceBand = false;
        }
    } else if (conductionBand && valenceBand) {
        if (Math.random() > 0.5) {
            conductionBand = false;
        } else {
            valenceBand = false;
        }
    }

    if (bandStructure) {
        // Questions related to band structure
        var additionalBandStructureQuestions = [
            "How do band gaps influence the electrical properties of materials?",
            "Explain the concept of a partial band gap in solid-state physics.",
            "What are the implications of a narrow band gap in semiconductor devices?",
            "Describe the influence of band structure on the optical properties of crystals.",
            "How do defects in the band structure affect the behavior of materials?",
            "Explain the importance of the Fermi level in the context of band structure.",
            "Discuss the role of band structure engineering in modern semiconductor devices.",
            "What is the significance of band structures in understanding material conductivity?",
            "How does the band structure impact the thermal properties of materials?",
            "Explain the effects of external stimuli on the band structure of semiconductors."
        ];
        var additionalBandStructureAnswers = [
            "Band gaps dictate the energy range that electrons cannot occupy, influencing conductivity and insulating properties.",
            "A partial band gap refers to a range of energy levels where electron states are not permitted but can still exist due to impurities or defects.",
            "Narrow band gaps in semiconductors lead to enhanced electron mobility and faster electronic response times.",
            "The band structure significantly affects how crystals interact with light, determining their reflective and refractive properties.",
            "Defects in the band structure can lead to the formation of energy levels within band gaps, influencing charge carrier behavior.",
            "The Fermi level represents the highest energy level occupied by electrons at absolute zero and plays a crucial role in determining the material's electrical properties.",
            "Band structure engineering involves manipulating the energy bands of materials to achieve desired electronic properties for specific applications.",
            "Understanding band structures is crucial for optimizing the conductivity of materials, especially in the design of electronic devices.",
            "Band structures influence the thermal conductivity and heat transfer characteristics of materials, impacting their thermoelectric performance.",
            "External stimuli such as temperature, pressure, or electric fields can modify the band structure of semiconductors, altering their electronic and optical properties."
        ];

        var randomIndex = Math.floor(Math.random() * bandStructureQuestions.length);
        question = bandStructureQuestions[randomIndex];
        answer = bandStructureAnswers[randomIndex];
    }

    if (conductionBand) {
        // Questions related to the conduction band
        var additionalConductionBandQuestions = [
            "Discuss the role of conduction bands in the behavior of metals.",
            "Explain the significance of conduction bands in the context of electrical conductivity.",
            "How do impurity states in the conduction band impact the properties of doped semiconductors?",
            "Describe the effects of temperature on the conduction band structure of materials.",
            "Discuss the relationship between the conduction band and charge carrier mobility in semiconductors.",
            "Explain the concept of band dispersion in the conduction band of materials.",
            "How do quantum mechanical effects influence the behavior of the conduction band in nanoscale materials?",
            "Discuss the implications of band-tailing phenomena on the behavior of the conduction band in semiconductor devices.",
            "Explain the connection between the effective mass of charge carriers and the curvature of the conduction band.",
            "Describe the influence of band structure on the electronic transport properties of materials."
        ];
        var additionalConductionBandAnswers = [
            "Conduction bands allow for the movement of electrons in metals, contributing to their high electrical conductivity.",
            "Understanding conduction bands is crucial for predicting how well a material can conduct electricity under different conditions.",
            "Impurity states in the conduction band can create energy levels that enable the controlled flow of charge carriers in doped semiconductors.",
            "Temperature variations can alter the distribution of electrons in the conduction band, affecting the material's conductivity and resistivity.",
            "The conduction band's characteristics, such as effective mass and energy dispersion, influence how easily charge carriers can move through semiconductors.",
            "Band dispersion in the conduction band represents how the energy levels of electrons change as a function of their momentum, impacting their transport properties.",
            "In nanoscale materials, quantum effects can cause discrete energy levels and modified electronic properties in the conduction band.",
            "Band-tailing phenomena, where the density of states near the band edges deviates from the ideal behavior, can affect the electronic properties of semiconductor devices.",
            "The effective mass of charge carriers determines how easily they respond to an applied electric field, depending on the curvature of the conduction band.",
            "Band structures can significantly affect the mobility of charge carriers, affecting the electrical conductivity and resistivity of materials."
        ];

        var randomIndex = Math.floor(Math.random() * conductionBandQuestions.length);
        question = conductionBandQuestions[randomIndex];
        answer = conductionBandAnswers[randomIndex];
    }

    if (valenceBand) {
        // Questions related to the valence band
        var additionalValenceBandQuestions = [
            "Discuss the role of the valence band in determining the chemical properties of materials.",
            "Explain the concept of holes in the valence band of semiconductors.",
            "How do valence band states influence the optical absorption properties of crystals?",
            "Describe the effects of strain on the valence band structure of materials.",
            "Discuss the relationship between the valence band offset and the electronic properties of heterojunctions.",
            "Explain the impact of valence band structure on the formation of electron-hole pairs in semiconductor devices.",
            "Discuss the role of the valence band maximum in determining the behavior of p-type semiconductors.",
            "How do defects in the valence band affect the electronic and chemical properties of materials?",
            "Explain the importance of valence band engineering in the design of optoelectronic devices.",
            "Discuss the implications of the valence band structure on the thermoelectric properties of materials."
        ];
        var additionalValenceBandAnswers = [
            "The valence band is responsible for determining how a material interacts chemically with other substances, influencing its reactivity and bonding.",
            "Holes in the valence band represent the absence of electrons and act as positively charged carriers in semiconductor materials.",
            "Valence band states dictate the wavelengths of light that materials can absorb, affecting their color and transparency properties.",
            "Strain can modify the energy levels and density of states in the valence band, leading to changes in the material's electrical and optical properties.",
            "Valence band offset describes the energy difference between the valence bands of two materials in a heterojunction, impacting the formation of energy barriers and charge carrier behavior.",
            "The valence band structure affects the generation and recombination of electron-hole pairs, playing a crucial role in the performance of semiconductor devices.",
            "The valence band maximum represents the highest energy level occupied by electrons in a valence band and influences the electrical properties of p-type semiconductors.",
            "Defects in the valence band can create localized states within the band gap, affecting the material's conductivity and chemical reactivity.",
            "Valence band engineering involves manipulating the energy levels of materials to achieve desired optical and electronic properties for specific device applications.",
            "The valence band structure significantly impacts the thermoelectric performance of materials, affecting their ability to convert heat into electrical energy."
        ];

        var randomIndex = Math.floor(Math.random() * valenceBandQuestions.length);
        question = valenceBandQuestions[randomIndex];
        answer = valenceBandAnswers[randomIndex];
    }

    // Return the question and answer in an array
    return [question, answer];
}
