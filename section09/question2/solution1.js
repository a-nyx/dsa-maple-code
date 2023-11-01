const isMirror = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
};

const isSymmetric = (root) => {
  if (!root) return true;
  return isMirror(root.left, root.right);
};

// Time complexity: O(n) where n is number of nodes
// Space complexity: O(d) where d is max depth
