const compress = (chars) => {
  if (chars.length < 2) return chars.length;

  let char = chars[0];
  let count = 0;
  let update_index = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === char) {
      count++;
      continue;
    }

    chars[update_index] = char;
    update_index++;
    char = chars[i];

    if (count > 1) {
      let countString = count.toString().split("");
      for (let k = 0; k < countString.length; k++) {
        chars[update_index] = countString[k];
        update_index++;
      }
    }

    count = 1;
  }

  return update_index;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
