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

AABB.put_var = (args) => {
  const variant = new AABB();
  [
    variant.position.x, variant.position.y, variant.position.z,
    variant.size.x, variant.size.y, variant.size.z,
  ] = args;

  return variant;
};

AABB.prototype.get_var = function getVar() {
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
