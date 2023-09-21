let div_container = document.getElementById("container");

const Operate = {
    newInput: (words) => {
        let new_input = document.createElement("div");
        new_input.className = "new_input";
        for (var i = 0; i < words.lenth; i++) {
            let new_input_label = document.createElement("label");
            new_input.className = "new_input_label";
            new_input_label.innerHTML = word;
            let new_input_input = document.createElement("input");
            new_input_input.className = "new_input_input";
            new_input_input.id = "input_" + i;
            let break_line = document.createElement("br");
            new_input.append(new_input_label);
            new_input.append(new_input_input);
            new_input.append(break_line);
        }
        div_container.append(new_input);
    },

    newStart: (start) => {
        let new_start = document.createElement("div");
        new_start.className = "new_start";
        let new_start_p = document.createElement("p");
        new_start_p.innerHTML = start;
        new_start.append(new_start_p);
        div_container.append(new_start);
    },

    newStep: (step) => {
        let new_step = document.createElement("div");
        new_step.className = "new_step";
        let new_step_p = document.createElement("p");
        new_step_p.innerHTML = step;
        new_step.append(new_step_p);
        div_container.append(new_step);
    },

    newSolution: (solution) => {
        let new_solution = document.createElement("div");
        new_solution.className = "new_solution";
        let new_solution_p = document.createElement("p");
        new_solution_p.innerHTML = solution;
        new_solution.append(new_solution_p);
        div_container.append(new_solution);
    },

    newGraph: (f) => {
        let new_graph = document.createElement("div");
        new_graph.className = "new_graph";
        new_graph.id = [...Array(6)].map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26) + (Math.random() < 0.5 ? 0 : 32))).join('');
        div_container.append(new_graph);
        setTimeout(() => {
            initializeDesmos(f, new_graph.id);
        }, 400);
    }
};

function initializeDesmos(function_, targetElementId) {
    var targetDiv = document.getElementById(targetElementId);
    var calculator = Desmos.GraphingCalculator(targetDiv, {
        settings: {
            showToolBar: false,
            expressionsCollapsed: true,
        }
    });

    calculator.setExpression({ id: 'graph1', latex: function_, color: Desmos.Colors.BLUE });

    var toggleButton = document.createElement('button');
    toggleButton.id = 'toggleButton';
    toggleButton.style.display = 'none';
    toggleButton.textContent = '';
    targetDiv.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        calculator.updateSettings({ expressionsCollapsed: !calculator.getState().expressionsCollapsed });
    });

    toggleButton.click();
}