/**
 * Quaternion.
 *
 * @constructor
 */
class Quat {
  constructor() {
    /**
     * Axis
     *
     * @type {{number, number, number}}
     */
    this.axis = {
      x: undefined,
      y: undefined,
      z: undefined,
    };

    /**
     * Angle
     *
     * @type {number}
     */
    this.angle = undefined;
  }

  static from(args) {
    const variant = new Quat();
    [
      variant.axis.x, variant.axis.y, variant.axis.z,
      variant.angle,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.axis.x, this.axis.y, this.axis.z,
      this.angle,
    ];
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
 * @type {Quat}
 */
module.exports = Quat;
