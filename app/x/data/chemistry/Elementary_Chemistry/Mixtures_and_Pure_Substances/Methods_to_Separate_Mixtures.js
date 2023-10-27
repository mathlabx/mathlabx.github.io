/*
Methods to Separate Mixtures

Description:
This function generates questions related to the methods used to separate mixtures, covering various separation techniques such as filtration, evaporation, crystallization, etc. All numerical values are randomly generated.

Inputs:
- filtration (boolean): Determines if questions related to filtration should be included.
- evaporation (boolean): Determines if questions related to evaporation should be included.
- crystallization (boolean): Determines if questions related to crystallization should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = MethodsToSeparateMixtures(true, false, true);
console.log(result); // Output: ['What is the process of crystallization used for?', 'The process of crystallization is used to separate a solid that has dissolved in a liquid by allowing the liquid to evaporate, leaving behind the solid in its crystalline form.']
*/

$X.chemistry.Elementary_Chemistry.Mixtures_and_Pure_Substances.MethodsToSeparateMixtures = function (filtration, evaporation, crystallization) {
    var question = "";
    var answer = "";

    if (filtration || evaporation || crystallization) {
        var selectedInputs = [];
        if (filtration) selectedInputs.push("filtration");
        if (evaporation) selectedInputs.push("evaporation");
        if (crystallization) selectedInputs.push("crystallization");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "filtration") {
            var filtrationQuestions = [
                "What is filtration used for in the separation of mixtures?",
                "How is the process of filtration employed in separating mixtures?",
                "Explain the purpose of filtration in the separation of mixtures.",
                "When is filtration used in the separation of mixtures, and what is its function?",
                "Define the role of filtration in separating mixtures and its application in specific scenarios.",
                "Elucidate the significance of filtration in the separation of mixtures and provide examples of its implementation.",
                "What are the key uses of filtration in separating different types of mixtures?",
                "Describe the practical applications of filtration in the separation of mixtures and the effectiveness of this method.",
                "Illustrate the importance of filtration as a method for separating various mixtures and its role in specific contexts.",
                "What are the distinctive features of filtration in the separation of mixtures, and how does it contribute to the process?"
            ];

            var filtrationAnswers = [
                "Filtration is used to separate solid particles from a liquid or gas by passing the mixture through a medium that retains the solid particles.",
                "The process of filtration separates solid components from a liquid or gas by utilizing a barrier that traps the solid particles while allowing the liquid or gas to pass through.",
                "Filtration serves the purpose of isolating solid substances from a liquid or gas by utilizing a porous medium to trap the solid components.",
                "Filtration is employed when there is a need to extract solid particles from a liquid or gas by passing the mixture through a medium that captures the solid substances.",
                "In the separation of mixtures, filtration plays a crucial role in extracting solid particles from a liquid or gas by using a medium that selectively traps the solid components.",
                "Filtration is significant in separating mixtures as it enables the extraction of solid components from a liquid or gas by utilizing a medium that retains the solid particles while allowing the other components to pass through.",
                "The primary uses of filtration in the separation of mixtures include isolating solid substances from liquids or gases, such as in the purification of water and air filtration systems.",
                "Filtration finds practical applications in various contexts, such as purifying water by removing solid impurities or separating particulate matter from gases in air filtration systems.",
                "Filtration holds importance as it is a method for separating diverse mixtures, playing a key role in scenarios such as purifying water for consumption and filtering impurities from gases.",
                "Filtration is distinguished by its ability to separate mixtures effectively, particularly in cases where the isolation of solid particles from liquids or gases is required."
            ];

            var index = Math.floor(Math.random() * filtrationQuestions.length);
            question = filtrationQuestions[index];
            answer = filtrationAnswers[index];
        } else if (selectedInput === "evaporation") {
            var evaporationQuestions = [
                "How is the process of evaporation utilized in the separation of mixtures?",
                "What role does evaporation play in separating mixtures, and under what conditions is it effective?",
                "Explain the applications of evaporation in the separation of mixtures and the underlying principles that govern this process.",
                "When is evaporation employed as a method for separating mixtures, and what factors contribute to its effectiveness?",
                "Define the significance of evaporation as a technique for separating mixtures, and provide examples of its practical use.",
                "Elucidate the process of evaporation as a means of separating mixtures and its relevance in different contexts.",
                "What are the key considerations for employing evaporation in the separation of various mixtures, and how does it compare to other separation methods?",
                "Describe the practical applications of evaporation in the separation of mixtures and the factors that influence its efficacy.",
                "Illustrate the importance of evaporation as a method for separating various mixtures and its role in specific scenarios.",
                "What are the distinctive features of evaporation in the context of separating mixtures, and how does it contribute to the overall process?"
            ];

            var evaporationAnswers = [
                "Evaporation is used to separate a solvent from a solution by converting the solvent from a liquid to a gaseous state, leaving behind the solute.",
                "In the separation of mixtures, evaporation serves the role of isolating a solvent from a solution by transforming the solvent into a vapor, thereby separating it from the dissolved substances.",
                "Evaporation finds applications in separating mixtures by facilitating the removal of a solvent from a solution, driven by the conversion of the solvent into a gaseous state.",
                "Evaporation is employed when there is a need to extract a solvent from a solution by converting the solvent into vapor, resulting in the separation of the solvent from the dissolved components.",
                "The significance of evaporation lies in its ability to separate mixtures effectively, particularly when isolating solvents from solutions, as exemplified in the concentration of solutions and the purification of substances.",
                "The process of evaporation is crucial in the separation of mixtures, allowing the extraction of solvents from solutions and enabling applications such as the concentration of solutions and the purification of substances.",
                "Key considerations for implementing evaporation in the separation of various mixtures include the characteristics of the substances involved and the specific conditions required for the evaporation process.",
                "Evaporation is applied in diverse contexts for the separation of mixtures, finding use in scenarios such as concentrating solutions in the chemical industry and purifying substances in research laboratories.",
                "Evaporation plays a pivotal role as a method for separating various mixtures, contributing to processes such as the concentration of solutions and the extraction of solvents from solutions.",
                "The distinctive features of evaporation in the context of separating mixtures encompass its ability to facilitate the isolation of solvents from solutions and its influence on the overall separation process."
            ];

            var index = Math.floor(Math.random() * evaporationQuestions.length);
            question = evaporationQuestions[index];
            answer = evaporationAnswers[index];
        } else if (selectedInput === "crystallization") {
            var crystallizationQuestions = [
                "What is the process of crystallization used for in the separation of mixtures?",
                "How is crystallization employed to separate mixtures, and what factors contribute to its effectiveness?",
                "Explain the applications of crystallization in the separation of mixtures and the principles governing this process.",
                "When is crystallization employed as a method for separating mixtures, and under what conditions does it yield the desired results?",
                "Define the significance of crystallization as a technique for separating mixtures, and provide examples of its practical use.",
                "Elucidate the process of crystallization in the context of separating mixtures and its relevance in various applications.",
                "What are the key considerations for employing crystallization in the separation of different mixtures, and how does it compare to other separation methods?",
                "Describe the practical applications of crystallization in the separation of mixtures and the factors that influence its efficacy.",
                "Illustrate the importance of crystallization as a method for separating various mixtures and its role in specific scenarios.",
                "What are the distinctive features of crystallization in the context of separating mixtures, and how does it contribute to the overall process?"
            ];

            var crystallizationAnswers = [
                "Crystallization is used to separate a solid that has dissolved in a liquid by allowing the liquid to evaporate, leaving behind the solid in its crystalline form.",
                "In the separation of mixtures, crystallization is employed to isolate a solid component from a solution by enabling the liquid to evaporate, thereby causing the solid to precipitate in its crystalline structure.",
                "Crystallization is applied in the separation of mixtures to extract solid substances from solutions, involving the evaporation of the liquid phase to yield the solid material in its crystal form.",
                "Crystallization is employed when there is a need to extract solid particles from solutions by allowing the solvent to evaporate, resulting in the formation of the solid component in its crystalline state.",
                "The significance of crystallization lies in its ability to separate mixtures effectively, particularly in cases involving the extraction of solid substances from solutions and the purification of materials through the formation of crystals.",
                "The process of crystallization is crucial in the separation of mixtures, allowing the isolation of solid components from solutions and facilitating applications such as material purification and the production of crystalline substances.",
                "Key considerations for employing crystallization in the separation of various mixtures encompass the conditions required for the evaporation process and the characteristics of the substances involved.",
                "Crystallization finds practical applications in diverse fields for the separation of mixtures, including processes such as material purification in the pharmaceutical industry and the production of refined substances in chemical laboratories.",
                "Crystallization plays a pivotal role as a method for separating various mixtures, contributing to processes such as material purification and the extraction of solid substances from solutions.",
                "The distinctive features of crystallization in the context of separating mixtures include its capacity to enable the extraction of solid substances from solutions and its influence on the overall separation process."
            ];

            var index = Math.floor(Math.random() * crystallizationQuestions.length);
            question = crystallizationQuestions[index];
            answer = crystallizationAnswers[index];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
