function parseJSON(jsonString) {
  const stack = []
  let currentObject = null
  let key = null
  let value = null

  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString[i]
    switch (char) {
      case '{':
        const newObject = {}
        if (currentObject) {
          stack.push(currentObject)
          if (key) {
            currentObject[key] = newObject
            key = null
          } else {
            currentObject.push(newObject)
          }
        }
        currentObject = newObject
        break
      case '}':
        if (stack.length > 0) {
          currentObject = stack.pop()
        }
        break
      case '[':
        const newArray = []
        if (currentObject) {
          stack.push(currentObject)
          if (key) {
            currentObject[key] = newArray
            key = null
          } else {
            currentObject.push(newArray)
          }
        }
        currentObject = newArray
        break
      case ']':
        if (stack.length > 0) {
          currentObject = stack.pop()
        }
        break
      case '"':
        let j = i + 1
        while (jsonString[j] !== '"' && j < jsonString.length) {
          j++
        }
        if (currentObject && key) {
          currentObject[key] = jsonString.substring(i + 1, j)
          key = null
        } else {
          value = jsonString.substring(i + 1, j)
          if (value === 'true') {
            value = true
          } else if (value === 'false') {
            value = false
          } else if (value === 'null') {
            value = null
          } else if (!isNaN(value)) {
            value = Number(value)
          }
          if (currentObject) {
            currentObject.push(value)
          }
        }
        i = j
        break
      case ':':
        key = value
        value = null
        break
      case ',':
        if (currentObject && value) {
          if (currentObject instanceof Array) {
            currentObject.push(value)
          } else {
            currentObject[key] = value
            key = null
          }
          value = null
        }
        break
      default:
        if (!value) {
          value = char
        } else {
          value += char
        }
        break
    }
  }

  return currentObject
}
