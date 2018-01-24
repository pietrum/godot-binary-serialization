const REAL = require('./real');

const FLOAT_BYTE_LENGTH = 4;

/**
 * Decode math types data from Godot Engine.
 *
 * @param {string} type
 * @param {buffer} buff
 *
 * @return {{object, number}}
 */
module.exports = (type, buff) => {
  const size = buff.length / FLOAT_BYTE_LENGTH;
  const Variant = require(`../extras/${type.toLowerCase()}`);

  const args = [];
  for (let i = 0; i < size; i++) {
    args.push(REAL.get_float(buff, i * FLOAT_BYTE_LENGTH).variant);
  }

  return {
    variant: Variant.put_var(args),
    offset: buff.length,
  };
};
