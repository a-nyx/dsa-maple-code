// factorial: 8! = 8.7.6.5.4.3.2.1 = 8.7! = 8.7.6!

const factorial = (n) => {
  if (n === 1) return 1; // base case
  return n * factorial(n - 1); // recursive call
};

// Time: O(n)
// Space: O(n)

const factorial_iterative = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Time: O(n)
// Space: O(1)

console.log(factorial(5));
console.log(factorial_iterative(5));
