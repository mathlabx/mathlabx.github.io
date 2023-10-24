/*
Electric Current and Circuits

Inputs:
- current (boolean): Determines if questions related to electric current should be included.
- circuits (boolean): Determines if questions related to electric circuits should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of electric current and circuits. It covers topics such as Ohm's law, electrical components, circuit diagrams, and practical applications of electric circuits. All numerical values are randomly generated.

Example Usage:
const result = Electric_Current_and_Circuits(true, true);
console.log(result); // Output: ['What is the relationship between voltage, current, and resistance?', 'The relationship is defined by Ohm's law, which states that the current (I) flowing through a conductor between two points is directly proportional to the voltage (V) across the two points and inversely proportional to the resistance (R) between them.']
*/

$X.physics.Middle_School_Physics.Electromagnetism.Electric_Current_and_Circuits = function (current, circuits) {
    const questions = [];
    const answers = [];

    const circuitComponents = ["resistor", "capacitor", "inductor", "diode", "transistor", "transformer", "relay", "switch"];
    const seriesParallel = ["series", "parallel"];

    if (current) {
        for (let i = 0; i < 5; i++) {
            const voltage = Math.floor(Math.random() * 100) + 1;
            const resistance = Math.floor(Math.random() * 20) + 1;
            const current = (voltage / resistance).toFixed(2);
            questions.push(`Calculate the current flowing through a circuit with a voltage of ${voltage} V and a resistance of ${resistance} ohms.`);
            answers.push(`The current flowing through the circuit can be calculated using Ohm's law, which states that I = V / R, where I is the current, V is the voltage, and R is the resistance. Substituting the given values, the current is ${current} A.`);
        }
    }

    if (circuits) {
        for (let i = 0; i < 5; i++) {
            const component1 = circuitComponents[Math.floor(Math.random() * circuitComponents.length)];
            const component2 = circuitComponents[Math.floor(Math.random() * circuitComponents.length)];
            const resistance = (Math.floor(Math.random() * 10) + 1).toFixed(2);
            const config = seriesParallel[Math.floor(Math.random() * seriesParallel.length)];
            questions.push(`Explain how a ${component1} and a ${component2} are connected in a ${config} circuit with a total resistance of ${resistance} ohms.`);
            answers.push(`In a ${config} circuit, a ${component1} and a ${component2} are connected according to the ${config} configuration, resulting in a total resistance of ${resistance} ohms.`);
        }
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
