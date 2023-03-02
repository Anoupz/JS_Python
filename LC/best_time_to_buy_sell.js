/**
 * Best time to buy and sell stocks
 */

function max_profit(prices) {
  let min = prices[0]
  let max = 0

  for (let value of prices) {
    min = Math.min(min, value)
    max = Math.max(max, value - min)
  }

  return max
}

console.log(max_profit([7, 1, 5, 3, 6, 4]))
