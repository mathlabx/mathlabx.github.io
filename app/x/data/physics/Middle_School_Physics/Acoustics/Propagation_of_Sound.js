/*
Propagation of Sound

Inputs:
- medium (boolean): Determines if questions related to sound propagation in different media should be included.
- speed (boolean): Determines if questions related to the speed of sound should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the propagation of sound waves through different media. It covers topics such as the speed of sound in various materials, the factors affecting the speed of sound, and the behavior of sound in different environments. All numerical values are randomly generated.

Example Usage:
const result = Propagation_of_Sound(true, true);
console.log(result); // Output: ['What is the speed of sound in water?', 'The speed of sound in water is approximately 1482 meters per second at 25 degrees Celsius.']
*/

$X.physics.Middle_School_Physics.Acoustics.Propagation_of_Sound = function (medium, speed) {
    const questions = [];
    const answers = [];

    const mediums = ['air', 'water', 'steel', 'wood', 'glass', 'diamond', 'aluminum', 'copper'];
    const temperatures = [20, 25, 30, 35, 40, 45, 50, 55, 60];
    const distances = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    const speeds = [330, 340, 350, 360, 370, 380, 390, 400];

    if (medium) {
        for (let i = 0; i < 5; i++) {
            const medium = mediums[Math.floor(Math.random() * mediums.length)];
            const distance = distances[Math.floor(Math.random() * distances.length)];
            const time = (distance / (speeds[Math.floor(Math.random() * speeds.length)])).toFixed(2);
            questions.push(`Calculate the time taken for sound to travel a distance of ${distance} meters in ${medium}.`);
            answers.push(`The time taken for sound to travel the given distance in ${medium} can be calculated using the formula time = distance / speed, where the speed of sound in ${medium} is taken as ${speeds[Math.floor(Math.random() * speeds.length)]} m/s. The time taken is ${time} seconds.`);
        }
    }

    if (speed) {
        for (let i = 0; i < 5; i++) {
            const medium = mediums[Math.floor(Math.random() * mediums.length)];
            const temperature = temperatures[Math.floor(Math.random() * temperatures.length)];
            const speedOfSound = (331.4 + 0.6 * temperature).toFixed(2);
            questions.push(`Calculate the speed of sound in ${medium} at a temperature of ${temperature} degrees Celsius.`);
            answers.push(`The speed of sound in ${medium} at a temperature of ${temperature} degrees Celsius can be calculated using the formula speed = 331.4 + 0.6 * temperature. Substituting the given temperature, the speed of sound is ${speedOfSound} m/s.`);
        }
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
