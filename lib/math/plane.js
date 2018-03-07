/**
 * Plane in hessian form.
 *
 * @constructor
 */
class Plane {
  constructor() {
    /**
     * Normal
     *
     * @type {{number, number, number}}
     */
    this.normal = {
      x: undefined,
      y: undefined,
      z: undefined,
    };

    /**
     * Distance
     *
     * @type {number}
     */
    this.distance = undefined;
  }

  static from(args) {
    const variant = new Plane();
    [
      variant.normal.x, variant.normal.y, variant.normal.z,
      variant.distance,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.normal.x, this.normal.y, this.normal.z,
      this.distance,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 4;
  }

  static get byteLength() {
    // 3x float + float
    return 4 * 4;
  }
}

/**
 * Expose.
 *
 * @type {Plane}
 */
module.exports = Plane;
