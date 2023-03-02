function brokenCalc(startValue, target) {
  let step = 0

  while (target > startValue) {
    target = target % 2 === 0 ? target / 2 : target + 1
    step++
  }

  return step + startValue - target
}

/***
 * Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
 */
