/*
Calculate Perimeter and Area

Description:
This function generates a problem related to the calculation of the perimeter or area of various geometric shapes. It randomly selects one of the provided shapes and either asks for the calculation of the perimeter or the area, based on the user's input.

Inputs:
- square (boolean): Whether to include the square shape in the options.
- triangle (boolean): Whether to include the triangle shape in the options.
- circle (boolean): Whether to include the circle shape in the options.
- rectangle (boolean): Whether to include the rectangle shape in the options.
- parallelogram (boolean): Whether to include the parallelogram shape in the options.
- pentagon (boolean): Whether to include the pentagon shape in the options.
- hexagon (boolean): Whether to include the hexagon shape in the options.
- heptagon (boolean): Whether to include the heptagon shape in the options.
- octagon (boolean): Whether to include the octagon shape in the options.
- oval (boolean): Whether to include the oval shape in the options.
- rhombus (boolean): Whether to include the rhombus shape in the options.
- trapezoid (boolean): Whether to include the trapezoid shape in the options.
- semicircle (boolean): Whether to include the semicircle shape in the options.

Outputs:
- Array: An array containing the problem statement and the answer.

Example Usage:
const result = perimeter_and_area(true, true, false, true, true, true, true, true, false, true, true, false, true);
console.log(result);
// Output: ['Given a shape with specific measurements, calculate the perimeter/area.', 'Perimeter/Area: result']

*/

