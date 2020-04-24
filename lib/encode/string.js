const TYPES = require('../types');

/**
 * Set a Variant value.
 *
 * @param {string} variant
 * @return {buffer}
 */
const STRING = (variant) => {
  const typeIdx = TYPES.indexOf('STRING');

  let buffer = Buffer.allocUnsafe(4);
  buffer.writeInt32LE(typeIdx, 0);
  buffer = Buffer.concat([buffer, STRING.put_string(variant)]);

  return buffer;
};

STRING.put_string = (string, buffer = null, offset = 0) => {
  const length = Buffer.byteLength(string);

  if (!buffer) {
    const pad = length % 4 === 0 ? 0 : 4 - (length % 4);

    // eslint-disable-next-line no-param-reassign
    buffer = Buffer.allocUnsafe(4 + length + pad);
    buffer.fill(0);
  }

  buffer.writeInt32LE(length, offset);
  buffer.write(string, 4 + offset);

  return buffer;
};

/**
 * Expose.
 */
module.exports = STRING;
