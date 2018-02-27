/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {string}
 */
const REAL = (buffer, flag) => (flag ? REAL.get_double(buffer) : REAL.get_float(buffer));

REAL.get_float = (buffer, offset = 0) => ({
  variant: buffer.readFloatLE(offset),
  offset: 4,
});

REAL.get_double = (buffer, offset = 0) => ({
  variant: buffer.readDoubleLE(offset),
  offset: 8,
});

/**
 * Expose.
 */
module.exports = REAL;
