const TYPES = require('../types');

const NUMBER = require('./number');

const FLOAT_BYTE_LENGTH = 4;

/**
 * Encode math types data from Godot Engine.
 *
 * @param {object} variant
 *
 * @return {buffer}
 */
module.exports = variant => {
  const type = variant.constructor.name;
  const args = variant.get_var();

  const buff = Buffer.allocUnsafe((args.length + 1) * FLOAT_BYTE_LENGTH);
  buff.writeInt32LE(TYPES.indexOf(type.toUpperCase()), 0);

  for (let i = 0; i < args.length; i++) {
    NUMBER.put_float(args[i]).copy(buff, (i + 1) * FLOAT_BYTE_LENGTH);
  }

  return buff;
};
