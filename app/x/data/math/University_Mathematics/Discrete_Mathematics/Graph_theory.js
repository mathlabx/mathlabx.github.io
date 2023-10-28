/*
Graph Theory

Inputs:
- graph_properties (boolean): Determines if questions related to graph properties should be included.
- graph_algorithms (boolean): Determines if questions related to graph algorithms should be included.

Outputs:
- Array: An array containing the question and answer generated based on the provided inputs.

Description:
This function generates questions related to the properties of graphs and various graph algorithms. It covers topics such as connectivity, paths, cycles, spanning trees, and various graph traversal and search algorithms. Questions may also involve understanding graph representations and their applications in different fields.

Example Usage:
const result = GraphTheory(true, true);
console.log(result); // Output: ['Explain what a spanning tree is...', 'A spanning tree of a graph G is...']
*/

$X.math.University_Mathematics.Discrete_Mathematics.GraphTheory = function (graph_properties, graph_algorithms) {
    // Your code goes here
    if(graph_properties){
        const properties = ["vertices", "edges", "weight", "degree", "path", "cycle", "connectedness", "planarity", "bipartiteness"];
	const randProp = Math.floor(Math.random() * properties.length);
	var question;
	var answer;
	if(randProp == 0){
		question = "What property does the following definitation describe: 'The points where edges meet in a graph'";
		answer = properties[randProp];
	}else if(randProp == 1){
		question = "What property does the following definitation describe: 'The connections between vertices'";
		answer = properties[randProp];
	}else if(randProp == 2){
		question = "What property does the following definitation describe: 'the cost or distance between two vertices'";
		answer = properties[randProp];
	}else if(randProp == 3){
		question = "What property does the following definitation describe: 'the number of edges that connect to it'";
		answer = properties[randProp];
	}else if(randProp == 4){
		question = "What property does the following definitation describe: 'a sequence of vertices that are connected by edges'";
		answer = properties[randProp];
	}else if(randProp == 5){
		question = "What property does the following definitation describe: 'a path that starts and ends at the same vertex'";
		answer = properties[randProp];
	}else if(randProp == 6){
		question = "What property of the graph does the following definitation describe: 'there is a path between any two vertices'";
		answer = properties[randProp];
	}else if(randProp == 7){
		question = "What property of the graph does the following definitation describe: 'it can be drawn on a plane without any edges crossing each other'";
		answer = properties[randProp];
	}else if(randProp == 8){
		question = "What property of the graph does the following definitation describe: 'its vertices can be divided into two disjoint sets such that no two vertices in the same set are connected by an edge'";
		answer = properties[randProp];
    	}
        // Return the question and answer in an array
        return [question, answer];
    }else if(graph_algorithms){
	var question;
	var answer;
	const algorithms = ["Bellman-Ford Algorithm", "Borůvka’s algorithm", "Ford-Fulkerson Algorithm", "Edmonds–Karp algorithm"];
	const randAlgor = Math.floor(Math.random() * algorithms.length);
	if(randAlgor == 0){
		question = "Which algorithms is use to determines the shortest path between a given source vertex and every other vertex in a graph?";
		answer = algorithms[randAlgor];
	}else if(randAlgor == 1){
		question = "Which algorithms is use to find the minimum spanning tree for a graph with distinct edge weights (none of the edges have the same value)?";
		answer = algorithms[randAlgor];
	}else if(randAlgor == 2){
		question = "Which algorithms is use to solve the maximum flow problem in a flow network?";
		answer = algorithms[randAlgor];
	}else if(randAlgor == 3){
		question = "Which algorithms is an implementation of the Ford-Fulkerson method that uses BFS for finding augmenting paths?";
		answer = algorithms[randAlgor];
	}
        // Return the question and answer in an array
        return [question, answer];
    }
}
