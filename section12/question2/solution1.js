const lengthOfLIS = (nums) => {
  if (!nums.length) return 0;

  let longest = 1;
  const helper_array = [1];

  for (let i = 1; i < nums.length; i++) {
    let current_longest = 1;

    for (let k = 0; k < i; k++) {
      if (nums[k] < nums[i] && helper_array[k] + 1 > current_longest) {
        current_longest = helper_array[k] + 1;
      }
    }

    if (current_longest > longest) longest = current_longest;
    helper_array.push(current_longest);
  }

  return longest;
};

// Time complexity: O(n^2)
// Space complexity: O(n)
