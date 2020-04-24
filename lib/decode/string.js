/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {string}
 */
const STRING = (buffer) => (STRING.get_string(buffer));

STRING.get_string = (buffer, offset = 0) => {
  const len = buffer.readUInt32LE(offset);
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4);

  return {
    variant: buffer.toString('utf8', 4 + offset, 4 + offset + len),
    byteLength: 4 + len + pad,
  };
};

/**
 * Expose.
 */
module.exports = STRING;
