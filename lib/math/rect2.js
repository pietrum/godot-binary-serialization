/**
 * 2D Axis-aligned bounding box.
 *
 * @constructor
 */
class Rect2 {
  constructor() {
    /**
     * Position
     *
     * @type {{number, number}}
     */
    this.position = {
      x: undefined,
      y: undefined,
    };

    /**
     * Size
     *
     * @type {{number, number}}
     */
    this.size = {
      w: undefined,
      h: undefined,
    };
  }

  static from(args) {
    const variant = new Rect2();
    [
      variant.position.x, variant.position.y,
      variant.size.w, variant.size.h,
    ] = args;

    return variant;
  }

  get args() {
    return [
      this.position.x, this.position.y,
      this.size.w, this.size.h,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 4;
  }

  static get byteLength() {
    // 2x float + 2x float
    return 4 * 4;
  }
}

/**
 * Expose.
 *
 * @type {Rect2}
 */
module.exports = Rect2;
