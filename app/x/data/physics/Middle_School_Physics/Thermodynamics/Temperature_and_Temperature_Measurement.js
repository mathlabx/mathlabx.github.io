/*
Temperature and Temperature Measurement

Inputs:
- conversions (boolean): Determines if questions related to temperature conversions should be included.
- measurements (boolean): Determines if questions related to temperature measurements should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of temperature and temperature measurement. It covers topics such as temperature conversions between different scales and techniques used for temperature measurements. All numerical values are randomly generated.

Example Usage:
const result = Temperature_and_Temperature_Measurement(true, true);
console.log(result); // Output: ['Convert 50 degrees Celsius to Fahrenheit.', '50 degrees Celsius is equal to 122 degrees Fahrenheit.']
*/

$X.physics.Middle_School_Physics.Thermodynamics.Temperature_and_Temperature_Measurement = function (conversions, measurements) {
    const questions = [];
    const answers = [];

    if (conversions) {
        const celsius = Math.floor(Math.random() * 100);
        const fahrenheit = (celsius * 9 / 5) + 32;
        questions.push(`Convert ${celsius} degrees Celsius to Fahrenheit.`);
        answers.push(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);

        const kelvin = Math.floor(Math.random() * 100) + 273.15;
        questions.push(`Convert ${celsius} degrees Celsius to Kelvin.`);
        answers.push(`${celsius} degrees Celsius is equal to ${kelvin} Kelvin.`);

        const fahrenheit2 = Math.floor(Math.random() * 100) + 32;
        const celsius2 = (fahrenheit2 - 32) * 5 / 9;
        questions.push(`Convert ${fahrenheit2} degrees Fahrenheit to Celsius.`);
        answers.push(`${fahrenheit2} degrees Fahrenheit is equal to ${celsius2.toFixed(2)} degrees Celsius.`);
    }

    if (measurements) {
        const measurement1 = (Math.random() * 100).toFixed(2);
        questions.push(`What is the temperature measured by a mercury thermometer showing ${measurement1} degrees?`);
        answers.push(`The temperature measured by a mercury thermometer showing ${measurement1} degrees is the same in Celsius, Fahrenheit, and Kelvin scales.`);

        const measurement2 = (Math.random() * 100).toFixed(2);
        questions.push(`How is temperature measured using a thermocouple when it shows ${measurement2} mV output?`);
        answers.push(`Temperature is measured using a thermocouple by correlating the millivolt output (${measurement2} mV) to the corresponding temperature value using a calibration table or equation.`);

        const measurement3 = (Math.random() * 100).toFixed(2);
        questions.push(`What is the principle behind the operation of an infrared thermometer recording ${measurement3} degrees?`);
        answers.push(`An infrared thermometer operates based on the principle of detecting and measuring the infrared radiation emitted by an object, which correlates to its temperature and is displayed as ${measurement3} degrees.`);
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
