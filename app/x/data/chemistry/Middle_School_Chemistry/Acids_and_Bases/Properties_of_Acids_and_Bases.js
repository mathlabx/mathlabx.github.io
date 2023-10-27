/*
Properties of Acids and Bases

Description:
This function generates questions related to the properties of acids and bases, covering their basic characteristics, common features, and their roles in chemical reactions. All numerical values are randomly generated.

Inputs:
- acidProperties (boolean): Determines if questions related to acid properties should be included.
- baseProperties (boolean): Determines if questions related to base properties should be included.
- rolesInReactions (boolean): Determines if questions related to the roles of acids and bases in reactions should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = PropertiesOfAcidsAndBases(true, false, true);
console.log(result); // Output: ['What are the typical properties of acids?', 'The typical properties of acids include a sour taste, the ability to turn blue litmus paper red, and the capacity to react with metals to produce hydrogen gas.']
*/

$X.chemistry.Middle_School_Chemistry.Acids_and_Bases.PropertiesOfAcidsAndBases = function (acidProperties, baseProperties, rolesInReactions) {
    var question = "";
    var answer = "";

    if (acidProperties || baseProperties || rolesInReactions) {
        var selectedInputs = [];
        if (acidProperties) selectedInputs.push("acidProperties");
        if (baseProperties) selectedInputs.push("baseProperties");
        if (rolesInReactions) selectedInputs.push("rolesInReactions");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "acidProperties") {
            var acidPropertiesQuestions = [
                "What are the typical properties of acids?",
                "Describe the key characteristics of acids and their common properties.",
                "Elucidate the distinctive features of acids and their observable properties.",
                "What are the common traits of acids, and how do they manifest in various contexts?",
                "Explain the fundamental properties of acids and their significance in chemical processes.",
                "Illustrate the typical properties of acids and their applications in different chemical reactions.",
                "Describe the practical applications of acid properties in various industries and scientific research.",
                "What are the distinctive attributes of acids, and how do they contribute to their roles in chemical reactions?",
                "Explain the role of acid properties in acid-base chemistry and their impact on the behavior of acids in different solutions.",
                "Elaborate on the unique properties of acids and their importance in understanding their behavior in chemical transformations."
            ];

            var acidPropertiesAnswers = [
                "The typical properties of acids include a sour taste, the ability to turn blue litmus paper red, and the capacity to react with metals to produce hydrogen gas.",
                "The key characteristics of acids involve a sour taste, the capacity to change the color of litmus paper from blue to red, and their reactivity with metals to yield hydrogen gas.",
                "Distinctive features of acids encompass a sour taste, the ability to turn blue litmus paper red, and their capability to generate hydrogen gas when they react with metals.",
                "Common traits of acids are evident in their sour taste, their ability to change the color of litmus paper, and their tendency to produce hydrogen gas during metal reactions.",
                "The fundamental properties of acids include a sour taste, the alteration of litmus paper color, and their role in chemical reactions, demonstrating their significance in various chemical processes.",
                "The typical properties of acids find practical applications in different chemical reactions, where their sour taste, litmus paper reactions, and metal reactivity play a pivotal role.",
                "Practical applications of acid properties are observed in various industries and scientific research, where the distinctive characteristics of acids are harnessed for specific purposes.",
                "The distinctive attributes of acids, such as their sour taste and litmus paper reactions, contribute to their roles in chemical reactions and their behavior in different solutions.",
                "Acid properties play a significant role in acid-base chemistry, influencing the behavior of acids in various solutions and their interactions with other substances.",
                "The unique properties of acids are essential for understanding their behavior in chemical transformations, as they impact their roles in different reactions and processes."
            ];

            var index = Math.floor(Math.random() * acidPropertiesQuestions.length);
            question = acidPropertiesQuestions[index];
            answer = acidPropertiesAnswers[index];
        } else if (selectedInput === "baseProperties") {
            var basePropertiesQuestions = [
                "What are the typical properties of bases?",
                "Describe the key characteristics of bases and their common properties.",
                "Elucidate the distinctive features of bases and their observable properties.",
                "What are the common traits of bases, and how do they manifest in various contexts?",
                "Explain the fundamental properties of bases and their significance in chemical processes.",
                "Illustrate the typical properties of bases and their applications in different chemical reactions.",
                "Describe the practical applications of base properties in various industries and scientific research.",
                "What are the distinctive attributes of bases, and how do they contribute to their roles in chemical reactions?",
                "Explain the role of base properties in acid-base chemistry and their impact on the behavior of bases in different solutions.",
                "Elaborate on the unique properties of bases and their importance in understanding their behavior in chemical transformations."
            ];

            var basePropertiesAnswers = [
                "The typical properties of bases include a bitter taste, the ability to turn red litmus paper blue, and their capacity to neutralize acids.",
                "The key characteristics of bases involve a bitter taste, the capacity to change the color of red litmus paper to blue, and their ability to neutralize acids.",
                "Distinctive features of bases encompass a bitter taste, the ability to turn red litmus paper blue, and their capability to neutralize acids, showcasing their observable properties.",
                "Common traits of bases are evident in their bitter taste, their ability to change the color of red litmus paper, and their role in neutralizing acids in various contexts.",
                "The fundamental properties of bases include a bitter taste, the alteration of red litmus paper color, and their capacity to neutralize acids, demonstrating their significance in various chemical processes.",
                "The typical properties of bases find practical applications in different chemical reactions, where their bitter taste, red litmus paper reactions, and acid-neutralizing ability play a pivotal role.",
                "Practical applications of base properties are observed in various industries and scientific research, where the distinctive characteristics of bases are harnessed for specific purposes.",
                "The distinctive attributes of bases, such as their bitter taste and litmus paper reactions, contribute to their roles in chemical reactions and their behavior in different solutions.",
                "Base properties play a significant role in acid-base chemistry, influencing the behavior of bases in various solutions and their interactions with other substances.",
                "The unique properties of bases are essential for understanding their behavior in chemical transformations, as they impact their roles in different reactions and processes."
            ];

            var index = Math.floor(Math.random() * basePropertiesQuestions.length);
            question = basePropertiesQuestions[index];
            answer = basePropertiesAnswers[index];
        } else if (selectedInput === "rolesInReactions") {
            var rolesInReactionsQuestions = [
                "What are the key roles of acids and bases in chemical reactions?",
                "Describe the fundamental roles played by acids and bases in different chemical processes and transformations.",
                "Elucidate the distinctive contributions of acids and bases to chemical reactions and their significance in maintaining chemical balance.",
                "Explain the essential functions of acids and bases in various reactions and their impact on chemical equilibrium.",
                "Illustrate the significant roles of acids and bases in chemical reactions and their influence on the behavior of different substances.",
                "Describe the practical applications of the roles of acids and bases in different industries and scientific research.",
                "What are the specific functions of acids and bases in chemical transformations, and how do they contribute to the formation of various chemical products?",
                "Explain the intricate interplay between acids and bases in different reactions and their role in promoting chemical equilibrium and stability.",
                "Elaborate on the complex roles of acids and bases in chemical processes and their implications for the synthesis of specific chemical compounds.",
                "Discuss the multifaceted roles of acids and bases in various chemical reactions and their applications in different fields of chemistry."
            ];

            var rolesInReactionsAnswers = [
                "The key roles of acids and bases in chemical reactions involve the neutralization of each other to produce salts and water, the donation and acceptance of protons, and the maintenance of chemical balance.",
                "Acids and bases play essential roles in different chemical processes and transformations, including the neutralization of each other, the transfer of protons, and the regulation of chemical equilibrium.",
                "The distinctive contributions of acids and bases to chemical reactions are evident in their ability to neutralize each other, donate and accept protons, and maintain chemical balance, ensuring the stability of chemical systems.",
                "Acids and bases fulfill essential functions in various reactions, such as neutralizing each other, participating in proton transfer, and influencing chemical equilibrium, thereby regulating the progress of chemical reactions.",
                "The significant roles of acids and bases in chemical reactions are manifested in their participation in neutralization processes, proton exchange reactions, and the modulation of chemical behavior, thereby influencing the outcome of diverse chemical processes.",
                "Practical applications of the roles of acids and bases are observed in different industries and scientific research, where their participation in neutralization and proton transfer reactions contributes to the development of various chemical products.",
                "The specific functions of acids and bases in chemical transformations are crucial for the formation of various chemical products, as they engage in neutralization processes, proton exchange reactions, and the synthesis of specific chemical compounds.",
                "The intricate interplay between acids and bases in different reactions promotes chemical equilibrium and stability, as they participate in neutralization processes, proton transfer reactions, and the maintenance of chemical balance.",
                "The complex roles of acids and bases in chemical processes have implications for the synthesis of specific chemical compounds, as they contribute to neutralization processes, proton transfer reactions, and the formation of various chemical products.",
                "The multifaceted roles of acids and bases in various chemical reactions are essential for understanding their applications in different fields of chemistry, as they engage in neutralization processes, proton transfer reactions, and the regulation of chemical systems."
            ];

            var index = Math.floor(Math.random() * rolesInReactionsQuestions.length);
            question = rolesInReactionsQuestions[index];
            answer = rolesInReactionsAnswers[index];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
