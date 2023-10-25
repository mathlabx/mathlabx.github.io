/*
Concept of Force

Inputs:
- types (boolean): Determines if questions related to different types of forces should be included.
- applications (boolean): Determines if questions related to the applications of forces should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of force. It covers various types of forces, their properties, and their applications in different scenarios.

Example Usage:
const result = Concept_Force(true, false);
console.log(result); // Output: ['What are the different types of forces?', 'The different types of forces include...']
*/

$X.physics.Elementary_Physics.Force_and_Motion.Concept_Force = function (types, applications) {
    // Generating random boolean values
    types = Math.random() < 0.5;
    applications = !types;


    const allQuestions = [
        'What is the fundamental concept of force in physics?',
        'How is force defined and measured in the field of mechanics?',
        'Can you describe Newton’s three laws of motion and their significance in understanding force?',
        'What are the similarities and differences between contact forces and non-contact forces?',
        'How is the force of gravity responsible for keeping celestial bodies in motion within the universe?',
        'What is the electromagnetic force, and how does it play a role in electricity and magnetism?',
        'What are the applications of frictional force in everyday life?',
        'How are forces applied in the field of civil engineering for the stability of structures?',
        'Explain the concept of tension and compression forces in structural engineering.',
        'What are some examples of applied forces in the field of aerospace engineering for propulsion and flight?',
    ];

    const allAnswers = [
        'The fundamental concept of force in physics involves the interaction between two objects resulting in a push or pull that can change the motion or shape of an object.',
        'Force is defined as the product of mass and acceleration, and it is measured in newtons (N) using the equation F = ma.',
        'Newton’s three laws of motion describe how forces affect the motion of objects and are fundamental to our understanding of force. The laws explain inertia, acceleration, and action-reaction forces.',
        'Contact forces involve physical contact between objects, while non-contact forces, such as gravitational and electromagnetic forces, act at a distance through fields.',
        'The force of gravity, also known as gravitational force, is responsible for keeping celestial bodies in motion within the universe, such as planets orbiting the sun.',
        'The electromagnetic force is a fundamental force of attraction and repulsion between charged particles and is vital in understanding electricity, magnetism, and the behavior of particles at the atomic and subatomic level.',
        'Frictional force has applications in everyday life, such as providing traction for vehicles, allowing the grip of shoes on surfaces, and slowing down moving objects.',
        'In civil engineering, forces are applied to ensure the stability of structures like bridges and buildings, considering factors like wind loads and earthquakes.',
        'Tension forces pull or stretch an object, while compression forces push or squeeze it; these concepts are fundamental in structural engineering for designing stable structures.',
        'Aerospace engineering involves applied forces for propulsion, maneuvering, and flight. For example, jet engines and rockets apply thrust, while control surfaces generate lift and control forces.',
    ];

    const selectedQuestions = [];
    const selectedAnswers = [];

    if (types) {
        selectedQuestions.push(allQuestions[0]);
        selectedAnswers.push(allAnswers[0]);
        selectedQuestions.push(allQuestions[1]);
        selectedAnswers.push(allAnswers[1]);
        selectedQuestions.push(allQuestions[2]);
        selectedAnswers.push(allAnswers[2]);
        selectedQuestions.push(allQuestions[3]);
        selectedAnswers.push(allAnswers[3]);
        selectedQuestions.push(allQuestions[4]);
        selectedAnswers.push(allAnswers[4]);
    }

    if (applications) {
        selectedQuestions.push(allQuestions[5]);
        selectedAnswers.push(allAnswers[5]);
        selectedQuestions.push(allQuestions[6]);
        selectedAnswers.push(allAnswers[6]);
        selectedQuestions.push(allQuestions[7]);
        selectedAnswers.push(allAnswers[7]);
        selectedQuestions.push(allQuestions[8]);
        selectedAnswers.push(allAnswers[8]);
        selectedQuestions.push(allQuestions[9]);
        selectedAnswers.push(allAnswers[9]);
    }

    function getRandomItem(items) {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }

    function getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        return [selectedQuestions[randomIndex], selectedAnswers[randomIndex]];
    }

    const result = getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers);
    return result;
}
