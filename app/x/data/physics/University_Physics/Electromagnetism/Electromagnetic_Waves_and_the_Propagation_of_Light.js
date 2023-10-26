/*
Electromagnetic Waves and the Propagation of Light

Description:
This function generates questions related to electromagnetic waves and the propagation of light, covering various aspects such as wavelength, frequency, and propagation speed. All numerical values are randomly generated.

Inputs:
- wavelength (boolean): Determines if questions related to the wavelength of the waves should be included.
- frequency (boolean): Determines if questions related to the frequency of the waves should be included.
- propagationSpeed (boolean): Determines if questions related to the speed of propagation should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ElectromagneticWavesAndPropagation(true, true, false);
console.log(result); // Output: ['An electromagnetic wave has a frequency of 5 Hz. What is its wavelength in a vacuum?', 'The wavelength of the wave is 60000 km.']
*/

$X.physics.University_Physics.Electromagnetism.ElectromagneticWavesAndPropagation = function (wavelength, frequency, propagationSpeed) {
    const options = [{ key: 'wavelength', value: wavelength }, { key: 'frequency', value: frequency }, { key: 'propagationSpeed', value: propagationSpeed }];
    const selectedOption = options.filter(option => option.value);
    const selected = selectedOption[Math.floor(Math.random() * selectedOption.length)];

    const getRandomFrequency = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    const getRandomPropagationSpeed = () => {
        return Math.floor(Math.random() * 300000) + 200000;
    };

    const getRandomWavelength = () => {
        return Math.floor(Math.random() * 1000) + 200;
    };

    const calculateWavelength = (frequency, speed) => {
        return speed / frequency;
    };

    const calculateFrequency = (wavelength, speed) => {
        return speed / wavelength;
    };

    const calculatePropagationSpeed = (wavelength, frequency) => {
        return wavelength * frequency;
    };

    const result = [];

    if (selected.key === 'wavelength') {
        const frequencyValue = getRandomFrequency();
        const speedValue = getRandomPropagationSpeed();
        const wavelengthValue = calculateWavelength(frequencyValue, speedValue);
        result.push(`An electromagnetic wave has a frequency of ${frequencyValue} Hz. What is its wavelength in a vacuum?`);
        result.push(`The wavelength of the wave is ${wavelengthValue} km.`);
    }

    if (selected.key === 'frequency') {
        const wavelengthValue = getRandomWavelength();
        const speedValue = getRandomPropagationSpeed();
        const frequencyValue = calculateFrequency(wavelengthValue, speedValue);
        result.push(`An electromagnetic wave has a wavelength of ${wavelengthValue} m. What is its frequency in a vacuum?`);
        result.push(`The frequency of the wave is ${frequencyValue} Hz.`);
    }

    if (selected.key === 'propagationSpeed') {
        const wavelengthValue = getRandomWavelength();
        const frequencyValue = getRandomFrequency();
        const speedValue = calculatePropagationSpeed(wavelengthValue, frequencyValue);
        result.push(`An electromagnetic wave has a wavelength of ${wavelengthValue} m and a frequency of ${frequencyValue} Hz. What is its speed of propagation?`);
        result.push(`The speed of propagation of the wave is ${speedValue} m/s.`);
    }

    return result;
}
