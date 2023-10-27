/*
Equilibrium Constants for Chemical Reactions

Description:
This function generates questions related to equilibrium constants for chemical reactions, covering the calculation and interpretation of equilibrium constants, as well as numerical calculations associated with chemical reaction conditions. All numerical values are randomly generated.

Inputs:
- calculation (boolean): Determines if questions related to the calculation of equilibrium constants should be included.
- interpretation (boolean): Determines if questions related to the interpretation of equilibrium constants should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = EquilibriumConstantsForChemicalReactions(true, false);
console.log(result); // Output: ['Calculate the equilibrium constant (Kc) for the reaction.', 'The equilibrium constant (Kc) for the reaction is 3.42.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Reaction_Kinetics.EquilibriumConstantsForChemicalReactions = function (calculation, interpretation) {
    var question = "";
    var answer = "";

    if (calculation || interpretation) {
        var selectedInputs = [];
        if (calculation) selectedInputs.push("calculation");
        if (interpretation) selectedInputs.push("interpretation");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "calculation") {
            var reactantCoefficients = [1, 2, 3, 4, 5];
            var productCoefficients = [1, 2, 3, 4, 5];
            var reactantCoefficient = reactantCoefficients[Math.floor(Math.random() * reactantCoefficients.length)];
            var productCoefficient = productCoefficients[Math.floor(Math.random() * productCoefficients.length)];
            var equilibriumConstant = (Math.random() * 10).toFixed(2);
            question = `Calculate the equilibrium constant (Kc) for the reaction.`;
            answer = `The equilibrium constant (Kc) for the reaction is ${equilibriumConstant}.`;
        } else if (selectedInput === "interpretation") {
            var randomComparison = Math.random() > 0.5 ? "greater than" : "less than";
            var randomComparisonSymbol = Math.random() > 0.5 ? ">" : "<";
            var equilibriumConstantValue = (Math.random() * 10).toFixed(2);
            var comparisonValue = (Math.random() * 10).toFixed(2);
            question = `If the equilibrium constant (Kc) for a reaction is ${equilibriumConstantValue}, determine whether the reaction strongly favors the products or the reactants based on the value ${comparisonValue}.`;
            answer = `The reaction strongly favors the ${randomComparison} the products, as the value ${comparisonValue} ${randomComparisonSymbol} ${equilibriumConstantValue}.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
