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

Vector2.get_args_count = () => (2);

Vector2.put_var = (args) => {
  const variant = new Vector2();
  [variant.x, variant.y] = args;

  return variant;
};

Vector2.prototype.get_var = function getVar() {
  return [this.x, this.y];
};

/**
 * Expose.
 *
 * @type {Vector2}
 */
module.exports = Vector2;
