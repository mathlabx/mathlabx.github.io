/*
Matter and its Properties

Inputs:
- solid (boolean): Determines if questions related to solid matter should be included.
- liquid (boolean): Determines if questions related to liquid matter should be included.
- gas (boolean): Determines if questions related to gaseous matter should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the properties and characteristics of matter. It covers topics such as the states of matter, their properties, and basic concepts related to their behavior and characteristics.

Example Usage:
const result = Matter_Properties(true, true, false);
console.log(result); // Output: ['Solid matter has a fixed...', 'The molecules in a liquid...']
*/

$X.physics.Elementary_Physics.Basic_Physics_Concepts.Matter_Properties = function (solid, liquid, gas) {
    // Generating random boolean values
    solid = Math.random() < 0.5;
    liquid = Math.random() < 0.5 && !solid;
    gas = !solid && !liquid;

    const allQuestions = [
        'What is a characteristic property of solid matter?',
        'How do the molecules in a solid behave?',
        'How do the molecules in a liquid behave?',
        'What can you say about the volume and shape of gas?',
        'What is the process of a liquid changing to a gas called?',
        'What is the process of a gas changing to a liquid called?',
        'What is the process of a solid changing directly to a gas called?',
        'What is the process of a gas changing directly to a solid called?',
        'What is the process of a liquid changing to a solid called?',
        'What is the process of a solid changing to a liquid called?'
    ];

    const allAnswers = [
        'Solid matter has a fixed shape and volume.',
        'The molecules in a solid vibrate but do not change position.',
        'The molecules in a liquid are close together but not in a fixed position.',
        'Gas has neither a definite shape nor a definite volume.',
        'The process of a liquid changing to a gas is called vaporization or evaporation.',
        'The process of a gas changing to a liquid is called condensation.',
        'The process of a solid changing directly to a gas is called sublimation.',
        'The process of a gas changing directly to a solid is called deposition.',
        'The process of a liquid changing to a solid is called freezing or solidification.',
        'The process of a solid changing to a liquid is called melting or fusion.'
    ];

    const selectedQuestions = [];
    const selectedAnswers = [];

    if (solid) {
        selectedQuestions.push(allQuestions[0]);
        selectedAnswers.push(allAnswers[0]);
        selectedQuestions.push(allQuestions[1]);
        selectedAnswers.push(allAnswers[1]);
    }

    if (liquid) {
        selectedQuestions.push(allQuestions[2]);
        selectedAnswers.push(allAnswers[2]);
        selectedQuestions.push(allQuestions[4]);
        selectedAnswers.push(allAnswers[4]);
        selectedQuestions.push(allQuestions[6]);
        selectedAnswers.push(allAnswers[6]);
        selectedQuestions.push(allQuestions[8]);
        selectedAnswers.push(allAnswers[8]);
    }

    if (gas) {
        selectedQuestions.push(allQuestions[3]);
        selectedAnswers.push(allAnswers[3]);
        selectedQuestions.push(allQuestions[5]);
        selectedAnswers.push(allAnswers[5]);
        selectedQuestions.push(allQuestions[7]);
        selectedAnswers.push(allAnswers[7]);
        selectedQuestions.push(allQuestions[9]);
        selectedAnswers.push(allAnswers[9]);
    }

    const result = [];

    const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
    question = selectedQuestions[randomIndex];
    answer = selectedAnswers[randomIndex];
    selectedQuestions.splice(randomIndex, 1);
    selectedAnswers.splice(randomIndex, 1);

    return [question, answer];
}