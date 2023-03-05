/**
 * You can do multi sort here like
 * first sort by fee and then by id and then keep going on
 */

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

//[TIP] Array.sort() does not consider negative numers,
// use array.sort((a, b) => a -b) if array has negative numbers

const sortedListByFeeAndId = boredApeCollection.sort(
  (a, b) => a.fee - b.fee || a.id.localeCompare(b.id)
)

console.log(sortedListByFeeAndId)
