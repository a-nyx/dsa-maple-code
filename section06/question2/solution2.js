const subsets = (nums) => {
  if (nums.length === 0) return [[]];

  let last_element = nums.pop();
  let sets = subsets(nums);
  let length_without_last = sets.length;

  for (let i = 0; i < length_without_last; i++) {
    sets.push([...sets[i], last_element]);
  }

  return sets;
};

// Time complexity: O(n.2^n)
// Space complexity: O(n.2^n)
