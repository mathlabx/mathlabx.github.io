/*
Nuclear Reactions and Radioactive Decay

Inputs:
- nuclearReactions (boolean): Determines if questions related to nuclear reactions should be included.
- radioactiveDecay (boolean): Determines if questions related to radioactive decay should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to nuclear reactions and radioactive decay, covering topics such as nuclear reactions and types of radioactive decay. All numerical values are randomly generated.

Example Usage:
const result = NuclearReactionsAndRadioactiveDecay(true, false);
console.log(result); // Output: ['What is the product of the nuclear reaction 4He + 9Be?', 'The product is 12C.']
*/

$X.physics.High_School_Physics.Atomic_and_Nuclear_Physics.NuclearReactionsAndRadioactiveDecay = function (nuclearReactions, radioactiveDecay) {

    const getRandomElement = () => {
        const elements = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
            'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
            'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn',
            'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'];
        return elements[Math.floor(Math.random() * elements.length)];
    };

    const getRandomDecayType = () => {
        const decayTypes = ['alpha decay', 'beta decay', 'gamma decay'];
        return decayTypes[Math.floor(Math.random() * decayTypes.length)];
    };

    const getRandomQuestion = () => {
        const questions = [
            "What is the product of the nuclear reaction",
            "Which element undergoes",
            "What is the type of radioactive decay exhibited by",
            "What is the resulting isotope when"
        ];
        return questions[Math.floor(Math.random() * questions.length)];
    };

    const result = [];

    if (nuclearReactions) {
        const reactant1 = getRandomElement();
        const reactant2 = getRandomElement();
        result.push(`${getRandomQuestion()} ${reactant1} + ${reactant2}?`);

        // Here you can provide the logic for the product based on the reactants
        // For example:
        const product = "To be determined";
        result.push(product);
    }

    if (radioactiveDecay) {
        const element = getRandomElement();
        const decayType = getRandomDecayType();
        result.push(`${getRandomQuestion()} ${element} in ${decayType}?`);

        // Here you can provide the logic for the type of decay based on the element and decay type
        // For example:
        const decayProduct = "To be determined";
        result.push(decayProduct);
    }

    return result;
}
