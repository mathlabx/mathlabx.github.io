/*
Wave Particle Duality

Description:
This function generates questions related to wave-particle duality, covering various aspects such as wavelength, frequency, energy, etc. All numerical values are randomly generated.

Inputs:
- wavelength (boolean): Determines if questions related to the wavelength should be included.
- frequency (boolean): Determines if questions related to the frequency should be included.
- energy (boolean): Determines if questions related to the energy should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = WaveParticleDuality(true, true, false);
console.log(result); // Output: ['An electron has a wavelength of 2 nm. What is its frequency?', 'The frequency of the electron is 1.5 x 10^17 Hz.']
*/

$X.physics.University_Physics.Quantum_Mechanics.WaveParticleDuality = function (wavelength, frequency, energy) {
    var question = "";
    var answer = "";

    if (wavelength && frequency && energy) {
        if (Math.random() < 1 / 3) {
            frequency = false;
            energy = false;
        } else if (Math.random() < 0.5) {
            wavelength = false;
            energy = false;
        } else {
            wavelength = false;
            frequency = false;
        }
    } else if (wavelength && frequency) {
        if (Math.random() < 0.5) {
            frequency = false;
        } else {
            wavelength = false;
        }
    } else if (wavelength && energy) {
        if (Math.random() < 0.5) {
            energy = false;
        } else {
            wavelength = false;
        }
    } else if (frequency && energy) {
        if (Math.random() < 0.5) {
            energy = false;
        } else {
            frequency = false;
        }
    }

    function calculateFrequency(wavelength) {
        // Calculate the frequency based on the given wavelength
        // Example calculation: speed of light / wavelength
        return (3.0 * Math.pow(10, 8)) / (parseFloat(wavelength) * Math.pow(10, -9));
    }

    function calculateEnergy(frequency) {
        // Calculate the energy based on the given frequency
        // Example calculation: Planck's constant * frequency
        return 6.63 * Math.pow(10, -34) * parseFloat(frequency);
    }

    function calculateWavelength(energy) {
        // Calculate the wavelength based on the given energy
        // Example calculation: Planck's constant / energy
        return (6.63 * Math.pow(10, -34)) / (1.6 * Math.pow(10, -19) * parseFloat(energy));
    }

    if (wavelength) {
        // Logic for questions related to wavelength
        const wavelengths = ['2 nm', '5 nm', '10 nm', '15 nm', '20 nm']; // Example wavelength values
        const randomWavelengthIndex = Math.floor(Math.random() * wavelengths.length);
        const randomWavelength = wavelengths[randomWavelengthIndex];
        question = `An electron has a wavelength of ${randomWavelength}. What is its frequency?`;
        // Perform calculations to determine the frequency based on the given wavelength
        answer = `The frequency of the electron is ${calculateFrequency(randomWavelength)} Hz.`; // Example frequency calculation
    }

    if (frequency) {
        // Logic for questions related to frequency
        const frequencies = ['1.5 x 10^17 Hz', '2.0 x 10^17 Hz', '2.5 x 10^17 Hz', '3.0 x 10^17 Hz', '3.5 x 10^17 Hz']; // Example frequency values
        const randomFrequencyIndex = Math.floor(Math.random() * frequencies.length);
        const randomFrequency = frequencies[randomFrequencyIndex];
        question = `A photon has a frequency of ${randomFrequency}. What is its energy?`;
        // Perform calculations to determine the energy based on the given frequency
        answer = `The energy of the photon is ${calculateEnergy(randomFrequency)} eV.`; // Example energy calculation
    }

    if (energy) {
        // Logic for questions related to energy
        const energies = ['2.0 eV', '3.5 eV', '5.0 eV', '7.5 eV', '10.0 eV']; // Example energy values
        const randomEnergyIndex = Math.floor(Math.random() * energies.length);
        const randomEnergy = energies[randomEnergyIndex];
        question = `A particle has an energy of ${randomEnergy}. What is the corresponding wavelength?`;
        // Perform calculations to determine the wavelength based on the given energy
        answer = `The corresponding wavelength of the particle is ${calculateWavelength(randomEnergy)} nm.`; // Example wavelength calculation
    }

    // Return the question and answer in an array
    return [question, answer];
}
