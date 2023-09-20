// Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

const fibonacci_recursive = (n) => {
  if (n < 2) return n;
  return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
};

// Time: O(2^n)
// Space: O(n)

const fibonacci_memo = (n) => {
  const memo = {};

  const find_fibo = (n) => {
    if (n in memo) return memo[n];
    if (n < 2) return n;
    memo[n] = find_fibo(n - 1) + find_fibo(n - 2);
    return memo[n];
  };

  return find_fibo(n);
};

// Time: O(n)
// Space: O(n)

const fibonacci_memo2 = (n) => {
  const fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
};

// Time: O(n)
// Space: O(n)

const fibonacci = (n) => {
  if (n < 2) return n;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
};

// Time: O(n)
// Space: O(1)

console.log(fibonacci_recursive(8));
console.log(fibonacci_recursive(10));
console.log(fibonacci_recursive(14));

console.log(fibonacci_memo(8));
console.log(fibonacci_memo(10));
console.log(fibonacci_memo(14));

console.log(fibonacci_memo2(8));
console.log(fibonacci_memo2(10));
console.log(fibonacci_memo2(14));

console.log(fibonacci(8));
console.log(fibonacci(10));
console.log(fibonacci(14));
