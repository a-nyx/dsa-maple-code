# Asymptotic Bounds & Notations

- Mainly three types:
  - O(n) - Big O: worst case, (lowest) upper bound
  - Ω(n) - Big Omega: best case, (highest) lower bound
  - Θ(n) - Big Theta: average case, tight bound
- And more:
  - o(n) - Small O: Big-O is to little-o as =< is to <
  - ...

## Big O: O(n)

- Think for huge input sizes
- Find the lowest: O(n) <= O(n^2)
- Simplify all
  - Drop the constants and the coefficients
  - Ignore the lower order terms
- f(n) = 3n^2 + 10n + 255 => O(n^2)

Tip: Look for the most repetitive line for time complexity
