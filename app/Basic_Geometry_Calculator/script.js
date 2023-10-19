function main() {
    Operate.newStart("Shapes: ");
    Operate.newStep("Square");
    Operate.newStep("Rectangle");
    Operate.newStep("Triangle");
    Operate.newStep("Trapezoid");
    Operate.newStep("Cube");
    Operate.newStep("Prism");
    Operate.newStep("Pyramid");
    Operate.newStep("Circle");
    Operate.newStep("Oval");
    Operate.newStep("Sphere");
    Operate.newStep("Cylinder");
    Operate.newStep("Cone");
    Operate.newInput(["shape name"])
        .then((shapeInput) => {
            let shapeName = shapeInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

            const shapeMappings = {
                "square": "square",
                "rectangle": "rectangle",
                "triangle": "triangle",
                "trapezoid": "trapezoid",
                "cube": "cube",
                "prism": "prism",
                "pyramid": "pyramid",
                "circle": "circle",
                "oval": "oval",
                "sphere": "sphere",
                "cylinder": "cylinder",
                "cone": "cone",
            };

            continueWithShape(shapeName);
        });
}

function continueWithShape(shapeName) {
    switch (shapeName) {
        case "square":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity
                    if (operation === "perimeter") {
                        Operate.newInput(["do you have all the side lengths? (Y/N)"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "y") {
                                    Operate.newInput(["sides (comma-separated)"])
                                        .then((sideInput) => {
                                            const sides = sideInput[0].split(",").map(parseFloat);
                                            if (shapeName === "square" && sides.length === 1) {
                                                squarePerimeterCalculation(shapeName, sides);
                                            } else {
                                                Operate.newSolution("Invalid \\ input \\ for \\ the \\ selected \\ shape.");
                                                // Add a reset button
                                                Operate.newRestart();
                                            }
                                        });
                                } else if (answer1 === "n") {
                                    Operate.newInput(["Do you have the diagonal? (Y/N)"])
                                        .then((question2) => {
                                            const answer2 = question2[0].toLowerCase();
                                            if (answer2 === "y") {
                                                Operate.newInput(["diagonal length"])
                                                    .then((diagonalInput) => {
                                                        const diagonal = parseFloat(diagonalInput[0]);
                                                        if (shapeName === "square") {
                                                            squarePerimeterCalculationWithDiagonal(shapeName, diagonal);
                                                        } else {
                                                            Operate.newSolution("Invalid \\ input \\ for \\ the \\ selected \\ shape.");
                                                            // Add a reset button
                                                            Operate.newRestart();
                                                        }
                                                    });
                                            } else {
                                                Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ it \\ yet.");
                                                // Add a reset button
                                                Operate.newRestart();
                                            }
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ input.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    } else if (operation === "area") {
                        Operate.newInput(["do you have all the side lengths? (Y/N)"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "y") {
                                    if (shapeName === "square") {
                                        Operate.newInput(["side length"])
                                            .then((sideInput) => {
                                                const side = parseFloat(sideInput[0]);
                                                squareAreaCalculation(shapeName, side);
                                            });
                                    }
                                } else if (answer1 === "n") {
                                    Operate.newInput(["Do you have the diagonal? (Y/N)"])
                                        .then((question2) => {
                                            const answer2 = question2[0].toLowerCase();
                                            if (answer2 === "y") {
                                                Operate.newInput(["diagonal length"])
                                                    .then((diagonalInput) => {
                                                        const diagonal = parseFloat(diagonalInput[0]);
                                                        if (shapeName === "square") {
                                                            squareAreaCalculationWithDiagonal(shapeName, diagonal);
                                                        } else {
                                                            Operate.newSolution("Invalid \\ input \\ for \\ the \\ selected \\ shape.");
                                                            // Add a reset button
                                                            Operate.newRestart();
                                                        }
                                                    });
                                            }
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ input.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }
                });
            break;
        case "rectangle":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity
                    if (operation === "perimeter") {
                        Operate.newInput(["Do you have the width and length? (Y/N)"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "y") {
                                    Operate.newInput(["sides (comma-separated)"])
                                        .then((sideInput) => {
                                            const sides = sideInput[0].split(",").map(parseFloat);
                                            rectanglePerimeterCalculation(shapeName, sides);
                                        });
                                } else if (answer1 === "n") {
                                    Operate.newInput(["Do you have width or length or none?"])
                                        .then((question2) => {
                                            const answer2 = question2[0].toLowerCase();
                                            if (answer2 === "width" || answer2 === "length") {
                                                Operate.newInput(["Do you have the diagonal length? (Y/N)"])
                                                    .then((question3) => {
                                                        console.log(question3);
                                                        const answer3 = question3[0].toLowerCase();
                                                        if (answer3 === "y") {
                                                            Operate.newInput(["side length"])
                                                                .then((sideInput) => {
                                                                    var side = parseFloat(sideInput[0]);
                                                                    Operate.newInput(["diagonal length"])
                                                                        .then((diagonalInput) => {
                                                                            const diagonal = parseFloat(diagonalInput[0]);
                                                                            console.log(diagonal);
                                                                            console.log(side);
                                                                            rectanglePerimeterCalculationWithDiagonal(shapeName, diagonal, side);
                                                                        });
                                                                });
                                                        } else {
                                                            Operate.newInput(["Do you have the angle between the between the diagonal and one side? (Y/N)"])
                                                                .then((question4) => {
                                                                    const answer4 = question4[0].toLowerCase();
                                                                    if (answer4 === "y") {
                                                                        Operate.newInput(["side length"])
                                                                            .then((sideInput) => {
                                                                                var side = parseFloat(sideInput[0]);
                                                                                Operate.newInput(["angle"])
                                                                                    .then((angleInput) => {
                                                                                        const angle = parseFloat(angleInput[0]);
                                                                                        rectanglePerimeterCalculationWithAngle(shapeName, side, angle);
                                                                                    });
                                                                            });
                                                                    } else {
                                                                        Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ it \\ yet.");
                                                                        // Add a reset button
                                                                        Operate.newRestart();
                                                                    }
                                                                });
                                                        }
                                                    });
                                            }
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ input.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    } else if (operation === "area") {
                        Operate.newInput(["do you have all the side lengths? (Y/N)"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "y") {
                                    Operate.newInput(["length", "width"])
                                        .then((dimensionsInput) => {
                                            const [length, width] = dimensionsInput.map(parseFloat);
                                            rectangleAreaCalculation(shapeName, length, width);
                                        });
                                } else if (answer1 === "n") {
                                    Operate.newInput(["Do you have width or length or none?"])
                                        .then((question2) => {
                                            const answer2 = question2[0].toLowerCase();
                                            if (answer2 === "width" || answer2 === "length") {
                                                Operate.newInput(["Do you have the diagonal length? (Y/N)"])
                                                    .then((question3) => {
                                                        const answer3 = question3[0].toLowerCase();
                                                        if (answer3 === "y") {
                                                            Operate.newInput(["side length"])
                                                                .then((sideInput) => {
                                                                    var side = parseFloat(sideInput[0]);
                                                                    Operate.newInput(["diagonal length"])
                                                                        .then((diagonalInput) => {
                                                                            const diagonal = parseFloat(diagonalInput[0]);
                                                                            rectangleAreaCalculationWithDiagonal(shapeName, diagonal, side);
                                                                        });
                                                                });
                                                        } else {
                                                            Operate.newInput(["Do you have the angle between the between the diagonal and one side? (Y/N)"])
                                                                .then((question4) => {
                                                                    const answer4 = question4[0].toLowerCase();
                                                                    if (answer4 === "y") {
                                                                        Operate.newInput(["side length"])
                                                                            .then((sideInput) => {
                                                                                var side = parseFloat(sideInput[0]);
                                                                                Operate.newInput(["angle"])
                                                                                    .then((angleInput) => {
                                                                                        const angle = parseFloat(angleInput[0]);
                                                                                        rectangleAreaCalculationWithAngle(shapeName, side, angle);
                                                                                    });
                                                                            });
                                                                    } else {
                                                                        Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ it \\ yet.");
                                                                        // Add a reset button
                                                                        Operate.newRestart();
                                                                    }
                                                                });
                                                        }
                                                    });
                                            }
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ input.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }
                });
            break;

        case "trapezoid":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "area") {
                        Operate.newInput(["top width", "bottom width", "height"])
                            .then((dimensionsInput) => {
                                const [width1, width2, height] = dimensionsInput.map(parseFloat);
                                trapezoidAreaCalculation(shapeName, width1, width2, height);
                            });
                    } else if (operation === "perimeter") {
                        Operate.newInput(["top width", "bottom width", "right length", "left length"])
                            .then((dimensionsInput) => {
                                const [width1, width2, length1, length2] = dimensionsInput.map(parseFloat);
                                trapezoidPerimeterCalculation(shapeName, width1, width2, length1, length2);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "cube":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "volume") {
                        Operate.newInput(["side length"])
                            .then((sideInput) => {
                                const side = parseFloat(sideInput[0]);
                                cubeVolumeCalculation(shapeName, side);
                            });
                    } else if (operation === "surface area") {
                        Operate.newInput(["side length"])
                            .then((sideInput) => {
                                const side = parseFloat(sideInput[0]);
                                cubeSurfaceAreaCalculation(shapeName, side);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "prism":
            Operate.newInput(["base shape"])
                .then((baseInput) => {
                    const base = baseInput[0].toLowerCase();
                    if (base === "rectangular" || base === "rectangle") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity
                                if (operation === "volume") {
                                    Operate.newInput(["length", "width", "height"])
                                        .then((dimensionsInput) => {
                                            const [length, width, height] = dimensionsInput.map(parseFloat);
                                            rectangularPrismVolumeCalculation(shapeName, length, width, height);
                                        });
                                } else if (operation === "surface area") {
                                    Operate.newInput(["length", "width", "height"])
                                        .then((dimensionsInput) => {
                                            const [length, width, height] = dimensionsInput.map(parseFloat);
                                            rectangularPrismSurfaceAreaCalculation(shapeName, length, width, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }

                    else if (base === "triangle" || base === "triangular") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["base width", "base height", "base length 1", "base length 2"])
                                        .then((radiusInput) => {
                                            const [width, height, length1, length2] = radiusInput.map(parseFloat);
                                            triangularPrismSurfaceAreaCalculation(shapeName, width, length1, length2, height);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["length", "base height", "width"])
                                        .then((radiusInput) => {
                                            const [length, height, width] = radiusInput.map(parseFloat);
                                            triangularPrismVolumeCalculation(shapeName, width, length, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }

                    else if (base === "hexagon" || base === "hexagonal") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["apothem", "side length", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [apothem, baseLength, slantHeight] = radiusInput.map(parseFloat);
                                            hexagonalPrismSurfaceAreaCalculation(shapeName, apothem, baseLength, slantheight);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["side length", "height", "apothem"])
                                        .then((radiusInput) => {
                                            const [baseLength, height, apothem] = radiusInput.map(parseFloat);
                                            hexagonalPrismVolumeCalculation(shapeName, baseLength, apothem, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    } else {
                        Operate.newSolution("Sorry \\ we \\ currently \\ don't \\ have \\ the \\ equation \\ for \\ this \\ base.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "triangle":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity
                    if (operation === "perimeter") {
                        Operate.newInput(["How many sides of the triangle do you have?"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "3") {
                                    Operate.newInput(["side1", "side2", "side3"])
                                        .then((sideInput) => {
                                            const sides = sideInput.map(parseFloat);
                                            trianglePerimeterCalculation(shapeName, sides);
                                        });
                                } else if (answer1 === "2") {
                                    Operate.newInput(["side1", "side2"])
                                        .then((sideInput) => {
                                            const side1 = parseFloat(sideInput[0]);
                                            const side2 = parseFloat(sideInput[1]);
                                            trianglePerimeterCalculationWithTwoSide(shapeName, side1, side2);
                                        });
                                } else if (answer1 === "1") {
                                    Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ this \\ one \\ yet.");
                                    // Add a reset button
                                    Operate.newRestart();
                                } else {
                                    Operate.newSolution("Invalid \\ input.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    } else if (operation === "area") {
                        Operate.newInput(["Do you have the base and height? (Y/N)"])
                            .then((question1) => {
                                const answer1 = question1[0].toLowerCase();
                                if (answer1 === "y") {
                                    Operate.newInput(["base", "height"])
                                        .then((dimensionsInput) => {
                                            const [base, height] = dimensionsInput.map(parseFloat);
                                            triangleAreaCalculation(shapeName, base, height);
                                        });
                                } else if (answer1 === "n") {
                                    Operate.newInput(["Do you have the all the sides of the triangle? (Y/N)"])
                                        .then((question2) => {
                                            const answer2 = question2[0].toLowerCase();
                                            if (answer2 === "y") {
                                                Operate.newInput(["side1", "side2", "side3"])
                                                    .then((sideInput) => {
                                                        const side1 = parseFloat(sideInput[0]);
                                                        const side2 = parseFloat(sideInput[1]);
                                                        const side3 = parseFloat(sideInput[2]);
                                                        triangleAreaCalculationWithAllSide(shapeName, side1, side2, side3);
                                                    });
                                            } else if (answer2 === "n") {
                                                Operate.newInput(["Is the triangle inscribe in a circle? (Y/N)"])
                                                    .then((question3) => {
                                                        const answer3 = question3[0].toLowerCase();
                                                        if (answer3 === "y") {
                                                            Operate.newInput(["Do you have the angle between the radius from one of the vertex and the diameter? (Y/N)"])
                                                                .then((question4) => {
                                                                    const answer4 = question4[0].toLowerCase();
                                                                    if (answer4 === "y") {
                                                                        Operate.newInput(["radius", "angle"])
                                                                            .then((dimensionsInput) => {
                                                                                const radius = parseFloat(dimensionsInput[0]);
                                                                                const angle = parseFloat(dimensionsInput[1]);
                                                                                triangleAreaCalculationWithRadius(shapeName, radius, angle);
                                                                            });
                                                                    } else if (answer4 === "n") {
                                                                        Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ this \\ one \\ yet.");
                                                                        // Add a reset button
                                                                        Operate.newRestart();
                                                                    } else {
                                                                        Operate.newSolution("Invalid \\ input.");
                                                                        // Add a reset button
                                                                        Operate.newRestart();
                                                                    }
                                                                });
                                                        } else if (answer3 === "n") {
                                                            Operate.newSolution("Sorry \\ we \\ can't \\ solve \\ this \\ one \\ yet.");
                                                            // Add a reset button
                                                            Operate.newRestart();
                                                        } else {
                                                            Operate.newSolution("Invalid \\ input.");
                                                            // Add a reset button
                                                            Operate.newRestart();
                                                        }
                                                    });
                                            } else {
                                                Operate.newSolution("Invalid \\ input.");
                                                // Add a reset button
                                                Operate.newRestart();
                                            }
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }
                });
            break;

        case "circle":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "circumference") {
                        Operate.newInput(["radius"])
                            .then((radiusInput) => {
                                const radius = parseFloat(radiusInput[0]);
                                circleCircumferenceCalculation(shapeName, radius);
                            });
                    } else if (operation === "area") {
                        Operate.newInput(["radius"])
                            .then((radiusInput) => {
                                const radius = parseFloat(radiusInput[0]);
                                circleAreaCalculation(shapeName, radius);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "oval":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "area") {
                        Operate.newInput(["long radius", "short radius"])
                            .then((radiusInput) => {
                                const [longRadius, shortRadius] = radiusInput.map(parseFloat);
                                ovalAreaCalculation(shapeName, longRadius, shortRadius);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "cylinder":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "surface area") {
                        Operate.newInput(["radius, height"])
                            .then((radiusInput) => {
                                const [radius, height] = radiusInput.map(parseFloat);
                                cylinderSurfaceAreaCalculation(shapeName, radius, height);
                            });
                    } else if (operation === "volume") {
                        Operate.newInput(["radius", "height"])
                            .then((radiusInput) => {
                                const [radius, height] = radiusInput.map(parseFloat);
                                cylinderVolumeCalculation(shapeName, radius, height);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "cone":
            Operate.newInput(["operation"])
                .then((operationInput) => {
                    const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                    if (operation === "surface area") {
                        Operate.newInput(["radius", "slantHeight"])
                            .then((radiusInput) => {
                                const [radius, slantHeight] = radiusInput.map(parseFloat);
                                coneSurfaceAreaCalculation(shapeName, radius, slantHeight);
                            });
                    } else if (operation === "volume") {
                        Operate.newInput(["radius", "height"])
                            .then((radiusInput) => {
                                const [radius, height] = radiusInput.map(parseFloat);
                                coneVolumeCalculation(shapeName, radius, height);
                            });
                    } else {
                        Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        case "pyramid":
            Operate.newInput(["base shape"])
                .then((baseInput) => {
                    const base = baseInput[0].toLowerCase();
                    if (base == "square") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["base width", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [width, slantHeight] = radiusInput.map(parseFloat);
                                            squarePyramidSurfaceAreaCalculation(shapeName, width, slantHeight);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["base width", "height"])
                                        .then((radiusInput) => {
                                            const [width, height] = radiusInput.map(parseFloat);
                                            squarePyramidVolumeCalculation(shapeName, width, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }
                    if (base == "rectangle" || base == "rectangular") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["width", "length", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [width, length, slantHeight] = radiusInput.map(parseFloat);
                                            rectanglePyramidSurfaceAreaCalculation(shapeName, width, length, height);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["width", "length", "height"])
                                        .then((radiusInput) => {
                                            const [width, length, height] = radiusInput.map(parseFloat);
                                            rectanglePyramidVolumeCalculation(shapeName, width, length, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }

                    if (base == "triangle" || base == "triangular") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["base width", "base height", "base length 1", "base length 2", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [width, height, length1, length2, slantHeight] = radiusInput.map(parseFloat);
                                            triangularPyramidSurfaceAreaCalculation(shapeName, width, length1, length2, height, slantheight);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["width", "base height", "height"])
                                        .then((radiusInput) => {
                                            const [width, length, height] = radiusInput.map(parseFloat);
                                            triangularPyramidVolumeCalculation(shapeName, width, length, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }

                    if (base == "pentagon" || base == "pentagonal") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["apothem", "side length", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [apothem, baseLength, slantHeight] = radiusInput.map(parseFloat);
                                            pentagonalPyramidSurfaceAreaCalculation(shapeName, apothem, baseLength, slantheight);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["apothem", "side length", "height"])
                                        .then((radiusInput) => {
                                            const [apothem, baseLength, height] = radiusInput.map(parseFloat);
                                            pentagonalPyramidVolumeCalculation(shapeName, apothem, baseLength, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    }
                    if (base == "hexagon" || base == "hexagonal") {
                        Operate.newInput(["operation"])
                            .then((operationInput) => {
                                const operation = operationInput[0].toLowerCase(); // Convert to lowercase for case-insensitivity

                                if (operation === "surface area") {
                                    Operate.newInput(["apothem", "side length", "slantHeight"])
                                        .then((radiusInput) => {
                                            const [apothem, baseLength, slantHeight] = radiusInput.map(parseFloat);
                                            hexagonalPyramidSurfaceAreaCalculation(shapeName, apothem, baseLength, slantheight);
                                        });
                                } else if (operation === "volume") {
                                    Operate.newInput(["side length", "height"])
                                        .then((radiusInput) => {
                                            const [baseLength, height] = radiusInput.map(parseFloat);
                                            hexagonalPyramidVolumeCalculation(shapeName, baseLength, height);
                                        });
                                } else {
                                    Operate.newSolution("Invalid \\ operation \\ for \\ the \\ selected \\ shape.");
                                    // Add a reset button
                                    Operate.newRestart();
                                }
                            });
                    } else {
                        Operate.newSolution("Sorry \\ we \\ don't \\ have \\ the \\ equation \\ for \\ this \\ base.");
                        // Add a reset button
                        Operate.newRestart();
                    }
                });
            break;

        default:
            const closestMatch = fuzzySearch(shapeName, Object.keys(shapeMappings));
            if (closestMatch) {
                Operate.newSolution("Invalid \\ shape \\ name. Did \\ you \\ mean \\ " + closestMatch + "?");
            } else {
                Operate.newSolution("Invalid \\ shape \\ name.");
            }
            // Add a reset button
            Operate.newRestart();
            break;
    }
}

// Function for fuzzy searching
function fuzzySearch(input, options) {
    let minDistance = Infinity;
    let closestMatch = null;

    for (const option of options) {
        const distance = levenshteinDistance(input, option);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = option;
        }
    }

    if (minDistance <= 2) {
        return closestMatch;
    } else {
        return null;
    }
}

// Function to calculate Levenshtein distance
function levenshteinDistance(s1, s2) {
    if (!s1.length) return s2.length;
    if (!s2.length) return s1.length;

    return Math.min(
        levenshteinDistance(s1.slice(1), s2) + 1,
        levenshteinDistance(s1, s2.slice(1)) + 1,
        levenshteinDistance(s1.slice(1), s2.slice(1)) + (s1[0] !== s2[0] ? 1 : 0)
    );
}

// Rest of the code for shape calculations and error handling

// Functions for shape calculations

// Add a reset button at the end of each calculation function
//---------Square-------------
function squarePerimeterCalculation(shapeName, sides) {
    const perimeter = sides.reduce((sum, side) => sum + side, 0);
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function squarePerimeterCalculationWithDiagonal(shapeName, diagonal) {
    const perimeter = 4 * (diagonal / Math.sqrt(2));
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function squareAreaCalculation(shapeName, side) {
    const area = side * side;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}

function squareAreaCalculationWithDiagonal(shapeName, diagonal) {
    const area = (diagonal / Math.sqrt(2)) * (diagonal / Math.sqrt(2));
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Rectangle-------------
function rectanglePerimeterCalculation(shapeName, sides) {
    const perimeter = 2 * (sides[0] + sides[1]);
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function rectanglePerimeterCalculationWithDiagonal(shapeName, diagonal, side) {
    const perimeter = 2 * (Math.sqrt((diagonal * diagonal) - (side * side)) + side);
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function rectanglePerimeterCalculationWithAngle(shapeName, side, angle) {
    const perimeter = 2 * ((side * Math.tan(angle)) + side);
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function rectangleAreaCalculation(shapeName, length, width) {
    const area = length * width;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}

function rectangleAreaCalculationWithDiagonal(shapeName, diagonal) {
    const area = Math.sqrt((diagonal * diagonal) - (side * side)) * side;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}

function rectangleAreaCalculationWithAngle(shapeName, side, angle) {
    const area = (side * Math.tan(angle)) * side;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Trapezoid-------------
function trapezoidPerimeterCalculation(shapeName, width1, width2, length1, length2) {
    const perimeter = width1 + width2 + length1 + length2;
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function trapezoidAreaCalculation(shapeName, width1, width2, height) {
    const area = ((width1 + width2) * height) / 2;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Cube-------------
function cubeVolumeCalculation(shapeName, side) {
    const volume = side * side * side;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}

function cubeSurfaceAreaCalculation(shapeName, side) {
    const surfaceArea = 6 * side * side;
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Prism-------------
//---------Rectangular-------------
function rectangularPrismVolumeCalculation(shapeName, length, width, height) {
    const volume = length * width * height;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
function rectangularPrismSurfaceAreaCalculation(shapeName, length, width, height) {
    const surfaceArea = 2 * ((length * width) + (length * height) + (width * height));
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Triangular-------------
function triangularPrismVolumeCalculation(shapeName, width, length, height) {
    const volume = 0.5 * length * width * height;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
function triangularPrismSurfaceAreaCalculation(shapeName, width, length1, length2, height) {
    const surfaceArea = (width + length1 + length2) + (width * height);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Hexagonal-------------
function hexagonalPrismVolumeCalculation(shapeName, baseLength, height, apothem) {
    const volume = 3 * baseLength * height * apothem;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
function hexagonalPrismSurfaceAreaCalculation(shapeName, length, apothem, height) {
    const surfaceArea = 6 * length * (apothem + height);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}

//---------Triangle-------------
function trianglePerimeterCalculation(shapeName, sides) {
    const perimeter = sides.reduce((sum, side) => sum + side, 0);
    Operate.newSolution(`The \\ perimeter \\ of \\ the \\ ${shapeName} \\ is: \\ ${perimeter}`);
    // Add a reset button
    Operate.newRestart();
}

function triangleAreaCalculation(shapeName, base, height) {
    const area = (base * height) / 2;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}

function triangleAreaCalculationWithAllSide(shapeName, side1, side2, side3) {
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}

function triangleAreaCalculationWithRadius(shapeName, radius, angle) {
    const area = ((radius + radius * Math.cos(angle)) * (2 * radius * Math.sin(angle))) / 2;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Circle-------------
function circleCircumferenceCalculation(shapeName, radius) {
    const circumference = 2 * Math.PI * radius;
    Operate.newSolution(`The \\ circumference \\ of \\ the \\ ${shapeName} \\ is: \\ ${circumference}`);
    // Add a reset button
    Operate.newRestart();
}

function circleAreaCalculation(shapeName, radius) {
    const area = Math.PI * radius * radius;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Oval-------------
function ovalAreaCalculation(shapeName, longRadius, shortRadius) {
    const area = Math.PI * longRadius * shortRadius;
    Operate.newSolution(`The \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${area}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Cylinder-------------
function cylinderVolumeCalculation(shapeName, radius, height) {
    const volume = radius * radius * height * Math.PI;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}

function cylinderSurfaceAreaCalculation(shapeName, radius, height) {
    const surfaceArea = (2 * Math.PI * radius) + (2 * height * radius * Math.PI);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Cone-------------
function coneVolumeCalculation(shapeName, radius, height) {
    const volume = (height * radius * radius * Math.PI) / 3;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}

function coneSurfaceAreaCalculation(shapeName, radius, slantHeight) {
    const surfaceArea = (Math.PI * radius * radius) + (slantHeight * radius * Math.PI);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Pyramid-------------
//---------Square-------------
function squarePyramidVolumeCalculation(shapeName, width, height) {
    const volume = (width * width * height) / 3;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}

function squarePyramidSurfaceAreaCalculation(shapeName, width, slantHeight) {
    const surfaceArea = (width * width) + 2 * width * slantHeight;
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Rectangle-------------
function rectanglePyramidVolumeCalculation(shapeName, width, length, height) {
    const volume = (width * length * height) / 3;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}

function rectanglePyramidSurfaceAreaCalculation(shapeName, width, length, height) {
    const surfaceArea = (length * width) + (0.5 * width * Math.sqrt(4 * height * height + length * length)) + (0.5 * length * Math.sqrt(4 * height * height + length * length));
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Triangle-------------
function triangularPyramidSurfaceAreaCalculation(shapeName, width, length1, length2, height, slantHeight) {
    const surfaceArea = 0.5 * (width + length1 + length2) * slantHeight + (0.5 * width * height);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}

function triangularPyramidVolumeCalculation(shapeName, width, length, height) {
    const volume = ((0.5 * width * length) * height) / 3;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Pentagon-------------
function pentagonalPyramidSurfaceAreaCalculation(shapeName, apothem, base, slantHeight) {
    const surfaceArea = (5 * base * (apothem + slantHeight)) / 2;
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}

function pentagonalPyramidVolumeCalculation(shapeName, width, base, height) {
    const volume = (5 * base * apothem * height) / 6;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
//---------Hexagonal-------------
function hexagonalPyramidSurfaceAreaCalculation(shapeName, apothem, base, slantHeight) {
    const surfaceArea = (3 * apothem * base) + (3 * base * slantHeight);
    Operate.newSolution(`The \\ surface \\ area \\ of \\ the \\ ${shapeName} \\ is: \\ ${surfaceArea}`);
    // Add a reset button
    Operate.newRestart();
}
function hexagonalPyramidVolumeCalculation(shapeName, baseLength, height) {
    const volume = (Math.sqrt(3) * baseLength * baseLength * height) / 2;
    Operate.newSolution(`The \\ volume \\ of \\ the \\ ${shapeName} \\ is: \\ ${volume}`);
    // Add a reset button
    Operate.newRestart();
}
