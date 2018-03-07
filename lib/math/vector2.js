/**
 * Vector used for 2D Math.
 *
 * @constructor
 */
class Vector2 {
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
  }

  static from(args) {
    const variant = new Vector2();
    [
      variant.x, variant.y,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.x, this.y,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 2;
  }

  static get byteLength() {
    // float * 2
    return 4 * 2;
  }
}

/**
 * Expose.
 *
 * @type {Vector2}
 */
module.exports = Vector2;
