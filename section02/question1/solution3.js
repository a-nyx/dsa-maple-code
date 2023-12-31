const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    let complement = target - number;
    let complementIndex = map.get(complement);

    if (complementIndex !== undefined) {
      return [i, complementIndex];
    }

    map.set(number, i);
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)
