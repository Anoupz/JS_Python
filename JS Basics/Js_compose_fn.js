/**
 * Write a compose function that takes n functions as
 * arguments and returns a new function that composes the n functions.
 *
 * A Compose is from right to left
 * A Pipe is from left to right
 */

function addTwoNumbers(a) {
  return a + 5
}

function multiplyTwoNumbers(a) {
  return a * 2
}

function subtractTwoNumbers(a) {
  return a - 5
}

const compose = (...fns) => {
  return (args) => {
    return fns.reduceRight((arg, fn) => fn(arg), args)
  }
}

const pipe = (...fns) => {
  return (args) => fns.reduce((arg, fn) => fn(arg), args)
}

const evaluate = compose(addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers)
console.log('Compose the value', evaluate(5))

const evaluate2 = pipe(addTwoNumbers, multiplyTwoNumbers, subtractTwoNumbers)
console.log('Pipe the value', evaluate2(5))
