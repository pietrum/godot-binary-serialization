const MATH = require('../math');

const Rect2 = require('../../extras/rect2');

describe('[put_var]', () => {
  test('should encode as Rect2', () => {
    // given
    const variant = new Rect2();
    variant.position.x = 5;
    variant.position.y = 5.5;
    variant.size.w = 1;
    variant.size.h = 2;

    // when
    const buffer = MATH(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(20);
    expect(buffer.toString('hex')).toBe('060000000000a0400000b0400000803f00000040');
  });
});
