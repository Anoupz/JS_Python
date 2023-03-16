/**
 * Flights have operating costs for each seat class
 * United has
 */

const operationCostMap = new Map([
  ['Economy', 0],
  ['Premium', 25],
  ['Business', 50],
])

const flightCosts = new Map()

function addFlightMetadata(flight, metadata) {
  flightCosts.set(flight, metadata)
}


