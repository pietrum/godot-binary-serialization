const TYPES = require('./types');

module.exports = buffer => {
  const typeIdx = buffer.readUInt16LE(0);
  const flagIdx = buffer.readUInt16LE(2); // 0100 - ENCODE_FLAG_64

  const decode_variant = require(`./decode/${TYPES[typeIdx].toLowerCase()}`);
  return decode_variant(buffer.slice(4), flagIdx);
};
