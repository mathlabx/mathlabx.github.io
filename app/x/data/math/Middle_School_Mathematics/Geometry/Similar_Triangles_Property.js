/*
Similar Triangles Property

Description:
This function generates a problem related to the property of similar triangles. It randomly selects a scale factor, constructs a question regarding the ratio of corresponding sides in similar triangles, and provides an answer based on the selected scale factor. The function returns the question and answer in an array.

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = SimilarTriangles();
console.log(result);
// Example output: ["Given two similar triangles, if the scale factor is 0.7, find the ratio of their corresponding sides. Round to the nearest hundredth.", "The ratio of corresponding sides in similar triangles is 0.70. This is true for all corresponding sides of similar triangles."]
// The question involves finding the ratio of corresponding sides in similar triangles with the given scale factor, and the answer explains the general property of corresponding sides in similar triangles.

*/

$X.math.Middle_School_Mathematics.Geometry.SimilarTriangles = function () {
    var scale = (Math.floor(Math.random() * 9) + 1) / 10;
    var question = "Given two similar triangles, if the scale factor is " + scale + ", find the ratio of their corresponding sides. Round to the nearest hundredth.";
    var ratio = scale.toFixed(2);
    var answer = "The ratio of corresponding sides in similar triangles is " + ratio + ". This is true for all corresponding sides of similar triangles.";
    return [question, answer];
};