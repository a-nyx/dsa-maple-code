const isSubsequence = (s, t) => {
  if (!s.length) return true;

  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      return isSubsequence(s.slice(1), t.slice(i + 1));
    }
  }

  return false;
};

// Time complexity: O(m), where m is the length of s
// Space complexity: O(m)
