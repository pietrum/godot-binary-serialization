/**
 * 3D Transformation. 3x4 matrix.
 *
 * @constructor
 */
function Transform() {
  /**
   * Axis X
   *
   * @type {{number, number, number}}
   */
  this.axisX = {
    x: undefined,
    y: undefined,
    z: undefined,
  };

  /**
   * Axis Y
   *
   * @type {{number, number, number}}
   */
  this.axisY = {
    x: undefined,
    y: undefined,
    z: undefined,
  };

  /**
   * Axis Z
   *
   * @type {{number, number, number}}
   */
  this.axisZ = {
    x: undefined,
    y: undefined,
    z: undefined,
  };

  /**
   * Origin
   *
   * @type {{number, number, number}}
   */
  this.origin = {
    x: undefined,
    y: undefined,
    z: undefined,
  };
}

Transform.get_args_count = () => (12);

Transform.put_var = (args) => {
  const variant = new Transform();
  [
    variant.axisX.x, variant.axisX.y, variant.axisX.z,
    variant.axisY.x, variant.axisY.y, variant.axisY.z,
    variant.axisZ.x, variant.axisZ.y, variant.axisZ.z,
    variant.origin.x, variant.origin.y, variant.origin.z,
  ] = args;

  return variant;
};

Transform.prototype.get_var = function getVar() {
  return [
    this.axisX.x, this.axisX.y, this.axisX.z,
    this.axisY.x, this.axisY.y, this.axisY.z,
    this.axisZ.x, this.axisZ.y, this.axisZ.z,
    this.origin.x, this.origin.y, this.origin.z,
  ];
};

/**
 * Expose.
 *
 * @type {Transform}
 */
module.exports = Transform;
