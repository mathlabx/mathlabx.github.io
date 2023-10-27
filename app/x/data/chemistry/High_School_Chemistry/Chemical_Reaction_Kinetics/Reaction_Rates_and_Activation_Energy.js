/*
Reaction Rates and Activation Energy

Description:
This function generates questions related to reaction rates and activation energy, covering the basic concepts of reaction rates, factors influencing rates, and activation energy. All numerical values are randomly generated.

Inputs:
- reactionRates (boolean): Determines if questions related to reaction rates should be included.
- activationEnergy (boolean): Determines if questions related to activation energy should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ReactionRatesAndActivationEnergy(true, false);
console.log(result); // Output: ['What factors can affect the rate of a chemical reaction?', 'Temperature, concentration, catalysts, and surface area are some factors that can affect the rate of a chemical reaction.']
*/

$X.chemistry.High_School_Chemistry.Chemical_Reaction_Kinetics.ReactionRatesAndActivationEnergy = function (reactionRates, activationEnergy) {
    var question = "";
    var answer = "";

    if (reactionRates || activationEnergy) {
        var selectedInputs = [];
        if (reactionRates) selectedInputs.push("reactionRates");
        if (activationEnergy) selectedInputs.push("activationEnergy");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "reactionRates") {
            var factors = ["Temperature", "Concentration", "Catalysts", "Surface area"];
            var selectedFactor = factors[Math.floor(Math.random() * factors.length)];
            question = `What factors can affect the rate of a chemical reaction?`;
            answer = `${selectedFactor}, among others, can affect the rate of a chemical reaction.`;
        } else if (selectedInput === "activationEnergy") {
            var randomComparison = Math.random() > 0.5 ? "higher" : "lower";
            var activationEnergyValue = (Math.random() * 100).toFixed(2);
            question = `Explain how the presence of a catalyst can affect the activation energy of a reaction.`;
            answer = `The presence of a catalyst can lead to a ${randomComparison} activation energy for the reaction, thereby increasing the rate of the reaction.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
