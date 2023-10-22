/*
Pythagorean Theorem in Triangles
*/

$X.math.Middle_School_Mathematics.Geometry.PythagoreanTheorem = function () {
    var a = Math.floor(Math.random() * 20) + 1;
    var b = Math.floor(Math.random() * 20) + 1;
    var c = Math.sqrt(a * a + b * b).toFixed(2);
    var question = "Given a right-angled triangle with the perpendicular sides measuring " + a + " and " + b + ", find the length of the hypotenuse. Round to the nearest hundredth.";
    var answer = "Using the Pythagorean theorem (a² + b² = c²), where a and b are the lengths of the perpendicular sides and c is the length of the hypotenuse, we find that the hypotenuse is approximately " + c + ".";
    return [question, answer];
};
