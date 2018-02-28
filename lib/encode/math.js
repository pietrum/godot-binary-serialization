const TYPES = require('../types');

const NUMBER = require('./number');

/**
 * Encode math types data from Godot Engine.
 *
 * @param {object} variant
 *
 * @return {buffer}
 */
module.exports = (variant) => {
  const type = variant.constructor.name;

  const buffer = Buffer.allocUnsafe(4 + variant.constructor.byteLength);
  buffer.writeInt32LE(TYPES.indexOf(type.toUpperCase()), 0);

  for (let i = 0; i < variant.constructor.argsLength; i += 1) {
    NUMBER.put_float(variant.args[i]).copy(buffer, (i + 1) * 4);
  }

  return buffer;
};
