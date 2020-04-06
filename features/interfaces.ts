const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string
}

interface Reportable {
  summary(): string
}

// type Vehicle = {
//   name: string
//   year: number
//   broken: boolean
//   summary(): string
// }

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// const printSummary = (vehicle: Vehicle): void => {
const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary())
  // console.log(`${vehicle.name}`)
  // console.log(`${vehicle.year}`)
  // console.log(`${vehicle.broken}`)
}

printSummary(oldCivic)
printSummary(drink)
