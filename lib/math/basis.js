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

Basis.get_args_count = () => (9);

Basis.put_var = (args) => {
  const variant = new Basis();
  [
    variant.axisX.x, variant.axisX.y, variant.axisX.z,
    variant.axisY.x, variant.axisY.y, variant.axisY.z,
    variant.axisZ.x, variant.axisZ.y, variant.axisZ.z,
  ] = args;

  return variant;
};

Basis.prototype.get_var = function getVar() {
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
