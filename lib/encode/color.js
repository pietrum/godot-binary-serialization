const TYPES = require('../types');

const NUMBER = require('./number');

/**
 * Encode misc types data from Godot Engine.
 *
 * @param {object} variant
 *
 * @return {buffer}
 */
module.exports = (variant) => {
  const buffer = Buffer.allocUnsafe(20);
  buffer.writeInt32LE(TYPES.indexOf('COLOR'), 0);

  NUMBER.put_float(variant.r, buffer, 4);
  NUMBER.put_float(variant.g, buffer, 8);
  NUMBER.put_float(variant.b, buffer, 12);
  NUMBER.put_float(variant.a, buffer, 16);

  return buffer;
};
