/*
Heat and Enthalpy

Description:
This function generates questions related to heat and enthalpy, covering the basic concepts of heat transfer, thermochemical equations, heat reactions, enthalpy changes, and related topics. All numerical values are randomly generated.

Inputs:
- heatTransfer (boolean): Determines if questions related to heat transfer should be included.
- thermochemicalEquations (boolean): Determines if questions related to thermochemical equations should be included.
- heatReactions (boolean): Determines if questions related to heat reactions should be included.
- enthalpyChanges (boolean): Determines if questions related to enthalpy changes should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = HeatAndEnthalpy(true, false, true, false);
console.log(result); // Output: ['What is the heat of reaction for the given thermochemical equation?', 'The heat of reaction for the given thermochemical equation is -342 kJ/mol.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Thermodynamics.HeatAndEnthalpy = function (heatTransfer, thermochemicalEquations, heatReactions, enthalpyChanges) {
    var question = "";
    var answer = "";

    if (heatTransfer || thermochemicalEquations || heatReactions || enthalpyChanges) {
        var selectedInputs = [];
        if (heatTransfer) selectedInputs.push("heatTransfer");
        if (thermochemicalEquations) selectedInputs.push("thermochemicalEquations");
        if (heatReactions) selectedInputs.push("heatReactions");
        if (enthalpyChanges) selectedInputs.push("enthalpyChanges");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "heatTransfer") {
            var heatValues = (Math.random() * 500).toFixed(2);
            var temperatureChange = (Math.random() * 10).toFixed(2);
            question = `A substance absorbs ${heatValues} J of heat. If the temperature change is ${temperatureChange} °C, what is the specific heat capacity of the substance?`;
            var specificHeatCapacity = (heatValues / temperatureChange).toFixed(2);
            answer = `The specific heat capacity of the substance is ${specificHeatCapacity} J/°C.`;
        } else if (selectedInput === "thermochemicalEquations") {
            var heatOfReaction = (Math.random() * 500).toFixed(2);
            question = `Given a thermochemical equation, calculate the heat of reaction.`;
            answer = `The heat of reaction for the given thermochemical equation is ${heatOfReaction} kJ/mol.`;
        } else if (selectedInput === "heatReactions") {
            var temperatureEffect = Math.random() > 0.5 ? "increases" : "decreases";
            question = `How does a change in temperature affect the rate of a chemical reaction?`;
            answer = `An increase in temperature typically ${temperatureEffect} the rate of a chemical reaction.`;
        } else if (selectedInput === "enthalpyChanges") {
            var positiveOrNegative = Math.random() > 0.5 ? "positive" : "negative";
            var enthalpyChangeValue = (Math.random() * 500).toFixed(2);
            question = `Discuss the implications of a ${positiveOrNegative} enthalpy change in a chemical reaction.`;
            answer = `A ${positiveOrNegative} enthalpy change suggests that the reaction is ${positiveOrNegative}, with an enthalpy change of ${enthalpyChangeValue} kJ/mol.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
