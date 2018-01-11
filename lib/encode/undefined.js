const TYPES = require('../types');

module.exports = () => {
  const typeIdx = TYPES.indexOf('NIL');

  const buffer = Buffer.allocUnsafe(4);
  buffer.writeInt32LE(typeIdx, 0);

  return buffer;
};
