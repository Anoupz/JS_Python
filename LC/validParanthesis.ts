const bracket_dict = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
])
function isValid(s: string): boolean {
  let stack = []
  for (let c of s) {
    if (bracket_dict.has(c)) {
      stack.push(c)
    } else if (stack.length === 0 || bracket_dict.get(stack.pop()) !== c) {
      return false
    }
  }
  return stack.length === 0
}

console.log(isValid('()[]{}'))
