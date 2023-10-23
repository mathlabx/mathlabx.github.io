function loadScripts(scriptUrls, callback) {
    console.clear();
    APP.log("Start loading function files...");
    var totalScripts = scriptUrls.length;
    var startTime = performance.now(); // 记录开始加载时间

    async function loadScript(url, index) {
        return new Promise((resolve, reject) => {
            var script = document.createElement('script');
            script.src = url;
            script.onload = function () {
                var progress = ((index + 1) / totalScripts) * 100;
                APP.log(`Script at ${url} loaded`);
                APP.log(`Script loading progress: ${index + 1}/${totalScripts} - ${progress.toFixed(2)}%`);
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    (async function () {
        for (let i = 0; i < scriptUrls.length; i++) {
            await loadScript(scriptUrls[i], i);
        }
        var endTime = performance.now(); // 记录加载完成时间
        var loadTime = (endTime - startTime) / 1000; // 转换为秒
        APP.log(`All scripts loaded, total loading time: ${loadTime.toFixed(2)} Second`);
        setTimeout(() => {
            APP.log("Execute main function...");
            callback();
        }, 1000);
    })();
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

const MPCLabAPIurl = APP.domainURL + "/app/x";
let scriptsToLoad = [
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Basic_Operations/Addition.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Basic_Operations/Subtraction.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Basic_Operations/Multiplication.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Basic_Operations/Division.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Integers/Comparing_integers.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Integers/Addition_and_subtraction_of_integers.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Integers/Multiplication_and_division_of_integers.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Decimals/Adding_and_subtracting_decimals.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Decimals/Multiplication_and_division_of_decimals.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Decimals/Comparing_decimals.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Fractions/Adding_and_subtracting_fractions.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Fractions/Multiplying_and_dividing_fractions.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Fractions/Simplifying_fractions.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Percentages/Converting_percentages.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Percentages/Calculating_percentages.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Geometry/Recognizing_shapes.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Geometry/Calculating_perimeter_and_area.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Geometry/Calculating_volume.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Time/Reading_clocks_and_calendars.js',
    MPCLabAPIurl + '/data/math/Elementary_Mathematics/Time/Time_calculations.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Single_variable_linear_equations.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Quadratic_equations.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Linear_equations_and_quadratic_equations/Systems_of_two_variable_linear_equation.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Inequalities/Linear_inequality_of_one_variable.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Inequalities/Quadratic_inequality_of_one_variable.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Inequalities/Absolute_value_inequality.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Inequalities/Fractional_inequality.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Polynomials_and_factoring/Basic_simplification.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Polynomials_and_factoring/Polynomial_multiplication.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Algebra/Polynomials_and_factoring/Polynomial_division.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Corresponding_angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Alternate_angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Congruence.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Similarity.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Area_of_Circle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Circumference_of_Circle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Inscribed_Square_in_Circle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Arc_Length_of_Circle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Distance_of_Chord_Intersection.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Area_of_Triangle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Perimeter_of_Triangle.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Angle_Sum_Property.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Pythagorean_Theorem_in_Triangles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Similar_Triangles_Property.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Interior_Angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Corresponding_Exterior_Angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Alternate_Interior_Angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Alternate_Exterior_Angles.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Trapezoid_Area.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Trapezoid_Perimeter.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Trapezoid_Height.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Geometry/Trigonometry.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Statistics_and_Probability/Data_collection_and_analysis.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Statistics_and_Probability/Basic_probability_concepts.js',
    MPCLabAPIurl + '/data/math/Middle_School_Mathematics/Statistics_and_Probability/Probability_calculations.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Trigonometry/Properties_and_graphs_of_trigonometric_functions.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Trigonometry/Trigonometric_identities.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Trigonometry/Solving_trigonometric_equations.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Sequences_and_Series/Arithmetic_and_geometric_sequences.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Sequences_and_Series/Summation_of_sequences.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Sequences_and_Series/Properties_of_series.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Calculus/Calculating_derivatives_and_their_applications.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Calculus/Indefinite_and_definite_integrals.js',
    MPCLabAPIurl + '/data/math/High_School_Mathematics/Calculus/Differential_equations.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Linear_Algebra/Matrices_and_determinants.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Linear_Algebra/Vector_spaces_and_linear_transformations.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Linear_Algebra/Eigenvalues_and_eigenvectors.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Differential_Equations/Higher_order_differential_equations.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Differential_Equations/Solution_methods_for_ordinary_differential_equations.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Probability_and_Statistics/Random_variables_and_probability_distributions.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Probability_and_Statistics/Statistical_inference_and_hypothesis_testing.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Complex_Analysis/Complex_numbers_and_complex_functions.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Complex_Analysis/Analytic_functions_and_conformal_mappings.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Linear_Programming/Modeling_and_solving_linear_programming_problems.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Discrete_Mathematics/Graph_theory.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Discrete_Mathematics/Combinatorics.js',
    MPCLabAPIurl + '/data/math/University_Mathematics/Discrete_Mathematics/Applications_of_discrete_mathematics_in_computer_science.js'
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
    const keywords = ["\\frac", "\\sqrt", "\\sum", "\\int", "\\leq", "\\geq", "\\in", "\\mathbb", "^", "_", "|", "\\emptyset"]; // 添加更多关键词以匹配更多表达式

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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Range: [1, 10000, 40],
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
        Name: "Algebra | Quadratic Equations&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
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

    Setting_Array.push({
        Name: "Algebra | Systems of two Variable Linear Equation&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Addition",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Subtraction",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Systems of two Variable Linear Equation | Equations in system of equations",
        Typ: "range",
        Range: [2, 10, 2],
        show: setting[0].topics[1].subtopics[0].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Linear Inequality&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Linear Inequality | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Linear Inequality | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Linear Inequality | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Quadratic Inequality&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Inequality | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Inequality | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Quadratic Inequality | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Absolute Value Inequality&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Absolute Value Inequality | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Absolute Value Inequality | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Absolute Value Inequality | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Fractional Inequality&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Fractional Inequality | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Fractional Inequality | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Fractional Inequality | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Algebra | Basic Simplification&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Basic Simplification | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Basic Simplification | Minimum number",
        Typ: "range",
        Range: [1, 100000, 10],
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Basic Simplification | Maximum number",
        Typ: "range",
        Range: [1, 100000, 50],
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Basic Simplification | Numbers of coefficient",
        Typ: "range",
        Range: [1, 50, 6],
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Basic Simplification | Numbers of variables",
        Typ: "range",
        Range: [1, 26, 3],
        show: setting[0].topics[1].subtopics[0].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Corresponding Angles&BIG",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Corresponding Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Alternate Angles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Alternate Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Congruence&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Calculate Side length",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Calculate Angle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Triangle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Square",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Rectangle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Parallelogram",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Trapezoid",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Congruence | Rhombus",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Similarity&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Calculate Side length",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Calculate Angle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Triangle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Square",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Rectangle",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Parallelogram",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Trapezoid",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Similarity | Rhombus",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Area of Circle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Area of Circle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Circumference of Circle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Circumference of Circle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Inscribed Square in Circle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Inscribed Square in Circle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Arc Length of Circle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Arc Length of Circle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Distance of Chord Intersection&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Distance of Chord Intersection | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Area of Triangle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Area of Triangle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Perimeter of Triangle&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Perimeter of Triangle | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Angle Sum Property&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Angle Sum Property | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Pythagorean Theorem in Triangles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Pythagorean Theorem in Triangles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Similar Triangles Property&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });
    Setting_Array.push({
        Name: "Similar Triangles Property | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[3]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Interior Angles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Interior Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Corresponding Exterior Angles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Corresponding Exterior Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Alternate Interior Angles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Alternate Interior Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Alternate Exterior Angles&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Alternate Exterior Angles | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Trapezoid Area Calculation&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Trapezoid Area Calculation | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Trapezoid Perimeter Calculation&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Trapezoid Perimeter Calculation | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Trapezoid Height Calculation&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });
    Setting_Array.push({
        Name: "Trapezoid Height Calculation | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[4]._checked
    });

    Setting_Array.push({
        Name: "Geometry | Trigonometry&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[5]._checked
    });
    Setting_Array.push({
        Name: "Trigonometry | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[1].subtopics[5]._checked
    });
    Setting_Array.push({
        Name: "Basics Trigonometry | Sine",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[5]._checked
    });
    Setting_Array.push({
        Name: "Basics Trigonometry | Cosine",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[5]._checked
    });
    Setting_Array.push({
        Name: "Basics Trigonometry | Tangent",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[1].subtopics[5]._checked
    });

    Setting_Array.push({
        Name: "Statistics and Probability | Data Collection and Analysis&BIG",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Data Collection and Analysis | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Data Collection and Analysis | Mean",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Data Collection and Analysis | Median",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Data Collection and Analysis | Mode",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Data Collection and Analysis | Range",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Statistics and Probability | Basic Probability Concepts&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Basic Probability Concepts | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Basic Probability Concepts | Experimental Probability",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Basic Probability Concepts | Theoretical Probability",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Basic Probability Concepts | Probability Of Events",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Basic Probability Concepts | Sample Space",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Statistics and Probability | Probability Calculations&Reg",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Probability Calculations | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Probability Calculations | Probability Value",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Probability Calculations | Combined Probability",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Probability Calculations | Independent Events",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Probability Calculations | Dependent Events",
        Typ: "checked",
        show: setting[0].topics[1].subtopics[2].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Trigonometry | Properties and Graphs of Trigonometric Functions&BIG",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Graph Sine",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Graph Cosine",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Graph Tangent",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Find Amplitude",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Find Period",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Find Phase-Shift",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Properties and Graphs of Trigonometric Functions | Find Vertical-Shift",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Trigonometry | Trigonometric Identities&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Trigonometric Identities | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Trigonometric Identities | Pythagorean Identities",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Trigonometric Identities | Quotient Identities",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Trigonometric Identities | Reciprocal Identities",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Trigonometry | Solving Trigonometric Equations&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Solving Trigonometric Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Solving Trigonometric Equations | Linear Equations",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Solving Trigonometric Equations | Quadratic Equations",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Solving Trigonometric Equations | Exponential Equations",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[0].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Sequences and Series | Arithmetic and Geometric Sequences&BIG",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Arithmetic and Geometric Sequences | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Arithmetic and Geometric Sequences | Arithmetic Sequences",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Arithmetic and Geometric Sequences | Geometric Sequences",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Sequences and Series | Summation of sequences&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Summation of sequences | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Summation of sequences | Arithmetic Sequences",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Summation of sequences | Geometric Sequences",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Sequences and Series | Properties of series&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Properties of series | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Properties of series | Convergence of Series",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Properties of series | Divergence of Series",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[1].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Calculus | Calculating Derivatives and their Applications&BIG",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Calculating Derivatives and their Applications | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Calculating Derivatives and their Applications | Calculating Derivatives",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Calculating Derivatives and their Applications | The Applications of Derivatives",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[0]._checked
    });

    Setting_Array.push({
        Name: "Calculus | Indefinite and Definite Integrals&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Indefinite and Definite Integrals | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Indefinite and Definite Integrals | Indefinite Integrals",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[1]._checked
    });
    Setting_Array.push({
        Name: "Indefinite and Definite Integrals | Definite Integrals",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[1]._checked
    });

    Setting_Array.push({
        Name: "Calculus | Differential Equations&Reg",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Differential Equations | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[2].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Differential Equations | First-order Differential Equations",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[2]._checked
    });
    Setting_Array.push({
        Name: "Differential Equations | Second-order Differential Equations",
        Typ: "checked",
        show: setting[0].topics[2].subtopics[2].subtopics[2]._checked
    });

    Setting_Array.push({
        Name: "Linear Algebra | Matrices and Determinants&BIG",
        Typ: "checked",
        show: setting[0].topics[3].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Matrices and Determinants | Number of questions to generate",
        Typ: "range",
        Range: [1, 10000, 40],
        show: setting[0].topics[3].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Matrices and Determinants | Basic Matrix Operations",
        Typ: "checked",
        show: setting[0].topics[3].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Matrices and Determinants | Properties of Matrices",
        Typ: "checked",
        show: setting[0].topics[3].subtopics[0].subtopics[0]._checked
    });
    Setting_Array.push({
        Name: "Matrices and Determinants | Determinants of Matrices",
        Typ: "checked",
        show: setting[0].topics[3].subtopics[0].subtopics[0]._checked
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

function $X_Generate_(general_settings, results, Task_settings, Class_ID) {
    X_Operate.newPage();
    X_Operate.newTitle("Generating...");
    console.log(results);
    function gen_log(w, l, i) {
        APP.log(w + (i + 1) + "/" + l + " - " + ((i + 1) / l * 100).toFixed(2) + "%");
    }
    let re_q = new Array();
    setTimeout(() => {
        if (!Teacher_SL_MOD) {
            if (results[0] == true) {
                loop_length = Number(results[1]);
                if (results[2] == true && results[3] == true) loop_length /= 2;
                if (results[2] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Addition: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Addition(Number(results[4]), Number(results[5])));
                    }
                }
                if (results[3] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Addition Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Addition_w(Number(results[4]), Number(results[5])));
                    }
                }
            }
            if (results[6] == true) {
                loop_length = Number(results[7]);
                if (results[8] == true && results[9] == true) loop_length /= 2;
                if (results[8] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Subtraction(Number(results[10]), Number(results[11])));
                    }
                }
                if (results[9] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Subtraction_w(Number(results[10]), Number(results[11])));
                    }
                }
            }
            if (results[12] == true) {
                loop_length = Number(results[13]);
                if (results[14] == true && results[15] == true) loop_length /= 2;
                if (results[14] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Multiplication(Number(results[16]), Number(results[17])));
                    }
                }
                if (results[15] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Multiplication_w(Number(results[16]), Number(results[17])));
                    }
                }
            }
            if (results[18] == true) {
                loop_length = Number(results[19]);
                if (results[20] == true && results[21] == true) loop_length /= 2;
                if (results[20] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Division(Number(results[22]), Number(results[23])));
                    }
                }
                if (results[21] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Basic_Operations.Division_w(Number(results[22]), Number(results[23])));
                    }
                }
            }
            if (results[24] == true) {
                loop_length = Number(results[25]);
                if (results[26] == true && results[27] == true) loop_length /= 2;
                if (results[26] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Comparing Integers: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Comparing_integers(Number(results[28]), Number(results[29])));
                    }
                }
                if (results[27] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Comparing Integers Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Comparing_integers_w(Number(results[28]), Number(results[29])));
                    }
                }
            }
            if (results[30] == true) {
                loop_length = Number(results[31]);
                if (results[32] == true && results[33] == true) loop_length /= 2;
                if (results[32] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Add Integers: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Addition(Number(results[34]), Number(results[35]), Number(results[36])));
                    }
                }
                if (results[33] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Add Integers Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Addition_w(Number(results[34]), Number(results[35]), Number(results[36])));
                    }
                }
            }
            if (results[37] == true) {
                loop_length = Number(results[38]);
                if (results[39] == true && results[40] == true) loop_length /= 2;
                if (results[39] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Integers: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Subtraction(Number(results[41]), Number(results[42]), Number(results[43])));
                    }
                }
                if (results[40] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Integers Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Subtraction_w(Number(results[41]), Number(results[42]), Number(results[43])));
                    }
                }
            }
            if (results[44] == true) {
                loop_length = Number(results[45]);
                if (results[46] == true && results[47] == true) loop_length /= 2;
                if (results[46] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Integers: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Multiplication(Number(results[48]), Number(results[49]), Number(results[50])));
                    }
                }
                if (results[47] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Integers Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Multiplication_w(Number(results[48]), Number(results[49]), Number(results[50])));
                    }
                }
            }
            if (results[51] == true) {
                loop_length = Number(results[52]);
                if (results[53] == true && results[54] == true) loop_length /= 2;
                if (results[53] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Integers: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Division(Number(results[55]), Number(results[56]), Number(results[57])));
                    }
                }
                if (results[54] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Integers Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Integers.Division_w(Number(results[55]), Number(results[56]), Number(results[57])));
                    }
                }
            }
            if (results[58] == true) {
                loop_length = Number(results[59]);
                if (results[60] == true && results[61] == true) loop_length /= 2;
                if (results[60] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Decimals: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Addition(Number(results[62]), Number(results[63]), Number(results[64]), Number(results[65])));
                    }
                }
                if (results[61] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Decimals Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Addition_w(Number(results[62]), Number(results[63]), Number(results[64]), Number(results[65])));
                    }
                }
            }
            if (results[66] == true) {
                loop_length = Number(results[67]);
                if (results[68] == true && results[69] == true) loop_length /= 2;
                if (results[68] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Decimals: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Subtraction(Number(results[70]), Number(results[71]), Number(results[72]), Number(results[73])));
                    }
                }
                if (results[69] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Decimals Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Subtraction_w(Number(results[70]), Number(results[71]), Number(results[72]), Number(results[73])));
                    }
                }
            }
            if (results[74] == true) {
                loop_length = Number(results[75]);
                if (results[76] == true && results[77] == true) loop_length /= 2;
                if (results[76] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Decimals: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Multiplication(Number(results[78]), Number(results[79]), Number(results[80]), Number(results[81])));
                    }
                }
                if (results[77] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Decimals Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Multiplication_w(Number(results[78]), Number(results[79]), Number(results[80]), Number(results[81])));
                    }
                }
            }
            if (results[82] == true) {
                loop_length = Number(results[83]);
                if (results[84] == true && results[85] == true) loop_length /= 2;
                if (results[84] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Decimals: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Division(Number(results[86]), Number(results[87]), Number(results[88]), Number(results[89])));
                    }
                }
                if (results[85] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Decimals Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Division_w(Number(results[86]), Number(results[87]), Number(results[88]), Number(results[89])));
                    }
                }
            }
            if (results[90] == true) {
                loop_length = Number(results[91]);
                if (results[92] == true && results[93] == true) loop_length /= 2;
                if (results[92] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Compare Decimals: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Comparing_decimals(Number(results[94]), Number(results[95]), Number(results[96])));
                    }
                }
                if (results[93] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Compare Decimals Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Decimals.Comparing_decimals_w(Number(results[94]), Number(results[95]), Number(results[96])));
                    }
                }
            }
            if (results[97] == true) {
                loop_length = Number(results[98]);
                if (results[99] == true && results[100] == true) loop_length /= 2;
                if (results[99] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Adding Fractions: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Addition(Number(results[101]), Number(results[102]), Number(results[103]), Number(results[104])));
                    }
                }
                if (results[100] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Adding Fractions Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Addition_w(Number(results[101]), Number(results[102]), Number(results[103]), Number(results[104])));
                    }
                }
            }
            if (results[105] == true) {
                loop_length = Number(results[106]);
                if (results[107] == true && results[108] == true) loop_length /= 2;
                if (results[107] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Fractions: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Subtraction(Number(results[109]), Number(results[110]), Number(results[111]), Number(results[112])));
                    }
                }
                if (results[108] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Subtraction Fractions Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Subtraction_w(Number(results[109]), Number(results[110]), Number(results[111]), Number(results[112])));
                    }
                }
            }
            if (results[113] == true) {
                loop_length = Number(results[114]);
                if (results[115] == true && results[116] == true) loop_length /= 2;
                if (results[115] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Fractions: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Multiplication(Number(results[117]), Number(results[118]), Number(results[119]), Number(results[120])));
                    }
                }
                if (results[116] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Multiplication Fractions Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Multiplication_w(Number(results[117]), Number(results[118]), Number(results[119]), Number(results[120])));
                    }
                }
            }
            if (results[121] == true) {
                loop_length = Number(results[122]);
                if (results[123] == true && results[124] == true) loop_length /= 2;
                if (results[123] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Fractions: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Division(Number(results[125]), Number(results[126]), Number(results[127]), Number(results[128])));
                    }
                }
                if (results[124] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division Fractions Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Fractions.Division_w(Number(results[125]), Number(results[126]), Number(results[127]), Number(results[128])));
                    }
                }
            }
            if (results[129] == true) {
                loop_length = Number(results[130]);
                if (results[131] == true && results[132] == true) loop_length /= 2;
                if (results[131] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Division decimal to percentage: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Converting_percentages(true, false, Number(results[133])));
                    }
                }
                if (results[132] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Convert percentage to decimal: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Converting_percentages(false, true, Number(results[133])));
                    }
                }
            }
            if (results[134] == true) {
                loop_length = Number(results[135]);
                if (results[136] == true && results[137] == true) loop_length /= 2;
                if (results[136] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Percentages: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Calculating_percentages(Number(results[138]), Number(results[139])));
                    }
                }
                if (results[137] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Percentages Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Percentages.Calculating_percentages_w(Number(results[138]), Number(results[139])));
                    }
                }
            }
            if (results[140] == true) {
                loop_length = Number(results[141]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Recognizing Shapes: ", loop_length, i);
                    re_q.push($X.math.Elementary_Mathematics.Geometry.Recognizing_shapes(Number(results[142]), Number(results[143]), Number(results[144]), Number(results[145]), Number(results[146]), Number(results[147]), Number(results[148]), Number(results[149]), Number(results[150]), Number(results[151]), Number(results[152]), Number(results[153])));
                }
            }
            if (results[154] == true) {
                loop_length = Number(results[155]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Perimeter and Area: ", loop_length, i);
                    re_q.push($X.math.Elementary_Mathematics.Geometry.perimeter_and_area(Number(results[156]), Number(results[157]), Number(results[158]), Number(results[159]), Number(results[160]), Number(results[161]), Number(results[162]), Number(results[163]), Number(results[164]), Number(results[165]), Number(results[166]), Number(results[167])));
                }
            }
            if (results[168] == true) {
                loop_length = Number(results[169]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Volume: ", loop_length, i);
                    re_q.push($X.math.Elementary_Mathematics.Geometry.volume(Number(results[170]), Number(results[171]), Number(results[172]), Number(results[173]), Number(results[174]), Number(results[175])));
                }
            }
            if (results[176] == true) {
                loop_length = Number(results[177]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Reading Clocks: ", loop_length, i);
                    re_q.push($X.math.Elementary_Mathematics.Time.Reading_clocks(results[178]));
                }
            }
            if (results[179] == true) {
                loop_length = Number(results[180]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Reading Calendars: ", loop_length, i);
                    re_q.push($X.math.Elementary_Mathematics.Time.Reading_calendars());
                }
            }
            if (results[181] == true) {
                loop_length = Number(results[182]);
                if (results[183] == true && results[184] == true) loop_length /= 2;
                if (results[183] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Clocks: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_clocks(results[185]));
                    }
                }
                if (results[184] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Clocks Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_clocks_w(results[185]));
                    }
                }
            }
            if (results[186] == true) {
                loop_length = Number(results[187]);
                if (results[188] == true && results[189] == true) loop_length /= 2;
                if (results[188] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Calendars: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_calendars());
                    }
                }
                if (results[189] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Calculating Calendars Word: ", loop_length, i);
                        re_q.push($X.math.Elementary_Mathematics.Time.Calculations_calendars_w());
                    }
                }
            }
            if (results[190] == true) {
                loop_length = Number(results[191]);
                if (results[192] == true && results[193] == true) loop_length /= 2;
                if (results[192] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Single variable linear equations: ", loop_length, i);
                        re_q.push($X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations(Number(results[194]), Number(results[195]), results[196], results[197]));
                    }
                }
                if (results[193] == true) {
                    for (let i = 0; i < loop_length; i++) {
                        gen_log("Generating - Single variable linear equations Word: ", loop_length, i);
                        re_q.push($X.math.Middle_School_Mathematics.Algebra.Single_variable_linear_equations_w(Number(results[194]), Number(results[195]), results[196], results[197]));
                    }
                }
            }
            if (results[198] == true) {
                loop_length = Number(results[199]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Quadratic equations: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Quadratic_equations(Number(results[200]), Number(results[201])));
                }
            }
            if (results[202] == true) {
                loop_length = Number(results[203]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Systems of two variable linear equation: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Systems_of_two_variable_linear_equation(Number(results[204]), Number(results[205]), Number(results[206]), results[207], results[208]));
                }
            }
            if (results[209] == true) {
                loop_length = Number(results[210]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Linear inequality: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Linear_inequality_of_one_variable(Number(results[211]), Number(results[212])));
                }
            }
            if (results[213] == true) {
                loop_length = Number(results[214]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Quadratic inequality: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Quadratic_inequality_of_one_variable(Number(results[215]), Number(results[216])));
                }
            }
            if (results[217] == true) {
                loop_length = Number(results[218]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Absolute Value Inequality: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Absolute_value_inequality(Number(results[219]), Number(results[220])));
                }
            }
            if (results[221] == true) {
                loop_length = Number(results[222]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Fractional Inequality: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Fractional_inequality(Number(results[223]), Number(results[224])));
                }
            }
            if (results[225] == true) {
                loop_length = Number(results[226]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Basic Simplification: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Algebra.Polynomials_and_factoring_Simplification(Number(results[227]), Number(results[228]), Number(results[229]), Number(results[230])));
                }
            }
            if (results[231] == true) {
                loop_length = Number(results[232]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Corresponding Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.Corresponding_angles());
                }
            }
            if (results[233] == true) {
                loop_length = Number(results[234]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Alternate Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.Alternate_angles());
                }
            }
            if (results[235] == true) {
                loop_length = Number(results[236]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Congruence: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.Congruence(results[237], results[238], results[239], results[240], results[241], results[242], results[243], results[244]));
                }
            }
            if (results[245] == true) {
                loop_length = Number(results[246]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Similarity: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.Similarity(results[247], results[248], results[249], results[250], results[251], results[252], results[253], results[254]));
                }
            }
            if (results[255] == true) {
                loop_length = Number(results[256]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Area of Circle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CircleArea());
                }
            }
            if (results[257] == true) {
                loop_length = Number(results[258]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Circumference of Circle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CircleCircumference());
                }
            }
            if (results[259] == true) {
                loop_length = Number(results[260]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Inscribed Square in Circle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CircleInscribedSquare());
                }
            }
            if (results[261] == true) {
                loop_length = Number(results[262]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Arc Length of Circle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CircleArcLength());
                }
            }
            if (results[263] == true) {
                loop_length = Number(results[264]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Distance of Chord Intersection: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CircleChordDistance());
                }
            }
            if (results[265] == true) {
                loop_length = Number(results[266]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Area of Triangle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.TriangleArea());
                }
            }
            if (results[267] == true) {
                loop_length = Number(results[268]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Perimeter of Triangle: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.TrianglePerimeter());
                }
            }
            if (results[269] == true) {
                loop_length = Number(results[270]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Angle Sum Property: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.AngleSumProperty());
                }
            }
            if (results[271] == true) {
                loop_length = Number(results[272]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Pythagorean Theorem in Triangles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.PythagoreanTheorem());
                }
            }
            if (results[273] == true) {
                loop_length = Number(results[274]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Similar Triangles Property: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.SimilarTriangles());
                }
            }
            if (results[275] == true) {
                loop_length = Number(results[276]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Interior Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.InteriorAngles());
                }
            }
            if (results[277] == true) {
                loop_length = Number(results[278]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Corresponding Exterior Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.CorrespondingExteriorAngles());
                }
            }
            if (results[279] == true) {
                loop_length = Number(results[280]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Alternate Interior Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.AlternateInteriorAngles());
                }
            }
            if (results[281] == true) {
                loop_length = Number(results[282]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Alternate Exterior Angles: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.AlternateExteriorAngles());
                }
            }
            if (results[283] == true) {
                loop_length = Number(results[284]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Trapezoid Area Calculation: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.TrapezoidArea());
                }
            }
            if (results[285] == true) {
                loop_length = Number(results[286]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Trapezoid Perimeter Calculation: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.TrapezoidPerimeter());
                }
            }
            if (results[287] == true) {
                loop_length = Number(results[288]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Trapezoid Height Calculation: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.TrapezoidHeight());
                }
            }
            if (results[289] == true) {
                loop_length = Number(results[290]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Basics Trigonometry: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Geometry.Trigonometry(results[291], results[292], results[293]));
                }
            }
            if (results[294] == true) {
                loop_length = Number(results[295]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Data Collection and Analysis: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Statistics_and_Probability.Data_Collection_And_Analysis(results[296], results[297], results[298], results[299]));
                }
            }
            if (results[300] == true) {
                loop_length = Number(results[301]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Basic Probability Concepts: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Statistics_and_Probability.Basic_Probability_Concepts(results[302], results[303], results[304], results[305]));
                }
            }
            if (results[306] == true) {
                loop_length = Number(results[307]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Probability Calculations: ", loop_length, i);
                    re_q.push($X.math.Middle_School_Mathematics.Statistics_and_Probability.Probability_Calculations(results[308], results[309], results[310], results[311]));
                }
            }
            if (results[312] == true) {
                loop_length = Number(results[313]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Properties and Graphs of Trigonometric Functions: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Trigonometry.TrigonometricFunctionsProperties(results[314], results[315], results[316], results[317], results[318], results[319], results[320]));
                }
            }
            if (results[321] == true) {
                loop_length = Number(results[322]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Trigonometric Identities: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Trigonometry.TrigonometricIdentities(results[323], results[324], results[325]));
                }
            }
            if (results[326] == true) {
                loop_length = Number(results[327]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Solving trigonometric equations: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Trigonometry.SolvingTrigonometricEquations(results[328], results[329], results[330]));
                }
            }
            if (results[331] == true) {
                loop_length = Number(results[332]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Arithmetic and Geometric Sequences: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Sequences_and_Series.ArithmeticAndGeometricSequences(results[333], results[334]));
                }
            }
            if (results[335] == true) {
                loop_length = Number(results[336]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Summation of sequences: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Sequences_and_Series.SummationOfSequences(results[337], results[338]));
                }
            }
            if (results[339] == true) {
                loop_length = Number(results[340]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Properties of series: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Sequences_and_Series.PropertiesOfSeries(results[341], results[342]));
                }
            }
            if (results[343] == true) {
                loop_length = Number(results[344]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Calculating Derivatives and their Applications: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Calculus.CalculatingDerivativesAndApplications(results[345], results[346]));
                }
            }
            if (results[347] == true) {
                loop_length = Number(results[348]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Indefinite and Definite Integrals: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Calculus.IndefiniteAndDefiniteIntegrals(results[349], results[350]));
                }
            }
            if (results[351] == true) {
                loop_length = Number(results[352]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Differential equations: ", loop_length, i);
                    re_q.push($X.math.High_School_Mathematics.Calculus.DifferentialEquations(results[353], results[354]));
                }
            }
            if (results[355] == true) {
                loop_length = Number(results[356]);
                for (let i = 0; i < loop_length; i++) {
                    gen_log("Generating - Matrices and determinants: ", loop_length, i);
                    re_q.push($X.University_Mathematics.Linear_Algebra.MatricesAndDeterminants(results[357], results[358], results[359]));
                }
            }

            /*打乱顺序*/
            if (general_settings[1] == true) {
                re_q = shuffleArray(re_q);
            }

            let test_settings = Task_settings;

            if (Test_MOD) {
                let obj = {
                    questions: re_q,
                    settings: test_settings,
                    Class_ID: Class_ID
                };
                // 将包含数组的对象转换为 JSON 字符串
                const jsonStr = JSON.stringify(obj);
                // 将 JSON 字符串存储到 sessionStorage 中
                sessionStorage.setItem('MPCTest', jsonStr);
                window.location = "https://app.mathscichem.com/test";
            } else {
                X_Result(re_q);
            }
        } else {
            let Task_Settings = [];
            Task_Settings.push({
                Name: "Timing | Time Limit",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Timing | Time Limit (min)",
                Typ: "range",
                Range: [1, 600, 60],
                show: true
            });
            Task_Settings.push({
                Name: "Timing | Show remaining time",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Timing | Automatic reminder of remaining time",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Full screen | Force full screen",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Anti-cheating | End test on exit from full-screen",
                Typ: "check",
                show: true
            });
            Task_Settings.push({
                Name: "Anti-cheating | End exam when switching apps/tabs",
                Typ: "check",
                show: true
            });
            Task_Settings.push({
                Name: "Anti-cheating | Prevent copy-paste",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Anti-cheating | Typing no cheating guarantee agreement",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Tools | Enable calculator tool",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Tools | Enable Enable periodic table",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Tools | Enable eye protection mode",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Questions | Each question shows right or wrong",
                Typ: "checked",
                show: true
            });
            Task_Settings.push({
                Name: "Questions | Number of submissions allowed per question",
                Typ: "range",
                Range: [1, 10, 1],
                show: true
            });
            Task_Settings.push({
                Name: "Questions | Intelligent answer correction (recommended)",
                Typ: "checked",
                show: true
            });

            X_Operate.newSetting("Task Settings", Task_Settings).then((Settings) => {
                let data = [general_settings, results, Settings];
                sessionStorage.setItem('popupData', JSON.stringify(data));
                window.opener.postMessage(JSON.stringify(data), '*');
                window.close();
            });
        }
    }, 100);
}