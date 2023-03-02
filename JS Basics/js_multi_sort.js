let boredApeCollection = [
  {
    collectionName: 'Bored Ape',
    id: '1',
    fee: 10,
  },
  {
    collectionName: 'Bored Ape',
    id: '2',
    fee: 20,
  },
  {
    collectionName: 'Bored Ape',
    id: '4',
    fee: 80,
  },
  {
    collectionName: 'Bored Ape',
    id: '5',
    fee: 30,
  },
  {
    collectionName: 'Bored Ape',
    id: '3',
    fee: 30,
  },
  {
    collectionName: 'Bored Ape',
    id: '6',
    fee: 70,
  },
  {
    collectionName: 'Bored Ape',
    id: '7',
    fee: 10,
  },
  {
    collectionName: 'Bored Ape',
    id: '8',
    fee: 30,
  },
]

const sortedListByFeeAndId = boredApeCollection.sort(
  (a, b) => a.fee - b.fee || a.id.localeCompare(b.id)
)

console.log(sortedListByFeeAndId)