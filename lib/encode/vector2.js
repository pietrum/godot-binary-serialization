const TYPES = require('../types');

const NUMBER = require('./number');

/**
 * Encode data for Godot Engine.
 *
 * @param {Vector2} variant
 *
 * @return {Buffer}
 */
module.exports = variant => {
  const buff = Buffer.allocUnsafe(12);

  buff.writeInt32LE(TYPES.indexOf('VECTOR2'), 0);
  NUMBER.put_float(variant.x).copy(buff, 4);
  NUMBER.put_float(variant.y).copy(buff, 8);

  return buff;
};
