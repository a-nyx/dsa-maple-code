const maxProfit = (prices) => {
  if (prices.length < 2) return 0;

  // Left side
  const profits_left = [0];
  let min_left = prices[0];
  let max_profit_left = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - min_left;
    if (profit > max_profit_left) max_profit_left = profit;
    if (prices[i] < min_left) min_left = prices[i];
    profits_left.push(max_profit_left);
  }

  // right side
  const profits_right = [0];
  let max_right = prices[prices.length - 1];
  let max_profit_right = 0;

  for (let i = prices.length - 2; i >= 0; i--) {
    const profit = max_right - prices[i];
    if (profit > max_profit_right) max_profit_right = profit;
    if (prices[i] > max_right) max_right = prices[i];
    profits_right.push(max_profit_right);
  }

  // compare checkpoints
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = profits_left[i] + profits_right[prices.length - 1 - i];
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
};

// Time complexity: O(n)
// Space complexity: O(n)
