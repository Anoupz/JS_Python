/**
 * Given a string s, find the length of the longest substring
 without repeating characters.
 */
function lengthOfLongestSubstring(s) {
  let charcSet = new Set()
  let left = 0
  let maxSize = 0

  if (s.length === 0) return 0
  if (s.length === 1) return 1

  for (let i = 0; i < s.length; i++) {
    while (charcSet.has(s[i])) {
      charcSet.delete(s[left]) // remove left charc until we have the duplicate
      left++
    }
    charcSet.add(s[i]) // add right charc to the set
    maxSize = Math.max(maxSize, i - left + 1)
  }
  return maxSize
}

console.log(lengthOfLongestSubstring('abcabcbb'))
