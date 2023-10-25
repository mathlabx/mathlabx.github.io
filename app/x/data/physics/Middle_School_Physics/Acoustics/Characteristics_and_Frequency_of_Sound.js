/*
Characteristics and Frequency of Sound

Inputs:
- pitch (boolean): Determines if questions related to sound pitch should be included.
- frequency (boolean): Determines if questions related to sound frequency should be included.
- characteristics (boolean): Determines if questions related to sound characteristics should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the characteristics and frequency of sound. It covers topics such as sound pitch, frequency, and the characteristics of sound waves. All numerical values are randomly generated.

Example Usage:
const result = Characteristics_and_Frequency_of_Sound(true, true, true);
console.log(result); // Output: ['What is the pitch of a sound wave with a frequency of 440 Hz?', 'The pitch of a sound wave with a frequency of 440 Hz is A4.']
*/

$X.physics.Middle_School_Physics.Acoustics.Characteristics_and_Frequency_of_Sound = function(pitch, frequency, characteristics) {
    function generateRandomNote() {
        const notes = ['A0', 'C1', 'E1', 'A1', 'C2', 'E2', 'A2', 'C3', 'E3'];
        return notes[Math.floor(Math.random() * notes.length)];
    }
    
    function generateRandomFrequency() {
        return (Math.random() * 1000 + 200).toFixed(2);
    }
    
    function convertToNoteName(frequency) {
        const a4Frequency = 440;
        const a4Note = 'A4';
        const semitone = 69;
        const noteValue = 12 * (Math.log2(frequency / a4Frequency)) + semitone;
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const octave = Math.floor(noteValue / 12) - 1;
        const noteName = noteNames[noteValue % 12] + octave;
        return noteName;
    }
    
    function convertToFrequency(note) {
        const a4Frequency = 440;
        const a4Note = 'A4';
        const semitone = 69;
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const octave = parseInt(note.slice(-1));
        const noteName = note.slice(0, -1);
        const noteValue = noteNames.indexOf(noteName) + 1 + (octave + 1) * 12;
        const frequency = a4Frequency * Math.pow(2, (noteValue - semitone) / 12);
        return frequency.toFixed(2);
    }
    
    const questions = [];
    const answers = [];

    if (pitch) {
        const frequency1 = generateRandomFrequency();
        const note1 = convertToNoteName(frequency1);
        questions.push(`What is the pitch of a sound wave with a frequency of ${frequency1} Hz?`);
        answers.push(`The pitch of a sound wave with a frequency of ${frequency1} Hz is ${note1}.`);
    }

    if (frequency) {
        const note2 = generateRandomNote();
        const frequency2 = convertToFrequency(note2);
        questions.push(`Determine the frequency of the ${note2} pitch.`);
        answers.push(`The frequency of the ${note2} pitch is ${frequency2} Hz.`);
    }

    if (characteristics) {
        const amplitude1 = (Math.random() * 10).toFixed(2);
        const wavelength1 = (Math.random() * 10).toFixed(2);
        const speed1 = (amplitude1 * wavelength1).toFixed(2);
        questions.push(`Calculate the speed of a sound wave with an amplitude of ${amplitude1} m and a wavelength of ${wavelength1} m.`);
        answers.push(`The speed of the sound wave can be calculated using the formula speed = amplitude * wavelength, where the amplitude is ${amplitude1} m and the wavelength is ${wavelength1} m. The speed is ${speed1} m/s.`);

        const amplitude2 = (Math.random() * 10).toFixed(2);
        const frequency3 = generateRandomFrequency();
        const wavelength2 = (amplitude2 / frequency3).toFixed(2);
        questions.push(`Explain the relationship between amplitude, frequency, and wavelength in a sound wave with an amplitude of ${amplitude2} m and a frequency of ${frequency3} Hz.`);
        answers.push(`In a sound wave with an amplitude of ${amplitude2} m and a frequency of ${frequency3} Hz, the wavelength can be calculated using the formula wavelength = amplitude / frequency. Therefore, the wavelength is ${wavelength2} m.`);
    }

    function getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        return [selectedQuestions[randomIndex], selectedAnswers[randomIndex]];
    }

    const result = getRandomQuestionWithAnswer(questions, answers);
    return result;
}
