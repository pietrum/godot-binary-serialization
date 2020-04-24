const encode = require('../encode');
const TYPES = require('../types');

module.exports = (variant) => {
  const typeIdx = TYPES.indexOf('ARRAY');
  const buffers = [];

  variant.forEach((value) => {
    buffers.push(encode(value));
  });

  const buffer = Buffer.allocUnsafe(8);
  buffer.writeInt32LE(typeIdx, 0);
  buffer.writeInt32LE(variant.length, 4);

  buffers.unshift(buffer);

  return Buffer.concat(buffers);
};
