const TYPES = require('../types');

/**
 * Put a boolean variant into the stream.
 *
 * @param {Boolean} variant
 * @param {Buffer} buffer
 * @param {Number} offset
 *
 * @return {Buffer}
 */
const BOOLEAN = (variant, buffer = null, offset = 0) => {
  // eslint-disable-next-line no-param-reassign
  buffer = buffer || Buffer.allocUnsafe(8);
  buffer.writeInt32LE(TYPES.indexOf('BOOL'), offset);
  BOOLEAN.put_boolean(variant, buffer, 4 + offset);

  return buffer;
};

/**
 * Put a boolean into the stream.
 *
 * @param {Boolean} variant
 * @param {Buffer} buffer
 * @param {Number} offset
 *
 * @return {Buffer}
 */
BOOLEAN.put_boolean = (variant, buffer = null, offset = 0) => {
  // eslint-disable-next-line no-param-reassign
  buffer = buffer || Buffer.allocUnsafe(4);
  buffer.writeInt32LE(+(variant !== false), offset);

  return buffer;
};

/**
 * Expose.
 *
 * @type {BOOLEAN}
 */
module.exports = BOOLEAN;
