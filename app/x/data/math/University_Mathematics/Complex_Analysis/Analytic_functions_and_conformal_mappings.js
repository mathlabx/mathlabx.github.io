/*
Analytic functions and conformal mappings

Inputs:
- A_functions (boolean): Determines if questions related to properties of analytic functions should be included.
- A_mappings (boolean): Determines if questions related to conformal mappings should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to analytic functions and conformal mappings. It covers topics such as the properties of analytic functions and the behavior of conformal mappings. The questions may involve understanding the concepts of complex differentiability, mapping properties, and the preservation of angles.

Example Usage:
const result = AnalyticFunctionsAndMappings(true, true);
console.log(result); // Output: ['Explain the concept of complex differentiability...', 'The concept of complex differentiability refers to...']
*/

$X.math.University_Mathematics.Complex_Analysis.AnalyticFunctionsAndMappings = function(A_functions, A_mappings) {
    // Your code goes here
    if(A_functions){
        const properties = ["The limit of a ___________ of analytic functions is also an analytic function",
							"If f(z) and g(z) are analytic functions on U, then their ______________ are also analytic",
							"If f(z) and g(z) are the two analytic functions and f(z) is in the domain of g for all z, then their _________ is also an analytic function.",
							"The function f(z) = 1/z (z≠0) is ________", 
							"Bounded entire functions are _________ functions",
							"Every __________ polynomial p(z) has a root. That is, there exists some z0 such that p(z0) = 0.",
							"If f(z) is an analytic function, which is defined on U, then its modulus of the function |f(z)| ________ attains its maximum in U.",
							"The zeros of an analytic function, say f(z) are the ____________ unless f(z) is identically zero",
							"If F(z) is an analytic function and if C is a curve connecting two points z0 and z1 in the domain of f(z), then _____________",
							"If f(z) is an analytic function defined on a disk D, then there is an analytic function F(z) defined on D such that __________, called a primitive of f(z), and, as a consequence, ∫C f(z) dz =0; for any closed curve C in D.",
							"If f(z) is an analytic function and if z0 is any point in the domain U of f(z), then the function, ____________ is analytic on U as well.",
							"If f(z) is an analytic function on a disk D, z0 is a point in the interior of D, C is a closed curve not passing through z0, then W = ___________ = (1/2π i)∫C [f(z)]/[z – z0]dz, where W(C; z0) is the winding number of C around z"];
		const blank = ["uniformly convergent sequence",
						"sum f(z) + g(z) and product f(z).g(z)",
						"composite g(f(z))",
						"analytic", 
						"constant",
						"nonconstant",
						"cannot",
						"isolated points",
						"∫C F’(z) = F(z1) – F(z0)",
						"F′(z) = f(z)",
						"[f(z)-f(z0)]/[z – z0]",
						"(C, z0)f(z0)"];
		const randProp = Math.floor(Math.random() * properties.length);
		var question = "Fill in the blank for the following sentence about the properties of analytic functions: \n" + properties[randProp];
		var answer = blank[randProp];
        return [question, answer];
    }else if(A_mapping){
    	const properties = ["What does it mean for a function f(z) to be conformal at z0?",
			"If f(z) and g(z) are analytic functions on U, then their ______________ are also analytic",
			"If f(z) and g(z) are the two analytic functions and f(z) is in the domain of g for all z, then their _________ is also an analytic function.",
			"The function f(z) = 1/z (z≠0) is ________", 
			"Bounded entire functions are _________ functions",
			"Every __________ polynomial p(z) has a root. That is, there exists some z0 such that p(z0) = 0.",
			"If f(z) is an analytic function, which is defined on U, then its modulus of the function |f(z)| ________ attains its maximum in U.",
			"The zeros of an analytic function, say f(z) are the ____________ unless f(z) is identically zero",
			"If F(z) is an analytic function and if C is a curve connecting two points z0 and z1 in the domain of f(z), then _____________",
			"If f(z) is an analytic function defined on a disk D, then there is an analytic function F(z) defined on D such that __________, called a primitive of f(z), and, as a consequence, ∫C f(z) dz =0; for any closed curve C in D.",
			"If f(z) is an analytic function and if z0 is any point in the domain U of f(z), then the function, ____________ is analytic on U as well.",
			"If f(z) is an analytic function on a disk D, z0 is a point in the interior of D, C is a closed curve not passing through z0, then W = ___________ = (1/2π i)∫C [f(z)]/[z – z0]dz, where W(C; z0) is the winding number of C around z"];
	const blank = ["The function  f(z) is conformal at z0 if there is an angle ϕ and a scale a>0 such that for any smooth curve γ(t) through z0 the map f rotates the tangent vector at z0 by ϕ and scales it by a. That is, for any γ, the tangent vector (f∘γ)′(t0) is found by rotating γ′(t0) by ϕ and scaling it by a.",
			"There is a universal constant r0 > 0 such that whenever f is analytic on D with f(0) = 0, and whenever M > 0 is such that A(M) < πM2, then f(r0D) ⊂ D(0, M).",
			"composite g(f(z))",
			"analytic", 
			"constant",
			"nonconstant",
			"cannot",
			"isolated points",
			"∫C F’(z) = F(z1) – F(z0)",
			"F′(z) = f(z)",
			"[f(z)-f(z0)]/[z – z0]",
			"(C, z0)f(z0)"];
	const randProp = Math.floor(Math.random() * properties.length);
	var question = "Fill in the blank for the following sentence about the properties of analytic functions: \n" + properties[randProp];
	var answer = blank[randProp];
        // Return the question and answer in an array
        return [question, answer];
    }
}
