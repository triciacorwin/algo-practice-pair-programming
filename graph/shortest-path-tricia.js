const shortestPath = (edges, nodeA, nodeB) => {
  // write a function to list all connected edges
  const graph = buildGraph(edges);
  console.log(graph);
  
  // declare variables
  const visited = new Set ();
  const shortest = explore(graph, nodeA, nodeB, visited) === Infinity ? -1 : explore(graph, nodeA, nodeB, visited);
  
  return shortest;
};

// DFS to find the shortest path
const explore = (graph, currNode, targetNode, visited, shortest = Infinity, count = 0) => {
    if (currNode === targetNode) {
    return count; // Return the count as the length of the path
  }
  
  if (visited.has(currNode) || count >= shortest) {
    return Infinity; // No need to explore further along this path
  }

  visited.add(currNode);
  for (let neighbor of graph[currNode]) {
    const newShortest = explore(graph, neighbor, targetNode, visited, shortest, count + 1);
    shortest = Math.min(shortest, newShortest);
  }
  visited.delete(currNode); // Backtrack: remove node from visited set
  
  return shortest;
}

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const edge0 = edge[0];
    const edge1 = edge[1];
    if (!graph[edge0]) graph[edge0] = [];
    if (!graph[edge1]) graph[edge1] = [];
    graph[edge0].push(edge1);
    graph[edge1].push(edge0);
  }
  
  return graph;
}





const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z'));

module.exports = {
  shortestPath,
};
