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
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const Variant = require(`../math/${type.toLowerCase()}`);
  const size = Variant.get_args_count();

  const args = [];
  for (let i = 0; i < size; i += 1) {
    args.push(REAL.get_float(buff, i * FLOAT_BYTE_LENGTH).variant);
  }

  return {
    variant: Variant.put_var(args),
    offset: args.length * FLOAT_BYTE_LENGTH,
  };
};
