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

Plane.get_args_count = () => (4);

Plane.put_var = (args) => {
  const variant = new Plane();
  [
    variant.normal.x, variant.normal.y, variant.normal.z,
    variant.distance,
  ] = args;

  return variant;
};

Plane.prototype.get_var = function getVar() {
  return [this.normal.x, this.normal.y, this.normal.z, this.distance];
};

/**
 * Expose.
 *
 * @type {Plane}
 */
module.exports = Plane;
