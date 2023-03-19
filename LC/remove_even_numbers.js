/**
 * Remove even numbers from an array of integers
 */

function remove_even_numbers(input) {
  const result = []
  for (let i of input) {
    if (i % 2 !== 0) {
      result.push(i)
    }
  }

  return result
}

function removeEven(input) {
  return input.filter((num) => num % 2 !== 0)
}

console.log(remove_even_numbers([1, 2, 3, 4, 5, 6]))
console.log(removeEven([1, 2, 3, 4, 5, 6]))
