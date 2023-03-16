const customFlat = (arr, depth = 1) => {
  const result = []
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1))
    } else {
      result.push(ar)
    }
  })
  return result
}

const a = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

console.log(customFlat(a, 2))
