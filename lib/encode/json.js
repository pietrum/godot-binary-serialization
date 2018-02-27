const encode = require('../encode');
const TYPES = require('../types');

module.exports = (variant) => {
  const typeIdx = TYPES.indexOf('DICTIONARY');
  const buffers = [];

  Object.keys(variant).forEach((key) => {
    buffers.push(encode(key));
    buffers.push(encode(variant[key]));
  });

  const buffer = Buffer.allocUnsafe(8);
  buffer.writeInt32LE(typeIdx, 0);
  buffer.writeInt32LE(Object.keys(variant).length, 4);

  buffers.unshift(buffer);

  return Buffer.concat(buffers);
};
