function loadScripts(scriptUrls, callback) {
    console.clear();
    APP.log("Start loading function files...");
    var loadedScripts = 0;
    var totalScripts = scriptUrls.length;
    var startTime = performance.now(); // 记录开始加载时间

    function scriptLoaded(j, n) {
        return function () {
            loadedScripts++;
            var progress = (loadedScripts / totalScripts) * 100;
            APP.log(n + " Loaded");
            APP.log(`Script loading progress: ${j + 1}/${scriptUrls.length} - ${progress.toFixed(2)}%`);

            if (loadedScripts === totalScripts) {
                var endTime = performance.now(); // 记录加载完成时间
                var loadTime = (endTime - startTime) / 1000; // 转换为秒
                APP.log(`All scripts loaded, total loading time: ${loadTime.toFixed(2)} Second`);
                setTimeout(() => {
                    APP.log("Execute main function...");
                    callback();
                }, 1000);
            }
        };
    }

    for (var i = 0; i < scriptUrls.length; i++) {
        var script = document.createElement('script');
        script.src = scriptUrls[i];
        script.onload = scriptLoaded(i, script.src); // 传递回调函数
        document.head.appendChild(script);
    }
}


let $X = {
    math: {
        Elementary_Mathematics: {
            Basic_Operations: new Object(),
            Integers: new Object(),
            Decimals: new Object(),
            Fractions: new Object(),
            Percentages: new Object(),
            Geometry: new Object(),
            Time: new Object()
        },
        Middle_School_Mathematics: {
            Algebra: new Object(),
            Geometry: new Object(),
            Statistics_and_Probability: new Object()
        },
        High_School_Mathematics: {
            Trigonometry: new Object(),
            Sequences_and_Series: new Object(),
            Calculus: new Object()
        },
        University_Mathematics: {
            Linear_Algebra: new Object(),
            Differential_Equations: new Object(),
            Probability_and_Statistics: new Object(),
            Complex_Analysis: new Object(),
            Linear_Programming: new Object(),
            Discrete_Mathematics: new Object()
        }
    },
    physics: {

    },
    chemistry: {

    }
};

let scriptsToLoad = [
    './data/math/Elementary_Mathematics/Basic_Operations/Addition.js',
    './data/math/Elementary_Mathematics/Basic_Operations/Subtraction.js',
    './data/math/Elementary_Mathematics/Basic_Operations/Multiplication.js',
    './data/math/Elementary_Mathematics/Basic_Operations/Division.js',
    './data/math/Elementary_Mathematics/Integers/Comparing_integers.js',
    './data/math/Elementary_Mathematics/Integers/Addition_and_subtraction_of_integers.js',
    './data/math/Elementary_Mathematics/Integers/Multiplication_and_division_of_integers.js',
    './data/math/Elementary_Mathematics/Decimals/Adding_and_subtracting_decimals.js',
    './data/math/Elementary_Mathematics/Decimals/Multiplication_and_division_of_decimals.js',
    './data/math/Elementary_Mathematics/Decimals/Comparing_decimals.js',
    './data/math/Elementary_Mathematics/Fractions/Adding_and_subtracting_fractions.js',
    './data/math/Elementary_Mathematics/Fractions/Multiplying_and_dividing_fractions.js',
    './data/math/Elementary_Mathematics/Fractions/Simplifying_fractions.js',
    './data/math/Elementary_Mathematics/Percentages/Converting_percentages.js',
    './data/math/Elementary_Mathematics/Percentages/Calculating_percentages.js',
    './data/math/Elementary_Mathematics/Geometry/Recognizing_shapes.js',
    './data/math/Elementary_Mathematics/Geometry/Calculating_perimeter_and_area.js',
    './data/math/Elementary_Mathematics/Geometry/Calculating_volume.js',
    './data/math/Elementary_Mathematics/Time/Reading_clocks_and_calendars.js',
    './data/math/Elementary_Mathematics/Time/Time_calculations.js',
    './data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Single_variable_linear_equations.js',
    './data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Systems_of_linear_equations_with_one_variable.js',
    './data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Quadratic_equations.js'
];

let gl_results;

