/**
 * Axis-Aligned Bounding Box.
 *
 * @constructor
 */
class AABB {
  constructor() {
    /**
     * Position
     *
     * @type {{number, number, number}}
     */
    this.position = {
      x: undefined,
      y: undefined,
      z: undefined,
    };

    /**
     * Size
     *
     * @type {{number, number, number}}
     */
    this.size = {
      x: undefined,
      y: undefined,
      z: undefined,
    };
  }

  static from(args) {
    const variant = new AABB();
    [
      variant.position.x, variant.position.y, variant.position.z,
      variant.size.x, variant.size.y, variant.size.z,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.position.x, this.position.y, this.position.z,
      this.size.x, this.size.y, this.size.z,
    ];
  }

  static get argsLength() {
    return 6;
  }

  static get byteLength() {
    // 6x float
    return 4 * 6;
  }
}

/**
 * Expose.
 *
 * @type {AABB}
 */
module.exports = AABB;
