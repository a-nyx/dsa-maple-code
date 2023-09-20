const subsets = (nums) => {
  const sets = [[]];

  for (let i = 0; i < nums.length; i++) {
    let current_length = sets.length;
    let next_element = nums[i];

    for (let k = 0; k < current_length; k++) {
      sets.push([...sets[k], next_element]);
    }
  }

  return sets;
};

// Time complexity: O(n.2^n)
// Space complexity: O(n.2^n)
