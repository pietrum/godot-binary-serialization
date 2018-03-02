const STRING = require('./string');

const TYPES = require('../types');

module.exports = (variant) => {
  const typeIdx = TYPES.indexOf('NODE_PATH');

  const buffer = Buffer.allocUnsafe(4 + variant.byteLength);
  buffer.writeInt32LE(typeIdx, 0);

  /* eslint no-underscore-dangle: ["error", { "allow": [
    "_name", "_name_size", "_subname", "_subname_size", "_absolute",
  ] }] */
  buffer.writeUInt32LE(variant._name.length + 0x80000000, 4);
  buffer.writeInt32LE(variant._subname.length, 8);
  buffer.writeInt32LE(+variant._absolute, 12);

  let offset = 16;
  for (let i = 0; i < variant._name.length; i += 1) {
    STRING.put_string(variant._name[i], buffer, offset);
    offset += variant._name_size[i];
  }

  for (let i = 0; i < variant._subname.length; i += 1) {
    STRING.put_string(variant._subname[i], buffer, offset);
    offset += variant._subname_size[i];
  }

  return buffer;
};
