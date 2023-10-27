/*
Differences between Mixtures and Pure Substances

Description:
This function generates questions related to the differences between mixtures and pure substances, covering various aspects such as their composition, properties, etc. All numerical values are randomly generated.

Inputs:
- composition (boolean): Determines if questions related to composition should be included.
- properties (boolean): Determines if questions related to properties should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = DifferencesBetweenMixturesAndPureSubstances(true, false);
console.log(result); // Output: ['What is the primary difference between mixtures and pure substances in terms of composition?', 'The primary difference between mixtures and pure substances is that mixtures are composed of two or more different substances, whereas pure substances are composed of only one type of substance.']
*/

$X.chemistry.Elementary_Chemistry.Mixtures_and_Pure_Substances.DifferencesBetweenMixturesAndPureSubstances = function (composition, properties) {
    var question = "";
    var answer = "";

    if (composition || properties) {
        var selectedInputs = [];
        if (composition) selectedInputs.push("composition");
        if (properties) selectedInputs.push("properties");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "composition") {
            var compositionQuestions = [
                "What distinguishes mixtures from pure substances based on their composition?",
                "How is the composition of mixtures different from that of pure substances?",
                "Explain the differences in composition between mixtures and pure substances.",
                "What defines the composition of mixtures and pure substances, and how are they dissimilar?",
                "In terms of composition, what sets mixtures apart from pure substances?",
                "Compare the compositions of mixtures and pure substances and highlight their dissimilarities.",
                "Define the compositional disparity between mixtures and pure substances.",
                "Describe how the composition of mixtures contrasts with that of pure substances.",
                "Elucidate the distinctions in composition between mixtures and pure substances.",
                "What are the characteristic differences in the composition of mixtures and pure substances?"
            ];

            var compositionAnswers = [
                "Mixtures are made up of two or more different substances, while pure substances consist of only one type of substance.",
                "The composition of mixtures includes multiple substances, whereas pure substances have a singular substance.",
                "Mixtures comprise different elements or compounds, while pure substances contain only one element or compound.",
                "Mixtures are a combination of different components, whereas pure substances consist of a single component.",
                "Mixtures contain diverse elements or compounds, whereas pure substances contain a single element or compound.",
                "The composition of mixtures involves multiple elements or compounds, whereas pure substances involve a single element or compound.",
                "Mixtures are a blend of various elements or compounds, while pure substances are comprised of a single element or compound.",
                "The composition of mixtures encompasses multiple elements or compounds, while pure substances encompass a single element or compound.",
                "Mixtures are composed of multiple elements or compounds, while pure substances are composed of a single element or compound.",
                "The composition of mixtures is characterized by the presence of multiple elements or compounds, whereas pure substances contain only one element or compound."
            ];

            var index = Math.floor(Math.random() * compositionQuestions.length);
            question = compositionQuestions[index];
            answer = compositionAnswers[index];
        } else if (selectedInput === "properties") {
            var propertiesQuestions = [
                "What are the distinguishing properties of mixtures and pure substances?",
                "How do the properties of mixtures differ from those of pure substances?",
                "Explain the dissimilar properties between mixtures and pure substances.",
                "What defines the properties of mixtures and pure substances, and how do they differ?",
                "In terms of properties, how do mixtures and pure substances contrast with each other?",
                "Compare the properties of mixtures and pure substances and highlight their differences.",
                "Define the differences in properties between mixtures and pure substances.",
                "Describe how the properties of mixtures differ from those of pure substances.",
                "Elucidate the distinctions in properties between mixtures and pure substances.",
                "What are the characteristic differences in the properties of mixtures and pure substances?"
            ];

            var propertiesAnswers = [
                "The distinguishing properties of mixtures include variable composition, while pure substances have a fixed composition. Additionally, mixtures can be separated by physical means, whereas pure substances cannot be separated by physical means.",
                "Mixtures possess variable composition and can be separated by physical means, whereas pure substances have a fixed composition and cannot be separated by physical means.",
                "Mixtures exhibit variable properties due to their variable composition, while pure substances exhibit consistent properties due to their fixed composition.",
                "The properties of mixtures can vary based on their components, whereas the properties of pure substances remain constant. Additionally, mixtures can be separated by physical methods, while pure substances cannot.",
                "Mixtures can exhibit different properties depending on their components, while pure substances exhibit uniform properties. Furthermore, mixtures can be physically separated, while pure substances cannot.",
                "The properties of mixtures can vary due to their varying compositions, while pure substances maintain consistent properties due to their fixed compositions.",
                "Mixtures have variable properties owing to their variable composition, while pure substances have constant properties owing to their uniform composition.",
                "The properties of mixtures can differ based on their components, while the properties of pure substances remain uniform. Moreover, mixtures can be physically separated, while pure substances cannot.",
                "Mixtures can display diverse properties as a result of their diverse composition, while pure substances exhibit consistent properties. Additionally, mixtures can be physically segregated, while pure substances cannot.",
                "The properties of mixtures can vary depending on the components present, while the properties of pure substances remain constant. Additionally, mixtures can be separated using physical methods, while pure substances cannot."
            ];

            var index = Math.floor(Math.random() * propertiesQuestions.length);
            question = propertiesQuestions[index];
            answer = propertiesAnswers[index];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
