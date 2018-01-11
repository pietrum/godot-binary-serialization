const decode_variant = require('../decode');

/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {*}
 */
const DICTIONARY = module.exports = buffer => (DICTIONARY.get_var(buffer));

DICTIONARY.get_var = (buffer) => {
  const count = buffer.readUInt32LE(0);
  const variant = {};

  let offset = 4;
  for (let i = 0; i < count; i++) {
    const key = decode_variant(buffer.slice(offset));
    offset += 4 + key.offset;
    const val = decode_variant(buffer.slice(offset));
    offset += 4 + val.offset;

    variant[key.variant] = val.variant;
  }

  return { variant, offset };
};
