/**
 * Vector used for 2D Math.
 *
 * @constructor
 */
function Vector2() {
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

Vector2.put_var = args => {
  const variant = new Vector2();

  variant.x = args[0];
  variant.y = args[1];

  return variant;
};

Vector2.prototype.get_var = function () {
  return [this.x, this.y];
};

/**
 * Expose.
 *
 * @type {Vector2}
 */
module.exports = Vector2;
