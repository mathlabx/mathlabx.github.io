/*
Trigonometry

Description:
This function generates a problem related to trigonometry. It randomly selects a trigonometric function (sine, cosine, or tangent) based on the provided boolean values. Using the randomly generated angle and the corresponding trigonometric function, it calculates the value of the function and constructs a question asking for the angle measurement. It also provides the formula for finding the angle using the inverse trigonometric functions in the answer. The function returns the question and answer in an array.

Example Usage:
const result = Trigonometry(true, false, false); // Example for sine
console.log(result);
// Example output: ["If the rounded to the nearest hundredth sine of an angle is 0.74, what is the measure of the angle in degrees?", "The measure of the angle can be found using the inverse sine function (arcsin). The angle is approximately 47.85 degrees."]

*/

$X.math.Middle_School_Mathematics.Geometry.Trigonometry = function (sine, cosine, tangent) {
    var trigFunctions = {};

    const trigArray = [sine, cosine, tangent];
    let trueCount = trigArray.filter(trig => trig).length;

    if (trueCount > 1) {
        const trueIndices = trigArray.map((trig, index) => trig ? index : -1).filter(index => index !== -1);
        const randomIndexToKeep = trueIndices[Math.floor(Math.random() * trueIndices.length)];
        for (let i = 0; i < trigArray.length; i++) {
            if (i !== randomIndexToKeep) {
                trigArray[i] = false;
            }
        }
    }

    [sine, cosine, tangent] = trigArray;

    if (sine) {
        // Logic for sine function
        var angle = getRandomAngle();
        var sineValue = Math.sin(angle).toFixed(2);
        var question = "If the rounded to the nearest hundredth sine of an angle is " + sineValue + ", what is the measure of the angle in degrees?";
        var answer = "The measure of the angle can be found using the inverse sine function (arcsin). The angle is approximately " + (Math.asin(sineValue) * (180 / Math.PI)).toFixed(2) + " degrees.";
        trigFunctions = { type: "sine", question: question, answer: answer };
    } else if (cosine) {
        // Logic for cosine function
        var angle = getRandomAngle();
        var cosineValue = Math.cos(angle).toFixed(2);
        var question = "If the rounded to the nearest hundredth cosine of an angle is " + cosineValue + ", what is the measure of the angle in degrees?";
        var answer = "The measure of the angle can be found using the inverse cosine function (arccos). The angle is approximately " + (Math.acos(cosineValue) * (180 / Math.PI)).toFixed(2) + " degrees.";
        trigFunctions = { type: "cosine", question: question, answer: answer };
    } else if (tangent) {
        // Logic for tangent function
        var angle = getRandomAngle();
        var tangentValue = Math.tan(angle).toFixed(2);
        var question = "If the rounded to the nearest hundredth tangent of an angle is " + tangentValue + ", what is the measure of the angle in degrees?";
        var answer = "The measure of the angle can be found using the inverse tangent function (arctan). The angle is approximately " + (Math.atan(tangentValue) * (180 / Math.PI)).toFixed(2) + " degrees.";
        trigFunctions = { type: "tangent", question: question, answer: answer };
    }

    // Helper function to generate random angle values
    function getRandomAngle() {
        return Math.floor(Math.random() * 80) + 10; // Generating a random angle between 10 and 90 degrees
    }

    // Return the trigonometry functions
    return [trigFunctions.question, trigFunctions.answer];
};