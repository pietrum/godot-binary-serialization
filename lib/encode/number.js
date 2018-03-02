const TYPES = require('../types');

/**
 * Set a buffer Variant value.
 *
 * @param {number} variant
 * @return {buffer}
 */
const NUMBER = (variant) => {
  let buffer;
  let typeIdx;

  if (Number(variant) === variant && variant % 1 === 0) {
    // INT
    typeIdx = TYPES.indexOf('INT');

    buffer = Buffer.allocUnsafe(4);
    buffer.writeInt32LE(typeIdx, 0);

    if (variant > 0x7FFFFFFF || variant < -0x80000000) {
      // Int64
      buffer.writeInt16LE(1, 2); // ENCODE_FLAG_64
      buffer = Buffer.concat([buffer, NUMBER.put_64(variant)], 12);
    } else {
      // Int32
      buffer = Buffer.concat([buffer, NUMBER.put_32(variant)], 8);
    }
  } else {
    // REAL
    typeIdx = TYPES.indexOf('REAL');

    // Double
    buffer = Buffer.allocUnsafe(4);
    buffer.writeInt16LE(typeIdx, 0);
    buffer.writeInt16LE(1, 2); // ENCODE_FLAG_64
    buffer = Buffer.concat([buffer, NUMBER.put_double(variant)], 12);

    // @todo Better way to distinguish float from double.
    if (buffer.readInt32LE(4) === 0) {
      // Float
      buffer = Buffer.allocUnsafe(4);
      buffer.writeInt32LE(typeIdx, 0);
      buffer = Buffer.concat([buffer, NUMBER.put_float(variant)], 8);
    }
  }

  return buffer;
};

NUMBER.put_8 = (variant) => {
  const buffer = Buffer.allocUnsafe(1);
  buffer.writeInt8(variant, 0);

  return buffer;
};
NUMBER.put_u8 = (variant) => {
  const buffer = Buffer.allocUnsafe(1);
  buffer.writeUInt8(variant, 0);

  return buffer;
};

NUMBER.put_16 = (variant) => {
  const buffer = Buffer.allocUnsafe(2);
  buffer.writeInt16LE(variant, 0);

  return buffer;
};
NUMBER.put_u16 = (variant) => {
  const buffer = Buffer.allocUnsafe(2);
  buffer.writeUInt16LE(variant, 0);

  return buffer;
};

NUMBER.put_32 = (variant) => {
  const buffer = Buffer.allocUnsafe(4);
  buffer.writeInt32LE(variant, 0);

  return buffer;
};
NUMBER.put_u32 = (variant) => {
  const buffer = Buffer.allocUnsafe(4);
  buffer.writeUInt32LE(variant, 0);

  return buffer;
};

NUMBER.put_64 = (variant) => {
  const buffer = Buffer.alloc(8);
  const high = Math.floor(variant / 0x100000000);
  buffer.writeUInt32LE(variant - (high * 0x100000000), 0);
  buffer.writeInt32LE(high, 4);

  return buffer;
};
NUMBER.put_u64 = NUMBER.put_64;

NUMBER.put_float = (variant, buffer = null, offset = 0) => {
  // eslint-disable-next-line no-param-reassign
  buffer = buffer || Buffer.allocUnsafe(4);
  buffer.writeFloatLE(variant, offset);

  return buffer;
};

NUMBER.put_double = (variant) => {
  const buffer = Buffer.allocUnsafe(8);
  buffer.writeDoubleLE(variant, 0);

  return buffer;
};

/**
 * Expose.
 */
module.exports = NUMBER;
