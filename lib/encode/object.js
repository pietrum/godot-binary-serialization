const encode = require('../encode');
const TYPES = require('../types');

module.exports = variant => {
  const typeIdx = TYPES.indexOf('DICTIONARY');

  let prop, buffers = [], size = 0;
  for (prop in variant) {
    if (variant.hasOwnProperty(prop)) {
      buffers.push(encode(prop));
      buffers.push(encode(variant[prop]));

      size++;
    }
  }

  let buffer = Buffer.allocUnsafe(8);
  buffer.writeInt32LE(typeIdx, 0);
  buffer.writeInt32LE(size, 4);

  buffers.unshift(buffer);

  return Buffer.concat(buffers);
};
