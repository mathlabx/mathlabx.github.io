let div_container;
let new_HR = document.createElement("hr");

const X_Operate = {
    newCheck: (words) => {
        return new Promise((resolve, reject) => {
            let selectedValues = new Array(words.length).fill(false); // 创建一个与输入长度相同的数组，初始值为false

            for (var i = 0; i < words.length; i++) {
                let new_check = document.createElement("div");
                new_check.className = "new_check";
                (function (index) { // 使用闭包保存当前循环的索引
                    let new_check_label = document.createElement("label");
                    new_check_label.className = "new_check_label";
                    new_check_label.innerHTML = words[index];

                    let new_check_check = document.createElement("input");
                    new_check_check.className = "new_check_check";
                    new_check_check.type = "checkbox"; // 使用复选框来表示选择状态
                    new_check_check.id = "check_" + index;

                    new_check_check.addEventListener("change", function () {
                        selectedValues[index] = new_check_check.checked; // 更新选中状态数组
                    });

                    let break_line = document.createElement("br");
                    new_check.append(new_check_label);
                    new_check.append(new_check_check);
                    new_check.append(break_line);
                })(i); // 立即调用闭包函数并传入当前的索引
                div_container.append(new_check);
            }

            let new_check_sb = document.createElement("button");
            new_check_sb.textContent = "Submit";
            new_check_sb.addEventListener("click", function () {
                // 使用 resolve 将选中状态数组传递到外部
                resolve(selectedValues);
            });
            
            // 将按钮添加到页面
            div_container.append(new_check_sb);
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