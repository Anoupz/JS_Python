// # Design a parking lot

// # Goals:
// # This is first and foremost a pairing exercise. Feel free to ask questions, collaborate, and look up documentation as needed.
// # At the end of the exercise you will be provided the opportunity to refactor. Just because we ask if there are any refactorings you want to do doesn’t mean that we see something that needs to be fixed.
// # Feel free to use the “Run” button to execute the code as many times as you like. You should provide some way of exercising your code, whether it is a test or just executing it inline.
// # Ideally, we will work toward an extendable design that can best mimic a real world parking lot setup. Feel free to explain a more complicated system to begin with and refine your solution as necessary in the interest of time.

// # Assumptions:
// # The parking lot can hold motorcycles, cars and vans.
// # The parking lot has spots of 3 sizes: small spots, medium spots and large spots.
// # A motorcycle can park in any spot.
// # A car can park in a single medium spot, or a large spot.
// # A van can park, but it will take up 3 medium spots or a large spot. For the purposes of this exercise, don’t worry about if the medium spots are next to each other.
// # These are just a few assumptions. Feel free to ask your interviewer about more assumptions as needed.

// # Please implement a parking lot with following functionality:
// # The ability to park a vehicle in the parking lot.
// # The ability to remove a vehicle that has been previously parked.

// moto, car, vans
// small, medium, large
// moto - any
// car -  medium || large
// van -  3 medium || 1 large

// lets have a predefined set of spots

const parkingSpots = new Map([
  ['small', 3],
  ['medium', 5],
  ['large', 2],
])

class ParkingService {
  parkingStatus = new Map()
  parkingSpots
  vehicleDict = new Map([
    ['motorcycle', ['small', 'medium', 'large']],
    ['car', ['medium', 'large']],
    ['van', ['medium', 'large']],
  ])

  constructor(parkingSpots) {
    this.parkingSpots = parkingSpots
  }

  parkVehicle(vehicleType) {
    if (this.vehicleDict.has(vehicleType)) {
      const allowedSpots = this.vehicleDict.get(vehicleType)

      for (let spot of allowedSpots) {
        let currentSpotNumber = this.parkingSpots.get(spot)

        if (currentSpotNumber > 0) {
          if (vehicleType === 'van' && spot === 'medium') {
            if (currentSpotNumber < 3) {
              continue
            }
          }

          this.parkingStatus.set(`${vehicleType + currentSpotNumber}`, {
            spotType: spot,
            parkingNumber: currentSpotNumber,
          })

          const numberOfSpotTaken =
            vehicleType === 'van' && spot === 'medium' ? 3 : 1

          this.parkingSpots.set(
            spot,
            Math.max(currentSpotNumber - numberOfSpotTaken, 0)
          )
          break
        }
      }
    }

    // return receipt which
    // TODO: return if all spots are filled
  }

  exit(vehicleType, spotNumber) {
    const spotType = this.parkingStatus.get(
      `${vehicleType + spotNumber}`
    ).spotType
    this.parkingStatus.delete(`${vehicleType + spotNumber}`)

    let numberOfSpotReleased = 1

    if (vehicleType === 'van' && spotType === 'medium') {
      numberOfSpotReleased = 3
    }

    this.parkingSpots.set(
      spotType,
      this.parkingSpots.get(spotType) + numberOfSpotReleased
    )
  }

  getParkingStatus() {
    console.log(this.parkingSpots)
    return this.parkingStatus
  }
}

const parkingService = new ParkingService(parkingSpots)

let u1 = 'motorcycle'
let u2 = 'motorcycle'
let u3 = 'motorcycle'
let u4 = 'motorcycle'
let u5 = 'car'
let u6 = 'van'
let u7 = 'car'

parkingService.parkVehicle(u1)
parkingService.parkVehicle(u2)
parkingService.parkVehicle(u5)
parkingService.parkVehicle(u4)
parkingService.parkVehicle('motorcycle') // reduce the medium spot
// parkingService.parkVehicle('motorcycle') // this medium spot
parkingService.parkVehicle('van') // large

console.log(parkingService.getParkingStatus())

parkingService.exit('van', 3)

console.log(parkingService.getParkingStatus())

parkingService.parkVehicle('motorcycle') // reduce the medium spot and take the medium spot

console.log(parkingService.getParkingStatus())

parkingService.exit('motorcycle', 3)

console.log(parkingService.getParkingStatus())
