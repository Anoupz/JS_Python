// recurssive Big O(n!)
function findLongestNameChain(names) {
  let longestChain = []

  function findChain(currentChain, remainingNames) {
    if (currentChain.length > longestChain.length) {
      longestChain = currentChain
    }

    for (let i = 0; i < remainingNames.length; i++) {
      let name = remainingNames[i]
      let firstName = name[0]

      if (
        currentChain.length === 0 ||
        currentChain[currentChain.length - 1][1] === firstName
      ) {
        let newChain = currentChain.slice()
        newChain.push(name)
        let newRemainingNames = remainingNames.slice()
        newRemainingNames.splice(i, 1)
        findChain(newChain, newRemainingNames)
      }
    }
  }

  findChain([], names)

  return longestChain.length
}

/**
 *
 * If queue is used its BFS algorithm
 * @param {*} names
 * @returns
 */
function findLongestNameChainBFS(names) {
  let maxChainLength = 0
  let longestChain = []

  // Perform BFS traversal for each name in the array
  for (let i = 0; i < names.length; i++) {
    const [firstName, lastName] = names[i]
    const visited = new Set()
    const queue = [[firstName, [firstName]]] // start with the first name and its chain

    while (queue.length > 0) {
      const [node, chain] = queue.shift()
      visited.add(node)
      if (chain.length > maxChainLength) {
        maxChainLength = chain.length
        longestChain = chain
      }
      for (let j = 0; j < names.length; j++) {
        const [nextFirstName, nextLastName] = names[j]
        if (nextFirstName === node && !visited.has(nextLastName)) {
          queue.push([nextLastName, chain.concat(nextLastName)])
        }
      }
    }
  }

  return maxChainLength
}

console.log(
  findLongestNameChain([
    ['john', 'macy'],
    ['macy', 'kiran'],
    ['kiran', 'babe'],
    ['masch', 'pete'],
    ['pete', 'fig'],
  ])
)

console.log(
  findLongestNameChain([
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'd'],
    ['d', 'e'],
    ['x', 'y'],
    ['y', 'z'],
    ['z', 'j'],
    ['j', 'k'],
    ['k', 'l'],
  ])
)
