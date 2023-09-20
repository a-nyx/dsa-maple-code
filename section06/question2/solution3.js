const subsets = (nums) => {
  const num_of_subsets = Math.pow(2, nums.length);
  const sets = [];

  for (let i = 0; i < num_of_subsets; i++) {
    const binary = i.toString(2);
    const set = [];
    for (let k = 0; k < nums.length; k++) {
      if (binary[binary.length - 1 - k] === "1") set.push(nums[k]);
    }
    sets.push(set);
  }

  return sets;
};

// Time complexity: O(n.2^n)
// Space complexity: O(n.2^n)
