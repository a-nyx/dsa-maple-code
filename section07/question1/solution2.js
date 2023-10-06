const search = (nums, target, left, right) => {
  left ??= 0;
  right ??= nums.length - 1;

  if (right < left) return -1;

  let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;

  if (nums[mid] > target) {
    return search(nums, target, left, right - 1);
  } else {
    return search(nums, target, left + 1, right);
  }
};

// Time complexity: O(logn)
// Space complexity: O(logn)
