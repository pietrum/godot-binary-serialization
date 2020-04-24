const decodeVariant = require('../decode');

/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {*}
 */
const DICTIONARY = (buffer) => (DICTIONARY.get_var(buffer));

DICTIONARY.get_var = (buffer) => {
  const count = buffer.readUInt32LE(0);
  const variant = {};

  let byteLength = 4;
  for (let i = 0; i < count; i += 1) {
    const key = decodeVariant(buffer.slice(byteLength));
    byteLength += 4 + key.byteLength;
    const val = decodeVariant(buffer.slice(byteLength));
    byteLength += 4 + val.byteLength;

    variant[key.variant] = val.variant;
  }

  return { variant, byteLength };
};

/**
 * Expose.
 */
module.exports = DICTIONARY;
