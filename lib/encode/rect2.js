const TYPES = require('../types');

const NUMBER = require('./number');

/**
 * Encode data for Godot Engine.
 *
 * @param {Rect2} variant
 *
 * @return {Buffer}
 */
module.exports = variant => {
  const buff = Buffer.allocUnsafe(20);

  buff.writeInt32LE(TYPES.indexOf('RECT2'), 0);
  NUMBER.put_float(variant.position.x).copy(buff, 4);
  NUMBER.put_float(variant.position.y).copy(buff, 8);
  NUMBER.put_float(variant.size.w).copy(buff, 12);
  NUMBER.put_float(variant.size.h).copy(buff, 16);

  return buff;
};
