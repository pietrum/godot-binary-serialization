/**
 * 2D Transformation. 3x2 matrix.
 *
 * @constructor
 */
function Transform2D() {
  /**
   * X
   *
   * @type {{number, number}}
   */
  this.axisX = {
    x: undefined,
    y: undefined,
  };

  /**
   * Y
   *
   * @type {{number, number}}
   */
  this.axisY = {
    x: undefined,
    y: undefined,
  };

  /**
   * Origin
   *
   * @type {{number, number}}
   */
  this.origin = {
    x: undefined,
    y: undefined,
  };
}

Transform2D.get_args_count = () => (6);

Transform2D.put_var = (args) => {
  const variant = new Transform2D();
  [
    variant.axisX.x, variant.axisX.y,
    variant.axisY.x, variant.axisY.y,
    variant.origin.x, variant.origin.y,
  ] = args;

  return variant;
};

Transform2D.prototype.get_var = function getVar() {
  return [
    this.axisX.x, this.axisX.y,
    this.axisY.x, this.axisY.y,
    this.origin.x, this.origin.y,
  ];
};

/**
 * Expose.
 *
 * @type {Transform2D}
 */
module.exports = Transform2D;
