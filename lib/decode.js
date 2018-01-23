const TYPES = require('./types');

module.exports = buffer => {
  let typeIdx;
  let flagIdx;

  try {
    typeIdx = buffer.readUInt16LE(0);
    flagIdx = buffer.readUInt16LE(2); // 0100 - ENCODE_FLAG_64

    return require(`./decode/${TYPES[typeIdx].toLowerCase()}`)(buffer.slice(4), flagIdx);
  } catch (ex) {
    switch (ex.code) {
      case 'MODULE_NOT_FOUND':
        console.warn(`${TYPES[typeIdx]}: ${ex.code} (unsupported)`);
        break;
      default:
        console.warn(ex);
    }

    return require('./decode/nil')();
  }
};
