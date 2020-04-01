let apples = 4;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log('coordinates', coordinates);
