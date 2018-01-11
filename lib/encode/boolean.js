const TYPES = require('../types');

module.exports = variant => {
  const typeIdx = TYPES.indexOf('BOOL');

  const buffer = Buffer.allocUnsafe(8);
  buffer.writeInt32LE(typeIdx, 0);
  buffer.writeInt32LE(+(variant === true), 4);

  return buffer;
};
