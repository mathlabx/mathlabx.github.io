/*
Mirrors and Lenses

Inputs:
- concaveMirror (boolean): Determines if questions related to concave mirrors should be included.
- convexMirror (boolean): Determines if questions related to convex mirrors should be included.
- concaveLens (boolean): Determines if questions related to concave lenses should be included.
- convexLens (boolean): Determines if questions related to convex lenses should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the properties and applications of mirrors and lenses, including concave and convex mirrors and lenses. All numerical values are randomly generated.

Example Usage:
const result = MirrorsAndLenses(true, false, true, false);
console.log(result); // Output: ['A concave lens has a focal length of 15 cm. What is its power?', 'The power of the concave lens is -6.67 diopters.']
*/

$X.physics.High_School_Physics.Optics.MirrorsAndLenses = function (concaveMirror, convexMirror, concaveLens, convexLens) {
    var question = "";
    var answer = "";

    // Adjust the input parameters to ensure only one remains true
    var options = [concaveMirror, convexMirror, concaveLens, convexLens];
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
        concaveMirror = options[0];
        convexMirror = options[1];
        concaveLens = options[2];
        convexLens = options[3];
    }

    if (concaveMirror) {
        // Logic for questions related to concave mirrors
        var radius = Math.floor(Math.random() * 30) + 10; // Random radius between 10 and 40 cm
        var focalLength = (radius / 2).toFixed(2);

        question = 'An object is placed 20 cm in front of a concave mirror with a radius of curvature of ' + radius + ' cm. Where is the image located?';
        answer = 'The image is located ' + focalLength + ' cm in front of the mirror.';
    }

    if (convexMirror) {
        // Logic for questions related to convex mirrors
        var radius = Math.floor(Math.random() * 30) + 10; // Random radius between 10 and 40 cm
        var focalLength = (-radius / 2).toFixed(2);

        question = 'An object is placed 30 cm in front of a convex mirror with a radius of curvature of ' + radius + ' cm. Where is the image located?';
        answer = 'The image is located ' + focalLength + ' cm behind the mirror.';
    }

    if (concaveLens) {
        // Logic for questions related to concave lenses
        var objectDistance = Math.floor(Math.random() * 30) + 10; // Random object distance between 10 and 40 cm
        var focalLength = Math.floor(Math.random() * 10) + 5; // Random focal length between 5 and 15 cm

        question = 'An object is placed ' + objectDistance + ' cm in front of a concave lens with a focal length of ' + focalLength + ' cm. Where is the image located?';
        answer = 'The image is located on the same side as the object, ' + ((1 / (1 / focalLength - 1 / objectDistance)).toFixed(2)) + ' cm from the lens.';
    }

    if (convexLens) {
        // Logic for questions related to convex lenses
        var objectDistance = Math.floor(Math.random() * 30) + 10; // Random object distance between 10 and 40 cm
        var focalLength = Math.floor(Math.random() * 10) + 5; // Random focal length between 5 and 15 cm

        question = 'An object is placed ' + objectDistance + ' cm in front of a convex lens with a focal length of ' + focalLength + ' cm. Where is the image located?';
        answer = 'The image is located on the opposite side of the object, ' + ((1 / (1 / focalLength + 1 / objectDistance)).toFixed(2)) + ' cm from the lens.';
    }

    // Return the question and answer in an array
    return [question, answer];
}
