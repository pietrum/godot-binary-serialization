/**
 * 3x3 matrix datatype.
 *
 * @constructor
 */
class Basis {
  constructor() {
    /**
     * Axis X
     *
     * @type {{number, number, number}}
     */
    this.axisX = {
      x: undefined,
      y: undefined,
      z: undefined,
    };

    /**
     * Axis Y
     *
     * @type {{number, number, number}}
     */
    this.axisY = {
      x: undefined,
      y: undefined,
      z: undefined,
    };

    /**
     * Axis Z
     *
     * @type {{number, number, number}}
     */
    this.axisZ = {
      x: undefined,
      y: undefined,
      z: undefined,
    };
  }

  static from(args) {
    const variant = new Basis();
    [
      variant.axisX.x, variant.axisX.y, variant.axisX.z,
      variant.axisY.x, variant.axisY.y, variant.axisY.z,
      variant.axisZ.x, variant.axisZ.y, variant.axisZ.z,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.axisX.x, this.axisX.y, this.axisX.z,
      this.axisY.x, this.axisY.y, this.axisY.z,
      this.axisZ.x, this.axisZ.y, this.axisZ.z,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 9;
  }

  static get byteLength() {
    // 9x float
    return 4 * 9;
  }
}

/**
 * Expose.
 *
 * @type {Basis}
 */
module.exports = Basis;
