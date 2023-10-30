// Levenshtein 距离算法
function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Jaro-Winkler 相似度算法
function jaroWinklerSimilarity(s1, s2) {
    var m = 0;

    // Exit early if either are empty.
    if (s1.length === 0 || s2.length === 0) {
        return 0;
    }

    // Exit early if they're an exact match.
    if (s1 === s2) {
        return 1;
    }

    var range = (Math.floor(Math.max(s1.length, s2.length) / 2)) - 1,
        s1Matches = new Array(s1.length),
        s2Matches = new Array(s2.length);

    for (i = 0; i < s1.length; i++) {
        var low = (i >= range) ? i - range : 0,
            high = (i + range <= (s2.length - 1)) ? (i + range) : (s2.length - 1);

        for (j = low; j <= high; j++) {
            if (s1Matches[i] !== true && s2Matches[j] !== true && s1[i] === s2[j]) {
                ++m;
                s1Matches[i] = s2Matches[j] = true;
                break;
            }
        }
    }

    // Exit early if no matches were found.
    if (m === 0) {
        return 0;
    }

    // Count the transpositions.
    var k = n_trans = 0;

    for (i = 0; i < s1.length; i++) {
        if (s1Matches[i] === true) {
            for (j = k; j < s2.length; j++) {
                if (s2Matches[j] === true) {
                    k = j + 1;
                    break;
                }
            }

            if (s1[i] !== s2[j]) {
                ++n_trans;
            }
        }
    }

    var weight = (m / s1.length + m / s2.length + (m - n_trans / 2) / m) / 3,
        l = p = 0.1;

    if (weight > 0.7) {
        while (s1[l] === s2[l] && l < 4) {
            ++l;
        }

        weight = weight + l * p * (1 - weight);
    }

    return weight;
}

// n-gram 模型
function createNGrams(text, n) {
    const nGrams = [];
    for (let i = 0; i <= text.length - n; i++) {
        nGrams.push(text.substr(i, n));
    }
    return nGrams;
}

function calculateNGramSimilarity(text1, text2, n) {
    const nGramsText1 = createNGrams(text1, n);
    const nGramsText2 = createNGrams(text2, n);
    const setNGramsText1 = new Set(nGramsText1);
    const setNGramsText2 = new Set(nGramsText2);
    const intersection = new Set([...setNGramsText1].filter(x => setNGramsText2.has(x)));
    return intersection.size / Math.min(setNGramsText1.size, setNGramsText2.size);
}

// 模糊搜索函数
function fuzzySearchApps(query, maxDistanceLevenshtein = 3, minSimilarityJaroWinkler = 0.7, minSimilarityNGram = 0.4) {
    const apps = APP.apps;
    const queryWords = query.toLowerCase().split(' ');
    const matchedIndexes = [];

    for (let i = 0; i < apps.length; i++) {
        const app = apps[i];
        const titleLower = app.title.toLowerCase();
        const descriptionLower = app.description.toLowerCase();

        for (let j = 0; j < queryWords.length; j++) {
            const queryWord = queryWords[j];

            // 计算 Levenshtein 距离
            const levenshteinDistanceTitle = levenshteinDistance(queryWord, titleLower);
            const levenshteinDistanceDescription = levenshteinDistance(queryWord, descriptionLower);

            // 计算 Jaro-Winkler 相似度
            const jaroWinklerSimilarityTitle = jaroWinklerSimilarity(queryWord, titleLower);
            const jaroWinklerSimilarityDescription = jaroWinklerSimilarity(queryWord, descriptionLower);

            // 计算 n-gram 相似度
            const nGramSimilarityTitle = calculateNGramSimilarity(queryWord, titleLower, 3);
            const nGramSimilarityDescription = calculateNGramSimilarity(queryWord, descriptionLower, 3);

            // 根据 Levenshtein 距离、Jaro-Winkler 相似度和 n-gram 相似度判断是否匹配
            if (levenshteinDistanceTitle <= maxDistanceLevenshtein || levenshteinDistanceDescription <= maxDistanceLevenshtein ||
                jaroWinklerSimilarityTitle >= minSimilarityJaroWinkler || jaroWinklerSimilarityDescription >= minSimilarityJaroWinkler ||
                nGramSimilarityTitle >= minSimilarityNGram || nGramSimilarityDescription >= minSimilarityNGram) {
                matchedIndexes.push(i);
                break;  // 如果已经匹配到一个单词，就不再检查剩下的单词
            }
        }
    }

    return matchedIndexes;
}

