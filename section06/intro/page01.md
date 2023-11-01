# Recursion

"Recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem." (Wikipedia)

- defining a problem in terms of its simpler version
- defining F(n) in terms of F(n-1)
- "Any recursive algorithm can be expressed as an iterative algorithm" (see. `factorial.js`)

## How to avoid duplicate calculations

- memoization: top-down. storing the results of previous calculations
- dynamic programming: bottom-up. solving the subproblems first.
  (see. `fibonacci.js`)

## Time & Space Complexities

- Consider tree depth & breadth
- Space consumption of recursion: the memory cost that is incurred directly by the recursion to keep track of recursive function calls. In general, `O(recursion depth)`
