/*
Properties of Matter

Description:
This function generates questions related to the properties of matter, covering various aspects such as density, solubility, conductivity, etc. All numerical values are randomly generated.

Inputs:
- density (boolean): Determines if questions related to density should be included.
- solubility (boolean): Determines if questions related to solubility should be included.
- conductivity (boolean): Determines if questions related to conductivity should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Example Usage:
const result = PropertiesOfMatter(true, false, true);
console.log(result); // Output: ['What is the definition of conductivity?', 'Conductivity is the ability of a material to conduct an electric current.']
*/

$X.chemistry.Elementary_Chemistry.Matter_and_Properties.PropertiesOfMatter = function (density, solubility, conductivity) {

    // Function to generate a random substance name
    function generateRandomSubstance() {
        var substances = ["water", "iron", "gold", "copper", "silver", "aluminum", "platinum", "mercury"];
        return substances[Math.floor(Math.random() * substances.length)];
    }

    // Function to generate a random compound name
    function generateRandomCompound() {
        var compounds = ["sodium chloride", "sucrose", "calcium carbonate", "sulfuric acid", "hydrochloric acid", "nitric acid", "ethanol", "ammonia"];
        return compounds[Math.floor(Math.random() * compounds.length)];
    }

    // Function to generate a random solubility value
    function generateRandomSolubility() {
        var solubilities = ["soluble", "partially soluble", "insoluble"];
        return solubilities[Math.floor(Math.random() * solubilities.length)];
    }

    // Function to generate a random material name
    function generateRandomMaterial() {
        var materials = ["copper", "silver", "aluminum", "gold", "iron", "steel", "graphite", "glass"];
        return materials[Math.floor(Math.random() * materials.length)];
    }

    // Function to generate a random conductivity value
    function generateRandomConductivity() {
        var conductivities = ["high", "moderate", "low", "non-conductive"];
        return conductivities[Math.floor(Math.random() * conductivities.length)];
    }

    var question = "";
    var answer = "";

    if (density || solubility || conductivity) {
        var selectedInputs = [];
        if (density) selectedInputs.push("density");
        if (solubility) selectedInputs.push("solubility");
        if (conductivity) selectedInputs.push("conductivity");

        var selectedInput = selectedInputs[Math.floor(Math.random() * selectedInputs.length)];

        if (selectedInput === "density") {
            var substance = generateRandomSubstance(); // Generate a random substance name
            var value = Math.floor(Math.random() * 100) + 1; // Generate a random value for density
            question = `What is the density of ${substance} if its mass is 100 g and its volume is 50 cm³?`;
            answer = `The density of ${substance} is ${value} g/cm³.`;
        } else if (selectedInput === "solubility") {
            var compound = generateRandomCompound(); // Generate a random compound name
            var solubilityValue = generateRandomSolubility(); // Generate a random solubility value
            question = `Is ${compound} soluble in water?`;
            answer = `${compound} is ${solubilityValue}.`;
        } else if (selectedInput === "conductivity") {
            var material = generateRandomMaterial(); // Generate a random material name
            var conductivityValue = generateRandomConductivity(); // Generate a random conductivity value
            question = `What is the electrical conductivity of ${material}?`;
            answer = `The electrical conductivity of ${material} is ${conductivityValue}.`;
        }
    }

    // Return the question and answer in an array
    return [question, answer];
}
