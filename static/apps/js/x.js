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

    newTitle: () => {
        let new_start = document.createElement("div");
        new_start.className = "new_start";
        let new_start_p = document.createElement("p");
        new_start_p.innerHTML = start;
        new_start.append(new_start_p);
        div_container.append(new_start);
    },

    newPage: () => {
        window_load(false, 0);
        div_container.innerHTML = "";
        window_load(true, 1000);
    }
};

window.addEventListener("load", function () {
    div_container = document.getElementById("container");
    main();
});