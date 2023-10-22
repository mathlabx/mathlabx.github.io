/*圆形-相交弦*/

$X.math.Middle_School_Mathematics.Geometry.CircleChordDistance = function () {
    var chordLength1 = Math.floor(Math.random() * 10) + 1; // Generating a random length for the first chord between 1 and 10
    var chordLength2 = Math.floor(Math.random() * 10) + 1; // Generating a random length for the second chord between 1 and 10
    var distanceToCenter = Math.floor(Math.random() * 10) + 1; // Generating a random distance to the center between 1 and 10
    var chordDistance = (chordLength1 * chordLength2) / (2 * distanceToCenter);
    var question = "Given two chords of lengths " + chordLength1 + " units and " + chordLength2 + " units, both at a distance of " + distanceToCenter + " units from the center of the circle, find the distance from the point of intersection to the center of the circle. Round to the nearest hundredth.";
    var answer = "The distance from the intersection point of the chords to the center of the circle is " + chordDistance.toFixed(2) + " units.";
    return [question, answer];
};
