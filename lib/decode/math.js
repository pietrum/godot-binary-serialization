const REAL = require('./real');

/**
 * Decode math types data from Godot Engine.
 *
 * @param {string} type
 * @param {buffer} buff
 *
 * @return {{object, number}}
 */
module.exports = (type, buff) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const Math = require(`../math/${type.toLowerCase()}`);

  const from = [];
  for (let i = 0; i < Math.argsLength; i += 1) {
    from.push(REAL.get_float(buff, i * 4).variant);
  }

  return Math.from(from);
};
