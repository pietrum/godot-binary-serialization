/**
 * Vector used for 3D Math.
 *
 * @constructor
 */
class Vector3 {
  constructor() {
    /**
     * Float.
     *
     * @type {number}
     */
    this.x = undefined;

    /**
     * Float.
     *
     * @type {number}
     */
    this.y = undefined;

    /**
     * Float.
     *
     * @type {number}
     */
    this.z = undefined;
  }

  static from(args) {
    const variant = new Vector3();
    [
      variant.x, variant.y, variant.z,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.x, this.y, this.z,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 3;
  }

  static get byteLength() {
    // float * 3
    return 4 * 3;
  }
}

/**
 * Expose.
 *
 * @type {Vector3}
 */
module.exports = Vector3;
