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

Rect2.put_var = args => {
  const variant = new Rect2();

  variant.position.x = args[0];
  variant.position.y = args[1];
  variant.size.w = args[2];
  variant.size.h = args[3];

  return variant;
};

Rect2.prototype.get_var = function () {
  return [this.position.x, this.position.y, this.size.w, this.size.h];
};

/**
 * Expose.
 *
 * @type {Rect2}
 */
module.exports = Rect2;
