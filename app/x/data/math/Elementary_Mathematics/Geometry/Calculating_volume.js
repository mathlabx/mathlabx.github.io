/*
Calculate Volume

Description:
This function generates a volume calculation problem for various 3D shapes. It randomly selects a shape from the given list and provides relevant data for that shape. It then calculates the volume based on the provided data and returns both the problem statement and the answer.

Inputs:
- cube (boolean): Whether to include a cube in the options.
- sphere (boolean): Whether to include a sphere in the options.
- cylinder (boolean): Whether to include a cylinder in the options.
- cone (boolean): Whether to include a cone in the options.
- pyramid (boolean): Whether to include a pyramid in the options.
- torus (boolean): Whether to include a torus in the options.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = volume(true, false, true, true, false, true);
console.log(result); // Output: ['Calculate the volume of a Cylinder with data: radius: 5 cm, height: 8 cm.', 'Given a cylinder with base radius 5 cm and height 8 cm, calculate the volume. Volume: 628.32 cm^3']

*/

$X.math.Elementary_Mathematics.Geometry.volume = function (cube, sphere, cylinder, cone, pyramid, torus) {
    // Creating an array containing optional 3D shapes
    var shapes = [];

    if (cube) shapes.push({ name: "Cube", hasVolume: true });
    //if (cuboid) shapes.push({ name: "Cuboid", hasVolume: true });
    if (sphere) shapes.push({ name: "Sphere", hasVolume: true });
    if (hemisphere) shapes.push({ name: "Hemisphere", hasVolume: true });
    if (cylinder) shapes.push({ name: "Cylinder", hasVolume: true });
    if (cone) shapes.push({ name: "Cone", hasVolume: true });
    if (squarepyramid) shapes.push({ name: "Squarepyramid", hasVolume: true });
    if (rectangularpyramid) shapes.push({ name: "Rectangularpyramid", hasVolume: true });
    if (triangularpyramid) shapes.push({ name: "Triangularpyramid", hasVolume: true });
    if (ellipsoid) shapes.push({ name: "Ellipsoid", hasVolume: true });
    if (torus) shapes.push({ name: "Torus", hasVolume: true });

    // Generating a list of unique 3D shapes
    var uniqueShapes = [];
    while (uniqueShapes.length < shapes.length) {
        var randomIndex = Math.floor(Math.random() * shapes.length);
        if (uniqueShapes.indexOf(shapes[randomIndex]) === -1) {
            uniqueShapes.push(shapes[randomIndex]);
        }
    }

    // Randomly selecting an optional 3D shape
    var randomShape = uniqueShapes.pop();

    // Defining data for the 3D shape
    var shapeData = null;

    // Providing specific data for the selected 3D shape
    if (randomShape.name === "Cube") {
        // Example data setting for a cube
        var sideLength = Math.random() * 10 + 1;
        shapeData = { sideLength: sideLength };
    }
    // Adding data settings for other 3D shapes
    else if (randomShape.name === "Sphere") {
        // Example data setting for a sphere
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    } else if (randomShape.name === "Cylinder") {
        // Example data setting for a cylinder
        var radius = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { radius: radius, height: height };
    } else if (randomShape.name === "Cone") {
        // Example data setting for a cone
        var radius = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { radius: radius, height: height };
    } else if (randomShape.name === "Triangularpyramid") {
        // Example data setting for a triangular pyramid
        var baseLength = Math.random() * 10 + 1;
        var baseWidth = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseLength: baseLength, baseWidth: baseWidth, height: height };
    } else if (randomShape.name === "Rectangularpyramid") {
        // Example data setting for a rectangular pyramid
        var baseLength = Math.random() * 10 + 1;
        var baseWidth = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseLength: baseLength, baseWidth: baseWidth, height: height };
    } else if (randomShape.name === "Squarepyramid") {
        // Example data setting for a square pyramid
        var baseSide = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseSide: baseSide, height: height };
    } else if (randomShape.name === "Ellipsoid") {
        // Example data setting for an ellipsoid
        var length = Math.random() * 10 + 1;
        var width = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { length: length, width: width, height: height };
    } else if (randomShape.name === "Torus") {
        // Example data setting for a torus
        var majorRadius = Math.random() * 10 + 1;
        var minorRadius = Math.random() * 5 + 1;
        shapeData = { majorRadius: majorRadius, minorRadius: minorRadius };
    }

    // Creating the problem statement, including data description
    var dataDescription = Object.entries(shapeData).map(([key, value]) => `${key}: ${value} cm`).join(', ');
    var question = `Calculate the volume of a ${randomShape.name} with data: ${dataDescription}.`;

    // Specific logic for volume calculation
    var answer = "";

    if (randomShape.hasVolume) {
        // Adding volume calculation logic
        if (randomShape.name === "Cube") {
            // Example volume calculation logic for a cube
            var volume = shapeData.sideLength * shapeData.sideLength * shapeData.sideLength;
            answer = `Given a cube with side length ${shapeData.sideLength} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        } else if (randomShape.name === "Cylinder") {
            // Example volume calculation logic for a cylinder
            var volume = Math.PI * shapeData.radius * shapeData.radius * shapeData.height;
            answer = `Given a cylinder with base radius ${shapeData.radius} cm and height ${shapeData.height} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        } else if (randomShape.name === "Sphere") {
            // Example volume calculation logic for a sphere
            var volume = (4 * Math.PI * shapeData.radius * shapeData.radius * shapeData.radius) / 3;
            answer = `Given a sphere with radius ${shapeData.radius} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        } else if (randomShape.name === "Cone") {
            // Example volume calculation logic for a cone
            var volume = (Math.PI * shapeData.radius * shapeData.radius * shapeData.height) / 3;
            answer = `Given a cone with base radius ${shapeData.radius} cm and height ${shapeData.height} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }
    }

    return [question, answer];
}
