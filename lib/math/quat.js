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

Quat.put_var = (args) => {
  const variant = new Quat();
  [
    variant.axis.x, variant.axis.y, variant.axis.z,
    variant.angle,
  ] = args;

  return variant;
};

Quat.prototype.get_var = function getVar() {
  return [this.axis.x, this.axis.y, this.axis.z, this.angle];
};

/**
 * Expose.
 *
 * @type {Quat}
 */
module.exports = Quat;
