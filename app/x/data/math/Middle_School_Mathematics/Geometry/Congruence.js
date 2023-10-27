/*
Congruence

Description:
This function generates a problem related to the concept of congruence in various geometric shapes. It randomly selects shapes based on the provided boolean values and generates questions and answers for each case. The function returns the question and the corresponding answer.

Inputs:
- C_side: Boolean value indicating whether the problem involves the congruence of sides
- C_angle: Boolean value indicating whether the problem involves the congruence of angles
- triangle: Boolean value indicating whether the problem involves a triangle
- square: Boolean value indicating whether the problem involves a square
- rectangle: Boolean value indicating whether the problem involves a rectangle
- parallelogram: Boolean value indicating whether the problem involves a parallelogram
- trapezoid: Boolean value indicating whether the problem involves a trapezoid
- rhombus: Boolean value indicating whether the problem involves a rhombus

Outputs:
- Array: An array containing the question and the answer.

Example Usage:
const result = Congruence(true, true, true, false, true, false, false);
console.log(result);
// Example output: ["Parallelogram ABCD is congruent to parallelogram EFGH. If the base AB has a length of 5 units, what is the length of EF?", "In congruent parallelograms, corresponding sides are equal. Hence, the length of EF is 5 units."]
// The question involves the congruence of sides in a parallelogram, and the answer explains the property of corresponding sides in congruent shapes.

*/

$X.math.Middle_School_Mathematics.Geometry.Congruence = function (C_side, C_angle, triangle, square, rectangle, parallelogram, trapezoid, rhombus) {
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
            var lengthAB = getRandomNumber();
            var question = "Triangle ABC is congruent to triangle DEF. If AB has a length of " + lengthAB + " units, what is the length of DE?";
            var answer = "In congruent triangles, corresponding sides are equal. Hence, DE has a length of " + lengthAB + " units.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            var sideAB = getRandomNumber();
            var question = "Square ABCD is congruent to square EFGH. If the side length of ABCD is " + sideAB + " units, what is the side length of EFGH?";
            var answer = "In congruent squares, corresponding sides are equal. Hence, the side length of EFGH is " + sideAB + " units.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            var lengthAB = getRandomNumber();
            var question = "Rectangle ABCD is congruent to rectangle EFGH. If AB has a length of " + lengthAB + " units, what is the length of EF?";
            var answer = "In congruent rectangles, corresponding sides are equal. Hence, the length of EF is " + lengthAB + " units.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            var baseAB = getRandomNumber();
            var question = "Parallelogram ABCD is congruent to parallelogram EFGH. If the base AB has a length of " + baseAB + " units, what is the length of EF?";
            var answer = "In congruent parallelograms, corresponding sides are equal. Hence, the length of EF is " + baseAB + " units.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            var lengthAB = getRandomNumber();
            var question = "Trapezoid ABCD is congruent to trapezoid EFGH. If AB has a length of " + lengthAB + " units, what is the length of EF?";
            var answer = "In congruent trapezoids, corresponding sides are equal. Hence, the length of EF is " + lengthAB + " units.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            var sideAB = getRandomNumber();
            var question = "Rhombus ABCD is congruent to rhombus EFGH. If the side length of ABCD is " + sideAB + " units, what is the side length of EFGH?";
            var answer = "In congruent rhombuses, corresponding sides are equal. Hence, the side length of EFGH is " + sideAB + " units.";
            shapes = { type: "rhombus", question: question, answer: answer };
        }
    }

    function angle() {
        if (triangle) {
            var angleA = getRandomAngle();
            var question = "Triangle ABC is congruent to triangle DEF. If angle A measures " + angleA + " degrees, what is the measure of angle D?";
            var answer = "In congruent triangles, corresponding angles are equal. Hence, angle D measures " + angleA + " degrees.";
            shapes = { type: "triangle", question: question, answer: answer };
        } else if (square) {
            var angleA = getRandomAngle();
            var question = "Square ABCD is congruent to square EFGH. If angle A measures " + angleA + " degrees, what is the measure of angle E?";
            var answer = "In congruent squares, corresponding angles are equal. Hence, angle E measures " + angleA + " degrees.";
            shapes = { type: "square", question: question, answer: answer };
        } else if (rectangle) {
            var angleA = getRandomAngle();
            var question = "Rectangle ABCD is congruent to rectangle EFGH. If angle A measures " + angleA + " degrees, what is the measure of angle E?";
            var answer = "In congruent rectangles, corresponding angles are equal. Hence, angle E measures " + angleA + " degrees.";
            shapes = { type: "rectangle", question: question, answer: answer };
        } else if (parallelogram) {
            var angleA = getRandomAngle();
            var question = "Parallelogram ABCD is congruent to parallelogram EFGH. If angle A measures " + angleA + " degrees, what is the measure of angle E?";
            var answer = "In congruent parallelograms, corresponding angles are equal. Hence, angle E measures " + angleA + " degrees.";
            shapes = { type: "parallelogram", question: question, answer: answer };
        } else if (trapezoid) {
            var angleA = getRandomAngle();
            var question = "Trapezoid ABCD is congruent to trapezoid EFGH. If angle A measures " + angleA + " degrees, what is the measure of angle E?";
            var answer = "In congruent trapezoids, corresponding angles are equal. Hence, angle E measures " + angleA + " degrees.";
            shapes = { type: "trapezoid", question: question, answer: answer };
        } else if (rhombus) {
            var angleA = getRandomAngle();
            var question = "Rhombus ABCD is congruent to rhombus EFGH. If angle A measures " + angleA + " degrees, what is the measure of angle E?";
            var answer = "In congruent rhombuses, corresponding angles are equal. Hence, angle E measures " + angleA + " degrees.";
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
