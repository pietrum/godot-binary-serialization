const Vector2 = require('../extras/vector2');

const REAL = require('./real');

/**
 * Decode data from Godot Engine.
 *
 * @param {buffer} buff
 *
 * @return {{Vector2, number}}
 */
module.exports = buff => {
  const variant = new Vector2();

  variant.x = REAL.get_float(buff).variant;
  variant.y = REAL.get_float(buff.slice(4)).variant;

  return {
    variant,
    offset: 8,
  };
};
