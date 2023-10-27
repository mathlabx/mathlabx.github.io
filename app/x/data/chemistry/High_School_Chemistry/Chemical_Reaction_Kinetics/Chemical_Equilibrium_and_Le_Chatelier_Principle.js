/*
Chemical Equilibrium and Le-Chatelier's Principle

Description:
This function generates questions related to chemical equilibrium and Le-Chatelier's Principle, covering the basic concepts of equilibrium constants, equilibrium conditions, and the effects of changing conditions on equilibrium. All numerical values are randomly generated.

Inputs:
- equilibriumConstants (boolean): Determines if questions related to equilibrium constants should be included.
- leChateliersPrinciple (boolean): Determines if questions related to Le-Chatelier's Principle should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ChemicalEquilibriumAndLeChateliersPrinciple(true, false);
console.log(result); // Output: ['What is the equilibrium constant expression for the reaction?', 'The equilibrium constant expression for the reaction is Kc = [C]^c[D]^d / [A]^a[B]^b.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Reaction_Kinetics.ChemicalEquilibriumAndLeChateliersPrinciple = function (equilibriumConstants, leChateliersPrinciple) {
    var question = "";
    var answer = "";

    if (equilibriumConstants || leChateliersPrinciple) {
        var selectedInputs = [];
        if (equilibriumConstants) selectedInputs.push("equilibriumConstants");
        if (leChateliersPrinciple) selectedInputs.push("leChateliersPrinciple");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "equilibriumConstants") {
            var equilibriumConstantsDict = {
                "1": "The equilibrium constant (Kc) is a measure of the ratio of products to reactants at equilibrium, where the concentrations of all species are expressed in molarity (M).",
                "2": "The value of the equilibrium constant indicates the extent to which a reaction has proceeded towards the formation of products under specific conditions.",
                "3": "The equilibrium constant expression for a general reaction aA + bB ⇌ cC + dD is given by Kc = [C]^c[D]^d / [A]^a[B]^b, where the brackets represent the molar concentrations of the respective species.",
                "4": "The equilibrium constant remains constant at a given temperature, allowing predictions about the direction of a reaction and the relative concentrations of products and reactants at equilibrium.",
                "5": "The numerical value of the equilibrium constant can provide insights into the relative stability and energy differences between the reactants and products in a chemical system.",
                "6": "The principle of microscopic reversibility is often used to describe the relationship between the forward and reverse reactions in a chemical equilibrium system, emphasizing the dynamic nature of the equilibrium process.",
                "7": "The value of the equilibrium constant is affected by changes in temperature, pressure, and the initial concentrations of reactants and products, illustrating the dependence of the equilibrium position on external conditions.",
                "8": "The magnitude of the equilibrium constant determines whether a reaction strongly favors the formation of products (Kc > 1), proceeds to a limited extent (Kc ≈ 1), or primarily remains as reactants (Kc < 1) at equilibrium.",
                "9": "The relationship between the equilibrium constant and the standard Gibbs free energy change (ΔG°) is described by the equation ΔG° = -RTln(Kc), where R is the gas constant and T is the temperature in Kelvin.",
                "10": "The concept of reaction quotient (Qc) is used to compare the relative concentrations of products and reactants at any point in a reaction, providing insights into the direction in which the reaction will proceed to reach equilibrium.",
                "11": "The equilibrium constant can be influenced by the presence of catalysts or inhibitors, which can alter the rates of forward and reverse reactions without affecting the overall equilibrium position.",
                "12": "The principle of detailed balance is fundamental in understanding the conditions necessary for a chemical system to reach equilibrium, emphasizing the balance between forward and reverse processes at the molecular level.",
                "13": "The equilibrium constant can be determined experimentally by measuring the concentrations of reactants and products at equilibrium and using these values to calculate the value of Kc for the reaction.",
                "14": "The relationship between the equilibrium constant and the position of equilibrium is governed by the reaction quotient (Qc), which helps predict whether a reaction will shift to the left or right to reach equilibrium.",
                "15": "The concept of activity is often used to account for the non-ideality of solutions and gases when calculating the equilibrium constant, providing corrections for deviations from ideal behavior in real systems.",
                "16": "The temperature dependence of the equilibrium constant is described by the Van 't Hoff equation, which relates the equilibrium constant at different temperatures to the standard enthalpy change (ΔH°) and the standard entropy change (ΔS°) of the reaction.",
                "17": "The equilibrium constant can be used to determine the concentrations of reactants and products at equilibrium if the initial concentrations are known, allowing the prediction of the extent of the reaction under specific conditions.",
                "18": "The value of the equilibrium constant influences the position of equilibrium and the relative concentrations of reactants and products, reflecting the degree to which the system has reached a stable and balanced state.",
                "19": "The activity coefficients of different species in a solution or mixture are essential for calculating the effective concentrations of species when accounting for deviations from ideal behavior in non-ideal solutions.",
                "20": "The use of equilibrium constants is crucial in various fields of chemistry, including chemical engineering, environmental science, and biological research, where the understanding of chemical equilibria is vital for predicting and controlling chemical processes and reactions."
            };

            var equilibriumConstantsKeys = Object.keys(equilibriumConstantsDict);
            var randomEquilibriumConstants = equilibriumConstantsKeys[Math.floor(Math.random() * equilibriumConstantsKeys.length)];
            question = "What is the equilibrium constant expression for the reaction?";
            answer = equilibriumConstantsDict[randomEquilibriumConstants];
        } else if (selectedInput === "leChateliersPrinciple") {
            var leChateliersPrincipleDict = {
                "1": "Le-Chatelier's Principle states that if a system at equilibrium is disturbed by a change in temperature, pressure, or concentration of reactants or products, the system will adjust to partially counteract the imposed change and reestablish a new equilibrium.",
                "2": "An increase in pressure applied to a gaseous system at equilibrium will cause the system to shift in the direction that decreases the total number of moles of gas, reducing the pressure and restoring the equilibrium position.",
                "3": "A decrease in volume of a gaseous equilibrium system will lead to an increase in the partial pressures of the components, shifting the equilibrium to the side with fewer moles of gas and alleviating the stress caused by the volume change.",
                "4": "The addition of a catalyst to a system at equilibrium does not affect the position of equilibrium but can increase the rate at which the system reaches equilibrium by lowering the activation energy barrier for both the forward and reverse reactions.",
                "5": "An increase in temperature in an endothermic reaction at equilibrium will shift the equilibrium position to the right, favoring the formation of products, whereas a decrease in temperature will favor the reverse reaction and the formation of reactants.",
                "6": "The removal of products from a system at equilibrium will result in the net forward reaction to restore the concentrations of the products, while the removal of reactants will cause the net reverse reaction to compensate for the decrease in reactant concentrations.",
                "7": "The addition of a substance that reacts with one of the components at equilibrium will lead to a shift in the equilibrium position, as the system tries to counteract the changes caused by the consumption of the added substance through the forward or reverse reaction.",
                "8": "A decrease in temperature in an exothermic reaction at equilibrium will shift the equilibrium position to the left, favoring the formation of reactants, while an increase in temperature will favor the forward reaction and the formation of products.",
                "9": "The shift in equilibrium caused by changes in concentration, temperature, or pressure follows the principle of microscopic reversibility, ensuring that the rates of the forward and reverse reactions remain proportional to the reactant and product concentrations.",
                "10": "Le-Chatelier's Principle is a crucial concept in understanding the dynamic nature of chemical equilibria and the response of systems to external perturbations, providing a framework for predicting and interpreting the behavior of various chemical systems.",
                "11": "The application of Le-Chatelier's Principle extends to various chemical and industrial processes, including the production of ammonia, the Haber-Bosch process, and the synthesis of various chemicals, where the manipulation of equilibrium conditions is essential for optimizing yields and efficiencies."
            };

            var leChateliersPrincipleKeys = Object.keys(leChateliersPrincipleDict);
            var randomLeChateliersPrinciple = leChateliersPrincipleKeys[Math.floor(Math.random() * leChateliersPrincipleKeys.length)];
            question = "What is Le-Chatelier's Principle?";
            answer = leChateliersPrincipleDict[randomLeChateliersPrinciple];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
