/*
Wave Particle Duality of Light

Inputs:
- wavelength (boolean): Determines if questions related to wavelength should be included.
- frequency (boolean): Determines if questions related to frequency should be included.
- energy (boolean): Determines if questions related to energy should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the wave-particle duality of light, including topics such as wavelength, frequency, and energy. All numerical values are randomly generated.

Example Usage:
const result = WaveParticleDualityOfLight(true, true, false);
console.log(result); // Output: ['What is the frequency of a light wave with a wavelength of 500 nm?', 'The frequency of the light wave is 6.0 * 10^14 Hz.']
*/

$X.physics.High_School_Physics.Optics.WaveParticleDualityOfLight = function (wavelength, frequency, energy) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [wavelength, frequency, energy];
    var trueCount = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] === true) {
            trueCount++;
        }
    }

    if (trueCount > 1) {
        var randomIndex = Math.floor(Math.random() * options.length);
        for (var j = 0; j < options.length; j++) {
            if (j === randomIndex) {
                options[j] = true;
            } else {
                options[j] = false;
            }
        }
        wavelength = options[0];
        frequency = options[1];
        energy = options[2];
    }

    if (wavelength) {
        // Logic for questions related to wavelength
        var speedOfLight = 3 * Math.pow(10, 8); // Speed of light in m/s
        var frequencyValue = Math.floor(Math.random() * 5) + 1; // Random frequency value between 1 and 5 Hz

        question = 'Calculate the wavelength of light with a frequency of ' + frequencyValue + ' Hz.';
        var wavelengthValue = speedOfLight / frequencyValue;
        answer = 'The wavelength of light is ' + wavelengthValue.toFixed(2) + ' m.';
    }

    if (frequency) {
        // Logic for questions related to frequency
        var speedOfLight = 3 * Math.pow(10, 8); // Speed of light in m/s
        var wavelengthValue = Math.floor(Math.random() * 500) + 100; // Random wavelength value between 100 and 600 nm

        question = 'Calculate the frequency of light with a wavelength of ' + wavelengthValue + ' nm.';
        var frequencyValue = speedOfLight / (wavelengthValue * Math.pow(10, -9));
        answer = 'The frequency of light is ' + frequencyValue.toFixed(2) + ' Hz.';
    }

    if (energy) {
        // Logic for questions related to energy
        var plankConstant = 6.63 * Math.pow(10, -34); // Planck constant in J*s
        var frequencyValue = Math.floor(Math.random() * 5) + 1; // Random frequency value between 1 and 5 Hz

        question = 'Calculate the energy of a photon with a frequency of ' + frequencyValue + ' Hz.';
        var energyValue = plankConstant * frequencyValue;
        answer = 'The energy of the photon is ' + energyValue.toFixed(2) + ' J.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
