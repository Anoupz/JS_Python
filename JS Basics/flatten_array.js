function flatten_array(array) {
  const result = []
  for (let a of array) {
    if (Array.isArray(a)) {
      result.push(...a)
    } else {
      result.push(a)
    }
  }

  return result
}

const flatten = (arr) => {
  const result = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...item]
    } else {
      acc = [...acc, item]
    }
    return acc
  }, [])
  return result
}

console.log(flatten_array([1, [2, 3], [4, 5, 6], [7, 8]]))
console.log(flatten([1, [2, 3], [4, 5, 6], [7, 8]]))
