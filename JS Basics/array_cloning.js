/**
 * Different ways to clone an array
 */

let a = [1, 2, 3, 4, 5, [7, 8], { a: 1, b: { c: [1, 2] } }]
let b = [
  {
    a: '1',
    b: '2',
  },
  {
    c: '1',
    d: '2',
  },
  {
    e: '1',
    f: '2',
  },
]

// Different way to clone are

let newArr = [...a]
newArr[0] = 2 // to make sure cloning works
console.log(newArr)

let newArr2 = a.filter((a) => a)
let newArr3 = a.map((a) => a)
let newArr4 = a.forEach((a) => a) // forEach will never return the array
let newArr5 = a.every((a) => a) // every and some return boolean
// let newArr6 = a.reduce((result, a) => {
//   return result.push(a)
// }, []) // reduce also

let newArray7 = Array.from(a)

console.log('--->> Clone the array with filter', newArr2)
console.log('--->> Clone the array with map', newArr3)
console.log(
  '--->> Cannot Clone the array with arr.every as it returns boolean',
  newArr5
)
//console.log('--->> Clone the array with reduce', newArr6)
console.log('--->> Clone the array with Array.from', newArray7)
console.log('--->> Clone the array with slice', a.slice(0))
console.log('--->> Clone the array with Object.assign', Object.assign([], a))
console.log('--->> Clone the array with Concat', [].concat(a))
console.log(
  '--->> Clone the array with JSON.parse',
  JSON.parse(JSON.stringify(a))
)

// Deep cloning
// Deep cloning is required when we have nested array or object
// For example
let deepCloning = JSON.parse(JSON.stringify(a))
console.log('--->> Deep cloning', deepCloning)
