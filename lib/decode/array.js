const decodeVariant = require('../decode');

/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {*}
 */
const ARRAY = (buffer) => (ARRAY.get_var(buffer));

ARRAY.get_var = (buffer) => {
  const length = buffer.readUInt32LE(0);
  const variant = [];

  let byteLength = 0;
  for (let i = 0; i < length; i += 1) {
    const decoded = decodeVariant(buffer.slice(4 + byteLength));
    byteLength += 4 + decoded.byteLength;
    variant.push(decoded.variant);
  }

  return {
    variant,
    byteLength,
  };
};

/**
 * Expose.
 */
module.exports = ARRAY;
