const maxProfit = (k, prices) => {
  const numDays = prices.length;
  if (numDays < 2 || k <= 0) return 0;
  // TODO: apply question2 solution if 2*k > numDays

  // [numDays][k][has stock or not]
  const profits = Array.from(Array(numDays), (_) =>
    Array.from(Array(k + 1), (_) => Array(2).fill(Number.MIN_VALUE))
  );

  for (let day = 0; day < numDays; day++) {
    for (let buy = 0; buy <= k; buy++) {
      if (day === 0 || buy === 0) {
        profits[day][buy][0] = 0;
        profits[day][buy][1] = -prices[day];
        continue;
      }

      profits[day][buy][0] = Math.max(
        profits[day - 1][buy][0],
        profits[day - 1][buy][1] + prices[day]
      );

      profits[day][buy][1] = Math.max(
        profits[day - 1][buy][1],
        profits[day - 1][buy - 1][0] - prices[day]
      );
    }
  }

  return profits[numDays - 1][k][0];
};

// Time complexity: O(nk)
// Space complexity: O(nk)
