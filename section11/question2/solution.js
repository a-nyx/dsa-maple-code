const maxProfit = (prices) => {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const dailyChange = prices[i] - prices[i - 1];
    if (dailyChange > 0) {
      maxProfit += dailyChange;
    }
  }

  return maxProfit;
};

// Time complexity: O(n)
// Space complexity: O(1)