function X_Result(results) {
    gl_results = results;
    results_ar = [
        {
            Name: "View Results",
            Func: View_Results
        },
        {
            Name: "Regenerate",
            Func: Regenerate
        },
        {
            Name: "Print",
            Func: Print
        },
        {
            Name: "Assign",
            Func: Assign
        }
    ];
    X_Operate.newPage();
    X_Operate.newResult(results.length, "Please select an option below to continue.", results_ar);
    APP.log("Generating: Completed");
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

function View_Results() {
    Page_(0);
}

function containsKaTeXExpression(inputString) {
    // 关键词数组，用于匹配KaTeX表达式
    const keywords = ["\\frac", "\\sqrt", "\\sum", "\\int", "^", "_"]; // 添加更多关键词以匹配更多表达式

    // 检查输入字符串是否包含关键词
    for (const keyword of keywords) {
        if (inputString.includes(keyword)) {
            return true;
        }
    }

    return false;
}

//打乱数组
function shuffleArray(array) {
    // 创建一个新的数组，以避免修改原始数组
    const shuffledArray = [...array];

    // 使用 Fisher-Yates 算法对最外层数组进行乱序
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}


let q_on = 0;
function Page_(next_q) {
    let each_page_n = 10;
    if (!gl_results.length > each_page_n) {
        each_page_n = gl_results.length;
    }
    q_on += next_q;
    X_Operate.newPage();
    X_Operate.newTitle("Question: " + (q_on + 1) + " - " + (q_on + each_page_n));
    for (let i = q_on; i < (q_on + each_page_n); i++) {
        X_Operate.newHr();
        //长题干
        if (Array.isArray(gl_results[i][0])) {
            for (let j = 0; j < gl_results[i][0].length; j++) {
                X_Operate.newStep(gl_results[i][0][j], false, containsKaTeXExpression(gl_results[i][0][j]));
            }
        } else {
            X_Operate.newStep(gl_results[i][0], false, containsKaTeXExpression(gl_results[i][0]));
        }
        // 检测答案是否是数组（分数）
        if (Array.isArray(gl_results[i][1])) {
            if (gl_results[i][1].length === 2) {
                X_Operate.newStep("\\frac{" + gl_results[i][1][0] + "}{" + gl_results[i][1][1] + "}", true, true);
            } else {
                X_Operate.newStep("Invalid Array", true, false); // 如果数组不是长度为2，处理无效数组
            }
        } else {
            X_Operate.newStep(gl_results[i][1], true, containsKaTeXExpression(String(gl_results[i][1])));
        }
    }
    if (q_on == 0 && gl_results.length >= each_page_n) {
        let submitButton_f = document.createElement("button");
        submitButton_f.textContent = "Next";
        submitButton_f.style.width = "calc(100% - 20px)";
        submitButton_f.addEventListener("click", function () {
            Page_(each_page_n);
        });
        document.getElementById("container").append(submitButton_f);
    } else if (q_on >= each_page_n && q_on < (gl_results.length - each_page_n)) {
        let submitButton_b = document.createElement("button");
        submitButton_b.textContent = "Back";
        submitButton_b.style.width = "calc(50% - 20px)";
        submitButton_b.addEventListener("click", function () {
            Page_(-each_page_n);
        });
        document.getElementById("container").append(submitButton_b);
        let submitButton_f = document.createElement("button");
        submitButton_f.textContent = "Next";
        submitButton_f.style.width = "calc(50% - 20px)";
        submitButton_f.addEventListener("click", function () {
            Page_(each_page_n);
        });
        document.getElementById("container").append(submitButton_f);
    } else if (q_on == (gl_results.length - each_page_n)) {
        let submitButton_b = document.createElement("button");
        submitButton_b.textContent = "Previous page";
        submitButton_b.style.width = "calc(100% - 20px)";
        submitButton_b.addEventListener("click", function () {
            Page_(-each_page_n);
        });
        document.getElementById("container").append(submitButton_b);
    }
}

function Regenerate() {
    document.location.reload();
}

function Print() {

}

function Assign() {

}

function X_Generate(setting) {
    Setting_Array = new Array();

    Setting_Array.push({
        Name: "Basic operations | Addition&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Addition | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Addition | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Addition | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Addition | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Addition | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[0].subtopics[0]._checked
    });


    Setting_Array.push({
        Name: "Basic operations | Subtraction&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Basic operations | Multiplication&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[0].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Basic operations | Division&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Division | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Division | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Division | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Division | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Division | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[0].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Integers | Comparing Integers&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Comparing Integers | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Comparing Integers | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Comparing Integers | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Comparing Integers | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Comparing Integers | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[1].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Integers | Addition&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Integers | Number of consecutive",
        Typ: "range",
        Range: [0, 10, 3],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Integers | Subtraction&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Integers | Number of consecutive",
        Typ: "range",
        Range: [0, 10, 3],
        show: setting[0].topics[0].subtopics[1].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Integers | Multiplication&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Integers | Number of consecutive",
        Typ: "range",
        Range: [0, 10, 3],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Integers | Division&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Division Integers | Number of consecutive",
        Typ: "range",
        Range: [0, 10, 3],
        show: setting[0].topics[0].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Decimals | Adding Decimals&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Number of consecutive",
        Typ: "range",
        Range: [2, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Decimals | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Decimals | Subtraction Decimals&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Number of consecutive",
        Typ: "range",
        Range: [2, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Decimals | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Decimals | Multiplication Decimals&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Number of consecutive",
        Typ: "range",
        Range: [2, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Decimals | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Decimals | Division Decimals&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Number of consecutive",
        Typ: "range",
        Range: [2, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Decimals | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Decimals | Compare Decimals&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Compare Decimals | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[2].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Fractions | Adding Fractions&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Number of consecutive",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Adding Fractions | Divisible",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Fractions | Subtraction Fractions&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Number of consecutive",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Subtraction Fractions | Divisible",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Fractions | Multiplication Fractions&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Number of consecutive",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Multiplication Fractions | Divisible",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Fractions | Division Fractions&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Number of consecutive",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Division Fractions | Divisible",
        Typ: "check",
        show: setting[0].topics[0].subtopics[3].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Percentage | Conversion Percentage&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[4].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Conversion Percentage | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[4].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Conversion Percentage | Convert decimal to percentage",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[4].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Conversion Percentage | Convert percentage to decimal",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[4].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Conversion Percentage | Decimal places",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[0].subtopics[4].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Percentage | Addition&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Percentage | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Percentage | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Percentage | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Percentage | Minimum number",
        Typ: "range",
        Range: [0, 100000, 10],
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Addition Percentage | Maximum number",
        Typ: "range",
        Range: [0, 100000, 50],
        show: setting[0].topics[0].subtopics[4].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Recognizing Shapes&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Triangle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Circle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Rectangle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Parallelogram",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Pentagon",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Hexagon",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Heptagon",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Octagon",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Ellipse",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Rhombus",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Trapezoid",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Recognizing Shapes | Semicircle",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Perimeter and Area&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Triangle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Circle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Rectangle",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Parallelogram",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Pentagon",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Hexagon",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Heptagon",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Octagon",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Ellipse",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Rhombus",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Trapezoid",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Perimeter and Area | Semicircle",
        Typ: "check",
        show: setting[0].topics[0].subtopics[5].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Volume&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Cube",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Sphere",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Cylinder",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Cone",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Pyramid",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Volume | Torus",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[5].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Time | Reading Clocks&BIG",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Reading Clocks | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[6].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Reading Clocks | Include Seconds",
        Typ: "check",
        show: setting[0].topics[0].subtopics[6].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Time | Reading Calendars&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Reading Calendars | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[6].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Time | Calculations Clocks&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Include Seconds",
        Typ: "check",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Time | Calculations Calendars&Reg",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Calendars | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Number Problem",
        Typ: "checked",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Calculations Clocks | Word Problem",
        Typ: "check",
        show: setting[0].topics[0].subtopics[6].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Single-variable Linear Equations&BIG",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Number Problem",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Word Problem",
        Typ: "check",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Addition",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Single-variable Linear Equations | Subtraction",
        Typ: "check",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Systems of Single-variable Linear Equations&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Addition",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Subtraction",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of Single-variable Linear Equations | Equations in system of equations",
        Typ: "range",
        Range: [1, 10, 2],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Quadratic Equations&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 50, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Equations | Minimum number",
        Typ: "range",
        Range: [1, 10000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Equations | Maximum number",
        Typ: "range",
        Range: [1, 10000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });



    X_Operate.newPage();
    let General_settings = [
        {
            Name: "Question Language | 1-En/2-Cn/3-Sp",
            Typ: "range",
            Range: [1, 3, 1],
            show: true
        },
        {
            Name: "Order | Shuffle Order",
            Typ: "check",
            show: true
        }
    ];

    if (!Test_MOD) {
        X_Operate.newSetting("General Settings", General_settings).then((general_settings) => {
            X_Operate.newPage();
            console.log(Setting_Array);
            X_Operate.newSetting("Setting", Setting_Array).then((results) => {
                $X_Generate_(general_settings, results)
            });
        });
    }
}

function $X_Generate_(general_settings, results) {
    X_Operate.newPage();
    X_Operate.newTitle("Generating...")
    console.log(results);
    let re_q = new Array();
    setTimeout(() => {
        if (!Teacher_SL_MOD) {
            if (results[0] == true) {
                loop_length = Number(results[1]);
                if (results[2] == true && results[3] == true) loop_length /= 2;
                if (results[2] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Addition: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Addition(Number(results[4]), Number(results[5])));
                    }
                }
                if (results[3] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Addition Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Addition_w(Number(results[4]), Number(results[5])));
                    }
                }
            }
            if (results[6] == true) {
                loop_length = Number(results[7]);
                if (results[8] == true && results[9] == true) loop_length /= 2;
                if (results[8] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Subtraction(Number(results[10]), Number(results[11])));
                    }
                }
                if (results[9] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Subtraction_w(Number(results[10]), Number(results[11])));
                    }
                }
            }
            if (results[12] == true) {
                loop_length = Number(results[13]);
                if (results[14] == true && results[15] == true) loop_length /= 2;
                if (results[14] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Multiplication(Number(results[16]), Number(results[17])));
                    }
                }
                if (results[15] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Multiplication_w(Number(results[16]), Number(results[17])));
                    }
                }
            }
            if (results[18] == true) {
                loop_length = Number(results[19]);
                if (results[20] == true && results[21] == true) loop_length /= 2;
                if (results[20] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Division(Number(results[22]), Number(results[23])));
                    }
                }
                if (results[21] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Division_w(Number(results[22]), Number(results[23])));
                    }
                }
            }
            if (results[24] == true) {
                loop_length = Number(results[25]);
                if (results[26] == true && results[27] == true) loop_length /= 2;
                if (results[26] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Comparing Integers: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Comparing_integers(Number(results[28]), Number(results[29])));
                    }
                }
                if (results[27] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Comparing Integers Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Comparing_integers_w(Number(results[28]), Number(results[29])));
                    }
                }
            }
            if (results[30] == true) {
                loop_length = Number(results[31]);
                if (results[32] == true && results[33] == true) loop_length /= 2;
                if (results[32] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Add Integers: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Addition(Number(results[34]), Number(results[35]), Number(results[36])));
                    }
                }
                if (results[33] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Add Integers Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Addition_w(Number(results[34]), Number(results[35]), Number(results[36])));
                    }
                }
            }
            if (results[37] == true) {
                loop_length = Number(results[38]);
                if (results[39] == true && results[40] == true) loop_length /= 2;
                if (results[39] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Integers: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Subtraction(Number(results[41]), Number(results[42]), Number(results[43])));
                    }
                }
                if (results[40] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Integers Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Subtraction_w(Number(results[41]), Number(results[42]), Number(results[43])));
                    }
                }
            }
            if (results[44] == true) {
                loop_length = Number(results[45]);
                if (results[46] == true && results[47] == true) loop_length /= 2;
                if (results[46] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Integers: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Multiplication(Number(results[48]), Number(results[49]), Number(results[50])));
                    }
                }
                if (results[47] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Integers Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Multiplication_w(Number(results[48]), Number(results[49]), Number(results[50])));
                    }
                }
            }
            if (results[51] == true) {
                loop_length = Number(results[52]);
                if (results[53] == true && results[54] == true) loop_length /= 2;
                if (results[53] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Integers: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Division(Number(results[55]), Number(results[56]), Number(results[57])));
                    }
                }
                if (results[54] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Integers Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Integers.Division_w(Number(results[55]), Number(results[56]), Number(results[57])));
                    }
                }
            }
            if (results[58] == true) {
                loop_length = Number(results[59]);
                if (results[60] == true && results[61] == true) loop_length /= 2;
                if (results[60] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Decimals: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Addition(Number(results[62]), Number(results[63]), Number(results[64]), Number(results[65])));
                    }
                }
                if (results[61] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Decimals Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Addition_w(Number(results[62]), Number(results[63]), Number(results[64]), Number(results[65])));
                    }
                }
            }
            if (results[66] == true) {
                loop_length = Number(results[67]);
                if (results[68] == true && results[69] == true) loop_length /= 2;
                if (results[68] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Decimals: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Subtraction(Number(results[70]), Number(results[71]), Number(results[72]), Number(results[73])));
                    }
                }
                if (results[69] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Decimals Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Subtraction_w(Number(results[70]), Number(results[71]), Number(results[72]), Number(results[73])));
                    }
                }
            }
            if (results[74] == true) {
                loop_length = Number(results[75]);
                if (results[76] == true && results[77] == true) loop_length /= 2;
                if (results[76] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Decimals: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Multiplication(Number(results[78]), Number(results[79]), Number(results[80]), Number(results[81])));
                    }
                }
                if (results[77] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Decimals Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Multiplication_w(Number(results[78]), Number(results[79]), Number(results[80]), Number(results[81])));
                    }
                }
            }
            if (results[82] == true) {
                loop_length = Number(results[83]);
                if (results[84] == true && results[85] == true) loop_length /= 2;
                if (results[84] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Decimals: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Division(Number(results[86]), Number(results[87]), Number(results[88]), Number(results[89])));
                    }
                }
                if (results[85] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Decimals Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Division_w(Number(results[86]), Number(results[87]), Number(results[88]), Number(results[89])));
                    }
                }
            }
            if (results[90] == true) {
                loop_length = Number(results[91]);
                if (results[92] == true && results[93] == true) loop_length /= 2;
                if (results[92] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Compare Decimals: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Comparing_decimals(Number(results[94]), Number(results[95]), Number(results[96])));
                    }
                }
                if (results[93] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Compare Decimals Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Comparing_decimals_w(Number(results[94]), Number(results[95]), Number(results[96])));
                    }
                }
            }
            if (results[97] == true) {
                loop_length = Number(results[98]);
                if (results[99] == true && results[100] == true) loop_length /= 2;
                if (results[99] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Adding Fractions: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Addition(Number(results[101]), Number(results[102]), Number(results[103]), Number(results[104])));
                    }
                }
                if (results[100] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Adding Fractions Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Addition_w(Number(results[101]), Number(results[102]), Number(results[103]), Number(results[104])));
                    }
                }
            }
            if (results[105] == true) {
                loop_length = Number(results[106]);
                if (results[107] == true && results[108] == true) loop_length /= 2;
                if (results[107] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Fractions: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Subtraction(Number(results[109]), Number(results[110]), Number(results[111]), Number(results[112])));
                    }
                }
                if (results[108] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Subtraction Fractions Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Subtraction_w(Number(results[109]), Number(results[110]), Number(results[111]), Number(results[112])));
                    }
                }
            }
            if (results[113] == true) {
                loop_length = Number(results[114]);
                if (results[115] == true && results[116] == true) loop_length /= 2;
                if (results[115] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Fractions: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Multiplication(Number(results[117]), Number(results[118]), Number(results[119]), Number(results[120])));
                    }
                }
                if (results[116] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Multiplication Fractions Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Multiplication_w(Number(results[117]), Number(results[118]), Number(results[119]), Number(results[120])));
                    }
                }
            }
            if (results[121] == true) {
                loop_length = Number(results[122]);
                if (results[123] == true && results[124] == true) loop_length /= 2;
                if (results[123] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Fractions: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Division(Number(results[125]), Number(results[126]), Number(results[127]), Number(results[128])));
                    }
                }
                if (results[124] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division Fractions Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Division_w(Number(results[125]), Number(results[126]), Number(results[127]), Number(results[128])));
                    }
                }
            }
            if (results[129] == true) {
                loop_length = Number(results[130]);
                if (results[131] == true && results[132] == true) loop_length /= 2;
                if (results[131] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Division decimal to percentage: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Converting_percentages(true, false, Number(results[133])));
                    }
                }
                if (results[132] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Convert percentage to decimal: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Converting_percentages(false, true, Number(results[133])));
                    }
                }
            }
            if (results[134] == true) {
                loop_length = Number(results[135]);
                if (results[136] == true && results[137] == true) loop_length /= 2;
                if (results[136] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Percentages: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Calculating_percentages(Number(results[138]), Number(results[139])));
                    }
                }
                if (results[137] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Percentages Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Calculating_percentages_w(Number(results[138]), Number(results[139])));
                    }
                }
            }
            if (results[140] == true) {
                loop_length = Number(results[141]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Recognizing Shapes: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Elementary_Mathematics.Geometry.Recognizing_shapes(Number(results[142]), Number(results[143]), Number(results[144]), Number(results[145]), Number(results[146]), Number(results[147]), Number(results[148]), Number(results[149]), Number(results[150]), Number(results[151]), Number(results[152]), Number(results[153])));
                }
            }
            if (results[154] == true) {
                loop_length = Number(results[155]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Perimeter and Area: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Elementary_Mathematics.Geometry.perimeter_and_area(Number(results[156]), Number(results[157]), Number(results[158]), Number(results[159]), Number(results[160]), Number(results[161]), Number(results[162]), Number(results[163]), Number(results[164]), Number(results[165]), Number(results[166]), Number(results[167])));
                }
            }
            if (results[168] == true) {
                loop_length = Number(results[169]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Volume: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Elementary_Mathematics.Geometry.volume(Number(results[170]), Number(results[171]), Number(results[172]), Number(results[173]), Number(results[174]), Number(results[175])));
                }
            }
            if (results[176] == true) {
                loop_length = Number(results[177]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Reading Clocks: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Elementary_Mathematics.Time.Reading_clocks(results[178]));
                }
            }
            if (results[179] == true) {
                loop_length = Number(results[180]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Reading Calendars: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Elementary_Mathematics.Time.Reading_calendars());
                }
            }
            if (results[181] == true) {
                loop_length = Number(results[182]);
                if (results[183] == true && results[184] == true) loop_length /= 2;
                if (results[183] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Clocks: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_clocks(results[185]));
                    }
                }
                if (results[184] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Clocks Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_clocks_w(results[185]));
                    }
                }
            }
            if (results[186] == true) {
                loop_length = Number(results[187]);
                if (results[188] == true && results[189] == true) loop_length /= 2;
                if (results[188] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Calendars: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_calendars());
                    }
                }
                if (results[189] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Calculating Calendars Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_calendars_w());
                    }
                }
            }
            if (results[190] == true) {
                loop_length = Number(results[191]);
                if (results[192] == true && results[193] == true) loop_length /= 2;
                if (results[192] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Single variable linear equations: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations(Number(results[194]), Number(results[195]), results[196], results[197]));
                    }
                }
                if (results[193] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        APP.log("Generating - Single variable linear equations Word: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                        re_q.push($X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations_w(Number(results[194]), Number(results[195]), results[196], results[197]));
                    }
                }
            }
            if (results[198] == true) {
                loop_length = Number(results[199]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - System of Single variable linear equations: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Systems_of_linear_equations_with_one_variable(Number(results[200]), Number(results[201]), results[202], results[203], Number(results[204])));
                }
            }
            if (results[205] == true) {
                loop_length = Number(results[206]);
                for (let i = 0; i < loop_length; i++) {
                    APP.log("Generating - Quadratic equations: " + (i + 1) + "/" + loop_length + " - " + ((i + 1) / loop_length * 100).toFixed(2) + "%");
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Quadratic_equations(Number(results[207]), Number(results[208])));
                }
            }

            /*打乱顺序*/
            if (general_settings[1] == true) {
                re_q = shuffleArray(re_q);
            }

            let test_settings = [];

            if (Test_MOD) {
                let obj = {
                    questions: re_q,
                    settings: test_settings
                };
                // 将包含数组的对象转换为 JSON 字符串
                const jsonStr = JSON.stringify(obj);
                // 将 JSON 字符串存储到 sessionStorage 中
                sessionStorage.setItem('myData', jsonStr);
                window.location = "https://app.mathscichem.com/test";
            } else {
                X_Result(re_q);
            }
        } else {
            let data = [general_settings, results];
            sessionStorage.setItem('popupData', JSON.stringify(data));
            window.opener.postMessage(JSON.stringify(data), '*');
            window.close();
        }
    }, 100);
}