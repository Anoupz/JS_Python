/**
 // # A list of channel to its subscribers
const channelSubscribers = {
  Earth: [ 
    'Amy',
    'Leela',
  ],
  Mars: [
    'Amy',
    'Bender',
    'Hermes',
  ],
  Jupiter: [
    'Leela',
    'Hermes',
  ],
  Saturn: [
    'Bender',
    'Fry',
  ],
  Uranus: [
    'Fry',
    'Zoidberg',
  ],
}
 Write a function that accepts a channel name and returns all other channels with at least one common subscriber. 
 For example if your function is passed in Earth, it should return Mars and Jupiter (because they share Amy and Leela, respectively).
 */

const channelSubscribers = {
  Earth: ['Amy', 'Leela'],
  Mars: ['Amy', 'Bender', 'Hermes'],
  Jupiter: ['Leela', 'Hermes'],
  Saturn: ['Bender', 'Fry'],
  Uranus: ['Fry', 'Zoidberg'],
}

function userSubscribedChannels(channelName) {
  const userChannelMap = new Map()
  const result = new Set()

  for (let [channel, users] of Object.entries(channelSubscribers)) {
    users.forEach((user) => {
      userChannelMap.set(
        user,
        (userChannelMap.get(user) || new Set()).add(channel)
      )
    })
  }

  for (let channels of userChannelMap.values()) {
    if (channels.has(channelName)) {
      channels.forEach((channel) => result.add(channel))
    }
  }

  result.delete(channelName)

  return result
}

console.log(...userSubscribedChannels('Earth'))
