/*
Electric Charge and Static Electricity

Inputs:
- charge (boolean): Determines if questions related to electric charge should be included.
- staticElectricity (boolean): Determines if questions related to static electricity should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concept of electric charge and static electricity. It covers topics such as charge interactions, charging by friction, induction, and practical applications of static electricity. All numerical values are randomly generated.

Example Usage:
const result = Electric_Charge_and_Static_Electricity(true, true);
console.log(result); // Output: ['What is the basic unit of electric charge?', 'The basic unit of electric charge is the coulomb (C).']
*/

$X.physics.Middle_School_Physics.Electromagnetism.Electric_Charge_and_Static_Electricity = function (charge, staticElectricity) {
    function generateRandomObject() {
        const objects = ['a plastic rod', 'a metal sphere', 'a glass plate', 'a rubber balloon', 'an acrylic rod', 'a silk cloth', 'a wool fabric', 'a polyethylene strip'];
        return objects[Math.floor(Math.random() * objects.length)];
    }

    function generateRandomMaterial() {
        const materials = ['wool', 'silk', 'nylon', 'fur', 'glass', 'polyester', 'plastic', 'rubber'];
        return materials[Math.floor(Math.random() * materials.length)];
    }

    const questions = [];
    const answers = [];

    if (charge) {
        const object1 = generateRandomObject();
        const object2 = generateRandomObject();
        const charge1 = (Math.random() * 10).toFixed(2);
        const charge2 = (Math.random() * 10).toFixed(2);
        const distance = Math.floor(Math.random() * 100) + 1;
        const force = (8.99 * Math.pow(10, 9) * charge1 * charge2 / Math.pow(distance, 2)).toExponential(2);
        questions.push(`Explain the interaction between ${object1} and ${object2} due to the electric charges of ${charge1} C and ${charge2} C separated by a distance of ${distance} cm.`);
        answers.push(`The interaction between ${object1} and ${object2} is governed by Coulomb's law, which describes the electrostatic force between two charged objects as F = k * 丨q1 * q2丨 / r², where F is the force, k is Coulomb's constant (8.99 x 10^9 Nm²/C²), q1 and q2 are the charges (${charge1} C and ${charge2} C), and r is the distance (${distance} cm). The force between the objects is approximately ${force} N.`);
        const object3 = generateRandomObject();
        const charge3 = (Math.random() * 10).toFixed(2);
        const work = (charge3 * Math.random() * 10).toFixed(2);
        questions.push(`Calculate the work done in moving a charge of ${charge3} C through a potential difference of ${work} J.`);
        answers.push(`The work done in moving a charge of ${charge3} C through a potential difference of ${work} J is given by the equation W = q * V, where W is the work done, q is the charge, and V is the potential difference. Substituting the given values, the work done is ${charge3 * work} J.`);
    }

    if (staticElectricity) {
        const material1 = generateRandomMaterial();
        const material2 = generateRandomMaterial();
        questions.push(`Explain the process of charging ${material1} by rubbing it with ${material2}.`);
        answers.push(`Charging ${material1} by rubbing it with ${material2} involves the transfer of electrons between the materials, leading to one material becoming positively charged and the other becoming negatively charged. This process is a result of the redistribution of charges due to the differences in electron affinity and ionization energy between the materials.`);

        const object4 = generateRandomObject();
        const charge4 = (Math.random() * 10).toFixed(2);
        const inducedCharge = (Math.random() * 10).toFixed(2);
        questions.push(`Describe the process of inducing a charge of ${inducedCharge} C on ${object4} using a charged rod.`);
        answers.push(`Inducing a charge of ${inducedCharge} C on ${object4} using a charged rod involves bringing the charged rod near the object, causing a temporary redistribution of charges in the object. This process results in the induction of an opposite charge on one side and a corresponding charge of the same magnitude on the other side of the object.`);
    }

    const result = [];
    for (let i = 0; i < questions.length; i++) {
        result.push(questions[i]);
        result.push(answers[i]);
    }

    return result;
}
