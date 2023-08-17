const minimumIsland = (grid) => {
  let smallest = Infinity;
  const rows = grid.length;
  const columns = grid[0].length;
  const visited = new Set();
  
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const size = exploreSize(grid, row, column, visited);
      if (size > 0 && size < smallest) {
        smallest = size;
      }
    };
  }
  
  return smallest;
};
  
const exploreSize = (grid, r, c, visited) => {
  if (grid[r][c] === 'W') return 0;
  
  const index = r + ',' + c;
  if (visited.has(index)) return 0;
  visited.add(index);
  
  const neighbors = [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]
  let size = 1;
  for (let neighbor of neighbors) {
    const [rowN, columnN] = neighbor;
    if (rowN >= 0 && columnN >= 0 && rowN < grid.length && columnN < grid[0].length) {
      size += exploreSize(grid, rowN, columnN, visited);
    };
  };
  return size;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));  // => 2

module.exports = {
  minimumIsland,
};
