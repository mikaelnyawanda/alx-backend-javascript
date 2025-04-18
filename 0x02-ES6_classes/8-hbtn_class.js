export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Cast to Number
  valueOf() {
    return this._size;
  }

  // Cast to String
  toString() {
    return this._location;
  }
}

