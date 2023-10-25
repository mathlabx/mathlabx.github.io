/*
Simple Machines

Inputs:
- types (boolean): Determines if questions related to different types of simple machines should be included.
- applications (boolean): Determines if questions related to the applications of simple machines should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the concepts of simple machines. It covers different types of simple machines, their working principles, and their applications in various scenarios.

Example Usage:
const result = Simple_Machines(true, false);
console.log(result); // Output: ['What are the different types of simple machines?', 'The different types of simple machines include...']
*/

$X.physics.Elementary_Physics.Force_and_Motion.Simple_Machines = function (types, applications) {
    // Generating random boolean values
    types = Math.random() < 0.5;
    applications = !types;

    const allQuestions = [
        'What is the fundamental principle behind the functioning of simple machines?',
        'How does the concept of mechanical advantage relate to the efficiency of simple machines?',
        'Can you provide examples of compound machines that utilize the principles of multiple simple machines?',
        'What are the applications of levers in various engineering fields such as construction and manufacturing?',
        'How do wheel and axle systems contribute to the mechanics of vehicles and rotational equipment?',
        'What are the different types of pulleys, and how do they vary in terms of mechanical advantage and application?',
        'Can you explain how an inclined plane reduces the effort required to lift heavy objects vertically?',
        'How is the wedge used in industries such as construction and woodworking to split or lift heavy materials?',
        'What are the different types of screws, and how do they facilitate motion and force in different contexts?',
        'How do simple machines contribute to the development of more complex systems and technological advancements?',
        'Can you describe the role of simple machines in the history of engineering and technology development?',
        'What are some innovative applications of simple machines in modern robotics and automation?',
        'How do engineers optimize the design and configuration of simple machines to achieve specific mechanical goals?',
        'What are the safety considerations and precautions associated with the operation and maintenance of simple machines?',
        'How do simple machines contribute to energy efficiency and sustainability in various industries?',
        'Can you explain the concept of work input and work output in the context of simple machines?',
        'What are some real-world examples where the application of simple machines has significantly transformed industrial processes?',
        'How do the principles of simple machines contribute to the development of ergonomic tools and equipment for everyday use?',
        'What are some key factors to consider when selecting the appropriate simple machine for a specific task or application?',
        'How do advancements in materials science and engineering impact the design and functionality of modern simple machines?',
        'What are the limitations and constraints associated with the application of simple machines in complex engineering systems?',
    ];

    const allAnswers = [
        'The fundamental principle behind the functioning of simple machines is to reduce the amount of force necessary to perform a specific task by increasing the distance over which the force is applied.',
        'Mechanical advantage is a measure of the amplification of force achieved by using a simple machine, and it relates directly to the efficiency and output of the machine.',
        'Compound machines combine multiple simple machines to enhance their effectiveness, such as a wheelbarrow combining a wheel and axle with a lever for lifting heavy loads.',
        'Levers are applied in construction for tasks like lifting heavy materials, in manufacturing for operating machinery, and in engineering for balancing weight and force distribution.',
        'Wheel and axle systems contribute to the mechanics of vehicles by enabling rotational motion, such as in car wheels, and in various equipment like cranes and pulley systems.',
        'Different types of pulleys, including fixed, movable, and compound pulleys, vary in mechanical advantage based on the number of ropes and wheels used and find applications in industries like construction and mechanics.',
        'An inclined plane reduces the effort required to lift heavy objects vertically by allowing the load to be moved over a longer distance along the plane with a smaller force.',
        'Wedges are used in construction for splitting heavy materials like rocks, in woodworking for cutting and shaping wood, and in various industrial processes for lifting or securing objects.',
        'Different types of screws, such as the inclined plane screw and the spiral screw, facilitate rotational and linear motion and force in various contexts, including in machinery, tools, and fastening systems.',
        'Simple machines form the basis for the development of more complex systems and technologies, such as the use of gears in machinery, the application of pulley systems in cranes, and the incorporation of levers in robotics.',
        'Simple machines have played a critical role in the history of engineering and technology development, enabling the construction of ancient structures, the development of early tools and devices, and the advancement of various industrial processes.',
        'Innovative applications of simple machines in modern robotics and automation include the use of actuators, gears, and pulley systems in robotic arms, the integration of levers and linkages in automated machinery, and the implementation of screw mechanisms in precision instruments.',
        'Engineers optimize the design and configuration of simple machines by considering factors such as material strength, friction, load capacity, and energy efficiency to achieve specific mechanical goals, improve performance, and ensure operational safety.',
        'Safety considerations and precautions associated with the operation and maintenance of simple machines include proper training, regular inspections, adherence to safety protocols, and the use of protective equipment to prevent accidents and injuries.',
        'Simple machines contribute to energy efficiency and sustainability in industries by reducing the amount of energy required to perform tasks, optimizing resource utilization, and minimizing the environmental impact of industrial processes through enhanced operational efficiency.',
        'Work input and work output in the context of simple machines refer to the energy supplied to operate the machine and the useful work obtained from the machine, respectively, with the aim of maximizing output while minimizing input energy consumption.',
        'Real-world examples of the application of simple machines transforming industrial processes include the use of conveyor belts in manufacturing, the deployment of lifting equipment in construction, and the integration of mechanical systems in transportation and logistics.',
        'The principles of simple machines contribute to the development of ergonomic tools and equipment for everyday use by improving usability, reducing physical strain, and enhancing user comfort and safety, leading to the creation of user-friendly products and devices.',
        'Key factors to consider when selecting the appropriate simple machine for a specific task or application include the load requirements, the available space, the desired mechanical advantage, the operational constraints, and the safety considerations to ensure optimal performance and efficiency.',
        'Advancements in materials science and engineering impact the design and functionality of modern simple machines by introducing innovative materials with enhanced strength, durability, and performance characteristics, enabling the development of more efficient and reliable machines for diverse applications.',
        'Limitations and constraints associated with the application of simple machines in complex engineering systems include mechanical inefficiencies, potential points of failure, operational constraints, and the need for regular maintenance, which can affect overall system reliability and performance.',
    ];

    const selectedQuestions = [];
    const selectedAnswers = [];

    if (types) {
        for (let i = 0; i < 10; i++) {
            selectedQuestions.push(allQuestions[i]);
            selectedAnswers.push(allAnswers[i]);
        }
    }

    if (applications) {
        for (let i = 10; i < 20; i++) {
            selectedQuestions.push(allQuestions[i]);
            selectedAnswers.push(allAnswers[i]);
        }
    }

    function getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        return [selectedQuestions[randomIndex], selectedAnswers[randomIndex]];
    }

    const result = getRandomQuestionWithAnswer(selectedQuestions, selectedAnswers);
    return result;
}
