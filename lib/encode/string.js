const TYPES = require('../types');

/**
 * Set a Variant value.
 *
 * @param {string} variant
 * @return {buffer}
 */
const STRING = module.exports = variant => {
  const typeIdx = TYPES.indexOf('STRING');

  let buffer = Buffer.allocUnsafe(4);
  buffer.writeInt32LE(typeIdx, 0);
  buffer = Buffer.concat([buffer, STRING.put_string(variant)]);

  return buffer;
};

STRING.put_string = variant => {
  const length = Buffer.byteLength(variant);
  const offset = length % 4 === 0 ? 0 : 4 - length % 4;

  const buffer = Buffer.allocUnsafe(4 + length + offset);
  buffer.writeInt32LE(length, 0);
  buffer.write(variant, 4);

  return buffer;
};
