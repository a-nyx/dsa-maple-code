const levelOrder = (root) => {
  if (!root) return [];

  const levels = [[root]];

  for (let levelIndex = 0; levelIndex < levels.length; levelIndex++) {
    const level = levels[levelIndex];
    const nextlevel = [];

    for (let i = 0; i < level.length; i++) {
      if (level[i].left) nextlevel.push(level[i].left);
      if (level[i].right) nextlevel.push(level[i].right);
    }

    if (nextlevel.length > 0) levels.push(nextlevel);
  }

  for (let k = 0; k < levels.length; k++) {
    for (let t = 0; t < levels[k].length; t++) {
      levels[k][t] = levels[k][t].val;
    }
  }

  return levels;
};

// Time complexity: O(n)
// Space complexity: O(1)
