const parseText = (before, edit) => {
  const content = before.content
  const { selection, replacement } = edit
  const { startIndex, length } = selection
  let resultString

  resultString =
    content[0].text.slice(0, startIndex) +
    replacement +
    content[0].text.slice(startIndex + length)

  return {
    content: [
      {
        text: resultString,
        color: content[0].color,
      },
    ],
  }
}

const parseMultipleText = (before, edit) => {
  const { content } = before
  const { selection, replacement } = edit
  const { startIndex, length } = selection

  let currentIndex = 0

  for (let i = 0; i < content.length; i++) {
    const item = content[i]
    const nextIndex = currentIndex + item.text.length

    if (currentIndex < startIndex && startIndex <= nextIndex) {
      const insertPosition = startIndex - currentIndex

      item.text =
        item.text.slice(0, insertPosition) +
        replacement +
        item.text.slice(insertPosition + length)

      break
    }

    currentIndex = nextIndex
  }

  return { content }
}

const parseMultiSpanningText = (before, edit) => {
  const { content } = before
  const { selection, replacement } = edit
  const { startIndex, length } = selection
  const endIndex = startIndex + length

  let currentIndex = 0
  let isEditingStarted = false

  for (let i = 0; i < content.length; i++) {
    const item = content[i]
    const nextIndex = currentIndex + item.text.length

    if (!isEditingStarted && startIndex <= nextIndex) {
      // have only less than on the first try
      let insertPosition = startIndex - currentIndex
      if (endIndex < nextIndex) {
        // Edit ends within the same item
        item.text =
          item.text.slice(0, insertPosition) +
          replacement +
          item.text.slice(insertPosition + length)
        break
      } else {
        // Edit spans multiple items
        item.text = item.text.slice(0, insertPosition) + replacement
        isEditingStarted = true
      }
    } else if (isEditingStarted) {
      if (endIndex < nextIndex) {
        // Edit ends within this item
        item.text = item.text.slice(endIndex - currentIndex)
        break
      } else {
        // Edit continues beyond this item
        item.text = ''
      }
    }

    currentIndex = nextIndex
  }

  // Remove any items that have become empty
  return { content: content.filter((item) => item.text.length > 0) } // Dont filter on the first try
}

module.exports = {
  parseText,
  parseMultipleText,
  parseMultiSpanningText,
}
