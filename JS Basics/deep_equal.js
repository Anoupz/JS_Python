function deepEquals(valueOne, valueTwo) {
  if (valueOne === valueTwo) {
    return true
  }

  /**
   * Next up we'll add the check if the two arguments are actually of the
   * type object and also are not null values.
   * We want to avoid type conversion so we'll use != instead of !==:
   */
  if (
    valueOne == null ||
    typeof valueOne != 'object' ||
    valueTwo == null ||
    typeof valueTwo != 'object'
  ) {
    return false
  }

  let keysOne = Object.keys(valueOne)
  let keysTwo = Object.keys(valueTwo)

  if (keysOne.length != keysTwo.length) {
    return false
  }

  /**
   * Next up we'll loop over the keys of the keysA array with an for of loop.
   * Use for of for arrays and for in for objects.
   * Inside this loop, we'll check if every key exists inside the keysB array.
   * Next to that, we'll compare the values of every key by
   * passing them back into our compareObjects function,
   * making our function recursive (calling itself).
   */
  for (let key of keysOne) {
    if (!keysTwo.includes(key) || !deepEquals(valueOne[key], valueTwo[key])) {
      return false
    }
  }
  return true
}

console.log(deepEquals(1, 1))
console.log(deepEquals('a', 'a'))
console.log('null', deepEquals(null, null))
console.log('NAN', deepEquals(NaN, NaN))
console.log('NAN as string', deepEquals(NaN, 'NaN'))
console.log(deepEquals(undefined, undefined))
console.log(deepEquals(true, true))

console.log(deepEquals({ a: 1 }, { a: 1 }))

console.log(deepEquals({ a: 1, b: { c: '2' } }, { a: 1, b: { c: '2' } }))

console.log(deepEquals({ a: 1, b: { c: null } }, { a: 1, b: { c: null } }))

console.log(
  'With array',
  deepEquals({ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [1, 2] } })
)

console.log(
  'With functions',
  deepEquals({ a: 1, b: { c: () => {} } }, { a: 1, b: { c: () => {} } })
)

console.log('Check between empty array and object', deepEquals([], {}))

console.log(
  'Check between an with undefined object and a valid object',
  deepEquals({ a: undefined, b: 2 }, { b: 2, c: 3 })
)
