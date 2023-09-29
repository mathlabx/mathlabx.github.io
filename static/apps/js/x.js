let div_container;
let new_HR = document.createElement("hr");

const X_Operate = {
    newCheck: (words) => {
        return new Promise((resolve, reject) => {
            let selectedValues = new Array(words.length).fill(false); // 创建一个与输入长度相同的数组，初始值为false
            let new_check = document.createElement("div");
            new_check.className = "new_check";

            for (var i = 0; i < words.length; i++) {
                (function (index) { // 使用闭包保存当前循环的索引
                    let new_check_label = document.createElement("label");
                    new_check_label.className = "new_check_label";
                    let new_check_input = document.createElement("input");
                    new_check_input.className = "new_check_input";
                    new_check_input.type = "checkbox"; // 使用复选框来表示选择状态
                    new_check_input.id = "check_" + index;
                    let break_line = document.createElement("br");

                    // 使用CSS来美化复选框样式
                    let customCheckbox = document.createElement("span");
                    customCheckbox.className = "custom-checkbox";
                    new_check_input.addEventListener("change", function () {
                        selectedValues[index] = new_check_input.checked; // 更新选中状态数组
                        if (new_check_input.checked) {
                            customCheckbox.classList.add("checked");
                        } else {
                            customCheckbox.classList.remove("checked");
                        }
                    });

                    new_check_label.appendChild(customCheckbox);
                    new_check_label.appendChild(document.createTextNode(words[index]));
                    new_check.appendChild(new_check_label);
                    new_check.appendChild(break_line);
                })(i); // 立即调用闭包函数并传入当前的索引
            }

            let new_check_sb = document.createElement("button");
            new_check_sb.textContent = "Submit";
            new_check_sb.addEventListener("click", function () {
                // 使用 resolve 将选中状态数组传递到外部
                resolve(selectedValues);
            });

            new_check.appendChild(new_check_sb);
            // 将新的输入区域添加到页面
            let div_container = document.getElementById("container"); // 假设有一个名为 "container" 的容器元素
            div_container.appendChild(new_check);
        });
    },

    newPage: () => {
        div_container.innerHTML = "";
    }
};

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    main();
});