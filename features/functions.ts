const add = (a: number, b: number): number => a + b

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

// Note - void can mean no return (which defaults to undefined), undefined, or null
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

// const logWeather = (forecast: { date: Date, weather: string }): void => {
//   const { date, weather } = forecast
//   console.log(date, weather)
// }

const logWeather = ({ date, weather }: { date: Date; weather: string }): void =>
  console.log(date, weather)
