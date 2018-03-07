/**
 * A color is represented as red, green and blue (r,g,b) components.
 * Additionally, “a” represents the alpha component, often used for transparency.
 *
 * Values are in floating point and usually range from 0 to 1.
 */
class Color {
  /**
   * @constructor
   */
  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1.0;
  }

  /**
   * Get Red integer value.
   *
   * @return {number} integer value [0 - 255]
   */
  get r8() {
    return Math.round(this.r * 255);
  }

  /**
   * Set Red integer value.
   *
   * @param {number} value - integer value [0 - 255]
   */
  set r8(value) {
    this.r = value / 255;
  }

  /**
   * Get Green integer value.
   *
   * @return {number} integer value [0 - 255]
   */
  get g8() {
    return Math.floor(this.g * 255);
  }

  /**
   * Set Green integer value.
   *
   * @param {number} value - integer value [0 - 255]
   */
  set g8(value) {
    this.g = value / 255;
  }

  /**
   * Get Blue integer value.
   *
   * @return {number} integer value [0 - 255]
   */
  get b8() {
    return Math.floor(this.b * 255);
  }

  /**
   * Set Blue integer value.
   *
   * @param {number} value - integer value [0 - 255]
   */
  set b8(value) {
    this.b = value / 255;
  }

  /**
   * Get Alpha integer value.
   *
   * @return {number} integer value [0 - 255]
   */
  get a8() {
    return Math.floor(this.a * 255);
  }

  /**
   * Set Alpha integer value.
   *
   * @param {number} value - integer value [0 - 255]
   */
  set a8(value) {
    this.a = value / 255;
  }

  /**
   * Constructs a color from an RGBA profile using values between 0 and 1 (float).
   *
   * @param args
   *
   * @return {Color}
   */
  static from(args) {
    const color = new Color();
    [
      color.r, color.g, color.b, color.a,
    ] = args;

    return color;
  }

  get args() {
    return [
      this.r, this.g, this.b, this.a,
    ];
  }

  get variant() {
    return this;
  }

  static get argsLength() {
    return 4;
  }

  static get byteLength() {
    // 4x float
    return 4 * 4;
  }
}

/**
 * Expose.
 *
 * @type {Color}
 */
module.exports = Color;
