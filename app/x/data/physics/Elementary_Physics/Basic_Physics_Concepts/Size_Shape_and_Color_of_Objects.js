/*
Size, Shape, and Color of Objects

Inputs:
- size (boolean): Determines if questions related to the size of objects should be included.
- shape (boolean): Determines if questions related to the shapes of objects should be included.
- color (boolean): Determines if questions related to the colors of objects should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the size, shape, and color of various objects. It covers topics such as dimensions, geometrical forms, and color perception of different objects.

Example Usage:
const result = Size_Shape_Color_Objects(true, true, false);
console.log(result); // Output: ['What is the shape of...', 'The size of the object is...']
*/

$X.physics.Elementary_Physics.Basic_Physics_Concepts.Size_Shape_Color_Objects = function (size, shape, color) {
    // Generating random boolean values
    size = Math.random() < 0.5;
    shape = Math.random() < 0.5 && !size;
    color = !size && !shape;

    const allQuestions = [
        'What is the actual physical dimension of the object in terms of length, width, and height?',
        'What is the relative size of the object in comparison to other objects nearby?',
        'How does the size of the object affect its functionality or utility?',
        'In what ways can the size of the object be measured?',
        'What are the different shapes present in the object?',
        'How do the various shapes contribute to the overall structure and purpose of the object?',
        'Can the object be categorized into any specific geometrical shapes such as squares, circles, triangles, or others?',
        'What are the defining features of the shape of the object?',
        'How does the color of the object influence its perception in different environments?',
        'What are the primary colors present in the object, and how are they combined to create the perceived color?',
        'How does the color of the object impact its functionality, aesthetics, or visibility?',
        'Does the color of the object serve any specific purpose or convey any particular information?',
    ];

    const allAnswers = [
        'The actual physical dimensions of the object are 10 cm x 5 cm x 3 cm.',
        'The object is relatively larger compared to the other objects nearby, taking up a significant amount of space.',
        'The larger size of the object allows it to accommodate more features and provide enhanced performance.',
        'The size of the object can be measured using a ruler, tape measure, or other appropriate measuring tools.',
        'The object exhibits various shapes such as rectangular, cylindrical, and spherical components.',
        'The different shapes contribute to the structural stability and functional versatility of the object.',
        'The object can be categorized as a combination of rectangular and circular components.',
        'The defining features of the object`s shape include sharp edges, smooth curves, and intricate patterns.',
        'The color of the object appears to be a combination of red, blue, and yellow, forming a vibrant visual appearance.',
        'The primary colors present are carefully combined using additive or subtractive color mixing to achieve the perceived color.',
        'The color of the object enhances its visual appeal and ensures better visibility in different lighting conditions.',
        'The color serves as an indicator of the object`s brand identity and distinguishes it from similar products in the market.',
    ];

    const selectedQuestions = [];
    const selectedAnswers = [];

    if (size) {
        selectedQuestions.push(allQuestions[0]);
        selectedAnswers.push(allAnswers[0]);
        selectedQuestions.push(allQuestions[1]);
        selectedAnswers.push(allAnswers[1]);
        selectedQuestions.push(allQuestions[2]);
        selectedAnswers.push(allAnswers[2]);
        selectedQuestions.push(allQuestions[3]);
        selectedAnswers.push(allAnswers[3]);
    }

    if (shape) {
        selectedQuestions.push(allQuestions[4]);
        selectedAnswers.push(allAnswers[4]);
        selectedQuestions.push(allQuestions[5]);
        selectedAnswers.push(allAnswers[5]);
        selectedQuestions.push(allQuestions[6]);
        selectedAnswers.push(allAnswers[6]);
        selectedQuestions.push(allQuestions[7]);
        selectedAnswers.push(allAnswers[7]);
    }

    if (color) {
        selectedQuestions.push(allQuestions[8]);
        selectedAnswers.push(allAnswers[8]);
        selectedQuestions.push(allQuestions[9]);
        selectedAnswers.push(allAnswers[9]);
        selectedQuestions.push(allQuestions[10]);
        selectedAnswers.push(allAnswers[10]);
        selectedQuestions.push(allQuestions[11]);
        selectedAnswers.push(allAnswers[11]);
    }

    function getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        return [selectedQuestions[randomIndex], selectedAnswers[randomIndex]];
    }

    const result = getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers);
    return result;
}
