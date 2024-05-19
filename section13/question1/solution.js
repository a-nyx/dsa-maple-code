const rangeSumBST = (root, low, high) => {
  if (!root) return 0;

  if (root.val < low) return rangeSumBST(root.right, low, high);
  if (root.val > high) return rangeSumBST(root.left, low, high);

  return (
    root.val +
    rangeSumBST(root.right, low, high) +
    rangeSumBST(root.left, low, high)
  );
};

// Time complexity: O(n), where n is number of nodes
// Space complexity: O(d), where is max depth

// if it is not search tree
const rangeSumBT = (root, low, high) => {
  if (!root) return 0;

  let sum = 0;

  if (root.val >= low && root.val <= high) sum += root.val;
  sum += rangeSumBST(root.left, low, high);
  sum += rangeSumBST(root.right, low, high);

  return sum;
};
