const decodeNil = require('./decode/nil');
const decodeInt = require('./decode/int');
const decodeReal = require('./decode/real');
const decodeString = require('./decode/string');

const encodeNumber = require('./encode/number');
const encodeString = require('./encode/string');

function getVar(buffer) {
  const length = buffer.readUInt32LE(0);

  if (length + 4 === buffer.length) {
    // eslint-disable-next-line global-require
    return require('./decode')(buffer.slice(4)).variant;
  }

  console.warn('Not enough bytes are available');
  return decodeNil().variant;
}

function putVar(variant) {
  // eslint-disable-next-line global-require
  const encodedVariant = require('./encode')(variant);

  const buffer = Buffer.allocUnsafe(4 + encodedVariant.length);
  buffer.writeUInt32LE(encodedVariant.length);
  encodedVariant.copy(buffer, 4);

  return buffer;
}

module.exports = {
  get_8: decodeInt.get_8,
  get_u8: decodeInt.get_u8,
  get_16: decodeInt.get_16,
  get_u16: decodeInt.get_u16,
  get_32: decodeInt.get_32,
  get_u32: decodeInt.get_u32,
  get_64: decodeInt.get_64,
  get_u64: decodeInt.get_u64,
  get_float: decodeReal.get_float,
  get_double: decodeReal.get_double,
  get_string: decodeString.get_string,
  get_var: getVar,

  put_8: encodeNumber.put_8,
  put_u8: encodeNumber.put_u8,
  put_16: encodeNumber.put_16,
  put_u16: encodeNumber.put_u16,
  put_32: encodeNumber.put_32,
  put_u32: encodeNumber.put_u32,
  put_64: encodeNumber.put_64,
  put_u64: encodeNumber.put_u64,
  put_float: encodeNumber.put_float,
  put_double: encodeNumber.put_double,
  put_string: encodeString.put_string,
  put_var: putVar,
};
