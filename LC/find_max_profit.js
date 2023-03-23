/**
 * Find max profit in O(n)
 */

function maxProfit(nums) {
  let minProfit = nums[0]
  let maxProfit = 0

  if (nums.length === 0) {
    return 0
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minProfit) {
      minProfit = nums[i]
    } else {
      let profit = nums[i] - minProfit
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // expected output: 5
console.log(maxProfit([7, 6, 4, 3, 1])) // expected output: 0
console.log(maxProfit([1, 2, 3, 4, 5])) // expected output: 4
console.log(maxProfit([1])) // expected output: 0
console.log(maxProfit([])) // expected output: 0
