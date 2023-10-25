/*
Propagation and Reflection of Light

Inputs:
- refraction (boolean): Determines if questions related to refraction of light should be included.
- totalInternalReflection (boolean): Determines if questions related to total internal reflection should be included.
- mirrors (boolean): Determines if questions related to mirrors should be included.
- lenses (boolean): Determines if questions related to lenses should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the propagation and reflection of light, including refraction, total internal reflection, mirrors, and lenses. All numerical values are randomly generated.

Example Usage:
const result = PropagationAndReflectionOfLight(true, false, true, false);
console.log(result); // Output: ['A concave mirror has a radius of curvature of 10 cm. What is its focal length?', 'The focal length of the mirror is 5 cm.']
*/

$X.physics.High_School_Physics.Optics.PropagationAndReflectionOfLight = function (refraction, totalInternalReflection, mirrors, lenses) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [refraction, totalInternalReflection, mirrors, lenses];
    var trueCount = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] === true) {
            trueCount++;
        }
    }

    if (trueCount > 1) {
        var randomIndex = Math.floor(Math.random() * options.length);
        for (var j = 0; j < options.length; j++) {
            if (j === randomIndex) {
                options[j] = true;
            } else {
                options[j] = false;
            }
        }
        refraction = options[0];
        totalInternalReflection = options[1];
        mirrors = options[2];
        lenses = options[3];
    }

    if (refraction) {
        // Logic for questions related to refraction of light
        var speedOfLight = 3 * Math.pow(10, 8); // Speed of light in vacuum in m/s
        var speedInMedium = Math.floor(Math.random() * 2) + 1; // Random speed in medium as fraction of speed of light
        var angleOfIncidence = Math.floor(Math.random() * 60) + 30; // Random angle of incidence between 30 and 90 degrees

        question = 'A light ray travels from vacuum into a medium with a speed of ' + speedInMedium + ' times the speed of light. If the angle of incidence is ' + angleOfIncidence + ' degrees, what is the angle of refraction?';
        var angleOfRefraction = Math.asin((speedInMedium * speedOfLight / speedOfLight) * Math.sin(angleOfIncidence * Math.PI / 180)) * 180 / Math.PI;
        answer = 'The angle of refraction is ' + angleOfRefraction.toFixed(2) + ' degrees.';
    }

    if (totalInternalReflection) {
        // Logic for questions related to total internal reflection
        var criticalAngle = Math.floor(Math.random() * 30) + 30; // Random critical angle between 30 and 60 degrees

        question = 'Light travels from a medium with a higher refractive index to a medium with a lower refractive index. What should be the angle of incidence to avoid refraction and cause total internal reflection, given that the critical angle is ' + criticalAngle + ' degrees?';
        answer = 'The angle of incidence should be greater than ' + criticalAngle + ' degrees.';
    }

    if (mirrors) {
        // Logic for questions related to mirrors
        var objectDistance = Math.floor(Math.random() * 30) + 10; // Random object distance between 10 and 40 cm
        var focalLength = Math.floor(Math.random() * 20) + 10; // Random focal length between 10 and 30 cm

        question = 'An object is placed ' + objectDistance + ' cm in front of a concave mirror with a focal length of ' + focalLength + ' cm. Where is the image located?';
        answer = 'The image is located ' + ((1 / (1 / focalLength - 1 / objectDistance)).toFixed(2)) + ' cm from the mirror.';
    }

    if (lenses) {
        // Logic for questions related to lenses
        var objectDistance = Math.floor(Math.random() * 30) + 10; // Random object distance between 10 and 40 cm
        var focalLength = Math.floor(Math.random() * 20) + 10; // Random focal length between 10 and 30 cm

        question = 'An object is placed ' + objectDistance + ' cm in front of a convex lens with a focal length of ' + focalLength + ' cm. Where is the image located?';
        answer = 'The image is located ' + ((1 / (1 / focalLength + 1 / objectDistance)).toFixed(2)) + ' cm from the lens.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
