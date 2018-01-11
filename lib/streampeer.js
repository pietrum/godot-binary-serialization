const decode_int = require('./decode/int');
const decode_real = require('./decode/real');
const decode_string = require('./decode/string');

const encode_number = require('./encode/number');
const encode_string = require('./encode/string');

function get_var(buffer) {
  const length = buffer.readUInt32LE(0);

  if (length + 4 === buffer.length) {
    return require('./decode')(buffer.slice(4)).variant;
  }

  console.warn('Not enough bytes are available');
}

function put_var(variant) {
  const encoded_variant = require('./encode')(variant);

  const buffer = Buffer.allocUnsafe(4 + encoded_variant.length);
  buffer.writeUInt32LE(encoded_variant.length);
  encoded_variant.copy(buffer, 4);

  return buffer;
}

module.exports = {
  get_8: decode_int.get_8,
  get_u8: decode_int.get_u8,
  get_16: decode_int.get_16,
  get_u16: decode_int.get_u16,
  get_32: decode_int.get_32,
  get_u32: decode_int.get_u32,
  get_64: decode_int.get_64,
  get_u64: decode_int.get_u64,
  get_float: decode_real.get_float,
  get_double: decode_real.get_double,
  get_string: decode_string.get_string,
  get_var,

  put_8: encode_number.put_8,
  put_u8: encode_number.put_u8,
  put_16: encode_number.put_16,
  put_u16: encode_number.put_u16,
  put_32: encode_number.put_32,
  put_u32: encode_number.put_u32,
  put_64: encode_number.put_64,
  put_u64: encode_number.put_u64,
  put_float: encode_number.put_float,
  put_double: encode_number.put_double,
  put_string: encode_string.put_string,
  put_var,
};
