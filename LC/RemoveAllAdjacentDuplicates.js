function removeDuplicates(s) {
  // your code will replace this placeholder return statement
  const stack = new Map()
  for (let char of s) {
    if (stack.has(char)) {
      const currentCount = stack.get(char)
      if (currentCount + 1 === 2) {
        stack.delete(char)
      }
    } else {
      stack.set(char, 1)
    }
  }
  return Array.from(stack.keys()).join('')
}

console.log(removeDuplicates('sadyydassa'))
