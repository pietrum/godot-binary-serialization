/**
 * Axis-Aligned Bounding Box.
 *
 * @constructor
 */
function AABB() {
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

AABB.get_args_count = () => (6);

AABB.put_var = args => {
  const variant = new AABB();

  variant.position.x = args[0];
  variant.position.y = args[1];
  variant.position.z = args[2];
  variant.size.x = args[3];
  variant.size.y = args[4];
  variant.size.z = args[5];

  return variant;
};

AABB.prototype.get_var = function () {
  return [
    this.position.x, this.position.y, this.position.z,
    this.size.x, this.size.y, this.size.z,
  ];
};

/**
 * Expose.
 *
 * @type {AABB}
 */
module.exports = AABB;
