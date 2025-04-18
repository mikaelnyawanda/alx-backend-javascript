export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Cls = this.constructor; // Preserve subclass (e.g., TestCar)
    return new Cls(); // Creates a new instance with no parameters
  }
}

