/**
 * This is bucket sort algorithm and the intention is to have it in linear time
 * From the map we can sort the values and return the top K values, but that would be O(nLogn)
 * @param nums
 * @param k
 * @returns
 */
function topKFrequent(nums, k) {
  const count_dict = new Map()
  const bucket = []
  const result = []
  for (let n of nums) {
    if (count_dict.has(n)) {
      count_dict.set(n, count_dict.get(n) + 1)
    } else {
      count_dict.set(n, 1)
    }
  }

  /**
   * Store the values from dict interms of count occurance.
   */

  for (let [num, freq] of count_dict) {
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(num)
    } else {
      bucket[freq] = bucket[freq].add(num)
    }
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i])
    }
    // We need this to ensure if k is not able to find any element
    /**
     * Use case nums = [1, 2] and k =2, There is no 2 times occurance of an element, but do we return
     */
    if (result.length === k) {
      return result
    }
  }

  return result
}
