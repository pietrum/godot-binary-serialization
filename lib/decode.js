const TYPES = require('./types');

module.exports = (buffer) => {
  let typeIdx;
  let flagIdx;

  try {
    typeIdx = buffer.readUInt16LE(0);
    flagIdx = buffer.readUInt16LE(2); // 0100 - ENCODE_FLAG_64

    switch (TYPES[typeIdx]) {
      // null
      case 'NIL':
        // eslint-disable-next-line global-require
        return require('./decode/nil')();
      // atomic
      case 'BOOL':
      case 'INT':
      case 'REAL':
      case 'STRING':
        // eslint-disable-next-line global-require, import/no-dynamic-require
        return require(`./decode/${TYPES[typeIdx].toLowerCase()}`)(buffer.slice(4), flagIdx);
      // math
      case 'VECTOR2':
      case 'RECT2':
      case 'VECTOR3':
      case 'TRANSFORM2D':
      case 'PLANE':
      case 'QUAT':
      case 'AABB':
      case 'BASIS':
      case 'TRANSFORM':
        // eslint-disable-next-line global-require
        return require('./decode/math')(TYPES[typeIdx], buffer.slice(4));
      // misc
      case 'COLOR':
      case 'NODE_PATH':
        // eslint-disable-next-line global-require, import/no-dynamic-require
        return require(`./decode/${TYPES[typeIdx].toLowerCase()}`)(buffer.slice(4));
      default:
        // eslint-disable-next-line global-require, import/no-dynamic-require
        return require(`./decode/${TYPES[typeIdx].toLowerCase()}`)(buffer.slice(4), flagIdx);
    }
  } catch (ex) {
    switch (ex.code) {
      case 'MODULE_NOT_FOUND':
        console.warn(`${TYPES[typeIdx]}: ${ex.code} (unsupported)`);
        break;
      default:
        console.warn(ex);
    }

    // eslint-disable-next-line global-require
    return require('./decode/nil')();
  }
};
