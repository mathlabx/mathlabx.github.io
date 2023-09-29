let div_container;

const Operate = {
    newInput: (words) => {
        return new Promise((resolve, reject) => {
            let new_input = document.createElement("div");
            new_input.className = "new_input";

            for (var i = 0; i < words.length; i++) {
                let new_input_label = document.createElement("label");
                new_input_label.className = "new_input_label";
                new_input_label.innerHTML = words[i];
                let new_input_input = document.createElement("input");
                new_input_input.className = "new_input_input";
                new_input_input.id = "input_" + i;
                let break_line = document.createElement("br");
                new_input.append(new_input_label);
                new_input.append(new_input_input);
                new_input.append(break_line);
            }

            let new_input_sb = document.createElement("button");
            new_input_sb.textContent = "Submit";
            new_input_sb.addEventListener("click", function () {
                let inputValues = [];
                for (var i = 0; i < words.length; i++) {
                    let inputId = "input_" + i;
                    let inputElement = document.getElementById(inputId);
                    inputValues.push(inputElement.value);
                }
                // 使用 resolve 将输入值传递到外部
                resolve(inputValues);
            });

            new_input.append(new_input_sb);
            // 将新的输入区域添加到页面
            let div_container = document.getElementById("container"); // 假设有一个名为 "container" 的容器元素
            div_container.append(new_input);
        });
    },

    newStart: (start) => {
        let new_HR = document.createElement("hr");
        div_container.append(new_HR);
        let new_start = document.createElement("div");
        new_start.className = "new_start";
        let new_start_p = document.createElement("p");
        new_start_p.innerHTML = start;
        new_start.append(new_start_p);
        div_container.append(new_start);
        return new_start;
    },

    newStep: (step) => {
        let new_step = document.createElement("div");
        new_step.className = "new_step";

        // 使用 KaTeX 渲染数学公式
        katex.render(step, new_step, { displayMode: true });

        div_container.append(new_step);
        return new_step;
    },

    newSolution: (solution) => {
        let new_HR = document.createElement("hr");
        div_container.append(new_HR);
        let new_solution = document.createElement("div");
        new_solution.className = "new_solution";

        // 使用 KaTeX 渲染数学公式
        katex.render(solution, new_solution, { displayMode: true });

        div_container.append(new_solution);
        return new_solution;
    },

    newGraph: (f) => {
        let new_graph = document.createElement("div");
        new_graph.className = "new_graph";
        new_graph.id = "newGraph";
        new_graph.style.height = "300px";
        div_container.append(new_graph);
        setTimeout(() => {
            initializeDesmos(f, "newGraph");
        }, 400);
        return new_graph;
    },

    newRestart: () => {
        let resetDiv = document.createElement("div");
        resetDiv.className = "resetDiv";
        let resetButton = document.createElement("button");
        resetButton.textContent = "Re-Start";
        resetButton.addEventListener("click", function () {
            div_container.innerHTML = "";
            main();
        });
        resetDiv.append(resetButton);
        div_container.append(resetDiv);
    }
};

function initializeDesmos(function_, targetElementId) {
    var targetDiv = document.getElementById(targetElementId);
    var calculator = Desmos.GraphingCalculator(targetDiv, {
        settings: {
            showToolBar: false, // 隐藏工具栏
            expressionsCollapsed: true, // 表达式列表默认隐藏
        },
        // 设置背景颜色
        backgroundColor: '#f0f0f0', // 这里设置为灰色背景
    });

    // 设置要绘制的函数表达式
    for (var i = 0; i < function_.length; i++) {
        calculator.setExpression({
            id: 'graph' + i,
            latex: function_[i],
            color: Desmos.Colors.BLUE,
        });
    }

    // 创建按钮
    var toggleButton = document.createElement('button');
    toggleButton.id = 'toggleButton';
    toggleButton.style.display = 'none';
    toggleButton.textContent = '切换表达式列表';
    targetDiv.appendChild(toggleButton);

    // 切换表达式列表的显示状态
    toggleButton.addEventListener('click', function () {
        calculator.updateSettings({ expressionsCollapsed: !calculator.getState().expressionsCollapsed });
    });

    // 自动点击按钮以隐藏表达式列表
    toggleButton.click();
}

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    main();
});