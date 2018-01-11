/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {string}
 */
const REAL = module.exports = (buffer, flag) => (flag ? REAL.get_double(buffer) : REAL.get_float(buffer));

REAL.get_float = buffer => ({
  variant: buffer.readFloatLE(0),
  offset: 4,
});

REAL.get_double = buffer => ({
  variant: buffer.readDoubleLE(0),
  offset: 8,
});
