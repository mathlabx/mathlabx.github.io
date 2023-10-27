/*
Classification of Matter

Description:
This function generates questions related to the classification of matter, covering various aspects such as the states of matter, chemical properties, etc. All numerical values are randomly generated.

Inputs:
- statesOfMatter (boolean): Determines if questions related to states of matter should be included.
- chemicalProperties (boolean): Determines if questions related to chemical properties should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ClassificationOfMatter(true, false);
console.log(result); // Output: ['What are the different states of matter?', 'The different states of matter are solid, liquid, and gas.']
*/

$X.chemistry.Elementary_Chemistry.Matter_and_Properties.ClassificationOfMatter = function (statesOfMatter, chemicalProperties) {
    var question = "";
    var answer = "";

    if (statesOfMatter && chemicalProperties) {
        if (Math.random() > 0.5) {
            statesOfMatter = false;
        } else {
            chemicalProperties = false;
        }
    }

    if (statesOfMatter) {
        // Logic for questions related to states of matter
        // Generate questions and answers with randomly generated numerical values
        var states = ["solid", "liquid", "gas"];
        var randomStateIndex = Math.floor(Math.random() * states.length);
        var stateDescription = "";
        if (randomStateIndex === 0) {
            stateDescription = "Particles closely packed, vibrate in place.";
        } else if (randomStateIndex === 1) {
            stateDescription = "Particles have more freedom of movement, flow and take the shape of the container.";
        } else if (randomStateIndex === 2) {
            stateDescription = "Particles have high energy, move rapidly, and are far apart.";
        }
        question = "Describe the state of matter that has the following characteristics: " + stateDescription;
        answer = states[randomStateIndex];
    }

    if (chemicalProperties) {
        // Logic for questions related to chemical properties
        // Generate questions and answers with randomly generated numerical values
        var properties = ["flammability", "reactivity", "toxicity", "oxidation state"];
        var randomProperty = properties[Math.floor(Math.random() * properties.length)];
        question = "What are some common chemical properties of matter?";
        answer = "Some common chemical properties of matter are " + randomProperty + ".";
    }

    // Return the question and answer in an array
    return [question, answer];
}
