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

Transform2D.put_var = args => {
  const variant = new Transform2D();

  variant.axisX.x = args[0];
  variant.axisX.y = args[1];
  variant.axisY.x = args[2];
  variant.axisY.y = args[3];
  variant.origin.x = args[4];
  variant.origin.y = args[5];

  return variant;
};

Transform2D.prototype.get_var = function () {
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
