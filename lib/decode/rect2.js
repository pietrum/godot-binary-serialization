const Rect2 = require('../extras/rect2');

const REAL = require('./real');

/**
 * Decode data from Godot Engine.
 *
 * @param {buffer} buff
 *
 * @return {{Rect2, number}}
 */
module.exports = buff => {
  const variant = new Rect2();

  variant.position.x = REAL.get_float(buff).variant;
  variant.position.y = REAL.get_float(buff.slice(4)).variant;
  variant.size.w = REAL.get_float(buff.slice(8)).variant;
  variant.size.h = REAL.get_float(buff.slice(12)).variant;

  return {
    variant,
    offset: 16,
  };
};
