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
