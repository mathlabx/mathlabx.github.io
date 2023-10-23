/*
计算概率
*/

$X.math.Middle_School_Mathematics.Statistics_and_Probability.Probability_Calculations = function (probabilityValue, combinedProbability, independentEvents, dependentEvents) {
    var probabilityCalculations = {};

    const calculationArray = [probabilityValue, combinedProbability, independentEvents, dependentEvents];
    let trueCount = calculationArray.filter(calculation => calculation).length;

    if (trueCount > 1) {
        const trueIndices = calculationArray.map((calculation, index) => calculation ? index : -1).filter(index => index !== -1);
        const randomIndexToKeep = trueIndices[Math.floor(Math.random() * trueIndices.length)];
        for (let i = 0; i < calculationArray.length; i++) {
            if (i !== randomIndexToKeep) {
                calculationArray[i] = false;
            }
        }
    }

    [probabilityValue, combinedProbability, independentEvents, dependentEvents] = calculationArray;

    if (probabilityValue) {
        // Logic for calculating a probability value
        var favorableOutcomes = Math.floor(Math.random() * 10) + 1; // Random favorable outcomes between 1 and 10
        var totalOutcomes = Math.floor(Math.random() * 15) + 5; // Random total outcomes between 5 and 20
        var probabilityVal = (favorableOutcomes / totalOutcomes).toFixed(2);
        var question = "Calculate the probability value for an event with " + favorableOutcomes + " favorable outcomes out of " + totalOutcomes + " total outcomes.";
        var answer = "The probability value is calculated as the ratio of favorable outcomes to total outcomes. For this event, the probability value is " + probabilityVal + ".";
        probabilityCalculations = { type: "probability value", question: question, answer: answer };
    } else if (combinedProbability) {
        // Logic for combined probabilities
        var probabilityEvent1 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 1 between 0.01 and 0.5
        var probabilityEvent2 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 2 between 0.01 and 0.5
        var combinedProb = (probabilityEvent1 * probabilityEvent2).toFixed(2);
        var question = "Determine the combined probability for two events with probabilities " + probabilityEvent1 + " and " + probabilityEvent2 + " respectively.";
        var answer = "The combined probability of independent events is the product of their individual probabilities. For these events, the combined probability is " + combinedProb + ".";
        probabilityCalculations = { type: "combined probability", question: question, answer: answer };
    } else if (independentEvents) {
        // Logic for independent events
        var probabilityEvent1 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 1 between 0.01 and 0.5
        var probabilityEvent2 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 2 between 0.01 and 0.5
        var independentProb = (probabilityEvent1 + probabilityEvent2 - (probabilityEvent1 * probabilityEvent2)).toFixed(2);
        var question = "Calculate the probability of two independent events with probabilities " + probabilityEvent1 + " and " + probabilityEvent2 + " respectively.";
        var answer = "The probability of independent events is calculated using the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B). For these events, the probability is " + independentProb + ".";
        probabilityCalculations = { type: "independent events", question: question, answer: answer };
    } else if (dependentEvents) {
        // Logic for dependent events
        var probabilityEvent1 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 1 between 0.01 and 0.5
        var probabilityEvent2 = (Math.floor(Math.random() * 50) + 1) / 100; // Random probability for event 2 between 0.01 and 0.5
        var dependentProb = (probabilityEvent1 * probabilityEvent2).toFixed(2);
        var question = "Find the probability of two dependent events with probabilities " + probabilityEvent1 + " and " + probabilityEvent2 + " respectively.";
        var answer = "The probability of dependent events is the product of their individual probabilities. For these events, the probability is " + dependentProb + ".";
        probabilityCalculations = { type: "dependent events", question: question, answer: answer };
    }

    // Return the probability calculations
    return [probabilityCalculations.question, probabilityCalculations.answer];
};