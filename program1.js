const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (i, j) => {
     
      if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') {
          return;
      }
     
      grid[i][j] = 'W';

      // Explore the neighboring cells (up, down, left, right)
      dfs(i + 1, j); // down
      dfs(i - 1, j); // up
      dfs(i, j + 1); // right
      dfs(i, j - 1); // left
  };


  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          // If we find an unvisited landmass
          if (grid[i][j] === 'L') {
              numIslands++;
              // Start a DFS to mark the entire island
              dfs(i, j);
          }
      }
  }

  return numIslands;

};

module.exports = getTotalIsles;