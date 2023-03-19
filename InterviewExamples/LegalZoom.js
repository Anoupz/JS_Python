/**
 * Given an array on integers find the range of consecutive months that had the most profit.
 * To find the range of consecutive months that had the most profit,
 * you can use a sliding window approach with a variable to keep track of the maximum profit and
 * another variable to keep track of the starting month of the range with maximum profit.
 */

function maxProfitRange(monthlyProfits) {
  let maxProfit = -Infinity
  let maxProfitStartMonth = 0
  let currentProfit = 0
  let currentStartMonth = 0

  for (let i = 0; i < monthlyProfits.length; i++) {
    currentProfit += monthlyProfits[i]

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
      maxProfitStartMonth = currentStartMonth
    }

    if (currentProfit < 0) {
      currentProfit = 0
      currentStartMonth = i + 1
    }
  }

  return [
    maxProfitStartMonth,
    findMaxProfitEndMonth(monthlyProfits, maxProfitStartMonth),
  ]
}

function findMaxProfitEndMonth(monthlyProfits, startMonth) {
  let endMonth = startMonth
  let maxProfit = 0
  let currentProfit = 0

  for (let i = startMonth; i < monthlyProfits.length; i++) {
    currentProfit += monthlyProfits[i]

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
      endMonth = i
    }
  }

  return endMonth
}

/**
 * The maxProfitRange() function takes an array of monthly profits as its input and returns an array with the starting 
 * and ending month of the range with maximum profit.

The function uses a sliding window approach to iterate through the monthly profits array and keeps track of the 
current profit and the starting month of the current range. If the current profit exceeds the maximum profit seen so far, 
the function updates the maximum profit and the starting month of the range with maximum profit. 
If the current profit becomes negative, the function resets the current profit and the starting month to the next month.

The findMaxProfitEndMonth() function takes the monthly profits array and the starting month of the range with maximum profit and
 returns the ending month of the range with maximum profit. The function iterates through the monthly profits array starting 
 from the starting month and keeps track of the current profit and the ending month of the range. If the current profit exceeds 
 the maximum profit seen so far, the function updates the maximum profit and the ending month of the range.
 */

// const monthlyProfits = [10, -20, 30, -40, 50, -60, 70]
// const [startMonth, endMonth] = maxProfitRange(monthlyProfits)
// console.log(
//   `The range with maximum profit starts in month ${
//     startMonth + 1
//   } and ends in month ${endMonth + 1}.`
// )

const monthlyProfits = [5, -3, 4, 8, 6, -7, 2]
const result = maxProfitRange(monthlyProfits)
console.log(result)
