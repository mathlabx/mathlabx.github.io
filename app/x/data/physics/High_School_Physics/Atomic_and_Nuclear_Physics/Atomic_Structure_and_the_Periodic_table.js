/*
Atomic Structure and the Periodic-table

Inputs:
- atomicNumber (boolean): Determines if questions related to the atomic number should be included.
- isotopes (boolean): Determines if questions related to isotopes should be included.
- periodicTable (boolean): Determines if questions related to the periodic table should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to atomic structure and the periodic table, covering topics such as atomic numbers, isotopes, and the periodic table. All numerical values are randomly generated.

Example Usage:
const result = AtomicStructureAndPeriodicTable(true, true, false);
console.log(result); // Output: ['What is the atomic number of the element with 12 protons?', 'The atomic number is 12.']
*/

$X.physics.High_School_Physics.Atomic_and_Nuclear_Physics.AtomicStructureAndPeriodicTable = function (atomicNumber, isotopes, periodicTable) {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomElement() {
        const elements = [
            'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
            'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
            'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc',
            'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium',
            'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin',
            'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium',
            'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium',
            'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium',
            'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium',
            'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium',
            'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium',
            'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson'
        ];
        return elements[Math.floor(Math.random() * elements.length)];
    }

    const questions = [];
    const answers = [];

    if (atomicNumber) {
        const protons = getRandomNumber(1, 118);
        questions.push(`What is the atomic number of the element with ${protons} protons?`);
        answers.push(protons);
    }

    if (isotopes) {
        const element = getRandomElement();
        const isotopeNumber = getRandomNumber(1, 10);
        questions.push(`How many protons and neutrons are in the nucleus of ${isotopeNumber}${element}?`);
        const protons = getRandomNumber(1, 100);
        const neutrons = getRandomNumber(1, 150);
        answers.push(`${protons} protons and ${neutrons} neutrons`);
    }

    if (periodicTable) {
        const element = getRandomElement();
        const group = getRandomNumber(1, 18);
        const period = getRandomNumber(1, 7);
        questions.push(`Which element is located at Group ${group} and Period ${period} in the periodic table?`);
        answers.push(element);
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
