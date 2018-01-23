/**
 * 2D Axis-aligned bounding box.
 *
 * @constructor
 */
function Rect2() {
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

/**
 * Expose.
 *
 * @type {Rect2}
 */
module.exports = Rect2;
