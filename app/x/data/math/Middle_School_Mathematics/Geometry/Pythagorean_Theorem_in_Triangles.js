/*
Pythagorean Theorem in Triangles

Description:
This function generates a problem related to the Pythagorean theorem in triangles. It randomly selects the lengths of two perpendicular sides, calculates the length of the hypotenuse using the Pythagorean theorem, and constructs a question and answer based on the generated values. The function returns the question and answer in an array.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = PythagoreanTheorem();
console.log(result);
// Example output: ["Given a right-angled triangle with the perpendicular sides measuring 3 and 4, find the length of the hypotenuse. Round to the nearest hundredth.", "Using the Pythagorean theorem (a² + b² = c²), where a and b are the lengths of the perpendicular sides and c is the length of the hypotenuse, we find that the hypotenuse is approximately 5."]
// The question involves finding the length of the hypotenuse in a right-angled triangle with given perpendicular sides, and the answer provides the calculated length using the Pythagorean theorem.

*/

$X.math.Middle_School_Mathematics.Geometry.PythagoreanTheorem = function () {
    var a = Math.floor(Math.random() * 20) + 1;
    var b = Math.floor(Math.random() * 20) + 1;
    var c = Math.sqrt(a * a + b * b).toFixed(2);
    var question = "Given a right-angled triangle with the perpendicular sides measuring " + a + " and " + b + ", find the length of the hypotenuse. Round to the nearest hundredth.";
    var answer = "Using the Pythagorean theorem (a² + b² = c²), where a and b are the lengths of the perpendicular sides and c is the length of the hypotenuse, we find that the hypotenuse is approximately " + c + ".";
    return [question, answer];
};
