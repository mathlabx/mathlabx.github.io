/*
Thermodynamic Cycles

Description:
This function generates questions related to thermodynamic cycles, covering various cycles such as the Carnot cycle, the Stirling cycle, and the Brayton cycle. All numerical values are randomly generated.

Inputs:
- carnotCycle (boolean): Determines if questions related to the Carnot cycle should be included.
- stirlingCycle (boolean): Determines if questions related to the Stirling cycle should be included.
- braytonCycle (boolean): Determines if questions related to the Brayton cycle should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = ThermodynamicCycles(true, false, true);
console.log(result); // Output: ['In a Brayton cycle, the gas turbine has an inlet temperature of 800 K and an outlet temperature of 600 K. What is the thermal efficiency of the cycle?', 'The thermal efficiency of the Brayton cycle is 25%.']
*/

$X.physics.University_Physics.Thermodynamics.ThermodynamicCycles = function (carnotCycle, stirlingCycle, braytonCycle) {
    var question = "";
    var answer = "";

    var selectedInputs = [];
    if (carnotCycle) {
        selectedInputs.push("carnotCycle");
    }
    if (stirlingCycle) {
        selectedInputs.push("stirlingCycle");
    }
    if (braytonCycle) {
        selectedInputs.push("braytonCycle");
    }

    var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

    if (selectedInput === "carnotCycle") {
        // Logic for questions related to the Carnot cycle
        var heatAbsorbed = Math.floor(Math.random() * 501); // Random number between 0 and 500
        var heatRejected = Math.floor(Math.random() * (heatAbsorbed + 1)); // Random number between 0 and heatAbsorbed
        var efficiency = ((heatAbsorbed - heatRejected) / heatAbsorbed) * 100;
        question = `In a Carnot cycle, the heat absorbed at the high-temperature reservoir is ${heatAbsorbed} J and the heat rejected at the low-temperature reservoir is ${heatRejected} J. What is the efficiency of the cycle?`;
        answer = `The efficiency of the Carnot cycle is ${efficiency.toFixed(2)}%.`;
    } else if (selectedInput === "stirlingCycle") {
        // Logic for questions related to the Stirling cycle
        var workExpansion = Math.floor(Math.random() * 401); // Random number between 0 and 400
        var workCompression = Math.floor(Math.random() * (workExpansion + 1)); // Random number between 0 and workExpansion
        var netWorkOutput = workExpansion - workCompression;
        question = `In a Stirling cycle, the work done during the isothermal expansion process is ${workExpansion} J and the work done during the isothermal compression process is ${workCompression} J. What is the net work output of the cycle?`;
        answer = `The net work output of the Stirling cycle is ${netWorkOutput} J.`;
    } else if (selectedInput === "braytonCycle") {
        // Logic for questions related to the Brayton cycle
        var inletTemperature = Math.floor(Math.random() * 801) + 200; // Random number between 200 and 1000
        var outletTemperature = Math.floor(Math.random() * (inletTemperature - 200)) + 100; // Random number between 100 and (inletTemperature - 100)
        var thermalEfficiency = ((inletTemperature - outletTemperature) / inletTemperature) * 100;
        question = `In a Brayton cycle, the gas turbine has an inlet temperature of ${inletTemperature} K and an outlet temperature of ${outletTemperature} K. What is the thermal efficiency of the cycle?`;
        answer = `The thermal efficiency of the Brayton cycle is ${thermalEfficiency.toFixed(2)}%.`;
    }

    // Return the question and answer in an array
    return [question, answer];
}
