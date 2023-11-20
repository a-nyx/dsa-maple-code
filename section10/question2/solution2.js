const findCircleNum = (isConnected) => {
  const visited = new Set();
  let provinces = 0;

  const bfs = (vIndex) => {
    const queue = [vIndex];

    while (queue.length) {
      let current = queue.pop();
      visited.add(current);

      for (let k = 0; k < isConnected.length; k++) {
        if (isConnected[current][k] == 1 && !visited.has(k)) queue.push(k);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (visited.has(i)) continue;
    provinces++;
    bfs(i);
  }

  return provinces;
};

// Time complexity: O(n)
// Space complexity: O(n)
