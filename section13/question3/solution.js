const numIslands = (grid) => {
  let islands = 0;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] === "0"
    )
      return;

    grid[r][c] = "0";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        islands++;
        dfs(r, c);
      }
    }
  }

  return islands;
};

// Time complexity: O(mn)
// Space complexity: O(mn)
