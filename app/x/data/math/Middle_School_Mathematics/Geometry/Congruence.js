/*相似图形*/

$X.math.Middle_School_Mathematics.Geometry.Similarity = function (C_side, C_angle, triangle, square, rectangle, parallelogram, trapezoid, rhombus) {
    var shapes = {};

    const shapeArray = [triangle, square, rectangle, parallelogram, trapezoid, rhombus];
    let trueCount = shapeArray.filter(shape => shape).length;

    if (trueCount > 1) {
        const trueIndices = shapeArray.map((shape, index) => shape ? index : -1).filter(index => index !== -1);
        const randomIndexToKeep = trueIndices[Math.floor(Math.random() * trueIndices.length)];
        for (let i = 0; i < shapeArray.length; i++) {
            if (i !== randomIndexToKeep) {
                shapeArray[i] = false;
            }
        }
    }

    [triangle, square, rectangle, parallelogram, trapezoid, rhombus] = shapeArray;

    // Logic to randomly select the shapes based on the provided boolean values
    if (C_side && C_angle) {
        var randomZeroOrOne = Math.floor(Math.random() * 2);
        if (randomZeroOrOne == 0) {
            side();
        } else {
            angle();
        }
    } else {
        if (C_side) {
            side();
        }
        if (C_angle) {
            angle();
        }
    }

    function side() {
        if (triangle) {
            // Logic for triangle when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Given that triangle ABC is similar to triangle DEF and AB = " + getRandomNumber() + " units, find the length of DE.";
            var answer = "Since the triangles are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the length of DE.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            // Logic for square when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Square ABCD is similar to square EFGH with a scale factor of " + scale + ". If the side length of ABCD is " + getRandomNumber() + " units, find the side length of EFGH.";
            var answer = "Since the squares are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the side length of EFGH.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            // Logic for rectangle when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale + ". If the length of ABCD is " + getRandomNumber() + " units, find the length of EFGH.";
            var answer = "Since the rectangles are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the length of EFGH.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            // Logic for parallelogram when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale + ". If AB = " + getRandomNumber() + " units, find EF.";
            var answer = "Since the parallelograms are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the length of EF.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            // Logic for trapezoid when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale + ". If AB = " + getRandomNumber() + " units, find EF.";
            var answer = "Since the trapezoids are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the length of EF.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            // Logic for rhombus when considering side
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale + ". If the side length of ABCD is " + getRandomNumber() + " units, find the side length of EFGH.";
            var answer = "Since the rhombuses are similar, the ratio of corresponding sides is equal to the scale factor. Use this to find the side length of EFGH.";
            shapes = { type: "rhombus", question: question, answer: answer };
        }
    }

    function angle() {
        if (triangle) {
            // Logic for triangle when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Triangle ABC is similar to triangle DEF with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle DEF.";
            var answer = "Since the triangles are similar, the corresponding angles are equal. Use this to find the measure of angle DEF.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            // Logic for square when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Square ABCD is similar to square EFGH with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since the squares are similar, the corresponding angles are equal. Use this to find the measure of angle EFG.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            // Logic for rectangle when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since the rectangles are similar, the corresponding angles are equal. Use this to find the measure of angle EFG.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            // Logic for parallelogram when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since the parallelograms are similar, the corresponding angles are equal. Use this to find the measure of angle EFG.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            // Logic for trapezoid when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since the trapezoids are similar, the corresponding angles are equal. Use this to find the measure of angle EFG.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            // Logic for rhombus when considering angle
            var scale = (Math.floor(Math.random() * 9) + 1) / 10; // Generating a random scale between 0.1 and 1.0 with one decimal place
            var question = "Rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since the rhombuses are similar, the corresponding angles are equal. Use this to find the measure of angle EFG.";
            shapes = { type: "rhombus", question: question, answer: answer };
        }
    }

    // Helper function to generate random numbers
    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Generating a random number between 1 and 10
    }

    // Helper function to generate random angle values
    function getRandomAngle() {
        return Math.floor(Math.random() * 80) + 10; // Generating a random angle between 10 and 90 degrees
    }

    // Return the array of shapes
    return [shapes.question, shapes.answer];
};
