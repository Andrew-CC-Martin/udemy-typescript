let apples = 4
let speed = 'fast'
let hasName = true
let nothingMuch = null
let nothing = undefined

let now: Date = new Date()

let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, true]

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log('coordinates', coordinates)

let point: { x: number; y: number } = {
  x: 10,
  y: 10
}

let words = ['red', 'green', 'blue']
// let foundWord: boolean
let foundWord = false

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true
  }
}

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

numbers.forEach(number => {
  if (number > 0) {
    numberAboveZero = number
  }
})