$X.math.Elementary_Mathematics.Geometry.perimeter_and_area = function (
    square, triangle, circle, rectangle, parallelogram,
    pentagon, hexagon, heptagon, octagon, oval,
    rhombus, trapezoid, semicircle
) {
    // Create an array containing the selectable shapes
    var shapes = [];

    if (square) shapes.push({ name: "Square", hasPerimeter: true, hasArea: true });
    if (triangle) shapes.push({ name: "Triangle", hasPerimeter: true, hasArea: true });
    if (circle) shapes.push({ name: "Circle", hasPerimeter: true, hasArea: true });
    if (rectangle) shapes.push({ name: "Rectangle", hasPerimeter: true, hasArea: true });
    if (parallelogram) shapes.push({ name: "Parallelogram", hasPerimeter: true, hasArea: true });
    if (pentagon) shapes.push({ name: "Pentagon", hasPerimeter: true, hasArea: true });
    if (hexagon) shapes.push({ name: "Hexagon", hasPerimeter: true, hasArea: true });
    if (heptagon) shapes.push({ name: "Heptagon", hasPerimeter: true, hasArea: true });
    if (octagon) shapes.push({ name: "Octagon", hasPerimeter: true, hasArea: true });
    if (oval) shapes.push({ name: "Oval", hasPerimeter: true, hasArea: true });
    if (rhombus) shapes.push({ name: "Rhombus", hasPerimeter: true, hasArea: true });
    if (trapezoid) shapes.push({ name: "Trapezoid", hasPerimeter: true, hasArea: true });
    if (semicircle) shapes.push({ name: "Semicircle", hasPerimeter: true, hasArea: true });

    // Randomly select one of the selectable shapes
    var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    // Define the data for the shape
    var shapeData = null;

    // Provide specific data for the selected shape
    if (randomShape.name === "Triangle") {
        // Triangle specific data
        var base = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { base: base, height: height };
    } else if (randomShape.name === "Square") {
        // Square specific data
        var side = Math.random() * 10 + 1;
        shapeData = { side: side };
    } else if (randomShape.name === "Circle") {
        // Circle specific data
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    } else if (randomShape.name === "Rectangle") {
        // Rectangle specific data
        var length = Math.random() * 10 + 1;
        var width = Math.random() * 10 + 1;
        shapeData = { length: length, width: width };
    } else if (randomShape.name === "Pentagon") {
        // Example of setting data for a Pentagon
        var apothem = Math.random() * 10 + 1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Hexagon") {
        // Example of setting data for a Hexagon
        var apothem = Math.random() * 10 + 1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Heptagon") {
        // Example of setting data for a Heptagon
        var apothem = Math.random() * 10 + 1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Octagon") {
        // Example of setting data for an Octagon
        var apothem = Math.random() * 10 + 1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Oval") {
        // Example of setting data for an Oval
        var longRadius = Math.random() * 10 + 1;
        var shortRadius = Math.random() * 10 + 1;
        shapeData = { longRadius: longRadius, shortRadius: shortRadius };
    } else if (randomShape.name === "Rhombus") {
        // Example of setting data for a Rhombus
        var side = Math.random() * 10 + 1;
        var diagonal1 = Math.random() * 10 + 1;
        var diagonal2 = Math.random() * 10 + 1;
        shapeData = { side: side, diagonal1: diagonal1, diagonal2: diagonal2 };
    } else if (randomShape.name === "Trapezoid") {
        // Example of setting data for a Trapezoid
        var side1 = Math.random() * 10 + 1;
        var side2 = Math.random() * 10 + 1;
        var side3 = Math.random() * 10 + 1;
        var side4 = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { side1: side1, side2: side2, side3: side3, side4: side4, height: height };
    } else if (randomShape.name === "SemiCircle") {
        // Example of setting data for a SemiCircle
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    }

    // Randomly choose whether to calculate the perimeter or area
    var calculatePerimeter = Math.random() < 0.5;

    // Logic for calculating perimeter and area
    var question, answer;
    if (calculatePerimeter) {
        if (randomShape.hasPerimeter) {
            var perimeter = 0;
            if (randomShape.name === "Triangle") {
                perimeter = randomShape.hasArea ?
                    shapeData.base + shapeData.height + Math.sqrt(shapeData.base ** 2 + shapeData.height ** 2) :
                    shapeData.base + shapeData.height + Math.random() * 10 + 1;
            } else if (randomShape.name === "Square") {
                perimeter = 4 * shapeData.side;
            } else if (randomShape.name === "Circle") {
                perimeter = 2 * Math.PI * shapeData.radius;
            } else if (randomShape.name === "Rectangle") {
                perimeter = 2 * (shapeData.length + shapeData.width);
            } else if (randomShape.name === "Pentagon") {
                perimeter = 5 * shapeData.side;
            } else if (randomShape.name === "Hexagon") {
                perimeter = 6 * shapeData.side;
            } else if (randomShape.name === "Heptagon") {
                perimeter = 7 * shapeData.side;
            } else if (randomShape.name === "Octagon") {
                perimeter = 8 * shapeData.side;
            } else if (randomShape.name === "Oval") {
                perimeter = Math.PI * (shapeData.longRadius + shapeData.shortRadius);
            } else if (randomShape.name === "Rhombus") {
                perimeter = 4 * shapeData.side;
            } else if (randomShape.name === "SemiCircle") {
                perimeter = Math.PI * shapeData.radius;
            }

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // Remove the final comma and space
            question += `, calculate the perimeter.`;
            answer = `Perimeter: ${perimeter.toFixed(2)} cm`;
        } else {
            // If the shape does not support perimeter calculation, choose to calculate the area instead
            calculatePerimeter = false;
        }
    }

    if (!calculatePerimeter) {
        if (randomShape.hasArea) {
            var area = 0;
            if (randomShape.name === "Triangle") {
                area = randomShape.hasPerimeter ?
                    (0.5 * shapeData.base * shapeData.height) :
                    (0.5 * shapeData.base * shapeData.height) + Math.random() * 10 + 1;
            } else if (randomShape.name === "Square") {
                area = shapeData.side * shapeData.side;
            } else if (randomShape.name === "Circle") {
                area = Math.PI * shapeData.radius ** 2;
            } else if (randomShape.name === "Rectangle") {
                area = shapeData.length * shapeData.width;
            } else if (randomShape.name === "Pentagon") {
                area = (shapeData.apothem * 5 * shapeData.side) / 2;
            } else if (randomShape.name === "Hexagon") {
                area = (shapeData.apothem * 6 * shapeData.side) / 2;
            } else if (randomShape.name === "Heptagon") {
                area = (shapeData.apothem * 7 * shapeData.side) / 2;
            } else if (randomShape.name === "Octagon") {
                area = (shapeData.apothem * 8 * shapeData.side) / 2;
            } else if (randomShape.name === "Oval") {
                area = Math.PI * shapeData.longRadius * shapeData.shortRadius;
            } else if (randomShape.name === "Rhombus") {
                area = (shapeData.diagonal1 * shapeData.diagonal2) / 2;
            } else if (randomShape.name === "SemiCircle") {
                area = (Math.PI * shapeData.radius * shapeData.radius) / 2;
            }

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // Remove the final comma and space
            question += `, calculate the area.`;
            answer = `Area: ${area.toFixed(2)} cm^2`;
        } else {
            // If the shape does not support area calculation, revert to calculating the perimeter
            calculatePerimeter = true;
            var perimeter = 0;
            if (randomShape.name === "Triangle") {
                perimeter = randomShape.hasArea ?
                    shapeData.base + shapeData.height + Math.sqrt(shapeData.base ** 2 + shapeData.height ** 2) :
                    shapeData.base + shapeData.height + Math.random() * 10 + 1;
            } else if (randomShape.name === "Circle") {
                perimeter = 2 * Math.PI * shapeData.radius;
            } else if (randomShape.name === "Rectangle") {
                perimeter = 2 * (shapeData.length + shapeData.width);
            }

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // Remove the final comma and space
            question += `, calculate the perimeter.`;
            answer = `Perimeter: ${perimeter.toFixed(2)} cm`;
        }
    }


    return [question, answer];
};
