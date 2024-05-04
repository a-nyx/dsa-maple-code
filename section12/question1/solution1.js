const isSubsequence = (s, t) => {
  if (!s.length) return true;

  let si = 0;

  for (let ti = 0; ti < t.length; ti++) {
    if (s[si] === t[ti]) si++;
    if (si === s.length) return true;
  }

  return false;
};

// Time complexity: O(n), where n is the length of t
// Space complexity: O(1)
