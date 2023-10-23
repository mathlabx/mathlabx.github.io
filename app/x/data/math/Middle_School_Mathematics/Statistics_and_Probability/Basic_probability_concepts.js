/*
基本概率
*/

$X.math.Middle_School_Mathematics.Statistics_and_Probability.Basic_Probability_Concepts = function (experimentalProbability, theoreticalProbability, probabilityOfEvents, sampleSpace) {
    var probabilityConcepts = {};

    const conceptArray = [experimentalProbability, theoreticalProbability, probabilityOfEvents, sampleSpace];
    let trueCount = conceptArray.filter(concept => concept).length;

    if (trueCount > 1) {
        const trueIndices = conceptArray.map((concept, index) => concept ? index : -1).filter(index => index !== -1);
        const randomIndexToKeep = trueIndices[Math.floor(Math.random() * trueIndices.length)];
        for (let i = 0; i < conceptArray.length; i++) {
            if (i !== randomIndexToKeep) {
                conceptArray[i] = false;
            }
        }
    }

    [experimentalProbability, theoreticalProbability, probabilityOfEvents, sampleSpace] = conceptArray;

    if (experimentalProbability) {
        // Logic for experimental probability
        var favorableOutcomes = Math.floor(Math.random() * 10) + 1; // Random favorable outcomes between 1 and 10
        var totalOutcomes = Math.floor(Math.random() * 15) + 5; // Random total outcomes between 5 and 20
        var experimentalProb = (favorableOutcomes / totalOutcomes).toFixed(2);
        var question = "Find the experimental probability of an event with " + favorableOutcomes + " favorable outcomes out of " + totalOutcomes + " total outcomes.";
        var answer = "Experimental probability is calculated as the ratio of favorable outcomes to total outcomes. For this event, the experimental probability is " + experimentalProb + ".";
        probabilityConcepts = { type: "experimental", question: question, answer: answer };
    } else if (theoreticalProbability) {
        // Logic for theoretical probability
        var theoreticalProb = (Math.floor(Math.random() * 50) + 1) / 100; // Random theoretical probability between 0.01 and 0.5
        var question = "Determine the theoretical probability of an event with a probability of " + theoreticalProb + ".";
        var answer = "Theoretical probability represents the likelihood of an event based on reasoning. For this event, the theoretical probability is " + theoreticalProb + ".";
        probabilityConcepts = { type: "theoretical", question: question, answer: answer };
    } else if (probabilityOfEvents) {
        // Logic for probability of events
        var totalEvents = Math.floor(Math.random() * 5) + 3; // Random total events between 3 and 7
        var favorableEvents = Math.floor(Math.random() * 3) + 1; // Random favorable events between 1 and 3
        var question = "Compute the probability of " + favorableEvents + " out of " + totalEvents + " events occurring.";
        var answer = "The probability of events is calculated as the ratio of favorable events to total events. For these events, the probability is " + (favorableEvents / totalEvents).toFixed(2) + ".";
        probabilityConcepts = { type: "events", question: question, answer: answer };
    } else if (sampleSpace) {
        // Logic for sample space
        var totalOutcomes = Math.floor(Math.random() * 6) + 4; // Random total outcomes between 4 and 9
        var question = "Find the total number of possible outcomes in a sample space with " + totalOutcomes + " elements.";
        var answer = "Sample space refers to the set of all possible outcomes in an experiment. For this sample space, the total number of possible outcomes is " + totalOutcomes + ".";
        probabilityConcepts = { type: "sample space", question: question, answer: answer };
    }

    // Return the probability concepts
    return [probabilityConcepts.question, probabilityConcepts.answer];
};
