const validPath = (n, edges, source, destination) => {
  const connections = {}; // adjacency list

  for (let c of edges) {
    if (!(c[0] in connections)) connections[c[0]] = new Set();
    if (!(c[1] in connections)) connections[c[1]] = new Set();
    connections[c[0]].add(c[1]);
    connections[c[1]].add(c[0]);
  }
  // console.log({ connections });

  const visited = new Array(n).fill(0);

  const dfs = (from, to) => {
    if (from === to) return true;
    if (visited[from] === 1) return false;

    visited[from] = 1;
    for (let neighbour of connections[from]) {
      if (dfs(neighbour, to)) return true;
    }
    return false;
  };

  return dfs(source, destination);
};

// validPath(
//   3,
//   [
//     [0, 1],
//     [1, 2],
//     [2, 0],
//   ],
//   0,
//   2
// );

// Time complexity: O(n)
// Space complexity: O(n)
