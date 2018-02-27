/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @param {number} flag ENCODE_FLAG_64
 * @return {number}
 */
const INT = (buffer, flag) => (flag ? INT.get_64(buffer) : INT.get_32(buffer));

INT.get_8 = buffer => ({
  variant: buffer.readInt8(0),
  offset: 1,
});
INT.get_u8 = buffer => ({
  variant: buffer.readUInt8(0),
  offset: 1,
});

INT.get_16 = buffer => ({
  variant: buffer.readInt16LE(0),
  offset: 2,
});
INT.get_u16 = buffer => ({
  variant: buffer.readUInt16LE(0),
  offset: 2,
});

INT.get_32 = buffer => ({
  variant: buffer.readInt32LE(0),
  offset: 4,
});
INT.get_u32 = buffer => ({
  variant: buffer.readUInt32LE(0),
  offset: 4,
});

INT.get_64 = (buffer) => {
  const high = buffer.readInt32LE(0);
  const data = (buffer.readInt32LE(4) * 0x100000000) + high;

  return {
    variant: (high < 0 ? data + 0x100000000 : data),
    offset: 8,
  };
};
INT.get_u64 = buffer => ({
  variant: (buffer.readUInt32LE(4) * 0x100000000) + buffer.readUInt32LE(0),
  offset: 8,
});

/**
 * Expose.
 */
module.exports = INT;
