/*
Basic Physics Concepts - Energy and Work
*/

$X.physics.Elementary_Physics.Basic_Physics_Concepts.EnergyAndWork = function () {
    // Helper function to generate random numbers within a specific range
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var question, answer;

    var problems = [
        {
            problem: "A car has a mass of " + getRandomNumber(200, 1500) + " kg and is moving at a speed of " + getRandomNumber(10, 30) + " m/s. What is its kinetic energy?",
            getAnswer: function (mass, speed) {
                var kineticEnergy = 0.5 * mass * Math.pow(speed, 2);
                return "The kinetic energy is " + kineticEnergy + " Joules.";
            }
        },
        {
            problem: "A person lifts a box of weight " + getRandomNumber(20, 100) + " N to a height of " + getRandomNumber(2, 15) + " m. How much work is done?",
            getAnswer: function (weight, height) {
                var workDone = weight * height;
                return "The work done is " + workDone + " Joules.";
            }
        },
        {
            problem: "A child pushes a box with a force of " + getRandomNumber(5, 15) + " N for a distance of " + getRandomNumber(2, 5) + " m. Calculate the work done by the child.",
            getAnswer: function (force, distance) {
                var workDone = force * distance;
                return "The work done by the child is " + workDone + " Joules.";
            }
        },
        {
            problem: "An object of mass " + getRandomNumber(2, 8) + " kg is raised to a height of " + getRandomNumber(5, 12) + " m above the ground. Calculate the potential energy of the object.",
            getAnswer: function (mass, height) {
                var potentialEnergy = mass * 9.8 * height;
                return "The potential energy of the object is " + potentialEnergy + " Joules.";
            }
        },
        {
            problem: "A car engine does " + getRandomNumber(100, 500) + " kJ of work in moving the car. If the engine has an efficiency of " + getRandomNumber(20, 50) + "%, how much energy is wasted?",
            getAnswer: function (work, efficiency) {
                var energyWasted = work * (1 - efficiency / 100);
                return "The energy wasted is " + energyWasted + " kJ.";
            }
        },
        {
            problem: "A spring with a spring constant of " + getRandomNumber(5, 15) + " N/cm is compressed to a distance of " + getRandomNumber(4, 10) + " cm. Calculate the potential energy stored in the spring.",
            getAnswer: function (springConstant, distance) {
                var potentialEnergy = 0.5 * springConstant * Math.pow(distance, 2);
                return "The potential energy stored in the spring is " + potentialEnergy + " Joules.";
            }
        },
        {
            problem: "An object is moving with a kinetic energy of " + getRandomNumber(500, 1500) + " J. If its mass is " + getRandomNumber(10, 50) + " kg, find its speed.",
            getAnswer: function (kineticEnergy, mass) {
                var speed = Math.sqrt(2 * kineticEnergy / mass);
                return "The speed of the object is " + speed.toFixed(2) + " m/s.";
            }
        },
        {
            problem: "A ball is thrown with an initial kinetic energy of " + getRandomNumber(300, 800) + " J. If it is caught at a height of " + getRandomNumber(2, 5) + " m, find the work done against gravity.",
            getAnswer: function (kineticEnergy, height) {
                var workDone = kineticEnergy - (9.8 * height);
                return "The work done against gravity is " + workDone.toFixed(2) + " J.";
            }
        },
        {
            problem: "A block of weight " + getRandomNumber(20, 100) + " N is pushed up an inclined plane at an angle of " + getRandomNumber(20, 60) + " degrees to the horizontal for a distance of " + getRandomNumber(4, 10) + " m. Find the work done.",
            getAnswer: function (weight, angle, distance) {
                var workDone = weight * distance * Math.cos(angle * (Math.PI / 180));
                return "The work done is " + workDone.toFixed(2) + " J.";
            }
        },
        {
            problem: "A book of mass " + getRandomNumber(1, 5) + " kg is lifted from the ground to a shelf 2 m above the ground. Find the work done.",
            getAnswer: function (mass, height) {
                var workDone = mass * 9.8 * height;
                return "The work done is " + workDone.toFixed(2) + " J.";
            }
        },
        {
            problem: "A moving car has a kinetic energy of " + getRandomNumber(3000, 5000) + " J. If its speed is " + getRandomNumber(15, 25) + " m/s, find its mass.",
            getAnswer: function (kineticEnergy, speed) {
                var mass = 2 * kineticEnergy / Math.pow(speed, 2);
                return "The mass of the car is " + mass.toFixed(2) + " kg.";
            }
        },
        {
            problem: "A force of " + getRandomNumber(10, 30) + " N is applied on a block to displace it by " + getRandomNumber(2, 8) + " m. Find the work done.",
            getAnswer: function (force, displacement) {
                var workDone = force * displacement;
                return "The work done is " + workDone + " J.";
            }
        },
        {
            problem: "A ball is thrown vertically upward with an initial velocity of " + getRandomNumber(10, 30) + " m/s. What is its potential energy at the highest point?",
            getAnswer: function (initialVelocity) {
                var potentialEnergy = 9.8 * initialVelocity;
                return "The potential energy at the highest point is " + potentialEnergy + " Joules.";
            }
        },
        {
            problem: "A spring is stretched by " + getRandomNumber(5, 15) + " cm when a force of " + getRandomNumber(20, 50) + " N is applied. Calculate the potential energy stored in the spring.",
            getAnswer: function (compression, force) {
                var potentialEnergy = 0.5 * force * Math.pow(compression / 100, 2);
                return "The potential energy stored in the spring is " + potentialEnergy + " Joules.";
            }
        }
    ];

    var selectedProblem = problems[Math.floor(Math.random() * problems.length)];
    question = selectedProblem.problem;
    answer = selectedProblem.getAnswer ? selectedProblem.getAnswer() : "";

    // Return the question and answer as an array
    return [question, answer];
};
