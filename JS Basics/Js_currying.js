/**
 * A function should be able to call in any ways
 * function sum(a, b){
 *    return a + b
 * }
 *
 * sum(1, 2)
 * sum(1)(2)
 */

function sum(a, b) {
  if (b !== undefined) {
    return a + b
  }

  return function (b) {
    return a + b
  }
}

console.log(sum(1, 2))
console.log(sum(1)(2))

/**
 * Currying for generic use case
 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2])
    }
  }
}

function sum2(a, b, c) {
  return a + b + c
}

let curriedSum = curry(sum2)

console.log(curriedSum(1, 2, 3)) // 6, still callable normally
console.log(curriedSum(1)(2, 3)) // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)) // 6
