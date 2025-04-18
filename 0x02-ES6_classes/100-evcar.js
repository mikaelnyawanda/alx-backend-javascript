import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range;
  }

  // Override cloneCar to return an instance of Car instead of EVCar
  cloneCar() {
    return new Car(); // Return a Car instance, not EVCar
  }
}

