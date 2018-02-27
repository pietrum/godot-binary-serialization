const decodeVariant = require('../decode');

/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {*}
 */
const DICTIONARY = buffer => (DICTIONARY.get_var(buffer));

DICTIONARY.get_var = (buffer) => {
  const count = buffer.readUInt32LE(0);
  const variant = {};

  let offset = 4;
  for (let i = 0; i < count; i += 1) {
    const key = decodeVariant(buffer.slice(offset));
    offset += 4 + key.offset;
    const val = decodeVariant(buffer.slice(offset));
    offset += 4 + val.offset;

    variant[key.variant] = val.variant;
  }

  return { variant, offset };
};

/**
 * Expose.
 */
module.exports = DICTIONARY;
