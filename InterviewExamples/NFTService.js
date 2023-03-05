/**
 * Uniswap Q where the user asked to build the NFT borrowing service with different functions
 * The key was to build the map and use multi sort
 */
class NFTBorrowingService {
  borrowedNFTs = new Map()
  currentNFTs

  constructor(nfts) {
    this.currentNFTs = nfts
  }

  borrowNFT(id, nftCollectionName) {
    //		Borrow the available NFT
    if (!this.borrowedNFTs.has(id)) {
      this.borrowedNFTs.set(id, new Set([nftCollectionName]))
      return
    }

    if (!this.borrowedNFTs.get(id).has(nftCollectionName)) {
      this.borrowedNFTs.set(
        id,
        this.borrowedNFTs.get(id).add(nftCollectionName)
      )
    }
  }

  returnNFT(id, nftCollectionName) {
    return this.currentNFTs.filter(
      (nft) => nft.collectionName === nftCollectionName && nft.id === id
    )
  }
  searchNFT(nftCollectionName) {
    // return top 5 not borrowed NFT order by fee, then collection and then id
    return this.currentNFTs
      .filter((nft) => nft.collectionName === nftCollectionName)
      .filter(
        (nft) =>
          !(
            this.borrowedNFTs.has(nft.id) &&
            this.borrowedNFTs.get(nft.id).has(nftCollectionName)
          )
      )
      .sort(
        (a, b) =>
          a.fee - b.fee ||
          a.id.localeCompare(b.id) ||
          a.collectionName.localeCompare(b.collectionName)
      )
      .slice(0, 5)
  }

  listAll() {
    // return top 5 all NFT order by fee, then collection and then id
    return this.currentNFTs
      .sort(
        (a, b) =>
          a.fee - b.fee ||
          a.id.localeCompare(b.id) ||
          a.collectionName.localeCompare(b.collectionName)
      )
      .slice(0, 5)
  }
}

const BoredApeCollection = [
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

const halloKittieCollection = [
  {
    collectionName: 'Hallo Kittie',
    id: '1',
    fee: 10,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '2',
    fee: 20,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '4',
    fee: 80,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '5',
    fee: 30,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '3',
    fee: 30,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '6',
    fee: 70,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '7',
    fee: 10,
  },
  {
    collectionName: 'Hallo Kittie',
    id: '8',
    fee: 30,
  },
]

const borrowService = new NFTBorrowingService([
  ...BoredApeCollection,
  ...halloKittieCollection,
])

console.log(
  '---->> When nothing is borrowed \n',
  borrowService.searchNFT('Bored Ape')
)

borrowService.borrowNFT('1', 'Bored Ape')
borrowService.borrowNFT('1', 'Hallo Kittie')
borrowService.borrowNFT('2', 'Bored Ape')
borrowService.borrowNFT('1', 'Bored Ape')

console.log(
  '---->> When few nfts are borrowed \n',
  borrowService.searchNFT('Bored Ape')
)
console.log(
  '---->> When few nfts are borrowed \n',
  borrowService.searchNFT('Hallo Kittie')
)
console.log(
  '---->> List all irrespective of the status \n',
  borrowService.listAll()
)
