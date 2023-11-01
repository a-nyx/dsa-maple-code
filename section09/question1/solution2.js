const maxDepth = (root) => {
  if (!root) return 0;

  const bfs = [
    {
      node: root,
      level: 1,
    },
  ]; // Discuss: why (not) queue?
  let maxLevel = 1;

  for (let i = 0; i < bfs.length; i++) {
    let currentNode = bfs[i].node;
    let currentLevel = bfs[i].level;
    if (currentLevel > maxLevel) {
      maxLevel = currentLevel;
    }

    if (currentNode.left) {
      bfs.push({
        node: currentNode.left,
        level: currentLevel + 1,
      });
    }

    if (currentNode.right) {
      bfs.push({
        node: currentNode.right,
        level: currentLevel + 1,
      });
    }
  }

  return maxLevel;
};

// Time complexity: O(n) where n is number of nodes
// Space complexity: O(n)
