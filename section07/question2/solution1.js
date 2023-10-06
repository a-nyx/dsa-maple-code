const searchRange = (nums, target) => {
  // return leftmost occurence or insertion
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

  let start = findLeftMost(target);
  if (nums[start] !== target) return [-1, -1];

  let end = findLeftMost(target + 1) - 1;
  return [start, end];
};

// Time complexity: O(logn)
// Space complexity: O(1)
