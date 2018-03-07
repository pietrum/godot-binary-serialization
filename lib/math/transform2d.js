/**
 * 2D Transformation. 3x2 matrix.
 *
 * @constructor
 */
class Transform2D {
  constructor() {
    /**
     * X
     *
     * @type {{number, number}}
     */
    this.axisX = {
      x: undefined,
      y: undefined,
    };

    /**
     * Y
     *
     * @type {{number, number}}
     */
    this.axisY = {
      x: undefined,
      y: undefined,
    };

    /**
     * Origin
     *
     * @type {{number, number}}
     */
    this.origin = {
      x: undefined,
      y: undefined,
    };
  }

  static from(args) {
    const variant = new Transform2D();
    [
      variant.axisX.x, variant.axisX.y,
      variant.axisY.x, variant.axisY.y,
      variant.origin.x, variant.origin.y,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.axisX.x, this.axisX.y,
      this.axisY.x, this.axisY.y,
      this.origin.x, this.origin.y,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 6;
  }

  static get byteLength() {
    // 2x float * 3
    return 4 * 6;
  }
}

/**
 * Expose.
 *
 * @type {Transform2D}
 */
module.exports = Transform2D;
