/*
Gravity and General Relativity

Description:
This function generates questions related to gravity and general relativity, covering various aspects such as the concept of gravity, the basic principles of general relativity, etc. All numerical values are randomly generated.

Inputs:
- gravityConcepts (boolean): Determines if questions related to the concept of gravity should be included.
- generalRelativityPrinciples (boolean): Determines if questions related to the principles of general relativity should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = GravityAndGeneralRelativity(true, false);
console.log(result); // Output: ['What is the principle of equivalence in general relativity?', 'The principle of equivalence states that the effects of gravity are indistinguishable from those of acceleration.']
*/

$X.physics.University_Physics.Relativity.GravityAndGeneralRelativity = function (gravityConcepts, generalRelativityPrinciples) {

    if (gravityConcepts && generalRelativityPrinciples) {
        if (Math.random() > 0.5) {
            gravityConcepts = false;
        } else {
            generalRelativityPrinciples = false;
        }
    }

    var question = "";
    var answer = "";

    if (gravityConcepts) {
        const concepts = ['Gravitational force', 'Equivalence principle', 'Curvature of spacetime', 'Geodesics', 'Gravitational time dilation']; // Example gravity concepts
        const randomConceptIndex = Math.floor(Math.random() * concepts.length);
        const randomConcept = concepts[randomConceptIndex];
        if (randomConcept === 'Gravitational force') {
            question = `What is the nature of the ${randomConcept}?`;
            answer = `The ${randomConcept} is the attractive force between two masses in the universe.`;
        } else if (randomConcept === 'Equivalence principle') {
            question = `Explain the concept of ${randomConcept} in general relativity.`;
            answer = `The ${randomConcept} states that the effects of gravity are indistinguishable from the effects of acceleration.`;
        } else if (randomConcept === 'Curvature of spacetime') {
            question = `Describe the effect of ${randomConcept} on the motion of objects.`;
            answer = `The ${randomConcept} is responsible for the bending of light and the motion of objects in the presence of massive bodies.`;
        } else if (randomConcept === 'Geodesics') {
            question = `Define the concept of ${randomConcept} in the context of general relativity.`;
            answer = `Geodesics represent the paths that particles follow in curved spacetime, corresponding to the straightest possible paths.`;
        } else if (randomConcept === 'Gravitational time dilation') {
            question = `Discuss the phenomenon of ${randomConcept} and its implications.`;
            answer = `Gravitational time dilation refers to the slowing of time in regions of strong gravitational fields, as predicted by general relativity.`;
        }
    }

    if (generalRelativityPrinciples) {
        const principles = ['Einstein field equations', 'Curvature of spacetime', 'Gravitational waves', 'Black holes', 'Cosmological constant']; // Example general relativity principles
        const randomPrincipleIndex = Math.floor(Math.random() * principles.length);
        const randomPrinciple = principles[randomPrincipleIndex];
        if (randomPrinciple === 'Einstein field equations') {
            question = `What are the ${randomPrinciple}?`;
            answer = `The ${randomPrinciple} are a set of ten interrelated differential equations that describe the fundamental interaction of gravitation as a result of spacetime being curved by matter and energy.`;
        } else if (randomPrinciple === 'Curvature of spacetime') {
            question = `Explain the concept of ${randomPrinciple} and its implications in general relativity.`;
            answer = `The ${randomPrinciple} is a key idea in general relativity, indicating that the presence of matter and energy causes spacetime to curve.`;
        } else if (randomPrinciple === 'Gravitational waves') {
            question = `Discuss the phenomenon of ${randomPrinciple} and its significance in astrophysics.`;
            answer = `Gravitational waves are ripples in the fabric of spacetime, carrying energy away from accelerating massive objects such as binary black holes or neutron stars.`;
        } else if (randomPrinciple === 'Black holes') {
            question = `Explain the concept of ${randomPrinciple} and its characteristics.`;
            answer = `A ${randomPrinciple} is a region of spacetime where gravity is so strong that nothing, not even light, can escape its pull.`;
        } else if (randomPrinciple === 'Cosmological constant') {
            question = `Discuss the role of ${randomPrinciple} in the context of the universe's expansion.`;
            answer = `The ${randomPrinciple} is a term that Einstein included in his equations to achieve a static universe, but its role has been reconsidered in modern cosmology, possibly contributing to the acceleration of the universe's expansion.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
