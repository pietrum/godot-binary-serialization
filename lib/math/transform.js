/**
 * 3D Transformation. 3x4 matrix.
 *
 * @constructor
 */
class Transform {
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

    /**
     * Origin
     *
     * @type {{number, number, number}}
     */
    this.origin = {
      x: undefined,
      y: undefined,
      z: undefined,
    };
  }

  static from(args) {
    const variant = new Transform();
    [
      variant.axisX.x, variant.axisX.y, variant.axisX.z,
      variant.axisY.x, variant.axisY.y, variant.axisY.z,
      variant.axisZ.x, variant.axisZ.y, variant.axisZ.z,
      variant.origin.x, variant.origin.y, variant.origin.z,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.axisX.x, this.axisX.y, this.axisX.z,
      this.axisY.x, this.axisY.y, this.axisY.z,
      this.axisZ.x, this.axisZ.y, this.axisZ.z,
      this.origin.x, this.origin.y, this.origin.z,
    ];
  }

  static get argsLength() {
    return 12;
  }

  static get byteLength() {
    // 3x float * 4
    return 4 * 12;
  }
}

/**
 * Expose.
 *
 * @type {Transform}
 */
module.exports = Transform;
