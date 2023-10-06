let div_container;
let new_HR = document.createElement("hr");

const X_Operate = {
    newCheck: (words) => {
        return new Promise((resolve, reject) => {
            let selectedValues = new Array(words.length).fill(false); // 创建一个与输入长度相同的数组，初始值为false
            let div_container = document.getElementById("container"); // 获取容器元素

            for (var i = 0; i < words.length; i++) {
                (function (index) { // 使用闭包保存当前循环的索引
                    let new_check = document.createElement("div");
                    new_check.className = "new_check";

                    let new_check_label = document.createElement("label");
                    new_check_label.className = "new_check_label";
                    new_check_label.innerHTML = words[index];

                    let new_check_check = document.createElement("input");
                    new_check_check.className = "new_check_check";
                    new_check_check.type = "checkbox"; // 使用复选框来表示选择状态
                    new_check_check.id = "check_" + index;

                    // 添加复选框的 change 事件监听器来更新选中状态数组
                    new_check_check.addEventListener("change", function () {
                        selectedValues[index] = new_check_check.checked; // 更新选中状态数组
                    });

                    let break_line = document.createElement("br");
                    new_check.append(new_check_label);
                    new_check.append(new_check_check);
                    new_check.append(break_line);

                    div_container.append(new_check); // 将每个新的勾选框流元素添加到容器中

                    // 添加点击事件监听器来穿透点击到复选框
                    new_check.addEventListener("click", function (event) {
                        if (event.target !== new_check_check) {
                            new_check_check.click(); // 触发复选框的点击事件
                        }
                    });
                })(i); // 立即调用闭包函数并传入当前的索引
            }

            let new_check_sb = document.createElement("button");
            new_check_sb.textContent = "Continue";
            new_check_sb.addEventListener("click", function () {
                // 使用 resolve 将选中状态数组传递到外部
                resolve(selectedValues);
            });

            div_container.append(new_check_sb); // 在循环外部添加按钮到容器中
        });
    },

    newTitle: (title) => {
        let new_start = document.createElement("div");
        new_start.className = "new_start";
        let new_start_p = document.createElement("p");
        new_start_p.innerHTML = title;
        new_start.append(new_start_p);
        div_container.append(new_start);
    },

    newPage: () => {
        window_load(false, 0);
        div_container.innerHTML = "";
        window_load(true, 1000);
    },

    newSetting: (title, settings) => {
        return new Promise((resolve, reject) => {
            const formIndex = Math.floor(Math.random() * 1000000);
            let new_start = document.createElement("div");
            new_start.className = "new_start";
            let new_start_p = document.createElement("p");
            new_start_p.innerHTML = title;
            new_start.append(new_start_p);

            let results = [];
            let elementId; // 声明elementId变量在循环外部
            let new_range; // 声明new_range变量在循环外部

            for (let i = 0; i < settings.length; i++) {
                let new_container = document.createElement("div");
                new_container.className = "settings_flow";
                let new_container_tab = document.createElement("table");
                new_container_tab.className = "settings_flow_tab";
                let new_container_tab_tr = document.createElement("tr");

                if (settings[i].Typ == "check" || settings[i].Typ == "checked") {
                    let new_container_tab_td_1 = document.createElement("td");
                    let new_p = document.createElement("p");
                    new_p.innerHTML = settings[i].Name;
                    new_container_tab_td_1.append(new_p);
                    let new_container_tab_td_2 = document.createElement("td");
                    let new_toggle_switch = document.createElement("div");
                    new_toggle_switch.className = "toggle-switch";
                    let new_toggle_switch_label = document.createElement("label");
                    new_toggle_switch_label.className = "switch";
                    let new_toggle_switch_cheakbox = document.createElement("input");
                    elementId = formIndex + "_" + i;
                    new_toggle_switch_cheakbox.id = elementId;
                    new_toggle_switch_cheakbox.type = "checkbox";
                    let new_slider_round = document.createElement("span");
                    new_slider_round.className = "slider round";
                    new_toggle_switch_label.append(new_toggle_switch_cheakbox);
                    new_toggle_switch_label.append(new_slider_round);
                    new_toggle_switch.append(new_toggle_switch_label);
                    new_container_tab_td_2.append(new_toggle_switch);
                    new_container_tab_tr.append(new_container_tab_td_1);
                    new_container_tab_tr.append(new_container_tab_td_2);

                    if (settings[i].Typ == "checked") {
                        setTimeout(() => {
                            document.getElementById(elementId).click();
                        }, 1000);
                    }

                    new_toggle_switch_cheakbox.addEventListener("change", function () {
                        results[i] = new_toggle_switch_cheakbox.checked;
                    });
                } else if (settings[i].Typ == "range") {
                    let new_container_tab_td_1 = document.createElement("td");
                    let new_p = document.createElement("p");
                    new_p.innerHTML = settings[i].Name;
                    new_container_tab_td_1.append(new_p);
                    let new_container_tab_td_2 = document.createElement("td");
                    let new_slider_container = document.createElement("div");
                    new_slider_container.className = "slider-container";
                    new_range = document.createElement("input");
                    elementId = formIndex + "_" + i + "_" + "myRange";
                    new_range.type = "range";
                    new_range.min = String(settings[i].Range[0]);
                    new_range.max = String(settings[i].Range[1]);
                    new_range.value = String(settings[i].Range[2]);
                    new_range.className = "";
                    new_range.id = elementId;
                    let new_span = document.createElement("span");
                    let spanId = formIndex + "_" + i + "_" + "slide_value";
                    new_span.innerHTML = String(settings[i].Range[2]);
                    new_span.id = spanId;

                    var slider = document.getElementById(elementId);
                    var sliderValue = document.getElementById(spanId);
                    slider.oninput = function () {
                        console.log(sliderValue.innerHTML);
                        console.log(this.value);
                        sliderValue.innerHTML = this.value;
                    };

                    // 添加事件处理程序到滑块元素
                    new_range.addEventListener("input", function () {
                        results[i] = new_range.value;
                        // document.getElementById(spanId).innerHTML = new_range.value;
                    });

                    new_slider_container.append(new_span);
                    new_slider_container.append(document.createElement("br"));
                    new_slider_container.append(new_range);
                    new_container_tab_td_2.append(new_slider_container);
                    new_container_tab_tr.append(new_container_tab_td_1);
                    new_container_tab_tr.append(new_container_tab_td_2);
                }

                new_container_tab.append(new_container_tab_tr);
                new_container.append(new_container_tab);
                new_start.append(new_container);
            }

            let submitButton = document.createElement("button");
            submitButton.textContent = "提交";
            submitButton.addEventListener("click", function () {
                resolve(results);
            });
            new_start.append(submitButton);

            document.getElementById("container").append(new_start);
        });
    }
};

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    main();
});