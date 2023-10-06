const searchRange = (nums, target) => {
  const findLeftMost = (element) => {
    let left = 0;
    let right = nums.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < element) left = mid + 1;
      else right = mid - 1;
    }

    return left;
  };

  const findRightMost = (element) => {
    let left = -1;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > element) right = mid - 1;
      else left = mid + 1;
    }

    return right;
  };

  let start = findLeftMost(target);
  if (nums[start] !== target) return [-1, -1];

  let end = findRightMost(target);
  return [start, end];
};

// Time complexity: O(logn)
// Space complexity: O(1)
