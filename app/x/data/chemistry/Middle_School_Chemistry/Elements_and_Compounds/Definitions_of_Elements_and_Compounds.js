/*
Definitions of Elements and Compounds

Description:
This function generates questions related to the definitions of elements and compounds, covering the basic definitions and differences between elements and compounds. All numerical values are randomly generated.

Inputs:
- elements (boolean): Determines if questions related to elements should be included.
- compounds (boolean): Determines if questions related to compounds should be included.
- differences (boolean): Determines if questions related to the differences between elements and compounds should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = DefinitionsOfElementsAndCompounds(true, false, true);
console.log(result); // Output: ['What is the primary difference between elements and compounds?', 'The primary difference between elements and compounds is that elements are made up of only one type of atom, whereas compounds are composed of two or more different types of atoms chemically bonded together.']
*/

$X.chemistry.Middle_School_Chemistry.Elements_and_Compounds.DefinitionsOfElementsAndCompounds = function (elements, compounds, differences) {
    var question = "";
    var answer = "";

    if (elements || compounds || differences) {
        var selectedInputs = [];
        if (elements) selectedInputs.push("elements");
        if (compounds) selectedInputs.push("compounds");
        if (differences) selectedInputs.push("differences");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "elements") {
            var elementsDict = {
                "Oxygen": "Oxygen is a chemical element with the symbol O and atomic number 8.",
                "Hydrogen": "Hydrogen is a chemical element with the symbol H and atomic number 1.",
                "Carbon": "Carbon is a chemical element with the symbol C and atomic number 6.",
                "Nitrogen": "Nitrogen is a chemical element with the symbol N and atomic number 7.",
                "Sodium": "Sodium is a chemical element with the symbol Na and atomic number 11.",
                "Chlorine": "Chlorine is a chemical element with the symbol Cl and atomic number 17.",
                "Potassium": "Potassium is a chemical element with the symbol K and atomic number 19.",
                "Calcium": "Calcium is a chemical element with the symbol Ca and atomic number 20.",
                "Iron": "Iron is a chemical element with the symbol Fe and atomic number 26.",
                "Magnesium": "Magnesium is a chemical element with the symbol Mg and atomic number 12."
            };

            var elements = Object.keys(elementsDict);
            var randomElement = elements[Math.floor(Math.random() * elements.length)];
            question = "Define the element " + randomElement + ".";
            answer = elementsDict[randomElement];
        } else if (selectedInput === "compounds") {
            var compoundsDict = {
                "Water": "Water is a chemical compound that consists of two hydrogen atoms and one oxygen atom.",
                "Carbon Dioxide": "Carbon dioxide is a chemical compound composed of one carbon atom and two oxygen atoms.",
                "Sodium Chloride": "Sodium chloride is a chemical compound formed by the ionic bonding of sodium and chlorine ions.",
                "Calcium Carbonate": "Calcium carbonate is a chemical compound with the formula CaCO3, containing one calcium atom, one carbon atom, and three oxygen atoms.",
                "Hydrochloric Acid": "Hydrochloric acid is a chemical compound with the formula HCl, consisting of one hydrogen atom and one chlorine atom.",
                "Sulfuric Acid": "Sulfuric acid is a chemical compound with the formula H2SO4, composed of two hydrogen atoms, one sulfur atom, and four oxygen atoms.",
                "Methane": "Methane is a chemical compound with the formula CH4, containing one carbon atom and four hydrogen atoms.",
                "Ethanol": "Ethanol is a chemical compound with the formula C2H5OH, consisting of two carbon atoms, six hydrogen atoms, and one oxygen atom.",
                "Acetic Acid": "Acetic acid is a chemical compound with the formula CH3COOH, containing two carbon atoms, four hydrogen atoms, and two oxygen atoms.",
                "Ammonia": "Ammonia is a chemical compound with the formula NH3, composed of one nitrogen atom and three hydrogen atoms."
            };

            var compounds = Object.keys(compoundsDict);
            var randomCompound = compounds[Math.floor(Math.random() * compounds.length)];
            question = "Define the compound " + randomCompound + ".";
            answer = compoundsDict[randomCompound];
        } else if (selectedInput === "differences") {
            var differencesDict = {
                "1": "The primary difference between elements and compounds is that elements are made up of only one type of atom, whereas compounds are composed of two or more different types of atoms chemically bonded together.",
                "2": "Elements cannot be broken down into simpler substances by chemical means, while compounds can be decomposed into simpler substances through chemical reactions.",
                "3": "Elements have unique chemical symbols and atomic numbers, whereas compounds have chemical formulas that represent the relative numbers of each element in the compound.",
                "4": "Elements exhibit specific properties based on their atomic structure, while compounds often have properties that are different from those of their constituent elements."
            };

            var differencesKeys = Object.keys(differencesDict);
            var randomDifference = differencesKeys[Math.floor(Math.random() * differencesKeys.length)];
            question = "What is the primary difference between elements and compounds?";
            answer = differencesDict[randomDifference];
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
