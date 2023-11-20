const neighbourSets = {};

const fillNeighbours = (n, edges) => {
  for (let i = 0; i < n; i++) neighbourSets[i] = new Set();

  for (let edge of edges) {
    neighbourSets[edge[0]].add(edge[1]);
    neighbourSets[edge[1]].add(edge[0]);
  }
};

const dfs = (from, to, visited = new Set()) => {
  if (from === to) return true;
  if (visited.has(from)) return false;
  visited.add(from);

  for (let neighbour of neighbourSets[from]) {
    if (dfs(neighbour, to, visited)) return true;
  }

  return false;
};

const validPath = (n, edges, source, destination) => {
  fillNeighbours(n, edges);
  return dfs(source, destination);
};

// Time complexity: O(v)
// Space complexity: O(v + e), where v is number of vertices and e is number of edges
