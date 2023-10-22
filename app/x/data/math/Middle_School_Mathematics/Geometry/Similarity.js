/*全等图形
例题（你要用英文）：一个长方形ABCD和另一个正方形EFGH是全等的（图形取决于进入哪个函数了），已知<A是10°/或边长（取决于进入哪个函数了），请计算<E的度数/或边长（取决于进入哪个函数了），长度和角度都要随机
*/

$X.math.Middle_School_Mathematics.Geometry.Similarity = function (C_side, C_angle, triangle, square, rectangle, parallelogram, trapezoid, rhombus) {
    var shapes = [];
    // Assuming shapes is an array of objects representing shapes

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
            var question = "Consider a triangle ABC where AB = " + getRandomNumber() + " units and BC = " + getRandomNumber() + " units. If the lengths of AB and BC are in the ratio 2:3, find the length of AC.";
            var answer = "Let the length of AB be 2x and BC be 3x. By applying the Pythagorean theorem, we can find the length of AC.";
            shapes.push({ type: "triangle", question: question, answer: answer });
        } else if (square) {
            // Logic for square when considering side
            var question = "A square has a side length of " + getRandomNumber() + " units. Find its diagonal length.";
            var answer = "The diagonal of a square can be found using the Pythagorean theorem with the side length.";
            shapes.push({ type: "square", question: question, answer: answer });
        } else if (rectangle) {
            // Logic for rectangle when considering side
            var question = "Consider a rectangle with length " + getRandomNumber() + " units and width " + getRandomNumber() + " units. Find its perimeter.";
            var answer = "The perimeter of a rectangle can be found using the formula 2 * (length + width).";
            shapes.push({ type: "rectangle", question: question, answer: answer });
        } else if (parallelogram) {
            // Logic for parallelogram when considering side
            var question = "In a parallelogram ABCD, AB = " + getRandomNumber() + " units and the height corresponding to AB is " + getRandomNumber() + " units. Find the area of the parallelogram.";
            var answer = "The area of a parallelogram can be found using the formula base * height.";
            shapes.push({ type: "parallelogram", question: question, answer: answer });
        } else if (trapezoid) {
            // Logic for trapezoid when considering side
            var question = "Consider a trapezoid ABCD where AB = " + getRandomNumber() + " units, CD = " + getRandomNumber() + " units, and the distance between the parallel sides is " + getRandomNumber() + " units. Find its area.";
            var answer = "The area of a trapezoid can be found using the formula (1/2) * (sum of parallel sides) * height.";
            shapes.push({ type: "trapezoid", question: question, answer: answer });
        } else if (rhombus) {
            // Logic for rhombus when considering side
            var question = "A rhombus has a side length of " + getRandomNumber() + " units. Find its perimeter.";
            var answer = "The perimeter of a rhombus can be found by multiplying the length of one side by 4.";
            shapes.push({ type: "rhombus", question: question, answer: answer });
        }
    }

    function angle() {
        if (triangle) {
            // Logic for triangle when considering angle
            var question = "In triangle ABC, if angle A is " + getRandomAngle() + " degrees and the other two angles are in the ratio 2:3, find the measure of angle B and angle C.";
            var answer = "Let the other two angles be 2x and 3x. Then, apply the angle sum property of a triangle to find the measures of angles B and C.";
            shapes.push({ type: "triangle", question: question, answer: answer });
        } else if (square) {
            // Logic for square when considering angle
            var question = "In a square ABCD, if angle A is " + getRandomAngle() + " degrees, find the measures of the other three angles.";
            var answer = "In a square, all the angles are equal. Use the property of the square to find the measures of angles B, C, and D.";
            shapes.push({ type: "square", question: question, answer: answer });
        } else if (rectangle) {
            // Logic for rectangle when considering angle
            var question = "In a rectangle, if one of the angles is " + getRandomAngle() + " degrees, find the measures of the other three angles.";
            var answer = "In a rectangle, opposite angles are equal. Use this property to find the measures of the other angles.";
            shapes.push({ type: "rectangle", question: question, answer: answer });
        } else if (parallelogram) {
            // Logic for parallelogram when considering angle
            var question = "In parallelogram ABCD, if angle A is " + getRandomAngle() + " degrees, find the measures of the other three angles.";
            var answer = "In a parallelogram, consecutive angles are supplementary. Use this property to find the measures of the other angles.";
            shapes.push({ type: "parallelogram", question: question, answer: answer });
        } else if (trapezoid) {
            // Logic for trapezoid when considering angle
            var question = "In trapezoid ABCD, if angle A is " + getRandomAngle() + " degrees, find the measures of the other three angles.";
            var answer = "Use the properties of trapezoid to find the measures of angles B, C, and D.";
            shapes.push({ type: "trapezoid", question: question, answer: answer });
        } else if (rhombus) {
            // Logic for rhombus when considering angle
            var question = "In a rhombus ABCD, if angle A is " + getRandomAngle() + " degrees, find the measures of the other three angles.";
            var answer = "In a rhombus, adjacent angles are supplementary. Use this property to find the measures of the other angles.";
            shapes.push({ type: "rhombus", question: question, answer: answer });
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