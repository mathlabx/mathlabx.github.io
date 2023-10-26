/*
Ideal Gas Law

Description:
This function generates questions related to the ideal gas law, covering topics such as pressure, volume, amount of substance, and temperature. All numerical values are randomly generated.

Inputs:
- pressure (boolean): Determines if questions related to pressure should be included.
- volume (boolean): Determines if questions related to volume should be included.
- moles (boolean): Determines if questions related to the amount of substance should be included.
- temperature (boolean): Determines if questions related to temperature should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = IdealGasLaw(true, true, true, true);
console.log(result); // Output: ['A gas occupies a volume of 5.6 L at a pressure of 1.2 atm. What is the amount of substance if the temperature is 300 K?', 'The amount of substance is 0.24 mol.']
*/

$X.physics.University_Physics.Thermodynamics.IdealGasLaw = function (pressure, volume, moles, temperature) {
    var question = "";
    var answer = "";

    if (pressure || volume || moles || temperature) {
        const trueInputs = [];
        if (pressure) trueInputs.push("pressure");
        if (volume) trueInputs.push("volume");
        if (moles) trueInputs.push("moles");
        if (temperature) trueInputs.push("temperature");

        const selectedInput = trueInputs[Math.floor(Math.random() * trueInputs.length)];

        if (selectedInput === "pressure") {
            // Logic for questions related to pressure
            // Generate questions and answers with randomly generated numerical values
            var volumeValue = Math.floor(Math.random() * 10 + 1);
            var pressureValue = (Math.random() * 4 + 1 + Math.random()).toFixed(2); // Adjusted the generation of pressureValue to avoid using toFixed(2) directly
            var temperatureValue = Math.floor(Math.random() * 500 + 200);
            question = "A gas occupies a volume of " + volumeValue + " L at a pressure of " + pressureValue + " atm. What is the amount of substance if the temperature is " + temperatureValue + " K?";
            var molesValue = (pressureValue * volumeValue) / (8.31 * temperatureValue);
            answer = "The amount of substance is " + (Math.round(molesValue * 100) / 100).toFixed(2) + " mol."; // Rounded molesValue instead of dividing by 100
        } else if (selectedInput === "volume") {
            // Logic for questions related to volume
            // Generate questions and answers with randomly generated numerical values
            var molesValue = (Math.random() * 5 + 1).toFixed(2);
            var pressureValue = Math.floor(Math.random() * 5 + 1);
            var temperatureValue = Math.floor(Math.random() * 500 + 200);
            var volumeValue = (molesValue * 8.31 * temperatureValue) / pressureValue;
            question = "A gas has " + molesValue + " mol of substance at a pressure of " + pressureValue + " atm. What is the volume of the gas if the temperature is " + temperatureValue + " K?";
            answer = "The volume of the gas is " + (Math.round(volumeValue * 100) / 100).toFixed(2) + " L."; // Rounded volumeValue instead of dividing by 100
        } else if (selectedInput === "moles") {
            // Logic for questions related to the amount of substance
            // Generate questions and answers with randomly generated numerical values
            var volumeValue = Math.floor(Math.random() * 10 + 1);
            var pressureValue = (Math.random() * 4 + 1 + Math.random()).toFixed(2); // Adjusted the generation of pressureValue to avoid using toFixed(2) directly
            var molesValue = (Math.random() * 5 + 1).toFixed(2);
            var temperatureValue = (pressureValue * volumeValue) / (8.31 * molesValue);
            question = "A gas occupies a volume of " + volumeValue + " L at a pressure of " + pressureValue + " atm. What is the temperature if the amount of substance is " + molesValue + " mol?";
            answer = "The temperature is " + (Math.round(temperatureValue * 100) / 100).toFixed(2) + " K."; // Rounded temperatureValue instead of dividing by 100
        } else if (selectedInput === "temperature") {
            // Logic for questions related to temperature
            // Generate questions and answers with randomly generated numerical values
            var molesValue = (Math.random() * 5 + 1).toFixed(2);
            var volumeValue = Math.floor(Math.random() * 10 + 1);
            var temperatureValue = Math.floor(Math.random() * 500 + 200);
            var pressureValue = (molesValue * 8.31 * temperatureValue) / volumeValue;
            question = "A gas has " + molesValue + " mol of substance at a volume of " + volumeValue + " L. What is the pressure of the gas if the temperature is " + temperatureValue + " K?";
            answer = "The pressure of the gas is " + (Math.round(pressureValue * 100) / 100).toFixed(2) + " atm."; // Rounded pressureValue instead of dividing by 100
        }
    } else {
        // Handle the case where no true inputs are provided
        // ...
    }

    // Return the question and answer in an array
    return [question, answer];
}
