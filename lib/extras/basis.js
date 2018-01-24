/**
 * 3x3 matrix datatype.
 *
 * @constructor
 */
function Basis() {
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
}

Basis.put_var = args => {
  const variant = new Basis();

  variant.axisX.x = args[0];
  variant.axisX.y = args[1];
  variant.axisX.z = args[2];
  variant.axisY.x = args[3];
  variant.axisY.y = args[4];
  variant.axisY.z = args[5];
  variant.axisZ.x = args[6];
  variant.axisZ.y = args[7];
  variant.axisZ.z = args[8];

  return variant;
};

Basis.prototype.get_var = function () {
  return [
    this.axisX.x, this.axisX.y, this.axisX.z,
    this.axisY.x, this.axisY.y, this.axisY.z,
    this.axisZ.x, this.axisZ.y, this.axisZ.z,
  ];
};

/**
 * Expose.
 *
 * @type {Basis}
 */
module.exports = Basis;
