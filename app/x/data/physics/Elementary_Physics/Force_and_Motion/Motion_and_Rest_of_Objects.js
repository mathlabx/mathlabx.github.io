/*
Motion and Rest of Objects

Inputs:
- types (boolean): Determines if questions related to different types of motion and rest should be included.
- applications (boolean): Determines if questions related to the applications of motion and rest should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concepts of motion and rest of objects. It covers different types of motion, properties of objects at rest, and their applications in various scenarios.

Example Usage:
const result = Motion_Rest_Objects(true, false);
console.log(result); // Output: ['What are the different types of motion?', 'The different types of motion include...']
*/

$X.physics.Elementary_Physics.Force_and_Motion.Motion_Rest_Objects = function (types, applications) {
    // Generating random boolean values
    types = Math.random() < 0.5;
    applications = !types;

    const allQuestions = [
        'What is the fundamental concept of motion in classical mechanics?',
        'How is the displacement of an object calculated in the context of its motion?',
        'Can you explain the principles of uniform motion and uniformly accelerated motion?',
        'What are the key differences between linear motion and curvilinear motion in physics?',
        'How is the concept of inertia related to the state of rest or motion of an object?',
        'What are the factors that determine the stability of an object at rest on an inclined plane?',
        'How do the laws of motion described by Isaac Newton contribute to our understanding of the behavior of objects in motion?',
        'What are the applications of projectile motion in real-world scenarios such as sports and engineering?',
        'Can you explain the concept of simple harmonic motion and its practical implications in different fields of science and engineering?',
        'How do the principles of motion and rest influence the design and construction of amusement park rides and roller coasters?',
    ];

    const allAnswers = [
        'The fundamental concept of motion in classical mechanics involves the change in position of an object over time, with respect to a reference point.',
        'Displacement is calculated as the difference between the final and initial positions of an object during its motion.',
        'Uniform motion refers to the constant velocity of an object, while uniformly accelerated motion involves a constant acceleration or deceleration of an object.',
        'Linear motion occurs along a straight line, whereas curvilinear motion involves movement along a curved path, such as circular or parabolic trajectories.',
        'Inertia is the tendency of an object to maintain its state of rest or uniform motion unless acted upon by an external force, as described by Newton’s first law of motion.',
        'The stability of an object at rest on an inclined plane is determined by factors such as the angle of inclination, coefficient of friction, and the distribution of weight.',
        'Newton’s laws of motion, including the laws of inertia, acceleration, and action-reaction, provide fundamental principles for understanding the behavior of objects in motion and the relationship between forces and motion.',
        'Projectile motion has applications in sports, such as the trajectory of a basketball or a football, as well as in engineering for the design of projectiles, including missiles and rockets.',
        'Simple harmonic motion is a type of periodic motion where the restoring force is directly proportional to the displacement from the equilibrium position; it finds practical implications in fields such as mechanical engineering, physics, and mathematics.',
        'The principles of motion and rest influence the design and construction of amusement park rides and roller coasters by ensuring safety, providing thrilling experiences, and optimizing ride dynamics for maximum enjoyment and minimal risk.',
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

    const result = [];
    for (let i = 0; i < selectedQuestions.length; i++) {
        result.push(selectedQuestions[i]);
        result.push(selectedAnswers[i]);
    }

    return result;
}