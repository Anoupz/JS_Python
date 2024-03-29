/**
 * You are given an array of unique strings words where words[i] is six letters long. One word of words was chosen as a secret word.
 * https://leetcode.com/problems/guess-the-word/description/
 *
 */

var findSecretWord = function (wordlist, master) {
  let index = pickRandomIndex(wordlist.length)
  let guessed = wordlist.splice(index, 1)[0]
  let matches = master.guess(guessed)

  while (matches !== 6) {
    for (let i = wordlist.length - 1; i >= 0; i--) {
      // Remove all the words that match too much or too less then the count returned
      if (getMatchCount(wordlist[i], guessed) !== matches) {
        wordlist.splice(i, 1)
      }
    }

    index = pickRandomIndex(wordlist.length)
    guessed = wordlist.splice(index, 1)[0]
    matches = master.guess(guessed)
  }
}

function pickRandomIndex(len) {
  return Math.trunc(Math.random() * len)
}

function getMatchCount(word, guess) {
  let matches = 0
  for (let i = 0; i < word.length; i++) {
    // Count position and value matches
    if (word[i] === guess[i]) {
      matches++
    }
  }
  return matches
}
