function main() {
    //Start Page
    Operate.newPage();

    Operate.newStart("Statistics Distribution");
    Operate.newStart("Use ',' to split numbers");
    // 提示用户输入所有数据，以逗号隔开
    Operate.newInput(["data"]).then((dataInput) => {
        const dataSeries = dataInput[0];
        const dataArray = dataSeries.split(',').map(value => parseInt(value.trim()));

        if (dataArray.some(isNaN) || dataArray.length === 0) {
            // 处理无效输入
            Operate.newSolution("Invalid input for data values.");
            Operate.newRestart();
            return;
        }

        interpretData(dataArray);
    });

    function interpretData(array) {
        if (array.length === 0) {
            Operate.newSolution("No data values provided.");
            Operate.newRestart();
            return;
        }

        array.sort();
        const sum = findSum(array);
        const mean = findMean(array, sum);
        const median = findMedian(array);
        const range = findRange(array);
        const standard_deviation = findSD(array, mean);
        const variance = findVariance(array, mean);
        const min = findMin(array);
        const max = findMax(array);

        Operate.newSolution("Interpretation: ");
        Operate.newSolution("sum: " + sum);
        Operate.newSolution("mean: " + mean);
        Operate.newSolution("median: " + median);
        Operate.newSolution("range: " + range);
        Operate.newSolution("standard deviation: " + standard_deviation);
        Operate.newSolution("variance: " + variance);
        Operate.newSolution("minimum value: " + min);
        Operate.newSolution("maximum value: " + max);

        Operate.newRestart();
    }

    function findSum(data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i];
        }
        return sum;
    }

    function findMean(data, sum) {
        var result = sum / data.length;
        return result;
    }

    function findMedian(data) {
        var middle = Math.floor(data.length / 2);
        if (data.length % 2 == 0) {
            return (data[middle] + data[middle - 1]) / 2;
        } else {
            return data[middle];
        }
    }

    function findRange(data) {
        return data[data.length - 1] - data[0];
    }

    function findSD(data, mean) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += Math.pow(data[i] - mean, 2);
        }
        var SD = Math.sqrt(sum / (data.length - 1));
        return SD;
    }

    function findVariance(data, mean) {
        var sumOfSquares = 0;
        for (var i = 0; i < data.length; i++) {
            sumOfSquares += Math.pow(data[i] - mean, 2);
        }
        var variance = sumOfSquares / (data.length - 1);
        return variance;
    }

    function findMin(data) {
        return data[0];
    }

    function findMax(data) {
        return data[data.length - 1];
    }
}
