/**
  * You are given a string s and an integer k. 
  * You can choose any character of the string and change it to any 
  * other uppercase English character. You can perform 
  * this operation at most k times.

Return the length of the longest substring containing the same 
letter you can get after performing the above operations.
  */

function characterReplacement(s, k) {
  const frequencies = {} //hashmap to track the frequency of letters
  let highestFrequency = 0 //variable to track the most frequent letter we've seen.
  let longest = 0
  // start a window with a left and right side pointer
  let left = 0
  let right = 0

  while (right < s.length) {
    const rightCharacter = s[right]
    frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1
    highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter])

    while (right - left + 1 - highestFrequency > k) {
      const leftCharacter = s[left]
      frequencies[leftCharacter]--
      left++
    }

    longest = Math.max(longest, right - left + 1)

    // Finally, increment the right pointer to shift the window to the right
    right++
  }

  // Return the longest valid window we've seen
  return longest
}

console.log(characterReplacement('ABAB', 2))
