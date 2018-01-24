/**
 * Plane in hessian form.
 *
 * @constructor
 */
function Plane() {
  /**
   * Normal
   *
   * @type {{number, number, number}}
   */
  this.normal = {
    x: undefined,
    y: undefined,
    z: undefined,
  };

  /**
   * Distance
   *
   * @type {number}
   */
  this.distance = undefined;
}

Plane.put_var = (args) => {
  const variant = new Plane();

  variant.normal.x = args[0];
  variant.normal.y = args[1];
  variant.normal.z = args[2];
  variant.distance = args[3];

  return variant;
};

Plane.prototype.get_var = function () {
  return [this.normal.x, this.normal.y, this.normal.z, this.distance];
};

/**
 * Expose.
 *
 * @type {Plane}
 */
module.exports = Plane;
