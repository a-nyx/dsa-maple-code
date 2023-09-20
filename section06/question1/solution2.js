const reverseString = (s) => {
  const helper = (left, right) => {
    if (right <= left) return;
    [s[left], s[right]] = [s[right], s[left]];
    helper(left + 1, right - 1);
  };

  helper(0, s.length - 1);
};

// Time complexity: O(n)
// Space complexity: O(n)
