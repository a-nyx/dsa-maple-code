const place = (arr, el) => {
  // bisect_left: place el in arr by locating binary search tree
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < el) lo = mid + 1;
    else hi = mid;
  }
  arr[lo] = el;
};

const lengthOfLIS = nums => {
  if (!nums.length) return 0;

  const helper_array = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    place(helper_array, nums[i]);
  }

  return helper_array.length;
};

// Time complexity: O(nlogn)
// Space complexity: O(n), even O(1) if overwriting the original array

// More explanation here, the solution 2:
// https://leetcode.com/problems/longest-increasing-subsequence/solutions/1326308/c-python-dp-binary-search-bit-segment-tree-solutions-picture-explain-o-nlogn/
