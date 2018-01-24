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

Transform.put_var = (args) => {
  const variant = new Transform();

  variant.axisX.x = args[0];
  variant.axisX.y = args[1];
  variant.axisX.z = args[2];
  variant.axisY.x = args[3];
  variant.axisY.y = args[4];
  variant.axisY.z = args[5];
  variant.axisZ.x = args[6];
  variant.axisZ.y = args[7];
  variant.axisZ.z = args[8];
  variant.origin.x = args[9];
  variant.origin.y = args[10];
  variant.origin.z = args[11];

  return variant;
};

Transform.prototype.get_var = function () {
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
