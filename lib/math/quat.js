/**
 * Quaternion.
 *
 * @constructor
 */
function Quat() {
  /**
   * Axis
   *
   * @type {{number, number, number}}
   */
  this.axis = {
    x: undefined,
    y: undefined,
    z: undefined,
  };

  /**
   * Angle
   *
   * @type {number}
   */
  this.angle = undefined;
}

Quat.get_args_count = () => (4);

Quat.put_var = args => {
  const variant = new Quat();

  variant.axis.x = args[0];
  variant.axis.y = args[1];
  variant.axis.z = args[2];
  variant.angle = args[3];

  return variant;
};

Quat.prototype.get_var = function () {
  return [this.axis.x, this.axis.y, this.axis.z, this.angle];
};

/**
 * Expose.
 *
 * @type {Quat}
 */
module.exports = Quat;