window.addEventListener("load", () => {
    let result = document.getElementById("result");
    document.getElementById("search_bar").addEventListener("change", function (result) {
        result.innerHTML = "";

        let search_index = fuzzySearchApps(document.getElementById("search_bar").value);

        window_load(false, 0);
        function to_app(url) {
            window.location = url;
        }
        function types_have(types, find) {
            let return_f = false;
            for (var i = 0; i < types.length; i++) {
                if (types[i] == find) return_f = true;
            }
            return return_f;
        }

        // 生成极小概率的正态分布随机数
        function generateRandomVeryLow() {
            var mean = 0.1; // 极小概率对应的平均值
            var stdDeviation = 0.05; // 标准差，可以根据需要调整

            var u1 = Math.random();
            var u2 = Math.random();
            var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

            return mean + stdDeviation * z;
        }

        // 生成低概率的正态分布随机数
        function generateRandomLow() {
            var mean = 0.3; // 低概率对应的平均值
            var stdDeviation = 0.1; // 标准差，可以根据需要调整

            var u1 = Math.random();
            var u2 = Math.random();
            var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

            return mean + stdDeviation * z;
        }

        // 生成中概率的正态分布随机数
        function generateRandomMedium() {
            var mean = 0.5; // 中概率对应的平均值
            var stdDeviation = 0.15; // 标准差，可以根据需要调整

            var u1 = Math.random();
            var u2 = Math.random();
            var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

            return mean + stdDeviation * z;
        }

        // 生成高概率的正态分布随机数
        function generateRandomHigh() {
            var mean = 0.7; // 高概率对应的平均值
            var stdDeviation = 0.2; // 标准差，可以根据需要调整

            var u1 = Math.random();
            var u2 = Math.random();
            var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

            return mean + stdDeviation * z;
        }

        // 生成极高概率的正态分布随机数
        function generateRandomVeryHigh() {
            var mean = 0.9; // 极高概率对应的平均值
            var stdDeviation = 0.2; // 标准差，可以根据需要调整

            var u1 = Math.random();
            var u2 = Math.random();
            var z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

            return mean + stdDeviation * z;
        }

        // 根据APP.Ads.amount来确定概率
        function shouldShowAd() {
            var probability = 0;
            switch (APP.Ads.amount) {
                case "none":
                    probability = 0; // 不显示广告
                    break;
                case "low":
                    probability = generateRandomVeryLow(); // 使用正态分布生成随机数
                    break;
                case "few":
                    probability = generateRandomLow(); // 使用正态分布生成随机数
                    break;
                case "medium":
                    probability = generateRandomMedium(); // 使用正态分布生成随机数
                    break;
                case "more":
                    probability = generateRandomHigh(); // 使用正态分布生成随机数
                    break;
                case "high":
                    probability = generateRandomVeryHigh(); // 使用正态分布生成随机数
                    break;
            }

            // 限制概率在0到1之间
            probability = Math.min(1, Math.max(0, probability));

            // 生成随机数，如果小于概率则返回true，否则返回false
            var randomValue = Math.random();
            return randomValue < probability;
        }

        function new_ads_flow() {
            // 创建一个自定义容器元素
            var customAdContainer = document.createElement("div");

            // 设置容器的样式，以控制广告的布局
            customAdContainer.className = "adsbygoogle";

            // 创建一个新的script元素
            var scriptElement = document.createElement("script");
            scriptElement.async = true;
            scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3037105534785562";
            scriptElement.crossOrigin = "anonymous";

            // 创建ins元素
            var insElement = document.createElement("ins");
            insElement.className = "adsbygoogle";
            insElement.style.display = "block";
            insElement.setAttribute("data-ad-format", "fluid");
            insElement.setAttribute("data-ad-layout-key", "-dq-a+49-4i-5u");
            insElement.setAttribute("data-ad-client", "ca-pub-3037105534785562");
            insElement.setAttribute("data-ad-slot", "3489283943");

            // 创建最后一个script元素
            var scriptElement2 = document.createElement("script");
            scriptElement2.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});";

            // 将这些元素添加到容器中
            customAdContainer.appendChild(scriptElement);
            customAdContainer.appendChild(insElement);
            customAdContainer.appendChild(scriptElement2);

            // 将自定义容器添加到页面的某个元素
            var result = document.getElementById('result');
            result.appendChild(customAdContainer);
        }

        result.innerHTML = "";
        for (var i = 0; i < APP.apps.length; i++) {
            if (search_index.includes(i)) {
                let new_flow = document.createElement("div");
                new_flow.className = "flow-element";
                if (APP.apps[i].full_line == true) new_flow.className += " full-line";
                let new_img = document.createElement("img");
                new_img.src = APP.apps[i].img;
                new_flow.append(new_img);
                let new_title = document.createElement("h2");
                new_title.innerHTML = APP.apps[i].title;
                if (APP.apps[i].hot == true) {
                    let new_hot = document.createElement("sup");
                    new_hot.className = "hot-tag";
                    new_hot.innerHTML = `&nbsp;HOT`;
                    new_title.append(new_hot);
                }
                new_flow.append(new_title);
                let new_p = document.createElement("p");
                new_p.innerText = APP.apps[i].description;
                new_flow.append(new_p);
                new_flow.url = APP.apps[i].url;
                new_flow.addEventListener("click", function () {
                    to_app(this.url);
                });
                result.append(new_flow);
                if (shouldShowAd()) new_ads_flow();
            }
        }
        window_load(true, 900);
    });
});