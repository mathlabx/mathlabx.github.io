/*
Special Relativity and the Lorentz Transformation

Description:
This function generates questions related to special relativity and the Lorentz transformation, covering various aspects such as the basic concepts of special relativity, applications of the Lorentz transformation, etc. All numerical values are randomly generated.

Inputs:
- specialRelativityConcepts (boolean): Determines if questions related to the basic concepts of special relativity should be included.
- lorentzTransformationApplications (boolean): Determines if questions related to the applications of the Lorentz transformation should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = SpecialRelativityAndLorentzTransformation(true, false);
console.log(result); // Output: ['What is time dilation in special relativity?', 'Time dilation is the phenomenon where time appears to pass more slowly in a moving reference frame relative to a stationary observer.']
*/

$X.physics.University_Physics.Relativity.SpecialRelativityAndLorentzTransformation = function (specialRelativityConcepts, lorentzTransformationApplications) {
    var question = "";
    var answer = "";

    if (specialRelativityConcepts && lorentzTransformationApplications) {
        if (Math.random() > 0.5) {
            specialRelativityConcepts = false;
        } else {
            lorentzTransformationApplications = false;
        }
    }

    const nounDictionary = {
        time: ['time', 'clock', 'chronometer', 'period', 'duration'],
        length: ['length', 'distance', 'extension', 'longness', 'span'],
        mass: ['mass', 'weight', 'heaviness', 'burden', 'load'],
        Einstein: ['Einstein', 'genius', 'mastermind', 'intellect', 'sage'],
        postulates: ['postulates', 'principles', 'propositions', 'axioms', 'theorems'],
        laws: ['laws', 'regulations', 'rules', 'statutes', 'ordinances'],
        observer: ['observer', 'watcher', 'spectator', 'onlooker', 'witness'],
        speed: ['speed', 'velocity', 'swiftness', 'rapidity', 'quickness'],
        vacuum: ['vacuum', 'void', 'emptiness', 'vacancy', 'blankness'],
        decay: ['decay', 'deterioration', 'decomposition', 'degeneration', 'decline'],
        muons: ['muons', 'particles', 'elementary particles', 'subatomic particles', 'leptons'],
        paradox: ['paradox', 'contradiction', 'enigma', 'puzzle', 'riddle'],
        contraction: ['contraction', 'reduction', 'shrinking', 'narrowing', 'compressing'],
        Doppler: ['Doppler', 'effect', 'influence', 'impact', 'force'],
        Fizeau: ['Fizeau', 'experiment', 'trial', 'test', 'investigation'],
        Lorentz: ['Lorentz1', 'Lorentz2', 'Lorentz3', 'Lorentz4', 'Lorentz5'],
        FitzGerald: ['FitzGerald1', 'FitzGerald2', 'FitzGerald3', 'FitzGerald4', 'FitzGerald5']
    };

    if (specialRelativityConcepts) {
        const basicConcepts = [
            'Time Dilation', 'Length Contraction', 'Relativistic Mass', 'Einstein\'s Postulates', 'Invariant Mass'
        ];
        const randomIndex = Math.floor(Math.random() * basicConcepts.length);
        const selectedConcept = basicConcepts[randomIndex];

        if (selectedConcept === 'Time Dilation') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.time.length);
            const timeNoun = nounDictionary.time[randomNounIndex];
            question = `What is ${timeNoun} dilation in special relativity?`;
            answer = `${timeNoun} dilation is the phenomenon where ${timeNoun} appears to pass more slowly in a moving reference frame relative to a stationary ${nounDictionary.observer[randomNounIndex]}.`;
        } else if (selectedConcept === 'Length Contraction') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.length.length);
            const lengthNoun = nounDictionary.length[randomNounIndex];
            question = `Explain the concept of ${lengthNoun} contraction in special relativity.`;
            answer = `${lengthNoun} contraction refers to the ${nounDictionary.contraction[randomNounIndex]} of an object along the direction of its motion as its ${nounDictionary.speed[randomNounIndex]} approaches the speed of light.`;
        } else if (selectedConcept === 'Relativistic Mass') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.mass.length);
            const massNoun = nounDictionary.mass[randomNounIndex];
            question = `Define the concept of ${massNoun} in special relativity.`;
            answer = `${massNoun} refers to the ${nounDictionary.mass[randomNounIndex]} of an object as measured by an ${nounDictionary.observer[randomNounIndex]} moving with a significant fraction of the ${nounDictionary.speed[randomNounIndex]} of light.`;
        } else if (selectedConcept === 'Einstein\'s Postulates') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.postulates.length);
            const postulateNoun = nounDictionary.postulates[randomNounIndex];
            question = `What are the two ${postulateNoun} of special relativity proposed by ${nounDictionary.Einstein[randomNounIndex]}?`;
            answer = `${nounDictionary.Einstein[randomNounIndex]}'s two ${postulateNoun} state that the ${nounDictionary.laws[randomNounIndex]} of physics are the same for all non-accelerating ${nounDictionary.observer[randomNounIndex]} and that the ${nounDictionary.speed[randomNounIndex]} of light in a ${nounDictionary.vacuum[randomNounIndex]} is constant for all ${nounDictionary.observer[randomNounIndex]}, regardless of their motion.`;
        } else if (selectedConcept === 'Invariant Mass') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.mass.length);
            const massNoun = nounDictionary.mass[randomNounIndex];
            question = `Explain the concept of invariant ${massNoun} in special relativity.`;
            answer = `Invariant ${massNoun} is the ${massNoun} of an object as measured by an ${nounDictionary.observer[randomNounIndex]} in any inertial reference frame, which remains constant regardless of the object's velocity.`;
        }
    }

    if (lorentzTransformationApplications) {
        const applications = [
            'Time Dilation in Muon Decay', 'Twin Paradox', 'Lorentz-FitzGerald Contraction', 'Relativistic Doppler Effect', 'Fizeau Experiment'
        ];
        const randomIndex = Math.floor(Math.random() * applications.length);
        const selectedApplication = applications[randomIndex];

        if (selectedApplication === 'Time Dilation in Muon Decay') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.muons.length);
            const muonNoun = nounDictionary.muons[randomNounIndex];
            const decayNoun = nounDictionary.decay[randomNounIndex];
            const timeNoun = nounDictionary.time[randomNounIndex];
            question = `Describe the time dilation observed in the ${decayNoun} of ${muonNoun} in particle accelerators.`;
            answer = `${muonNoun}, being short-lived particles, exhibit ${timeNoun} dilation as they travel at relativistic speeds, allowing them to reach the Earth's surface from the upper atmosphere.`;
        } else if (selectedApplication === 'Twin Paradox') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.paradox.length);
            const paradoxNoun = nounDictionary.paradox[randomNounIndex];
            const timeNoun = nounDictionary.time[randomNounIndex];
            question = `Explain the concept of the ${paradoxNoun} in special relativity.`;
            answer = `The ${paradoxNoun} refers to the scenario where one of the twins embarks on a high-speed space journey, leading to a difference in their ages upon the twin's return due to ${timeNoun} dilation.`;
        } else if (selectedApplication === 'Lorentz-FitzGerald Contraction') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.contraction.length);
            const lengthNoun = nounDictionary.length[randomNounIndex];
            const contractionNoun = nounDictionary.contraction[randomNounIndex];
            question = `Define ${nounDictionary.Lorentz[randomNounIndex]}-${nounDictionary.FitzGerald[randomNounIndex]} ${contractionNoun} in the context of special relativity.`;
            answer = `${nounDictionary.Lorentz[randomNounIndex]}-${nounDictionary.FitzGerald[randomNounIndex]} ${contractionNoun} proposes that the ${lengthNoun} of an object in motion contracts in the direction of its motion, resulting from its relativistic speeds.`;
        } else if (selectedApplication === 'Relativistic Doppler Effect') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.Doppler.length);
            const DopplerNoun = nounDictionary.Doppler[randomNounIndex];
            question = `Discuss the relativistic ${DopplerNoun} in the context of special relativity.`;
            answer = `The relativistic ${DopplerNoun} explains the observed shift in frequency and wavelength of electromagnetic radiation due to relative motion between the source and the ${nounDictionary.observer[randomNounIndex]}.`;
        } else if (selectedApplication === 'Fizeau Experiment') {
            const randomNounIndex = Math.floor(Math.random() * nounDictionary.Fizeau.length);
            const FizeauNoun = nounDictionary.Fizeau[randomNounIndex];
            question = `Explain the ${FizeauNoun} experiment and its relevance to the principles of special relativity.`;
            answer = `The ${FizeauNoun} experiment demonstrates the dependence of the speed of light in a moving medium on the relative motion of the ${nounDictionary.observer[randomNounIndex]} and the medium, providing empirical support for the principles of special relativity.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
