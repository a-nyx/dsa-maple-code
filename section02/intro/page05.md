# Memory/Space Complexity

- How much additional space does the algoritm use?
- Other than the given data, what other structures do you use and what are their sizes compared to the input size?
- Given input & expected output data ignored
- We are supposed to not change the input data
- Objects, sets, maps, arrays, ...
  <br/>
- Most of the time: O(1) or O(n) :snake:
- Brute Force solutions => O(1)
- Cool and accepted solutions => O(n)

### O(n) example

```js
const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};
```

### O(1) example

```js
const containsDuplicate = (nums) => {
  for (let left = 0; left < nums.length; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[left] === nums[right]) {
        return true;
      }
    }
  }
  return false;
};
```
