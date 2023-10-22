/*相似图形
例题（你要用英文）：一个长方形ABCD和另一个正方形EFGH是全等的（图形取决于进入哪个函数了），已知<A是10°/或边长（取决于进入哪个函数了），请计算<E的度数/或边长（取决于进入哪个函数了），长度和角度都要随机
*/

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
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var lengthAB = getRandomNumber();
            var question = "Given that triangle ABC is similar to triangle DEF and AB = " + lengthAB + " units, find the length of DE.";
            var answer = "Since triangle ABC is similar to triangle DEF with a scale factor of " + scale.toFixed(1) + ", DE = " + (scale * lengthAB).toFixed(1) + " units. The length of DE is found by multiplying the scale factor (0.2 - 3.0) by the length of AB.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            // Logic for square when considering side
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var sideAB = getRandomNumber();
            var question = "Square ABCD is similar to square EFGH with a scale factor of " + scale.toFixed(1) + ". If the side length of ABCD is " + sideAB + " units, find the side length of EFGH.";
            var answer = "Since square ABCD is similar to square EFGH with a scale factor of " + scale.toFixed(1) + ", EFGH's side length is " + (scale * sideAB).toFixed(1) + " units. The side length of EFGH is found by multiplying the scale factor by the side length of ABCD.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            // Logic for rectangle when considering side
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var lengthAB = getRandomNumber();
            var question = "Rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale.toFixed(1) + ". If the length of ABCD is " + lengthAB + " units, find the length of EFGH.";
            var answer = "Since rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale.toFixed(1) + ", EFGH's length is " + (scale * lengthAB).toFixed(1) + " units. The length of EFGH is found by multiplying the scale factor by the length of ABCD.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            // Logic for parallelogram when considering side
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var lengthAB = getRandomNumber();
            var question = "Parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale.toFixed(1) + ". If AB = " + lengthAB + " units, find EF.";
            var answer = "Since parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale.toFixed(1) + ", EF = " + (scale * lengthAB).toFixed(1) + " units. The length of EF is found by multiplying the scale factor by the length of AB.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            // Logic for trapezoid when considering side
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var lengthAB = getRandomNumber();
            var question = "Trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale.toFixed(1) + ". If AB = " + lengthAB + " units, find EF.";
            var answer = "Since trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale.toFixed(1) + ", EF = " + (scale * lengthAB).toFixed(1) + " units. The length of EF is found by multiplying the scale factor by the length of AB.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            // Logic for rhombus when considering side
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var sideAB = getRandomNumber();
            var question = "Rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale.toFixed(1) + ". If the side length of ABCD is " + sideAB + " units, find the side length of EFGH.";
            var answer = "Since rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale.toFixed(1) + ", EFGH's side length is " + (scale * sideAB).toFixed(1) + " units. The side length of EFGH is found by multiplying the scale factor by the side length of ABCD.";
            shapes = { type: "rhombus", question: question, answer: answer };
        }
    }

    function angle() {
        if (triangle) {
            // Logic for triangle when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Triangle ABC is similar to triangle DEF with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle DEF.";
            var answer = "Since triangle ABC is similar to triangle DEF with a scale factor of " + scale.toFixed(1) + ", the measure of angle DEF is " + getRandomAngle() + " degrees. The measure of angle DEF is the same as angle ABC due to the similarity of the triangles.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            // Logic for square when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Square ABCD is similar to square EFGH with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since square ABCD is similar to square EFGH with a scale factor of " + scale.toFixed(1) + ", the measure of angle EFG is " + getRandomAngle() + " degrees. The measure of angle EFG is the same as angle ABC due to the similarity of the squares.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            // Logic for rectangle when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since rectangle ABCD is similar to rectangle EFGH with a scale factor of " + scale.toFixed(1) + ", the measure of angle EFG is " + getRandomAngle() + " degrees. The measure of angle EFG is the same as angle ABC due to the similarity of the rectangles.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            // Logic for parallelogram when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since parallelogram ABCD is similar to parallelogram EFGH with a scale factor of " + scale.toFixed(1) + ", the measure of angle EFG is " + getRandomAngle() + " degrees. The measure of angle EFG is the same as angle ABC due to the similarity of the parallelograms.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            // Logic for trapezoid when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since trapezoid ABCD is similar to trapezoid EFGH with a scale factor of " + scale.toFixed(1) + ", the measure of angle EFG is " + getRandomAngle() + " degrees. The measure of angle EFG is the same as angle ABC due to the similarity of the trapezoids.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            // Logic for rhombus when considering angle
            var scale = (Math.floor(Math.random() * 29) + 2) / 10; // Generating a random scale between 0.2 and 3.0 with one decimal place
            var question = "Rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale.toFixed(1) + ". If angle ABC is " + getRandomAngle() + " degrees, find the measure of angle EFG.";
            var answer = "Since rhombus ABCD is similar to rhombus EFGH with a scale factor of " + scale.toFixed(1) + ", the measure of angle EFG is " + getRandomAngle() + " degrees. The measure of angle EFG is the same as angle ABC due to the similarity of the rhombuses.";
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