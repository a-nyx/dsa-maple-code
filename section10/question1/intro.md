# Question #1

[LeetCode 1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)

```js
const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];

const neighbours = {
  0: [1, 2], // use set instead of arrays?
  1: [0],
  2: [0],
  3: [4, 5],
  4: [3, 5],
  5: [3, 4],
};
```
