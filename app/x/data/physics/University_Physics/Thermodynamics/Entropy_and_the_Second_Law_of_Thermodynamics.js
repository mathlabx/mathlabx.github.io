/*
Entropy and the Second Law of Thermodynamics

Description:
This function generates questions related to entropy and the second law of thermodynamics, covering various aspects such as changes in system entropy and the directionality of thermodynamic processes. All numerical values are randomly generated.

Inputs:
- systemEntropy (boolean): Determines if questions related to changes in system entropy should be included.
- processDirection (boolean): Determines if questions related to the directionality of thermodynamic processes should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = EntropyAndSecondLaw(true, false);
console.log(result); // Output: ['During an irreversible process, the entropy of a system increases by 50 J/K. What is the heat absorbed by the system if the temperature remains constant?', 'The heat absorbed by the system is 50 J.']
*/

$X.physics.University_Physics.Thermodynamics.EntropyAndSecondLaw = function (systemEntropy, processDirection) {
    var question = "";
    var answer = "";

    if (systemEntropy && processDirection) {
        if (Math.random() > 0.5) {
            systemEntropy = false;
        } else {
            processDirection = false;
        }
    }

    if (systemEntropy) {
        const options = ['heatAbsorbed', 'entropyChange'];
        const selectedOption = options[Math.floor(Math.random() * options.length)];

        if (selectedOption === 'heatAbsorbed') {
            const entropyChange = Math.floor(Math.random() * 100) + 1; // Random entropy change value
            const temperatureChange = Math.floor(Math.random() * 100) + 1; // Random temperature change value
            const heatChange = entropyChange * temperatureChange; // Heat change calculation
            question = `During an irreversible process, the entropy of a system increases by ${entropyChange} J/K. The temperature remains constant. What is the heat absorbed by the system?`;
            answer = `The heat absorbed by the system is ${heatChange} J.`;
        } else if (selectedOption === 'entropyChange') {
            const heatSupplied = Math.floor(Math.random() * 100) + 1; // Random heat supplied value
            const temperatureChange = Math.floor(Math.random() * 100) + 1; // Random temperature change value
            const entropyProduction = heatSupplied / temperatureChange; // Entropy production calculation
            question = `A thermodynamic system undergoes a reversible process with a heat transfer of ${heatSupplied} J. The temperature changes by ${temperatureChange} K. What is the change in entropy of the system during the process?`;
            answer = `The change in entropy of the system during the process is ${entropyProduction} J/K.`;
        }
    }

    if (processDirection) {
        const options = ['entropyProduction', 'heatTransfer'];
        const selectedOption = options[Math.floor(Math.random() * options.length)];

        if (selectedOption === 'entropyProduction') {
            const heatTransfer = Math.floor(Math.random() * 100) + 1; // Random heat transfer value
            const temperatureChange = Math.floor(Math.random() * 100) + 1; // Random temperature change value
            const entropyProduction = heatTransfer / temperatureChange; // Entropy production calculation
            question = `A thermodynamic system undergoes an irreversible process with a heat transfer of ${heatTransfer} J. The temperature changes by ${temperatureChange} K. What is the entropy production during the process?`;
            answer = `The entropy production during the process is ${entropyProduction} J/K.`;
        } else if (selectedOption === 'heatTransfer') {
            const entropyChange = Math.floor(Math.random() * 100) + 1; // Random entropy change value
            const temperatureChange = Math.floor(Math.random() * 100) + 1; // Random temperature change value
            const heatChange = entropyChange * temperatureChange; // Heat change calculation
            question = `During a reversible process, the entropy of a system changes by ${entropyChange} J/K. The temperature changes by ${temperatureChange} K. What is the heat transferred during the process?`;
            answer = `The heat transferred during the process is ${heatChange} J.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
