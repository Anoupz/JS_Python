const {
  parseText,
  parseMultipleText,
  parseMultiSpanningText,
} = require('./index')

describe('Tests', () => {
  test('01-single-node-insert', () => {
    const before = {
      content: [
        {
          text: 'Basic Starting Document',
          color: 'black',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 6,
        length: 0,
      },
      replacement: 'Inserted ',
    }

    expect(parseText(before, edit)).toEqual({
      content: [
        {
          text: 'Basic Inserted Starting Document',
          color: 'black',
        },
      ],
    })
  })

  test('02-single-node-replace', async () => {
    const before = {
      content: [
        {
          text: 'Basic Starting Document',
          color: 'black',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 6,
        length: 8,
      },
      replacement: 'Final',
    }

    expect(parseText(before, edit)).toEqual({
      content: [
        {
          text: 'Basic Final Document',
          color: 'black',
        },
      ],
    })
  })

  test('03-single-node-append', () => {
    const before = {
      content: [
        {
          text: 'Basic Starting Document',
          color: 'black',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 23,
        length: 0,
      },
      replacement: ' - With Appended Text',
    }

    const result = {
      content: [
        {
          text: 'Basic Starting Document - With Appended Text',
          color: 'black',
        },
      ],
    }

    expect(parseText(before, edit)).toEqual(result)
  })

  test('04-single-node-replace-start', () => {
    const before = {
      content: [
        {
          text: 'Basic Starting Document',
          color: 'black',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 0,
        length: 14,
      },
      replacement: 'Replaced Start',
    }

    const result = {
      content: [
        {
          text: 'Replaced Start Document',
          color: 'black',
        },
      ],
    }

    expect(parseText(before, edit)).toEqual(result)
  })

  test('05-multi-node-insert', () => {
    const before = {
      content: [
        {
          text: 'blue text ',
          color: 'blue',
        },
        {
          text: 'orange text',
          color: 'orange',
        },
      ],
    }
    const edit = {
      selection: {
        startIndex: 16,
        length: 0,
      },
      replacement: ' long',
    }

    const result = {
      content: [
        {
          text: 'blue text ',
          color: 'blue',
        },
        {
          text: 'orange long text',
          color: 'orange',
        },
      ],
    }

    expect(parseMultipleText(before, edit)).toEqual(result)
  })

  test('06-multi-node-in-between', () => {
    const before = {
      content: [
        {
          text: 'blue text ',
          color: 'blue',
        },
        {
          text: 'orange text',
          color: 'orange',
        },
      ],
    }
    const edit = {
      selection: {
        startIndex: 10,
        length: 0,
      },
      replacement: 'and more blue text ',
    }

    const result = {
      content: [
        {
          text: 'blue text and more blue text ',
          color: 'blue',
        },
        {
          text: 'orange text',
          color: 'orange',
        },
      ],
    }

    expect(parseMultipleText(before, edit)).toEqual(result)
  })

  test('07-choose-node', () => {
    const before = {
      content: [
        {
          text: 'many ',
          color: 'blue',
        },
        {
          text: 'nodes ',
          color: 'orange',
        },
        {
          text: 'with varied ',
          color: 'blue',
        },
        {
          text: 'l',
          color: 'orange',
        },
        {
          text: 'e',
          color: 'blue',
        },
        {
          text: 'n',
          color: 'orange',
        },
        {
          text: 'g',
          color: 'blue',
        },
        {
          text: 't',
          color: 'orange',
        },
        {
          text: 'h',
          color: 'blue',
        },
        {
          text: ' and content',
          color: 'orange',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 29,
        length: 0,
      },
      replacement: 's',
    }

    const result = {
      content: [
        {
          text: 'many ',
          color: 'blue',
        },
        {
          text: 'nodes ',
          color: 'orange',
        },
        {
          text: 'with varied ',
          color: 'blue',
        },
        {
          text: 'l',
          color: 'orange',
        },
        {
          text: 'e',
          color: 'blue',
        },
        {
          text: 'n',
          color: 'orange',
        },
        {
          text: 'g',
          color: 'blue',
        },
        {
          text: 't',
          color: 'orange',
        },
        {
          text: 'hs',
          color: 'blue',
        },
        {
          text: ' and content',
          color: 'orange',
        },
      ],
    }

    const expected = parseMultipleText(before, edit)
    expect(expected).toEqual(result)
  })

  test('08-spanning-replacement', () => {
    const before = {
      content: [
        {
          text: 'blue text ',
          color: 'blue',
        },
        {
          text: 'orange text',
          color: 'orange',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 5,
        length: 11,
      },
      replacement: 'that ends with orange',
    }

    const result = {
      content: [
        {
          text: 'blue that ends with orange',
          color: 'blue',
        },
        {
          text: ' text',
          color: 'orange',
        },
      ],
    }

    expect(parseMultiSpanningText(before, edit)).toEqual(result)
  })

  test('09-multi-spanning-replacement', () => {
    const before = {
      content: [
        {
          text: 'blue text ',
          color: 'blue',
        },
        {
          text: 'orange text',
          color: 'orange',
        },
        {
          text: ' and red text',
          color: 'red',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 5,
        length: 20,
      },
      replacement: 'with',
    }

    const result = {
      content: [
        {
          text: 'blue with',
          color: 'blue',
        },
        {
          text: ' red text',
          color: 'red',
        },
      ],
    }

    expect(parseMultiSpanningText(before, edit)).toEqual(result)
  })

  test('10-complex-spanning', () => {
    const before = {
      content: [
        {
          text: 'R',
          color: 'red',
        },
        {
          text: 'A',
          color: 'orange',
        },
        {
          text: 'I',
          color: 'yellow',
        },
        {
          text: 'N',
          color: 'green',
        },
        {
          text: 'B',
          color: 'blue',
        },
        {
          text: 'O',
          color: 'indigo',
        },
        {
          text: 'W',
          color: 'violet',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 3,
        length: 2,
      },
      replacement: 'SED TOMORR',
    }

    const result = {
      content: [
        {
          text: 'R',
          color: 'red',
        },
        {
          text: 'A',
          color: 'orange',
        },
        {
          text: 'ISED TOMORR',
          color: 'yellow',
        },
        {
          text: 'O',
          color: 'indigo',
        },
        {
          text: 'W',
          color: 'violet',
        },
      ],
    }

    const expected = parseMultiSpanningText(before, edit)
    expect(expected).toEqual(result)
  })

  test('11-complex-spanning-2', () => {
    const before = {
      content: [
        {
          text: 'many ',
          color: 'blue',
        },
        {
          text: 'nodes ',
          color: 'orange',
        },
        {
          text: 'with varied ',
          color: 'blue',
        },
        {
          text: 'l',
          color: 'orange',
        },
        {
          text: 'e',
          color: 'blue',
        },
        {
          text: 'n',
          color: 'orange',
        },
        {
          text: 'g',
          color: 'blue',
        },
        {
          text: 't',
          color: 'orange',
        },
        {
          text: 'h',
          color: 'blue',
        },
        {
          text: ' and content',
          color: 'orange',
        },
      ],
    }

    const edit = {
      selection: {
        startIndex: 20,
        length: 19,
      },
      replacement: 'a',
    }

    const result = {
      content: [
        {
          text: 'many ',
          color: 'blue',
        },
        {
          text: 'nodes ',
          color: 'orange',
        },
        {
          text: 'with varia',
          color: 'blue',
        },
        {
          text: 'nt',
          color: 'orange',
        },
      ],
    }

    const expected = parseMultiSpanningText(before, edit)
    expect(expected).toEqual(result)
  })
})
