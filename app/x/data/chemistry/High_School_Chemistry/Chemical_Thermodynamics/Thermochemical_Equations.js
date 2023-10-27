/*
Thermochemical Equations

Description:
This function generates questions related to thermochemical equations, covering the basic concepts of enthalpy changes, heat reactions, and the balancing of thermochemical equations. All numerical values are randomly generated.

Inputs:
- enthalpyChanges (boolean): Determines if questions related to enthalpy changes should be included.
- heatReactions (boolean): Determines if questions related to heat reactions should be included.
- balancingEquations (boolean): Determines if questions related to balancing thermochemical equations should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ThermochemicalEquations(true, false, true);
console.log(result); // Output: ['What is the balanced thermochemical equation for the given enthalpy change?', 'The balanced thermochemical equation for the given enthalpy change is CH4 + 2O2 -> CO2 + 2H2O.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Thermodynamics.ThermochemicalEquations = function (enthalpyChanges, heatReactions, balancingEquations) {
    var question = "";
    var answer = "";

    if (enthalpyChanges || heatReactions || balancingEquations) {
        var selectedInputs = [];
        if (enthalpyChanges) {
            var substances = ["A", "B", "C", "D", "E"];
            var substance1 = substances[Math.floor(Math.random() * substances.length)];
            var substance2 = substances[Math.floor(Math.random() * substances.length)];
            var deltaH = Math.floor(Math.random() * 100) + 1;
            selectedInputs.push({ type: "enthalpyChanges", substance1: substance1, substance2: substance2, deltaH: deltaH });
        }
        if (heatReactions) {
            var temperatureChange = Math.floor(Math.random() * 100) + 1;
            selectedInputs.push({ type: "heatReactions", temperatureChange: temperatureChange });
        }
        if (balancingEquations) {
            thermochemicalEquations = [
                { reactants: "CH4 + 2O2", products: "CO2 + 2H2O" },
                { reactants: "N2 + 3H2", products: "2NH3" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "2Mg + O2", products: "2MgO" },
                { reactants: "N2 + O2", products: "2NO" },
                { reactants: "C + O2", products: "CO2" },
                { reactants: "P4 + 5O2", products: "P4O10" },
                { reactants: "C2H6 + O2", products: "CO2 + H2O" },
                { reactants: "2H2 + O2", products: "2H2O" },
                { reactants: "4NH3 + 5O2", products: "4NO + 6H2O" },
                { reactants: "2C2H6 + 7O2", products: "4CO2 + 6H2O" },
                { reactants: "2N2 + 3H2", products: "2NH3" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" },
                { reactants: "C3H8 + 5O2", products: "3CO2 + 4H2O" },
                { reactants: "2C2H2 + 5O2", products: "4CO2 + 2H2O" },
                { reactants: "2H2S + 3O2", products: "2SO2 + 2H2O" }
            ];
        }

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput.type === "enthalpyChanges") {
            question = `Calculate the enthalpy change when ${selectedInput.substance1} reacts with ${selectedInput.substance2}.`;
            answer = `The enthalpy change for the reaction is ${selectedInput.deltaH} kJ/mol.`;
        } else if (selectedInput.type === "heatReactions") {
            question = `How does a temperature change of ${selectedInput.temperatureChange} degrees Celsius affect the rate of a chemical reaction?`;
            answer = `An increase in temperature typically increases the rate of a chemical reaction.`;
        } else if (selectedInput.type === "balancingEquations") {
            question = `Balance the following thermochemical equation: ${selectedInput.reactants} -> ${selectedInput.products}`;
            answer = `The balanced thermochemical equation is ${selectedInput.reactants} -> ${selectedInput.products}.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}

