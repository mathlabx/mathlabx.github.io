/*
Shape Recognition

Description:
This function identifies a shape based on some random data or description. It randomly selects a shape from the given list and provides a description of that shape. It then asks the user to identify the shape based on the description.

Inputs:
- square (boolean): Whether to include a square in the options.
- triangle (boolean): Whether to include a triangle in the options.
- circle (boolean): Whether to include a circle in the options.
- rectangle (boolean): Whether to include a rectangle in the options.
- parallelogram (boolean): Whether to include a parallelogram in the options.
- pentagon (boolean): Whether to include a pentagon in the options.
- hexagon (boolean): Whether to include a hexagon in the options.
- heptagon (boolean): Whether to include a heptagon in the options.
- octagon (boolean): Whether to include an octagon in the options.
- oval (boolean): Whether to include an oval in the options.
- rhombus (boolean): Whether to include a rhombus in the options.
- trapezoid (boolean): Whether to include a trapezoid in the options.
- semicircle (boolean): Whether to include a semicircle in the options.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = Recognizing_shapes(true, false, false, true, false, false, false, false, false, false, false, false, false);
console.log(result); // Output: ['What shape is described as follows: A shape with four right angles and two long sides and two short side.', 'Rectangle']

*/

$X.math.Elementary_Mathematics.Geometry.Recognizing_shapes = function (square, triangle, circle, rectangle, parallelogram, pentagon, hexagon, heptagon, octagon, oval, rhombus, trapezoid, semicircle) {
    // Defining available shapes
    var shapes = [
        { name: "Square", sides: 4, angles: 4, description: "A shape with four equal sides and four right angles." },
        { name: "Triangle", sides: 3, angles: 3, description: "A shape with three sides and three angles." },
        { name: "Circle", sides: 0, angles: 0, description: "A shape with no sides and an angle of 360 degrees." },
        { name: "Rectangle", sides: 4, angles: 4, description: "A shape with four right angles and two long sides and two short side." },
        { name: "Parallelogram", sides: 4, angles: 4, description: "A shape with four sides where opposite sides are parallel and opposite angles that are equal." },
        { name: "Pentagon", sides: 5, angles: 5, description: "A shape with five sides." },
        { name: "Hexagon", sides: 6, angles: 6, description: "A shape with six sides." },
        { name: "Heptagon", sides: 7, angles: 7, description: "A shape with seven sides." },
        { name: "Octagon", sides: 8, angles: 8, description: "A shape with eight sides." },
        { name: "Ellipse", sides: 0, angles: 0, description: "A shape that is elongated and resembles an oval." },
        { name: "Rhombus", sides: 4, angles: 4, description: "A shape with four equal sides and opposite angles." },
        { name: "Trapezoid", sides: 4, angles: 4, description: "A shape with at least one pair of parallel sides." },
        { name: "Semicircle", sides: 0, angles: 0, description: "A shape that is half of a circle." }
    ];

    // Randomly selecting an available shape
    var availableShapes = [];
    if (square) availableShapes.push(shapes[0]);
    if (triangle) availableShapes.push(shapes[1]);
    if (circle) availableShapes.push(shapes[2]);
    if (rectangle) availableShapes.push(shapes[3]);
    if (parallelogram) availableShapes.push(shapes[4]);
    if (pentagon) availableShapes.push(shapes[5]);
    if (hexagon) availableShapes.push(shapes[6]);
    if (heptagon) availableShapes.push(shapes[7]);
    if (octagon) availableShapes.push(shapes[8]);
    if (oval) availableShapes.push(shapes[9]);
    if (rhombus) availableShapes.push(shapes[10]);
    if (trapezoid) availableShapes.push(shapes[11]);
    if (semicircle) availableShapes.push(shapes[12]);

    if (availableShapes.length === 0) {
        return ["No shapes selected.", "Unknown"];
    }

    var randomShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];

    // Generating a random question description
    var question = "What shape is described as follows: " + randomShape.description;
    var answer = randomShape.name;

    return [question, answer];
}
