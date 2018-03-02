const REAL = require('./real');

const Color = require('../misc/color');

/**
 * Get a Variant value.
 *
 * @param {Buffer} buffer
 *
 * @return {Color}
 */
module.exports = (buffer) => {
  const from = [];
  for (let i = 0; i < Color.argsLength; i += 1) {
    from.push(REAL.get_float(buffer, i * 4).variant);
  }

  return Color.from(from);
};
