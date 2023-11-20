const findCircleNum = (isConnected) => {
  const visited = new Set();
  let provinces = 0;

  const dfs = (vIndex) => {
    visited.add(vIndex);

    for (let k = 0; k < isConnected.length; k++) {
      if (isConnected[vIndex][k] == 1 && !visited.has(k)) dfs(k);
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) continue;
    provinces++;
    dfs(i);
  }

  return provinces;
};

// Time complexity: O(n)
// Space complexity: O(n)
