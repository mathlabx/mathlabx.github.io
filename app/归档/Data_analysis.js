function Data_analysis(max, min, num){
    var datas = [];
    //generate num numbers of random data value
    for(let i = 0; i<num; i++){
        datas.push(Math.floor(Math.random()* (max - min + 1)) + min);
    }
    var question = "Interpet the set of data shown below: ";
    for(let i = 0; i<datas.length; i++){
        question += datas[i] + ",";
    }
    var answer;
	datas.sort();
	const sum = findSum(datas);
	const mean = findMean(datas,sum);
	const median = findMedian(datas);
	const range = findRange(datas);
	const standard_deviation = findSD(data, mean);
    answer += "n: " + datas.length + ", ";
	answer += `\sum` + "x: " + sum + ", ";
	answer += `\sum` + "2: " + Math.pow(sum,2) + ", ";
	answer += ": " + mean + "<br>";
	answer += "median: " + median + ", ";
	answer += "range: " + range + ", ";
	answer += ": " + standard_deviation + ", ";
	answer += ": " + Math.pow(standard_deviation,2) + ", ";
	answer += "min: " + datas[0] + ", ";
	answer += "max: " + datas[data.length-1];
    return [question, answer];
}
function findSum(data){
	var sum = 0;
	for(var i=0; i<data.length;i++){
		sum += data[i];
	}
	return sum;
}
function findMean(data,sum){
	var result = sum / (data.length);
	return result;
}
function findMedian(data){
	var middle = Math.floor(data.length/2);
	if(data.length%2 == 0){
		return (data[middle] + data[middle-1])/2;
	}else{
		return data[middle];
	}
}
function findRange(data){
	return (data[data.length-1] - data[0]);
}
function findSD(data, mean){
	var sum = 0;
	for(var i=0; i<data.length;i++){
		sum+= Math.pow((data[i] - mean),2);
	}
	var SD = Math.sqrt((sum/(data.length-1)));
	return SD;
}
