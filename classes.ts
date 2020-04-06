class Vehicle {
  // color: string

  // constructor(public color: string) {
  //   this.color = color
  // }

  constructor(public color: string) {}

  drive(): void {
    console.log('clop clop')
  }

  protected honk(): void {
    console.log('beeeeepppp')
  }
}

const vehicle = new Vehicle('orange')
vehicle.drive()
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }

  drive(): void {
    console.log('vroooommm')
  }
}

const car = new Car(5, 'red')
car.drive()
console.log(car.color)
