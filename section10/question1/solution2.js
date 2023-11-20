const neighbourSets = {};

const fillNeighbours = (n, edges) => {
  for (let i = 0; i < n; i++) neighbourSets[i] = new Set();

  for (let edge of edges) {
    neighbourSets[edge[0]].add(edge[1]);
    neighbourSets[edge[1]].add(edge[0]);
  }
};

const bfs = (from, to) => {
  const visited = new Set();
  const queue = [from];

  while (queue.length !== 0) {
    let current = queue.pop(); // shift instead?
    visited.add(current);

    if (current === to) return true;

    for (let neighbour of neighbourSets[current]) {
      if (!visited.has(neighbour)) queue.push(neighbour);
    }
  }

  return false;
};

const validPath = (n, edges, source, destination) => {
  fillNeighbours(n, edges);
  return bfs(source, destination);
};

// Time complexity: O(v)
// Space complexity: O(v + e), where v is number of vertices and e is number of edges
