const maxDepth = (root) => {
  if (!root) return 0;

  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);

  return 1 + Math.max(leftMax, rightMax);
};

// Time complexity: O(n) where n is number of nodes
// Space complexity: O(d) where d is max depth, equals to O(logn)
