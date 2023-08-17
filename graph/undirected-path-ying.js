const undirectedPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const graph = constructGraph(edges);
  
  const traverseGraph = (graph, nodeA, nodeB, visited) => {
    if (graph[nodeA].includes(nodeB)) return true;
    if (visited.has(nodeA)) return false;
    visited.add(nodeA);
    console.log('visited', visited);

    for (let neighbor of graph[nodeA]){
      if (traverseGraph(graph, neighbor, nodeB, visited)) return true;
    }
    return false
  
  }
  
  return traverseGraph(graph, nodeA, nodeB, visited);
  
  
};



const constructGraph = (edges) => {
  const graph = {};
  
  for (let path of edges) {
    if (!graph[path[0]]) graph[path[0]] = [path[1]];
    else graph[path[0]].push(path[1]);
    
    if (!graph[path[1]]) graph[path[1]] = [path[0]];
    else graph[path[1]].push(path[0]);
  }
  
  return graph;
}


const edges = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];

console.log(constructGraph(edges));
console.log(undirectedPath(edges, 'r', 't')); // => true