const isSymmetric = (root) => {
  if (!root) return true;

  const stack = [{ left: root.left, right: root.right }];

  while (stack.length > 0) {
    const currentPair = stack.pop();
    const left = currentPair.left;
    const right = currentPair.right;

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    stack.push({
      left: left.left,
      right: right.right,
    });

    stack.push({
      left: left.right,
      right: right.left,
    });
  }

  return true;
};

// Time complexity: O(n) where n is number of nodes
// Space complexity: O(2^d), max number of pairs at a level
