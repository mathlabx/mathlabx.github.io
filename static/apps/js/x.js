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
        let new_start_p = document.createElement("h2");
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
        function containsBIG(inputString) {
            // 关键词数组，用于匹配KaTeX表达式
            const keywords = ["&BIG"]; // 添加更多关键词以匹配更多表达式

            // 检查输入字符串是否包含关键词
            for (const keyword of keywords) {
                if (inputString.includes(keyword)) {
                    return true;
                }
            }

            return false;
        }
        let titleBIG_Store = new Array();
        function titleBIG(inputString) {
            // 检查输入字符串是否包含关键词
            inputString = extractTextBeforeSeparator(extractTextBeforeSeparator(inputString, " | ", 0), "&BIG", 0);
            for (const keyword of titleBIG_Store) {
                if (inputString.includes(keyword)) {
                    return true;
                }
            }
            titleBIG_Store.push(inputString);
            return false;
        }
        function extractTextBeforeSeparator(inputString, separator, w) {
            const parts = inputString.split(separator);
            return parts[w];
        }
        let last_title = "";
        return new Promise((resolve, reject) => {
            const formIndex = Math.floor(Math.random() * 1000000);
            let new_start = document.createElement("div");
            new_start.className = "new_start";
            let new_start_p = document.createElement("h2");
            new_start_p.innerHTML = title;
            new_start.append(new_start_p);

            let results = [];
            let elementId; // 声明elementId变量在循环外部
            let new_range; // 声明new_range变量在循环外部

            for (let i = 0; i < settings.length; i++) {
                (function (index) {
                    let new_container = document.createElement("div");
                    new_container.className = "settings_flow";
                    if (!settings[i].show) new_container.style.display = "none";
                    let new_container_tab = document.createElement("table");
                    new_container_tab.className = "settings_flow_tab";
                    let new_container_tab_tr = document.createElement("tr");

                    if (settings[i].Typ == "check" || (settings[i].Typ == "checked" && settings[i].show == true)) {
                        // 创建一个闭包，捕获当前循环变量i的值
                        let new_container_tab_td_1 = document.createElement("td");
                        let new_p = document.createElement("p");
                        console.log("i:" + i + "; eTBS:" + extractTextBeforeSeparator(settings[i].Name, " | ", 0) + "!=" + last_title + "; " + titleBIG(settings[i].Name));
                        if (extractTextBeforeSeparator(settings[i].Name, " | ", 0) != last_title && titleBIG(settings[i].Name) == false) {
                            let new_start_p;
                            if (containsBIG(settings[i].Name)) {
                                new_start_p = document.createElement("h3");
                                titleBIG(settings[i].Name);
                            } else {
                                new_start_p = document.createElement("h4");
                            }
                            new_start_p.innerHTML = extractTextBeforeSeparator(extractTextBeforeSeparator(settings[i].Name, "&BIG", 0), " | ", 0);
                            if (!settings[i].show) new_start_p.style.display = "none";
                            new_start.append(new_start_p);
                            last_title = extractTextBeforeSeparator(settings[i].Name, " | ", 0);
                        }
                        new_p.innerHTML = extractTextBeforeSeparator(settings[i].Name, " | ", 1);
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
                        console.log(settings[i]);
                        if (settings[i].Typ == "checked" && settings[i].show == true) {
                            function close_box(Id) {
                                setTimeout(() => {
                                    document.getElementById(Id).click();
                                    results[i] = document.getElementById(Id).checked;
                                    //  if (settings[i].Typ == "check") results[i] = false;
                                }, 600);
                            }
                            close_box(elementId);
                        }
                        function close_box_l(Id) {
                            setTimeout(() => {
                                document.getElementById(Id).addEventListener("change", function () {
                                    results[i] = document.getElementById(Id).checked;
                                });
                            }, 600);
                        }
                        close_box_l(elementId);
                        let new_slider_round = document.createElement("span");
                        new_slider_round.className = "slider round";
                        new_toggle_switch_label.append(new_toggle_switch_cheakbox);
                        new_toggle_switch_label.append(new_slider_round);
                        new_toggle_switch.append(new_toggle_switch_label);
                        new_container_tab_td_2.append(new_toggle_switch);
                        new_container_tab_tr.append(new_container_tab_td_1);
                        new_container_tab_tr.append(new_container_tab_td_2);
                    } else if (settings[i].Typ == "range") {
                        let new_container_tab_td_1 = document.createElement("td");
                        let new_p = document.createElement("p");
                        console.log("i:" + i + "; eTBS:" + extractTextBeforeSeparator(settings[i].Name, " | ", 0) + "!=" + last_title + "; " + titleBIG(settings[i].Name));
                        if (extractTextBeforeSeparator(settings[i].Name, " | ", 0) != last_title && titleBIG(settings[i].Name) == false) {
                            let new_start_p;
                            if (containsBIG(settings[i].Name)) {
                                new_start_p = document.createElement("h3");
                                titleBIG(settings[i].Name);
                            } else {
                                new_start_p = document.createElement("h4");
                            }
                            new_start_p.innerHTML = extractTextBeforeSeparator(settings[i].Name, " | ", 0);
                            if (!settings[i].show) new_start_p.style.display = "none";
                            new_start.append(new_start_p);
                            last_title = extractTextBeforeSeparator(settings[i].Name, " | ", 0);
                        }
                        new_p.innerHTML = extractTextBeforeSeparator(settings[i].Name, " | ", 1);
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
                        new_span.contentEditable = "true";
                        new_span.innerHTML = String(settings[i].Range[2]);
                        new_span.id = spanId;
                        function close_box(ii, spanId, min, max) {
                            setTimeout(function () {
                                var slider = document.getElementById(ii);
                                var sliderValue = document.getElementById(spanId);

                                // 监听滑块的输入事件
                                slider.addEventListener("input", function () {
                                    // 将滑块的值同步到 span 元素的内容
                                    sliderValue.innerHTML = slider.value;
                                });

                                sliderValue.addEventListener("input", function () {
                                    results[i] = Number(this.innerHTML);
                                });

                                // 监听 span 元素的输入事件
                                sliderValue.addEventListener("input", function () {
                                    var inputValue = parseFloat(sliderValue.innerHTML); // 将输入的文本转换为数字
                                    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
                                        // 如果输入是有效的数字且在范围内，将其设置为滑块的值
                                        slider.value = inputValue;
                                    } else {
                                        // 如果输入无效或超出范围，恢复为滑块的当前值
                                        sliderValue.innerHTML = slider.value;
                                    }
                                });
                            }, 1000);
                        }
                        close_box(elementId, spanId, settings[i].Range[0], settings[i].Range[1]);
                        // 添加事件处理程序到滑块元素
                        results[i] = settings[i].Range[2];
                        new_range.addEventListener("input", function () {
                            results[i] = this.value;
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
                })(i);
            }

            let submitButton = document.createElement("button");
            submitButton.textContent = "Continue";
            submitButton.addEventListener("click", function () {
                resolve(results);
            });
            new_start.append(submitButton);

            document.getElementById("container").append(new_start);
        });
    },

    newResult: (generated_numbers, words, choose) => {
        let new_start = document.createElement("div");
        new_start.className = "new_start";
        let new_title = document.createElement("h2");
        new_title.innerHTML = "Generation completed";
        new_start.append(new_title);
        let results_numbers = document.createElement("h1");
        results_numbers.innerHTML = generated_numbers + " Questions Generated!";
        new_start.append(results_numbers);
        let new_p = document.createElement("p");
        new_p.innerHTML = words;
        new_start.append(new_p);
        for (let i = 0; i < choose.length; i++) {
            let submitButton = document.createElement("button");
            submitButton.textContent = choose[i].Name;
            submitButton.addEventListener("click", function () {
                choose[i].Func();
            });
            new_start.append(submitButton);
        }
        div_container.append(new_start);
    },

    new_Step_arr: [],
    newStep: (step, red, ka) => {
        let new_step = document.createElement("div");
        new_step.className = "new_step";
        if (red) {
            new_step.style.color = "red";
            new_step.className += " Answer";
        }

        if (ka) {
            // 使用 KaTeX 渲染数学公式
            katex.render(step, new_step, { displayMode: true });
        } else {
            new_step.innerHTML = step;
        }

        X_Operate.new_Step_arr.push(new_step);

        if (red) {
            let new_big_div = document.createElement("div");
            new_big_div.className = "bd_new_step";
            for (let i = 0; i < X_Operate.new_Step_arr.length; i++) {
                new_big_div.append(X_Operate.new_Step_arr[i]);
            }
            div_container.append(new_big_div);
            X_Operate.new_Step_arr = new Array();
        }
    },

    newHr: () => {
        let new_HR = document.createElement("hr");
        div_container.append(new_HR);
    }
};

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    loadScripts(scriptsToLoad, main);
});