const maxProfit = (prices) => {
  let maxProfit = 0;
  let minSeen = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minSeen;
    if (profit > maxProfit) maxProfit = profit;
    if (prices[i] < minSeen) minSeen = prices[i];
  }

  return maxProfit;
};

// Time complexity: O(n)
// Space complexity: O(1)
