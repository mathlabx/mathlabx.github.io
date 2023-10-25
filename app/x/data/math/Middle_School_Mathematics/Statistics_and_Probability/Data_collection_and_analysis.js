/*
数据收集/分析
*/

$X.math.Middle_School_Mathematics.Statistics_and_Probability.Data_Collection_And_Analysis = function (mean, median, mode, range) {
    function generateRandomData() {
        var dataLength = Math.floor(Math.random() * 8) + 3; // Random data length between 3 and 10
        var data = [];
        for (var i = 0; i < dataLength; i++) {
            data.push(Math.floor(Math.random() * 20) + 1); // Random data points between 1 and 20
        }
        return data;
    }

    function calculateMean(data) {
        return (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);
    }

    function calculateMedian(data) {
        var sortedData = data.slice().sort(function (a, b) { return a - b; });
        var medianValue = 0;
        if (sortedData.length % 2 === 0) {
            medianValue = ((sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2).toFixed(2);
        } else {
            medianValue = sortedData[Math.floor(sortedData.length / 2)].toFixed(2);
        }
        return medianValue;
    }

    function calculateMode(data) {
        var modeMap = {};
        var maxCount = 0;
        var modes = [];
        data.forEach(function (element) {
            modeMap[element] = (modeMap[element] || 0) + 1;
            if (modeMap[element] > maxCount) {
                modes = [element];
                maxCount = modeMap[element];
            } else if (modeMap[element] === maxCount) {
                modes.push(element);
            }
        });
        return modes.length > 1 ? "multiple, including " + modes.join(", ") : modes[0];
    }

    function calculateRange(data) {
        return (Math.max(...data) - Math.min(...data)).toFixed(2);
    }

    var dataAnalysis = {};

    const analysisArray = [mean, median, mode, range];
    let trueCount = analysisArray.filter(analysis => analysis).length;

    if (trueCount > 1) {
        const trueIndices = analysisArray.map((analysis, index) => analysis ? index : -1).filter(index => index !== -1);
        const randomIndexToKeep = trueIndices[Math.floor(Math.random() * trueIndices.length)];
        for (let i = 0; i < analysisArray.length; i++) {
            if (i !== randomIndexToKeep) {
                analysisArray[i] = false;
            }
        }
    }

    [mean, median, mode, range] = analysisArray;

    if (mean) {
        // Logic for mean calculation
        var data = generateRandomData();
        var meanValue = calculateMean(data);
        var question = "Calculate the mean of the following data set: " + data + ".";
        var answer = "The mean is the sum of all the data points divided by the number of data points. For this data set, the mean is " + meanValue + ".";
        dataAnalysis = { type: "mean", question: question, answer: answer };
    } else if (median) {
        // Logic for median calculation
        var data = generateRandomData();
        var medianValue = calculateMedian(data);
        var question = "Find the median of the following data set: " + data + ".";
        var answer = "The median is the middle value in a sorted data set. For this data set, the median is " + medianValue + ".";
        dataAnalysis = { type: "median", question: question, answer: answer };
    } else if (mode) {
        // Logic for mode calculation
        var data = generateRandomData();
        var modeValue = calculateMode(data);
        var question = "Determine the mode(s) of the following data set: " + data + ".";
        var answer = "The mode is the number that appears most frequently in a data set. For this data set, the mode is " + modeValue + ".";
        dataAnalysis = { type: "mode", question: question, answer: answer };
    } else if (range) {
        // Logic for range calculation
        var data = generateRandomData();
        var rangeValue = calculateRange(data);
        var question = "Compute the range of the following data set: " + data + ".";
        var answer = "The range is the difference between the largest and smallest values in a data set. For this data set, the range is " + rangeValue + ".";
        dataAnalysis = { type: "range", question: question, answer: answer };
    }

    // Return the data analysis
    return [dataAnalysis.question, dataAnalysis.answer];
};