/*
Similar Triangles Property
*/

$X.math.Middle_School_Mathematics.Geometry.SimilarTriangles = function () {
    var scale = (Math.floor(Math.random() * 9) + 1) / 10;
    var question = "Given two similar triangles, if the scale factor is " + scale + ", find the ratio of their corresponding sides. Round to the nearest hundredth.";
    var ratio = scale.toFixed(2);
    var answer = "The ratio of corresponding sides in similar triangles is " + ratio + ". This is true for all corresponding sides of similar triangles.";
    return [question, answer];
};