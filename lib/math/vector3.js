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

Vector3.put_var = args => {
  const variant = new Vector3();

  variant.x = args[0];
  variant.y = args[1];
  variant.z = args[2];

  return variant;
};

Vector3.prototype.get_var = function () {
  return [this.x, this.y, this.z];
};

/**
 * Expose.
 *
 * @type {Vector3}
 */
module.exports = Vector3;
