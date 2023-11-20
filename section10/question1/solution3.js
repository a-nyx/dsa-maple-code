const validPath = (n, edges, source, destination) => {
  let parents = [];

  for (let i = 0; i < n; i++) parents[i] = i;

  const findParent = (i) => {
    if (parents[i] == i) return i;
    parents[i] = findParent(parents[i]);
    return parents[i];
  };

  for (let [a, b] of edges) {
    const child = findParent(a);
    const parent = findParent(b);
    parents[child] = parent;
  }

  return findParent(source) == findParent(destination);
};

// Time complexity: O(e)?
// Space complexity: O(v)
