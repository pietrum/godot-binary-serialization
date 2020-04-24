/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @param {number} flag ENCODE_FLAG_64
 * @return {object}
 */
const REAL = (buffer, flag) => (flag ? REAL.get_double(buffer) : REAL.get_float(buffer));

REAL.get_float = (buffer, offset = 0) => ({
  variant: buffer.readFloatLE(offset),
  byteLength: 4,
});

REAL.get_double = (buffer, offset = 0) => ({
  variant: buffer.readDoubleLE(offset),
  byteLength: 8,
});

/**
 * Expose.
 */
module.exports = REAL;
