/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {string}
 */
const STRING = module.exports = buffer => (STRING.get_string(buffer));

STRING.get_string = buffer => {
  const len = buffer.readUInt32LE(0);
  const pad = len % 4 === 0 ? 0 : 4 - len % 4;

  return {
    variant: buffer.toString('utf8', 4, 4 + len),
    offset: 4 + len + pad,
  };
};
