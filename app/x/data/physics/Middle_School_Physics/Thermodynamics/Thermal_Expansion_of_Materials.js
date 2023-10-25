/*
Thermal Expansion of Materials

Inputs:
- solids (boolean): Determines if questions related to thermal expansion of solids should be included.
- liquids (boolean): Determines if questions related to thermal expansion of liquids should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of thermal expansion in materials, covering both solids and liquids. It includes topics such as linear expansion, volume expansion, and practical applications of thermal expansion. All numerical values are randomly generated.

Example Usage:
const result = Thermal_Expansion_of_Materials(true, true);
console.log(result); // Output: ['Explain the concept of thermal expansion in solids.', 'Thermal expansion in solids refers to the increase in size or volume of a solid due to an increase in temperature.']
*/

$X.physics.Middle_School_Physics.Thermodynamics.Thermal_Expansion_of_Materials = function(solids, liquids) {
    function generateRandomSolid() {
        const solids = ['steel', 'aluminum', 'copper', 'iron', 'zinc', 'nickel', 'silver', 'gold'];
        return solids[Math.floor(Math.random() * solids.length)];
    }
    
    function generateRandomLiquid() {
        const liquids = ['water', 'alcohol', 'mercury', 'glycerin', 'oil', 'ethyl alcohol', 'milk', 'acetone'];
        return liquids[Math.floor(Math.random() * liquids.length)];
    }
    
    const questions = [];
    const answers = [];

    if (solids) {
        const material1 = generateRandomSolid();
        const temperature1 = Math.floor(Math.random() * 100);
        const coefficient1 = (Math.random() * 0.01).toFixed(4);
        const length1 = (Math.random() * 100).toFixed(2);
        questions.push(`Explain the concept of linear expansion in ${material1} due to a temperature change of ${temperature1} degrees Celsius.`);
        answers.push(`Linear expansion in ${material1} refers to the change in length of the material resulting from a temperature change. It is represented by the equation ΔL = α * L * ΔT, where ΔL is the change in length, α is the coefficient of linear expansion (${coefficient1} per degree Celsius), L is the original length, and ΔT is the change in temperature (${temperature1} degrees Celsius).`);

        const material2 = generateRandomSolid();
        const temperature2 = Math.floor(Math.random() * 100);
        const coefficient2 = (Math.random() * 0.01).toFixed(4);
        const volume1 = (Math.random() * 100).toFixed(2);
        questions.push(`Describe the volume expansion of ${material2} with an initial volume of ${volume1} cm³ due to a temperature change of ${temperature2} degrees Celsius.`);
        answers.push(`Volume expansion in ${material2} occurs when the material's volume changes due to a temperature change. It is represented by the equation ΔV = β * V * ΔT, where ΔV is the change in volume, β is the coefficient of volume expansion (${coefficient2} per degree Celsius), V is the initial volume, and ΔT is the change in temperature (${temperature2} degrees Celsius).`);
    }

    if (liquids) {
        const liquid1 = generateRandomLiquid();
        const temperature3 = Math.floor(Math.random() * 100);
        const coefficient3 = (Math.random() * 0.01).toFixed(4);
        const volume2 = (Math.random() * 100).toFixed(2);
        questions.push(`Explain the phenomenon of volume expansion in ${liquid1} with an initial volume of ${volume2} mL due to a temperature change of ${temperature3} degrees Celsius.`);
        answers.push(`Volume expansion in ${liquid1} is the increase in volume resulting from a temperature change. It is represented by the equation ΔV = β * V * ΔT, where ΔV is the change in volume, β is the coefficient of volume expansion (${coefficient3} per degree Celsius), V is the initial volume, and ΔT is the change in temperature (${temperature3} degrees Celsius).`);
    }

    function getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        return [selectedQuestions[randomIndex], selectedAnswers[randomIndex]];
    }

    const result = getRandomQuestionWithAnswer(questions, answers);
    return result;
}