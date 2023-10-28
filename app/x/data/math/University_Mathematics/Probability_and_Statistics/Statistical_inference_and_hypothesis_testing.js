/*
Statistical inference and hypothesis testing

Inputs:
- C_sampling (boolean): Determines if questions related to sampling methods and techniques should be included.
- C_confidence_intervals (boolean): Determines if questions related to constructing confidence intervals should be included.
- C_hypothesis_testing (boolean): Determines if questions related to hypothesis testing should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to statistical inference and hypothesis testing. It covers topics such as various sampling methods, constructing confidence intervals, and conducting hypothesis tests for different types of statistical analyses. The questions may involve calculating p-values, conducting t-tests, and interpreting confidence intervals.

Example Usage:
const result = StatisticalInferenceAndHypothesisTesting(true, true, false);
console.log(result); // Output: ['Construct a 95% confidence interval for the mean weight of the population given the sample mean... ', 'The 95% confidence interval for the population mean weight is ... ']
*/

$X.math.University_Mathematics.Probability_and_Statistics.StatisticalInferenceAndHypothesisTesting = function (C_sampling, C_confidence_intervals, C_hypothesis_testing) {
    // Your code goes here
    if(C_sampling){
        var question;
		var answer;
		const methods = ["simple random sample", "systematic sampling", "stratified sampling", "cluster sampling", "convenience sample", "voluntary response sample", "judgement sampling", "snowball sampling"];
		const randMeth = Math.floor(Math.random()* methods.length);
		if(randMeth == 0){
			question = "Which type of sampling method ensures that every member of the population has an equal chance of being selected?";
			answer = methods[randMeth];
		}else if(randMeth == 1){
			question = "Which sampling method choses an individual at regular intervals?";
			answer = methods[randMeth];
		}else if(randMeth == 2){
			question = "Which sampling method divides the population into subpopulations(strata) that may differ in important ways and takes random sample in each group?";
			answer = methods[randMeth];
		}else if(randMeth == 3){
			question = "Which sampling method divides the population into subgroups where each subgroup have similar characteristics to the whole sample and takes random sample in each group?";
			answer = methods[randMeth];
		}else if(randMeth == 4){
			question = "Which bias sampling method takes individuals who happen to be most accessible to the researcher?";
			answer = methods[randMeth];
		}else if(randMeth == 5){
			question = "Which bias sampling method uses response from people that volunteer to respond?";
			answer = methods[randMeth];
		}else if(randMeth == 6){
			question = "Which bias sampling method involves the researcher using their expertise to select a sample that is most useful to the purposes of the research?";
			answer = methods[randMeth];
		}else if(randMeth == 7){
			question = "Which bias sampling method uses recruit participants to via other participants?";
			answer = methods[randMeth];
		}
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_confidence_intervals){
        // Return the question and answer in an array
        return [question, answer];
    }else if(C_hypothesis_testing){
        // Return the question and answer in an array
        return [question, answer];
    }
}
