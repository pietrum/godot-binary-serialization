/**
 * Vector used for 3D Math.
 *
 * @constructor
 */
function Vector3() {
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

  /**
   * Float.
   *
   * @type {number}
   */
  this.z = undefined;
}

Vector3.get_args_count = () => (3);

Vector3.put_var = (args) => {
  const variant = new Vector3();
  [variant.x, variant.y, variant.z] = args;

  return variant;
};

Vector3.prototype.get_var = function getVar() {
  return [this.x, this.y, this.z];
};

/**
 * Expose.
 *
 * @type {Vector3}
 */
module.exports = Vector3;
