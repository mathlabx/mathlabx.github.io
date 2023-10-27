/*
Reaction Enthalpy and Entropy Changes

Description:
This function generates questions related to reaction enthalpy and entropy changes, covering the basic concepts of reaction enthalpy, entropy changes, and thermodynamics of reactions. All numerical values are randomly generated.

Inputs:
- reactionEnthalpy (boolean): Determines if questions related to reaction enthalpy should be included.
- entropyChanges (boolean): Determines if questions related to entropy changes should be included.
- reactionThermodynamics (boolean): Determines if questions related to reaction thermodynamics should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ReactionEnthalpyAndEntropyChanges(true, false, true);
console.log(result); // Output: ['What is the enthalpy change for the given reaction?', 'The enthalpy change for the given reaction is -325 kJ/mol.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Thermodynamics.ReactionEnthalpyAndEntropyChanges = function (reactionEnthalpy, entropyChanges, reactionThermodynamics) {
    var question = "";
    var answer = "";

    if (reactionEnthalpy) {
        var reactants = "H2 + Cl2";
        var products = "2HCl";
        var enthalpyChange = (Math.random() * (500 - (-500)) + (-500)).toFixed(2);

        question = `What is the enthalpy change for the reaction ${reactants} → ${products} when the reaction enthalpy is given?`;
        answer = `The enthalpy change for the reaction ${reactants} → ${products} is ${enthalpyChange} kJ/mol.`;
    }

    if (entropyChanges) {
        var substances = "A and B";
        var initialEntropy = (Math.random() * 200).toFixed(2);
        var finalEntropy = (Math.random() * 200).toFixed(2);

        question = `Calculate the change in entropy when substances ${substances} undergo a phase change with initial entropy ${initialEntropy} J/K and final entropy ${finalEntropy} J/K.`;
        answer = `The change in entropy when ${substances} undergo a phase change is ${finalEntropy - initialEntropy} J/K.`;
    }

    if (reactionThermodynamics) {
        var thermodynamicValue = (Math.random() * 500).toFixed(2);

        question = `Explain the thermodynamics of the given reaction with an enthalpy change of ${thermodynamicValue} kJ/mol and an entropy change of ${thermodynamicValue} J/K.`;
        answer = `The thermodynamics of the given reaction indicate an enthalpy change of ${thermodynamicValue} kJ/mol and an entropy change of ${thermodynamicValue} J/K.`;
    }

    // Return the question and answer in an array
    return [question, answer];
}
